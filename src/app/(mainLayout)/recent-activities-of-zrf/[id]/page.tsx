import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchWithSEO } from "@/utils/fetchWithSEO";
import SingleActivity from "../_components/SingleActivity";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metadata } = await fetchWithSEO("activity", params.id, "Activity");
  return metadata;
}

export default async function ActivityPage({ params }: Props) {
  const { data } = await fetchWithSEO("activity", params.id, "Activity");
  if (!data) notFound();

  return <SingleActivity singleActivityData={data} />;
}
