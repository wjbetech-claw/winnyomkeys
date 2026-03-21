import type { MetadataRoute } from "next";

import { siteUrl } from "@/seo/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: siteUrl.origin,
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
