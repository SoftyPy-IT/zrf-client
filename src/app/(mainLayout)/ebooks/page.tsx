/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Head from 'next/head';
import EbookFetchData from './_components/EbookFetchData';

const EbookPage = () => {
  return (
    <>
      <Head>
        <title>Ebooks Collection | Explore Our Library</title>
        <meta
          name="description"
          content="Discover a diverse collection of ebooks across various genres. Dive into a world of knowledge and entertainment with our curated library."
        />
        <meta
          name="keywords"
          content="ebooks, free ebooks, online library, digital books, ebook collection, read ebooks online"
        />
        <meta name="author" content="Ziaur Rahman Foundation" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Ebooks Collection | Explore Our Library" />
        <meta
          property="og:description"
          content="Browse through a curated library of ebooks available for download and online reading."
        />
        <meta property="og:image" content="/ebook-library-og-image.png" />
        <meta property="og:url" content="https://www.ziaurrahmanfoundation.com/ebooks" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ebooks Collection | Explore Our Library" />
        <meta
          name="twitter:description"
          content="Browse through a curated library of ebooks available for download and online reading."
        />
        <meta name="twitter:image" content="/ebook-library-twitter-image.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.ziaurrahmanfoundation.com/ebooks" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Ebooks Collection",
              description:
                "Discover a diverse collection of ebooks across various genres. Dive into a world of knowledge and entertainment with our curated library.",
              url: "https://www.ziaurrahmanfoundation.com/ebooks",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.ziaurrahmanfoundation.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Ebooks",
                    item: "https://www.ziaurrahmanfoundation.com/ebooks",
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
                logo: {
                  "@type": "ImageObject",
                  url: "/logo.png",
                },
              },
              image: "/ebook-library-og-image.png",
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <EbookFetchData />
    </>
  );
};

export default EbookPage;
