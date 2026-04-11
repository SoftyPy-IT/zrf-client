/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Head from "next/head";
import ProjectHome from "./_components/ProjectHome";

const OurProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Our Projects | Explore Our Impact and Initiatives</title>
        <meta
          name="description"
          content="Discover our diverse projects and initiatives that make a positive impact. Learn more about the work we're doing across different sectors."
        />
        <meta
          name="keywords"
          content="projects, community impact, social initiatives, charitable projects, sustainable development"
        />
        <meta name="author" content="Ziaur Rahman Foundation" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta
          property="og:title"
          content="Our Projects | Explore Our Impact and Initiatives"
        />
        <meta
          property="og:description"
          content="Explore our various projects and the positive impact we're making. Get inspired by the initiatives we lead to create meaningful change."
        />
        <meta property="og:image" content="/projects-og-image.png" />
        <meta
          property="og:url"
          content="https://www.ziaurrahmanfoundation.com/projects"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Projects | Explore Our Impact and Initiatives"
        />
        <meta
          name="twitter:description"
          content="Discover the impact of our projects and the initiatives we are driving to bring about positive change."
        />
        <meta name="twitter:image" content="/projects-twitter-image.png" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.ziaurrahmanfoundation.com/projects"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Our Projects",
              description:
                "Explore the diverse projects of Ziaur Rahman Foundation. Learn more about our impactful initiatives and the work we do.",
              url: "https://www.ziaurrahmanfoundation.com/projects",
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
                    name: "Our Projects",
                    item: "https://www.ziaurrahmanfoundation.com/projects",
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
              image: "/projects-og-image.png",
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <div>
        <ProjectHome />
      </div>
    </>
  );
};

export default OurProjectsPage;
