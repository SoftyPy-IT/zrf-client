import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchWithSEO } from "@/utils/fetchWithSEO";
import SingleNews from "../_components/SingleNews";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metadata } = await fetchWithSEO("activity", params.id, "News");
  return metadata;
}

export default async function NewsPage({ params }: Props) {
  const { data } = await fetchWithSEO("activity", params.id, "News");
  if (!data) notFound();

  return <SingleNews singleNewsData={data} />;
}
