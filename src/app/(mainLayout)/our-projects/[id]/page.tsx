import { Metadata } from "next";
import { notFound } from "next/navigation";
import SingleProjectData from "../_components/SingleProjectData";

type Props = {
  params: {
    id: string;
  };
};

async function getProjectData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/project/${id}`,
      {
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (result?.data) return result.data;
    return null;
  } catch (error) {
    return null;
  }
}

// Optional: Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getProjectData(params.id);

  if (!data) return {};

  return {
    title: data.english_title || "Project Details",
    openGraph: {
      title: data.english_title,
      images: data.eng_images ? [{ url: data.eng_images }] : [],
    },
  };
}

const ProjectPage = async ({ params }: Props) => {
  const data = await getProjectData(params.id);

  if (!data) {
    notFound();
  }

  return (
    <div>
      <SingleProjectData singleProjectData={data} />
    </div>
  );
};

export default ProjectPage;
