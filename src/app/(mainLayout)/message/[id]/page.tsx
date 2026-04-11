import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchWithSEO } from "@/utils/fetchWithSEO";
import SingleMessage from "../_components/SingleNews";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metadata } = await fetchWithSEO(
    "activity",
    params.id,
    "Rehabilitation Project"
  );
  return metadata;
}

export default async function MessagePage({ params }: Props) {
  const { data } = await fetchWithSEO(
    "activity",
    params.id,
    "Rehabilitation Project"
  );
  if (!data) notFound();

  return <SingleMessage singleNewsData={data} />;
}
