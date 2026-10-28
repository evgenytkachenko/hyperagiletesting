import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

// Check the actual static export, including metadata inherited from layouts.
// Run after `npm run build`; no network requests or credentials are needed.
const output = fileURLToPath(new URL("../out/", import.meta.url));
const read = (path) => readFile(`${output}/${path}`, "utf8");
const tags = (html, tag) =>
  [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, "gi"))].map((match) =>
    Object.fromEntries(
      [...match[0].matchAll(/([\w:-]+)="([^"]*)"/g)].map((attr) => [attr[1], attr[2]]),
    ),
  );

const sitemap = await read("sitemap.xml");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.ok(urls.length > 0, "Sitemap must contain pages");
assert.equal(new Set(urls).size, urls.length, "Sitemap contains duplicate URLs");
const origin = new URL(urls[0]).origin;
assert.equal(new URL(origin).protocol, "https:", "Canonical origin must use HTTPS");
const robots = await read("robots.txt");
assert.match(robots, /User-Agent: \*\s+Allow: \/\s/i);
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/im);

const titles = new Set();
const descriptions = new Set();
const exportedPages = new Set();
for (const url of urls) {
  const parsed = new URL(url);
  assert.equal(parsed.origin, origin, `Unexpected origin: ${url}`);
  assert.equal(parsed.search + parsed.hash, "", `Noncanonical sitemap URL: ${url}`);
  const file = parsed.pathname === "/" ? "index.html" : `${parsed.pathname.slice(1)}.html`;
  exportedPages.add(file);
  const html = await read(file);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert.ok(title?.trim(), `Missing title: ${url}`);
  assert.ok(!titles.has(title), `Duplicate title: ${url}`);
  titles.add(title);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `Expected one H1: ${url}`);
  const meta = tags(html, "meta");
  const description = meta.filter((tag) => tag.name === "description");
  assert.equal(description.length, 1, `Expected one description: ${url}`);
  assert.ok(description[0].content?.trim(), `Empty description: ${url}`);
  assert.ok(!descriptions.has(description[0].content), `Duplicate description: ${url}`);
  descriptions.add(description[0].content);
  for (const tag of meta.filter((tag) => /^(robots|googlebot|bingbot)$/i.test(tag.name ?? ""))) {
    assert.doesNotMatch(tag.content, /noindex|none/i, `Indexing disabled: ${url}`);
  }
  const canonical = tags(html, "link").filter((tag) => tag.rel === "canonical");
  assert.equal(canonical.length, 1, `Expected one canonical: ${url}`);
  // The origin with or without its root slash represents the same URL.
  assert.equal(new URL(canonical[0].href).href, parsed.href, `Wrong canonical: ${url}`);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]));
  const entities = schemas.flatMap((schema) => schema["@graph"] ?? [schema]);
  const website = entities.find((entity) => entity["@type"] === "WebSite");
  assert.equal(website?.url, `${origin}/`, `Missing website identity: ${url}`);
  if (parsed.pathname !== "/") {
    const breadcrumbs = entities.find((entity) => entity["@type"] === "BreadcrumbList");
    assert.equal(breadcrumbs?.itemListElement.at(-1).item, url, `Wrong breadcrumbs: ${url}`);
  }
  for (const link of tags(html, "a").filter((tag) => tag.href?.startsWith("https://www.awin1.com/"))) {
    assert.ok(link.rel?.split(/\s+/).includes("sponsored"), `Unmarked affiliate link: ${url}`);
  }
}

// Catch new exported pages accidentally omitted from the sitemap.
for (const file of await readdir(output, { recursive: true })) {
  if (file.endsWith(".html") && !["404.html", "_not-found.html", "_not-found/index.html"].includes(file)) {
    assert.ok(exportedPages.has(file), `Exported page missing from sitemap: ${file}`);
  }
}
// Retired sales routes must not reappear in export, links, metadata, or sitemap.
const files = await readdir(output, { recursive: true });
for (const route of ["consulting", "training"]) {
  assert.ok(!files.some((file) => file === `${route}.html` || file.startsWith(`${route}/`)), `Retired route exported: ${route}`);
  assert.ok(!urls.some((url) => new URL(url).pathname === `/${route}`), `Retired route in sitemap: ${route}`);
}
for (const file of files.filter((file) => /\.(html|txt|xml|js)$/.test(file))) {
  const content = await read(file);
  assert.doesNotMatch(content, /consulting|consultation|organizational-consulting/i, `Retired sales content: ${file}`);
  assert.doesNotMatch(content, /href=["']\/(consulting|training)(?:[/?#"'])/i, `Retired sales link: ${file}`);
}
assert.ok(exportedPages.has("speaking.html"), "Speaking must remain published and indexable");
const notFound = tags(await read("404.html"), "meta");
assert.ok(notFound.some((tag) => tag.name === "robots" && /noindex/.test(tag.content)));
console.log(`SEO checks passed for ${urls.length} exported pages and the 404 page.`);
