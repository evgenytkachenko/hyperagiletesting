import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  /**
   * Non-trailing-slash URLs (e.g. /framework, not /framework/). GitHub
   * Pages' serving layer was found to resolve trailing-slash directory
   * requests inconsistently on this custom domain (404s on /route/ while
   * /route reliably served 200 from the same deploy) — the non-trailing
   * form is what has worked reliably in production.
   */
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
