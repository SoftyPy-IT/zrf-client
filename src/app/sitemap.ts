import { MetadataRoute } from "next";
import { getPublicSiteUrl } from "@/config/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getPublicSiteUrl();
  const now = new Date();

  const routes = [
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/about", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/our-projects", changeFrequency: "daily" as const, priority: 0.9 },
    { path: "/education", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/health-services", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/volunteer", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/donations", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/news", changeFrequency: "daily" as const, priority: 0.9 },
    { path: "/recent-activities-of-zrf", changeFrequency: "daily" as const, priority: 0.8 },
    { path: "/upcoming-programs", changeFrequency: "daily" as const, priority: 0.8 },
    { path: "/program", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/gallery", changeFrequency: "weekly" as const, priority: 0.7 },
    { path: "/videos", changeFrequency: "weekly" as const, priority: 0.7 },
    { path: "/ebooks", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/climate-change", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/committee", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/ziaur-rahman", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/tarique-rahman", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.4 },
    { path: "/terms-&-conditions", changeFrequency: "yearly" as const, priority: 0.4 },
    { path: "/refund-policy", changeFrequency: "yearly" as const, priority: 0.4 },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
