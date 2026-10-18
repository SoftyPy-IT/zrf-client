import type { Metadata } from "next";
import CommitteeClient from "./_components/CommitteeClient";

export const metadata: Metadata = {
  title: "Board & Committee Members | Ziaur Rahman Foundation",
  description:
    "Meet the board of directors, executive committee, and advisory body guiding the programmes and mission of the Ziaur Rahman Foundation.",
  alternates: {
    canonical: "/committee",
  },
  openGraph: {
    title: "Board & Committee Members | Ziaur Rahman Foundation",
    description:
      "Meet the governing board and executive committee of the Ziaur Rahman Foundation.",
    url: "/committee",
    siteName: "Ziaur Rahman Foundation",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Board & Committee Members — Ziaur Rahman Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Board & Committee Members | Ziaur Rahman Foundation",
    description:
      "Meet the governing board and executive committee of the Ziaur Rahman Foundation.",
    images: ["/og-image.png"],
  },
};

export default function CommitteePage() {
  return <CommitteeClient />;
}
