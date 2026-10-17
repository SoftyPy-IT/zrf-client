import type { Metadata } from "next";
import News from "./_components/News";

export const metadata: Metadata = {
  title: "Upcoming Programmes | Ziaur Rahman Foundation",
  description:
    "Programmes, events and activities scheduled by the Ziaur Rahman Foundation.",
  keywords: [
    "Ziaur Rahman Foundation programmes",
    "ZRF upcoming events",
    "upcoming programmes",
    "events",
  ],
  authors: [{ name: "Ziaur Rahman Foundation" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://zrf.info/upcoming-programs",
  },
  openGraph: {
    title: "Upcoming Programmes | Ziaur Rahman Foundation",
    description:
      "Programmes, events and activities scheduled by the Ziaur Rahman Foundation.",
    url: "https://zrf.info/upcoming-programs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upcoming Programmes | Ziaur Rahman Foundation",
    description:
      "Programmes, events and activities scheduled by the Ziaur Rahman Foundation.",
  },
};

/**
 * Upcoming programmes index page.
 *
 * Metadata is declared here (server side); the listing itself is a client
 * component because it is backed by the public activity API and the
 * ENG / BNG language switch.
 */
const UpcomingProgramsPage = () => <News />;

export default UpcomingProgramsPage;
