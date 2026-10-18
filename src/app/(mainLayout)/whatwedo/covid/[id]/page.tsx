import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchWithSEO } from "@/utils/fetchWithSEO";
import SingleCovid from "../_components/SingleCovid";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metadata } = await fetchWithSEO(
    "whatwedo",
    params.id,
    "COVID-19 Relief",
    `/whatwedo/covid/${params.id}`,
  );
  return metadata;
}

export default async function CovidPage({ params }: Props) {
  const { data } = await fetchWithSEO(
    "whatwedo",
    params.id,
    "COVID-19 Relief",
    `/whatwedo/covid/${params.id}`,
  );
  if (!data) notFound();

  return <SingleCovid whatWedoData={data} />;
}
