import type { Metadata } from "next";
import EbookFetchData from "./_components/EbookFetchData";

export const metadata: Metadata = {
  title: "E-Books | Ziaur Rahman Foundation",
  description:
    "Browse the Ziaur Rahman Foundation's e-books, reports and commemorative publications, and read them online.",
  keywords: [
    "ZRF e-books",
    "Ziaur Rahman Foundation publications",
    "online library",
    "digital books",
  ],
  authors: [{ name: "Ziaur Rahman Foundation" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://zrf.info/ebooks",
  },
  openGraph: {
    title: "E-Books | Ziaur Rahman Foundation",
    description:
      "A curated shelf of the foundation's e-books and publications, available to read online.",
    url: "https://zrf.info/ebooks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Books | Ziaur Rahman Foundation",
    description:
      "A curated shelf of the foundation's e-books and publications, available to read online.",
  },
};

/**
 * E-books index.
 *
 * The shelf, PDF reader modal and language switch live in the client component;
 * this server wrapper contributes the SEO metadata and structured data.
 */
const EbookPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "E-Books",
            description:
              "Browse the Ziaur Rahman Foundation's e-books, reports and commemorative publications, and read them online.",
            url: "https://zrf.info/ebooks",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://zrf.info",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "E-Books",
                  item: "https://zrf.info/ebooks",
                },
              ],
            },
            author: {
              "@type": "Organization",
              name: "Ziaur Rahman Foundation",
            },
            publisher: {
              "@type": "Organization",
              name: "Ziaur Rahman Foundation",
            },
          }),
        }}
      />

      <EbookFetchData />
    </>
  );
};

export default EbookPage;
