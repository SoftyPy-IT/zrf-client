import type { Metadata } from "next";
import ProgramArticleClient from "./_components/ProgramArticleClient";

type Props = {
  params: { id: string };
};

export const metadata: Metadata = {
  title:
    "Medical Care and Medicine Distribution | Programmes | Ziaur Rahman Foundation",
  description:
    "Medical care and medicine distribution among flood-affected families in Feni, organized by Ziaur Rahman Foundation (ZRF) and DAB.",
  alternates: {
    canonical: "/whatwedo/program/1",
  },
  openGraph: {
    title:
      "Medical Care and Medicine Distribution | Programmes | Ziaur Rahman Foundation",
    description:
      "Medical care and medicine distribution among flood-affected families in Feni, organized by Ziaur Rahman Foundation (ZRF) and DAB.",
    url: "/whatwedo/program/1",
    siteName: "Ziaur Rahman Foundation",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Medical care and medicine distribution among flood-affected families",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Medical Care and Medicine Distribution | Programmes | Ziaur Rahman Foundation",
    description:
      "Medical care and medicine distribution among flood-affected families in Feni, organized by Ziaur Rahman Foundation (ZRF) and DAB.",
    images: ["/og-image.png"],
  },
};

export default function ProgramArticlePage({ params }: Props) {
  return <ProgramArticleClient />;
}
