// utils/fetchWithSEO.ts
import { Metadata } from "next";
import { stripHtml } from "./stripHtml";
import { cookies } from "next/headers";
import { getPublicApiUrl, getPublicSiteUrl } from "@/config/env";

export async function fetchWithSEO(
  endpoint: string,
  id: string,
  fallbackTitle: string = "Item Details",
  customPath?: string,
): Promise<{ data: any; metadata: Metadata }> {
  const siteUrl = getPublicSiteUrl();
  const notFoundTitle = `${fallbackTitle} Not Found | Ziaur Rahman Foundation`;

  try {
    const res = await fetch(`${getPublicApiUrl()}/${endpoint}/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return {
        data: null,
        metadata: {
          title: notFoundTitle,
          description: "The requested item could not be loaded.",
        },
      };
    }

    const result = await res.json();
    const data = result?.data || null;

    if (!data) {
      return {
        data: null,
        metadata: {
          title: notFoundTitle,
          description: "The requested item could not be loaded.",
        },
      };
    }

    // Get language from cookies
    const cookieStore = cookies();
    const language = cookieStore.get("language")?.value || "ENG";
    const isEnglish = language === "ENG";

    // Use language-specific content for metadata
    const rawTitle = isEnglish
      ? data.english_title || fallbackTitle
      : data.bangla_title || fallbackTitle;
    const title = rawTitle.includes("Ziaur Rahman Foundation")
      ? rawTitle
      : `${rawTitle} | Ziaur Rahman Foundation`;

    // Extract short description or fall back to main description or default
    const rawDescription = isEnglish
      ? data.english_short_description || data.english_description || ""
      : data.bangla_short_description || data.bangla_description || "";
    const description =
      stripHtml(rawDescription) ||
      "Ziaur Rahman Foundation initiative and community service programme in Bangladesh.";

    // Multi-tiered image resolution with /og-image.png fallback
    const image =
      (isEnglish
        ? data.eng_images?.[0] || data.bng_Images?.[0]
        : data.bng_Images?.[0] || data.eng_images?.[0]) ||
      data.thumnailImages?.[0] ||
      data.thumbnailImages?.[0] ||
      "/og-image.png";

    // Use img_tagline for image alt text
    const imageAlt = isEnglish
      ? data.img_tagline_english || rawTitle
      : data.img_tagline_bangla || rawTitle;

    const url = customPath
      ? `${siteUrl}${customPath.startsWith("/") ? "" : "/"}${customPath}`
      : `${siteUrl}/${endpoint}/${id}`;

    const metadata: Metadata = {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        url,
        siteName: "Ziaur Rahman Foundation",
        locale: isEnglish ? "en_US" : "bn_BD",
        images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
      alternates: {
        canonical: url,
      },
    };

    return { data, metadata };
  } catch (error) {
    console.error("Error fetching data for SEO:", error);
    return {
      data: null,
      metadata: {
        title: notFoundTitle,
        description: "The requested item could not be loaded.",
      },
    };
  }
}
