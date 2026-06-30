import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://omnia.ahmedsamra.com/sitemap.xml",
    host: "https://omnia.ahmedsamra.com",
  };
}