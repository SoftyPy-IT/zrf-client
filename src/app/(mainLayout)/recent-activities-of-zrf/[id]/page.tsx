import { Metadata } from "next";
import { notFound } from "next/navigation";
import SingleActivity from "../_components/SingleActivity";

type Props = {
  params: {
    id: string;
  };
};

async function getProjectData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/activity/${id}`,
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

const Activity = async ({ params }: Props) => {
  const data = await getProjectData(params.id);

  if (!data) {
    notFound();
  }

  return (
    <div>
      <SingleActivity singleActivityData={data} />
    </div>
  );
};

export default Activity;
