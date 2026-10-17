import type { Metadata } from "next";
import GalleryContent from "./_components/GalleryContent";

export const metadata: Metadata = {
  title: "Photo Gallery | Ziaur Rahman Foundation",
  description:
    "Browse photographs from the Ziaur Rahman Foundation's camps, programmes and community events across Bangladesh.",
  keywords: [
    "ZRF photo gallery",
    "Ziaur Rahman Foundation gallery",
    "field photographs",
    "community programmes",
  ],
  authors: [{ name: "Ziaur Rahman Foundation" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://zrf.info/gallery",
  },
  openGraph: {
    title: "Photo Gallery | Ziaur Rahman Foundation",
    description:
      "Moments from the Ziaur Rahman Foundation's camps, programmes and community events.",
    url: "https://zrf.info/gallery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Ziaur Rahman Foundation",
    description:
      "Moments from the Ziaur Rahman Foundation's camps, programmes and community events.",
  },
};

/**
 * Photo gallery index.
 *
 * The gallery itself (year-grouped bento grid, lightbox, ENG / BNG switch) is a
 * client component; this server wrapper contributes the SEO metadata.
 */
const GalleryPage = () => <GalleryContent />;

export default GalleryPage;
