import { Metadata } from "next";
import { notFound } from "next/navigation";
import { stripHtml } from "@/utils/stripHtml";
import SingleActivity from "../_components/SingleActivity";

type Props = {
  params: { id: string };
};

async function getActivity(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/activity/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;
  const data = await res.json();

  return data?.data || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const activity = await getActivity(params.id);
  console.log("get activity tes this ", activity);
  if (!activity) {
    return {
      title: "Activity Not Found",
      description: "The requested activity could not be loaded.",
    };
  }

  const title = activity.english_title || "Activity";
  const description = stripHtml(activity.english_short_description || "");
  const image = activity.eng_images?.[0] || "/default-image.jpg";
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/activity/${params.id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function ActivityPage({ params }: Props) {
  const data = await getActivity(params.id);
  if (!data) notFound();

  return <SingleActivity singleActivityData={data} />;
}
