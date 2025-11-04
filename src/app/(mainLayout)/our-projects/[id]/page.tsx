import { Metadata } from "next";
import { notFound } from "next/navigation";
import { stripHtml } from "@/utils/stripHtml";
import SingleProjectData from "../_components/SingleProjectData";

type Props = {
  params: { id: string };
};

// ✅ Fetch Project Data
async function getProjectData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/project/${id}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;
    const result = await res.json();

    return result?.data || null;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectData(params.id);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be loaded.",
    };
  }

  const title = project.english_title || "Project Details";
  const description = stripHtml(project.english_short_description || "");
  const image = project.eng_images?.[0] || "/default-image.jpg";
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/project/${params.id}`;

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

export default async function ProjectPage({ params }: Props) {
  const data = await getProjectData(params.id);
  if (!data) notFound();

  return <SingleProjectData singleProjectData={data} />;
}
