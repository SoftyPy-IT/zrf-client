import type { Metadata } from "next";
import MessageVicePresidentClient from "./_components/MessageVicePresidentClient";

export const metadata: Metadata = {
  title: "Message from the Vice President | Ziaur Rahman Foundation",
  description:
    "Official message from the Vice President of the Ziaur Rahman Foundation on our humanitarian projects, community initiatives, and welfare work across Bangladesh.",
  alternates: {
    canonical: "/message-of-vice-president",
  },
  openGraph: {
    title: "Message from the Vice President | Ziaur Rahman Foundation",
    description:
      "Official message from the Vice President of the Ziaur Rahman Foundation on our humanitarian projects and welfare work.",
    url: "/message-of-vice-president",
    siteName: "Ziaur Rahman Foundation",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Message from the Vice President — Ziaur Rahman Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Message from the Vice President | Ziaur Rahman Foundation",
    description:
      "Official message from the Vice President of the Ziaur Rahman Foundation on our humanitarian projects and welfare work.",
    images: ["/og-image.png"],
  },
};

export default function MessageVicePresidentPage() {
  return <MessageVicePresidentClient />;
}
