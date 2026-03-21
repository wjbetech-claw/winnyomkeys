import type { MetadataRoute } from "next";

import { getAbsoluteUrl, getLanguageAlternates } from "@/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getAbsoluteUrl("/en"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: getLanguageAlternates("/"),
      },
    },
    {
      url: getAbsoluteUrl("/ko"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: getLanguageAlternates("/"),
      },
    },
    {
      url: getAbsoluteUrl("/en/faq"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: getLanguageAlternates("/faq"),
      },
    },
    {
      url: getAbsoluteUrl("/ko/faq"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: getLanguageAlternates("/faq"),
      },
    },
  ];
}
