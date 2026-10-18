import type { Metadata } from "next";
import MessageDirectorClient from "./_components/MessageDirectorClient";

export const metadata: Metadata = {
  title: "Message from the Executive Director | Ziaur Rahman Foundation",
  description:
    "Official message from the Executive Director of the Ziaur Rahman Foundation regarding operational progress, humanitarian relief programmes, and welfare initiatives.",
  alternates: {
    canonical: "/message-of-director",
  },
  openGraph: {
    title: "Message from the Executive Director | Ziaur Rahman Foundation",
    description:
      "Official message from the Executive Director of the Ziaur Rahman Foundation.",
    url: "/message-of-director",
    siteName: "Ziaur Rahman Foundation",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Message from the Executive Director — Ziaur Rahman Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Message from the Executive Director | Ziaur Rahman Foundation",
    description:
      "Official message from the Executive Director of the Ziaur Rahman Foundation.",
    images: ["/og-image.png"],
  },
};

export default function MessageDirectorPage() {
  return <MessageDirectorClient />;
}
