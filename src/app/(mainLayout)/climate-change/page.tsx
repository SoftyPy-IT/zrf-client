/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import ClimateChangeHomePage from './_components/ClimateChangeHomePage';
import Head from 'next/head';

const page = () => {
  return (
    <div>
      <Head>
        <title>Climate Change | Ziaur Rahman Foundation</title>
        <meta
          name="description"
          content="Learn about the impact of climate change and the Ziaur Rahman Foundation's efforts to combat it through education, advocacy, and sustainable programs."
        />
        <meta
          name="keywords"
          content="climate change, environmental sustainability, global warming, climate advocacy, climate education, Ziaur Rahman Foundation"
        />
        <meta name="author" content="Ziaur Rahman Foundation" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Climate Change | Ziaur Rahman Foundation" />
        <meta
          property="og:description"
          content="Learn about the impact of climate change and the Ziaur Rahman Foundation's efforts to combat it through education, advocacy, and sustainable programs."
        />
        <meta property="og:image" content="/climate-change-og-image.png" />
        <meta
          property="og:url"
          content="https://www.ziaurrahmanfoundation.com/climate-change"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Climate Change | Ziaur Rahman Foundation" />
        <meta
          name="twitter:description"
          content="Learn about the impact of climate change and the Ziaur Rahman Foundation's efforts to combat it through education, advocacy, and sustainable programs."
        />
        <meta name="twitter:image" content="/climate-change-twitter-image.png" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.ziaurrahmanfoundation.com/climate-change"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Climate Change",
              description:
                "Learn about the impact of climate change and the Ziaur Rahman Foundation's efforts to combat it through education, advocacy, and sustainable programs.",
              url: "https://www.ziaurrahmanfoundation.com/climate-change",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.ziaurrahmanfoundation.com/climate-change",
              },
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
                    name: "Climate Change",
                    item: "https://www.ziaurrahmanfoundation.com/climate-change",
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
              image: "/climate-change-og-image.png",
            }),
          }}
        />
      </Head>
      <ClimateChangeHomePage />
    </div>
  );
};

export default page;
