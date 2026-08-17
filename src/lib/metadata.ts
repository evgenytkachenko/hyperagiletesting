import type { Metadata } from "next";
import { siteConfig } from "./config";

export function buildMetadata({
  title,
  description,
  path,
  socialTitle,
}: {
  title: string;
  description: string;
  path: string;
  /** Full, human-facing title for OG/Twitter cards, which don't get the layout's title template applied. Defaults to `${title} | Hyper-Agile Testing`. */
  socialTitle?: string;
}): Metadata {
  const url = path === "/" ? siteConfig.domain : `${siteConfig.domain}${path}`;
  const fullTitle = socialTitle ?? `${title} | Hyper-Agile Testing`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      url,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
