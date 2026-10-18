import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchWithSEO } from "@/utils/fetchWithSEO";
import SingleHeathService from "../_components/SingleHeathService";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metadata } = await fetchWithSEO(
    "whatwedo",
    params.id,
    "Health Services",
    `/health-services/${params.id}`,
  );
  return metadata;
}

export default async function HealthServicePage({ params }: Props) {
  const { data } = await fetchWithSEO(
    "whatwedo",
    params.id,
    "Health Services",
    `/health-services/${params.id}`,
  );
  if (!data) notFound();

  return <SingleHeathService whatWedoData={data} />;
}
