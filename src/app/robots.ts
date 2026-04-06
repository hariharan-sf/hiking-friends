import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.srilankahikingfriends.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/packages", "/blog", "/blog/tree-hugging", "/blog/st-claire-waterfall", "/privacy-policy", "/terms-and-conditions"],
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: [`${siteUrl}/sitemap.xml`],
    host: siteUrl,
  };
}
