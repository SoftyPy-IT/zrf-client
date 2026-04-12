// utils/fetchWithSEO.ts
import { Metadata } from "next";
import { stripHtml } from "./stripHtml";
import { cookies } from "next/headers";

export async function fetchWithSEO(
  endpoint: string,
  id: string,
  fallbackTitle: string = "Item Details",
): Promise<{ data: any; metadata: Metadata }> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/${endpoint}/${id}`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return {
        data: null,
        metadata: {
          title: `${fallbackTitle} Not Found`,
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
          title: `${fallbackTitle} Not Found`,
          description: "The requested item could not be loaded.",
        },
      };
    }

    // Get language from cookies (or default to ENG)
    const cookieStore = cookies();
    const language = cookieStore.get("language")?.value || "ENG";
    const isEnglish = language === "ENG";

    // Use language-specific content for metadata
    const title = isEnglish
      ? data.english_title || fallbackTitle
      : data.bangla_title || fallbackTitle;

    const description = stripHtml(
      isEnglish
        ? data.english_short_description || ""
        : data.bangla_short_description || "",
    );

    const image = isEnglish
      ? data.eng_images?.[0] || "/default-image.jpg"
      : data.bng_Images?.[0] || "/default-image.jpg";

    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/${endpoint}/${id}`;

    const metadata: Metadata = {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        url,
        images: [{ url: image, width: 1200, height: 630, alt: title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
      alternates: {
        canonical: url,
        languages: {
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/en/${endpoint}/${id}`,
          bn: `${process.env.NEXT_PUBLIC_SITE_URL}/bn/${endpoint}/${id}`,
        },
      },
    };

    return { data, metadata };
  } catch (error) {
    console.error("Error fetching data for SEO:", error);
    return {
      data: null,
      metadata: {
        title: `${fallbackTitle} Not Found`,
        description: "The requested item could not be loaded.",
      },
    };
  }
}
