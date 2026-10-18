import type { Metadata } from "next";
import DonationsClient from "./_components/DonationsClient";

export const metadata: Metadata = {
  title: "Donate & Support Our Humanitarian Work | Ziaur Rahman Foundation",
  description:
    "Support Ziaur Rahman Foundation's humanitarian mission. Your donations directly empower communities across Bangladesh through free healthcare camps, education scholarships, and relief programmes.",
  keywords: [
    "donate to ZRF",
    "Ziaur Rahman Foundation donations",
    "charity Bangladesh",
    "humanitarian donation",
    "education sponsorship",
    "medical relief fund",
  ],
  alternates: {
    canonical: "/donations",
  },
  openGraph: {
    title: "Donate & Support Our Humanitarian Work | Ziaur Rahman Foundation",
    description:
      "Your donation directly funds healthcare, education and relief programmes for communities in need across Bangladesh.",
    url: "/donations",
    siteName: "Ziaur Rahman Foundation",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Support Our Work — Ziaur Rahman Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate & Support Our Humanitarian Work | Ziaur Rahman Foundation",
    description:
      "Your donation directly funds healthcare, education and relief programmes for communities in need across Bangladesh.",
    images: ["/og-image.png"],
  },
};

export default function DonationPage() {
  return <DonationsClient />;
}
