import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchWithSEO } from "@/utils/fetchWithSEO";
import SingleProjectData from "../_components/SingleProjectData";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metadata } = await fetchWithSEO(
    "project",
    params.id,
    "Our Projects",
    `/our-projects/${params.id}`,
  );
  return metadata;
}

export default async function ProjectPage({ params }: Props) {
  const { data } = await fetchWithSEO(
    "project",
    params.id,
    "Our Projects",
    `/our-projects/${params.id}`,
  );
  if (!data) notFound();

  return <SingleProjectData singleProjectData={data} />;
}

