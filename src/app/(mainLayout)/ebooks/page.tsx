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
          content="ebooks, free ebooks, online library, digital books, ebook collection"
        />
        <meta name="author" content="Ziaur Rahman Foundation" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Ebooks Collection | Explore Our Library" />
        <meta
          property="og:description"
          content="Browse through a curated library of ebooks available for download and online reading."
        />
        <meta property="og:image" content="/ebook-library-og-image.png" />
        <meta property="og:url" content="https://www.ziaurrahmanfoundation.com/ebooks" />
        <meta property="og:type" content="website" />




        <link rel="canonical" href="https://www.ziaurrahmanfoundation.com/ebooks" />


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
