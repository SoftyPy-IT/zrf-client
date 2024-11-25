/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Container from "@/components/share/Container";
import History from "@/components/ui/HomePage/History/History";
import ProgrammSection from "../program/_components/ProgrammSection";
import AboutTopSection from "@/components/ui/HomePage/HelpingVirtue/AboutTopSection";
import JoinUs from "./_components/JoinUs";
import AboutBanner from "./_components/AboutBanner";
import Head from "next/head";

const AboutUs = () => {
  return (
    <div>
       <Head>
        <title>About Us | Ziaur Rahman Foundation</title>
        <meta
          name="description"
          content="Learn about the Ziaur Rahman Foundation, our history, and our remarkable programs that empower communities through social services and humanitarian work."
        />
        <meta
          name="keywords"
          content="Ziaur Rahman Foundation, about us, non-profit, charity, humanitarian work"
        />
        <meta name="author" content="Ziaur Rahman Foundation" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="About Us | Ziaur Rahman Foundation" />
        <meta
          property="og:description"
          content="Discover the mission, vision, and programs of the Ziaur Rahman Foundation, dedicated to empowering communities through social services."
        />
        <meta property="og:image" content="/about-us-og-image.png" />
        <meta property="og:url" content="https://www.ziaurrahmanfoundation.com/about-us" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Ziaur Rahman Foundation" />
        <meta
          name="twitter:description"
          content="Learn about the Ziaur Rahman Foundation, our history, and our remarkable programs that empower communities through social services and humanitarian work."
        />
        <meta name="twitter:image" content="/about-us-twitter-image.png" />
        <link rel="canonical" href="https://www.ziaurrahmanfoundation.com/about-us" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "About Us",
              description:
                "Learn about the Ziaur Rahman Foundation, our history, and our remarkable programs that empower communities through social services and humanitarian work.",
              url: "https://www.ziaurrahmanfoundation.com/about-us",
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
                    name: "About Us",
                    item: "https://www.ziaurrahmanfoundation.com/about-us",
                  },
                ],
              },
            }),
          }}
        />
      </Head>
      <AboutBanner />
      <Container>
        <AboutTopSection />
    
         
          <ProgrammSection />

        <History />
        <JoinUs />
      </Container>
      
    </div>
  );
};

export default AboutUs;
