import { MetadataRoute } from "next";
import { getPublicSiteUrl } from "@/config/env";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getPublicSiteUrl();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/donations/payment/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
