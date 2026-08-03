import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://arslanqadeerdata.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
