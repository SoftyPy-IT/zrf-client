import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchWithSEO } from "@/utils/fetchWithSEO";
import SingleRehabilitation from "../_components/SingleRehabilitation";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metadata } = await fetchWithSEO(
    "whatwedo",
    params.id,
    "Rehabilitation Programme",
    `/whatwedo/rehabilitation/${params.id}`,
  );
  return metadata;
}

export default async function RehabilitationPage({ params }: Props) {
  const { data } = await fetchWithSEO(
    "whatwedo",
    params.id,
    "Rehabilitation Programme",
    `/whatwedo/rehabilitation/${params.id}`,
  );
  if (!data) notFound();

  return <SingleRehabilitation whatWedoData={data} />;
}
