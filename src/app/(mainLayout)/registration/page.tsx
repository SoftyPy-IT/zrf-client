import type { Metadata } from "next";
import RegistrationClient from "./_components/RegistrationClient";

export const metadata: Metadata = {
  title: "Registration | Ziaur Rahman Foundation",
  description:
    "Registration notice and announcements for Ziaur Rahman Foundation programmes and events.",
  alternates: {
    canonical: "/registration",
  },
  openGraph: {
    title: "Registration | Ziaur Rahman Foundation",
    description:
      "Registration notice and announcements for Ziaur Rahman Foundation programmes and events.",
    url: "/registration",
    siteName: "Ziaur Rahman Foundation",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Registration — Ziaur Rahman Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Registration | Ziaur Rahman Foundation",
    description:
      "Registration notice and announcements for Ziaur Rahman Foundation programmes and events.",
    images: ["/og-image.png"],
  },
};

export default function RegistrationPage() {
  return <RegistrationClient />;
}
