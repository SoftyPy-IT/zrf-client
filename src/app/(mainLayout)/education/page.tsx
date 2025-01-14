/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Head from 'next/head';
import EducationHomePage from './_components/EducationHomePage';

const EducationPage = () => {
  return (
    <>
      <Head>
        <title>Education Programs | Empowering Future Generations</title>
        <meta
          name="description"
          content="Explore our education programs designed to empower future generations through quality learning opportunities and community support."
        />
        <meta
          name="keywords"
          content="education programs, learning opportunities, online education, community support, future generations"
        />
        <meta name="author" content="Ziaur Rahman Foundation" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Education Programs | Empowering Future Generations" />
        <meta
          property="og:description"
          content="Explore our education programs designed to empower future generations through quality learning opportunities and community support."
        />
        <meta property="og:image" content="/education-og-image.png" />
        <meta property="og:url" content="https://www.ziaurrahmanfoundation.com/education" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Education Programs | Empowering Future Generations" />
        <meta
          name="twitter:description"
          content="Explore our education programs designed to empower future generations through quality learning opportunities and community support."
        />
        <meta name="twitter:image" content="/education-twitter-image.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.ziaurrahmanfoundation.com/education" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Education Programs",
              description:
                "Explore our education programs designed to empower future generations through quality learning opportunities and community support.",
              url: "https://www.ziaurrahmanfoundation.com/education",
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
                    name: "Education",
                    item: "https://www.ziaurrahmanfoundation.com/education",
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
              image: "/education-og-image.png",
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <EducationHomePage />
    </>
  );
};

export default EducationPage;
