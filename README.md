# Hyper-Agile Testing — hyperagiletesting.com

Official website for the forthcoming Apress book **Hyper-Agile Testing:
Delivering Software in an AI-Accelerated World** by Evgeny Tkachenko, and for
the **Hyper-Agile Quality Engineering™** framework introduced in the book.

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4. Every route
is statically rendered.

## Install and run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

`npm run lint` runs ESLint; `npm run build` runs the TypeScript compiler as
part of the Next.js build.

## Where things live

### Central configuration

`src/lib/config.ts` is the single source of truth for:

- Site name, domain, and description
- Book metadata (title, subtitle, author, publisher, status, cover path,
  **optional publication date**)
- The Amazon preorder URL (`book.amazonUrl`) — every "Preorder on Amazon"
  button on the site reads this one value. Change the URL here only.
- Carunel LLC details (`carunel.url`, `carunel.contactEmail`)
- Navigation items and CTA label strings
- `contactLinks` — the `mailto:` links used by Training/Speaking/Consulting/
  General CTAs across the site

Framework and Quality Loop copy (the four pillars, the ten loop activities,
the four "problem" challenges) lives in `src/lib/content.ts`. The author
biography paragraphs live in `src/lib/bio.ts`.

### Adding a confirmed publication date

Set `book.publicationDate` in `src/lib/config.ts` to an ISO date string (e.g.
`"2026-11-01"`). When it is `null` (the default), no date is shown anywhere
on the site and no `datePublished` is added to the Book structured data —
this is intentional per the project brief, since no date has been confirmed
by Apress yet.

### Replacing images and assets

- Book cover: `public/images/book-cover.png` (referenced via
  `book.coverImage` / `book.coverWidth` / `book.coverHeight` in
  `src/lib/config.ts` — update all three together if you replace the file
  with one of different dimensions). The cover is rendered unmodified via
  `src/components/BookCover.tsx` — do not crop, re-typeset, or overlay it.
- Author headshot: `public/images/evgeny-headshot.png` — a **temporary**
  photo, referenced via `author.headshot` in `src/lib/config.ts`. Rendered
  on `/about` via `src/components/Headshot.tsx`, which falls back to
  `src/components/HeadshotPlaceholder.tsx` (a restrained initials monogram)
  whenever `author.headshot` is `null`. To swap in the final professional
  photo, just replace the file at that path (or update `author.headshot` to
  a new path) — no layout or component change is required.
- Favicon: generated dynamically at build time from
  `src/app/icon.tsx` (32×32) and `src/app/apple-icon.tsx` (180×180) using
  `next/og`. No static image asset is required; edit those files to change
  the mark.

### Carunel business email

`carunel.contactEmail` in `src/lib/config.ts` is the confirmed address
**`business@carunel.com`**, used for the Training, Speaking, Consulting, and
General inquiry `mailto:` links (`src/lib/config.ts` → `contactLinks`). A
dedicated `consulting@carunel.com` alias may exist in the future — do not
switch the Consulting CTA to it until that alias is confirmed as live.

### Editing page content

Each route's copy lives directly in its page component under `src/app/`:

| Route | File |
|---|---|
| Home | `src/app/page.tsx` |
| Book | `src/app/book/page.tsx` |
| Framework | `src/app/framework/page.tsx` |
| Quality Loop | `src/app/quality-loop/page.tsx` |
| Training | `src/app/training/page.tsx` |
| Speaking | `src/app/speaking/page.tsx` |
| Consulting | `src/app/consulting/page.tsx` |
| About | `src/app/about/page.tsx` |
| Contact | `src/app/contact/page.tsx` |
| Privacy | `src/app/privacy/page.tsx` |

Shared UI (header, footer, buttons, book cover, pillar grid, quality loop
diagram) lives in `src/components/`.

## Unresolved content placeholders

1. **`book.publicationDate`** (`src/lib/config.ts`) — `null` until Apress
   confirms a date.
2. **Author headshot** — a temporary photo is in use
   (`public/images/evgeny-headshot.png`). Replace it with a final
   professional headshot when available; see "Replacing images and assets"
   above.
3. **Privacy policy** (`src/app/privacy/page.tsx`) — reflects the site as
   built today (no analytics, no accounts, no server-side form storage). If
   analytics, a real contact-form backend, or accounts are added later,
   update this page to match before relying on it.
4. **`consulting@carunel.com`** — not in use. `business@carunel.com` is used
   for consulting inquiries for now; switch `contactLinks.consulting` in
   `src/lib/config.ts` to a dedicated consulting alias only once it's
   confirmed live.

`carunel.contactEmail` (`business@carunel.com`) is confirmed and already in
use — it is not a placeholder.

Everything else on the site (book facts, framework/loop terminology, author
bio, consulting positioning) reflects information supplied in the project
brief.

## SEO

`src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and
`/robots.txt` from the route list and `siteConfig.domain`. Per-page metadata
(title/description/canonical) is set in each page's `export const metadata`.
JSON-LD (`Book`, `Person`, `Organization`, `BreadcrumbList`) is emitted via
`src/components/JsonLd.tsx` and `src/lib/jsonld.ts`.

## Deployment

This is a standard static/server-rendered Next.js app with no database or
external API dependency, so it deploys to any Next.js-compatible host
(Vercel, or any Node host running `npm run build && npm run start`). Set
`NODE_ENV=production` and ensure the deployed domain matches
`siteConfig.domain` in `src/lib/config.ts` (used for canonical URLs, Open
Graph URLs, and structured data) before going live.
