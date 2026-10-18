import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchWithSEO } from "@/utils/fetchWithSEO";
import SingleRehabilitation from "../_components/SingleNews";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metadata } = await fetchWithSEO(
    "activity",
    params.id,
    "Upcoming Programme",
    `/upcoming-programs/${params.id}`,
  );
  return metadata;
}

export default async function RehabilitationPage({ params }: Props) {
  const { data } = await fetchWithSEO(
    "activity",
    params.id,
    "Upcoming Programme",
    `/upcoming-programs/${params.id}`,
  );
  if (!data) notFound();

  return <SingleRehabilitation singleNewsData={data} />;
}
