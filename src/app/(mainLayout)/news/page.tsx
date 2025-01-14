/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Head from "next/head";
import News from "./_components/News";

const NewsPage = () => {
  return (
    <>
      <Head>
        <title>Latest News | Stay Informed with Updates</title>
        <meta
          name="description"
          content="Stay updated with the latest news and events. Explore our articles and announcements to keep informed about what's happening."
        />
        <meta
          name="keywords"
          content="news, updates, latest news, announcements, current events"
        />
        <meta name="author" content="Ziaur Rahman Foundation" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta
          property="og:title"
          content="Latest News | Stay Informed with Updates"
        />
        <meta
          property="og:description"
          content="Explore the latest updates, news, and announcements. Stay informed about recent happenings."
        />
        <meta property="og:image" content="/news-og-image.png" />
        <meta
          property="og:url"
          content="https://www.ziaurrahmanfoundation.com/news"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Latest News | Stay Informed with Updates" />
        <meta
          name="twitter:description"
          content="Explore the latest updates, news, and announcements. Stay informed about recent happenings."
        />
        <meta name="twitter:image" content="/news-twitter-image.png" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.ziaurrahmanfoundation.com/news"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Latest News",
              description:
                "Stay updated with the latest news and events. Explore our articles and announcements to keep informed about what's happening.",
              url: "https://www.ziaurrahmanfoundation.com/news",
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
                    name: "News",
                    item: "https://www.ziaurrahmanfoundation.com/news",
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
              image: "/news-og-image.png",
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <div>
        <News />
      </div>
    </>
  );
};

export default NewsPage;
