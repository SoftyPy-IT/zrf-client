import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchWithSEO } from "@/utils/fetchWithSEO";
import SingleInitiative from "../_components/SingleInitiative";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metadata } = await fetchWithSEO(
    "whatwedo",
    params.id,
    "Initiative",
    `/whatwedo/initiatives/${params.id}`,
  );
  return metadata;
}

export default async function InitiativePage({ params }: Props) {
  const { data } = await fetchWithSEO(
    "whatwedo",
    params.id,
    "Initiative",
    `/whatwedo/initiatives/${params.id}`,
  );
  if (!data) notFound();

  return <SingleInitiative whatWedoData={data} />;
}
