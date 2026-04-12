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
    // ✅ Read language from cookie on server side
    const cookieStore = cookies();
    const language = cookieStore.get("language")?.value || "ENG";
    const isEnglish = language === "ENG";

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/${endpoint}/${id}`,
      { cache: "no-store" },
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

    // ✅ Language-aware title, description, image
    const title = isEnglish
      ? data.english_title || data.bangla_title || fallbackTitle
      : data.bangla_title || data.english_title || fallbackTitle;

    const description = isEnglish
      ? stripHtml(
          data.english_short_description || data.bangla_short_description || "",
        )
      : stripHtml(
          data.bangla_short_description || data.english_short_description || "",
        );

    const image = isEnglish
      ? data.eng_images?.[0] || data.bng_Images?.[0] || "/default-image.jpg"
      : data.bng_Images?.[0] || data.eng_images?.[0] || "/default-image.jpg";

    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/${endpoint}/${id}`;

    // Debug log
    console.log("Server language:", language);
    console.log("Is English:", isEnglish);
    console.log("Title:", title);
    console.log("Description:", description);

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
      alternates: { canonical: url },
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
