import React from "react";
import { Metadata } from "next";
import ProjectHome from "./_components/ProjectHome";

export const metadata: Metadata = {
  title: "Our Projects | Ziaur Rahman Foundation",
  description:
    "Discover the projects and initiatives of the Ziaur Rahman Foundation and the positive impact they create across communities in Bangladesh.",
};

/**
 * Our Projects index.
 *
 * The listing itself (banner, card grid, load-more) lives in the client
 * component so it can follow the active language; this server wrapper
 * contributes the SEO metadata and structured data.
 */
const OurProjectsPage = () => {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Projects",
            description:
              "Explore the diverse projects of Ziaur Rahman Foundation. Learn more about our impactful initiatives and the work we do.",
            url: "https://zrf.info/projects",
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
                  name: "Our Projects",
                  item: "https://zrf.info/projects",
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

      <ProjectHome />
    </>
  );
};

export default OurProjectsPage;
