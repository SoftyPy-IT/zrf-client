import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchWithSEO } from "@/utils/fetchWithSEO";
import SingleRehabilitation from "../_components/SingleRehabilitation";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metadata } = await fetchWithSEO(
    "whatwedo",
    params.id,
    "Project Details"
  );
  return metadata;
}

export default async function RehabilitationPage({ params }: Props) {
  const { data } = await fetchWithSEO("whatwedo", params.id, "Project Details");
  if (!data) notFound();

  return <SingleRehabilitation whatWedoData={data} />;
}
