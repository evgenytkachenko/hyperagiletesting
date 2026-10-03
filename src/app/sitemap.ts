import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { referencePatterns } from "@/lib/inPractice";

export const dynamic = "force-static";

const routes = [
  "",
  "/book",
  "/framework",
  "/quality-loop",
  "/in-practice",
  ...referencePatterns.map((pattern) => `/in-practice/${pattern.slug}`),
  "/training",
  "/speaking",
  "/consulting",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route === "" ? `${siteConfig.domain}/` : `${siteConfig.domain}${route}`,
  }));
}
