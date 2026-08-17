import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

const routes = [
  "",
  "/book",
  "/framework",
  "/quality-loop",
  "/training",
  "/speaking",
  "/consulting",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
  }));
}
