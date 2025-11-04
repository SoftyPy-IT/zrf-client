import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchWithSEO } from "@/utils/fetchWithSEO";
import SingleWhatwedo from "../_components/SingleWhatwedo";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metadata } = await fetchWithSEO("whatwedo", params.id, "Project");
  return metadata;
}

export default async function ProjectPage({ params }: Props) {
  const { data } = await fetchWithSEO("whatwedo", params.id, "Project");
  if (!data) notFound();

  return <SingleWhatwedo whatWedoData={data} />;
}
