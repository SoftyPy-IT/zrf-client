import type { Metadata } from "next";
import MessagePresidentClient from "./_components/MessagePresidentClient";

export const metadata: Metadata = {
  title: "Message from the President | Ziaur Rahman Foundation",
  description:
    "Official message from the President of the Ziaur Rahman Foundation, articulating our vision, core values, and ongoing commitment to humanitarian service across Bangladesh.",
  alternates: {
    canonical: "/message-of-president",
  },
  openGraph: {
    title: "Message from the President | Ziaur Rahman Foundation",
    description:
      "Official message from the President of the Ziaur Rahman Foundation on our humanitarian mission and service to the nation.",
    url: "/message-of-president",
    siteName: "Ziaur Rahman Foundation",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Message from the President — Ziaur Rahman Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Message from the President | Ziaur Rahman Foundation",
    description:
      "Official message from the President of the Ziaur Rahman Foundation on our humanitarian mission and service to the nation.",
    images: ["/og-image.png"],
  },
};

export default function MessagePresidentPage() {
  return <MessagePresidentClient />;
}
