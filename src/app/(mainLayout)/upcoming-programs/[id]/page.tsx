import { Metadata } from "next";
import { notFound } from "next/navigation";
import { stripHtml } from "@/utils/stripHtml";
import SingleRehabilitation from "../_components/SingleNews";

type Props = {
  params: { id: string };
};

// Fetch function (keep API unchanged)
async function getSingleNews(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/activity/${id}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;
    const data = await res.json();
    return data?.data || null;
  } catch (error) {
    console.error("Error fetching single news:", error);
    return null;
  }
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const news = await getSingleNews(params.id);

  if (!news) {
    return {
      title: "News Not Found",
      description: "The requested news article could not be loaded.",
    };
  }

  const title = news.english_title || news.bangla_title || "News Details";

  const description = stripHtml(
    news.english_short_description ||
      news.bangla_short_description ||
      "Read more about our recent activities and updates."
  );

  const image =
    news.eng_images?.[0] || news.bng_Images?.[0] || "/default-image.jpg";

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/activity/${params.id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// Page Component
export default async function Rehabilitation({ params }: Props) {
  const data = await getSingleNews(params.id);
  if (!data) notFound();

  return <SingleRehabilitation singleNewsData={data} />;
}
