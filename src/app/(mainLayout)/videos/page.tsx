import type { Metadata } from "next";
import Videos from "./_components/Videos";

export const metadata: Metadata = {
  title: "Video Gallery | Ziaur Rahman Foundation",
  description:
    "Watch programme films, documentaries and field coverage from the Ziaur Rahman Foundation.",
  keywords: [
    "ZRF video gallery",
    "Ziaur Rahman Foundation videos",
    "documentaries",
    "field coverage",
  ],
  authors: [{ name: "Ziaur Rahman Foundation" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://zrf.info/videos",
  },
  openGraph: {
    title: "Video Gallery | Ziaur Rahman Foundation",
    description:
      "Programme films, documentaries and field coverage from the Ziaur Rahman Foundation.",
    url: "https://zrf.info/videos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Gallery | Ziaur Rahman Foundation",
    description:
      "Programme films, documentaries and field coverage from the Ziaur Rahman Foundation.",
  },
};

/**
 * Video gallery index.
 *
 * The media centre (featured player + scrollable playlist, ENG / BNG switch)
 * lives in the client component so the language switch can drive it; this
 * server wrapper contributes the SEO metadata.
 */
const VideosPage = () => <Videos />;

export default VideosPage;
