import type { Metadata } from "next";
import News from "./_components/News";

export const metadata: Metadata = {
  title: "News & Updates | Ziaur Rahman Foundation",
  description:
    "Stay informed with the latest news, announcements and updates from the Ziaur Rahman Foundation.",
  keywords: [
    "Ziaur Rahman Foundation news",
    "ZRF updates",
    "announcements",
    "current events",
  ],
  authors: [{ name: "Ziaur Rahman Foundation" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://zrf.info/news",
  },
  openGraph: {
    title: "News & Updates | Ziaur Rahman Foundation",
    description:
      "Explore the latest news, announcements and updates from the Ziaur Rahman Foundation.",
    url: "https://zrf.info/news",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Updates | Ziaur Rahman Foundation",
    description:
      "Explore the latest news, announcements and updates from the Ziaur Rahman Foundation.",
  },
};

/**
 * News index page.
 *
 * Metadata is declared here (server side); the listing itself is a client
 * component because it is backed by the public activity API and the
 * ENG / BNG language switch.
 */
const NewsPage = () => <News />;

export default NewsPage;
