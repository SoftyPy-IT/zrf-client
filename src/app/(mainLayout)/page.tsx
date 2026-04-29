"use client";

import React from "react";
import Impact from "@/components/ui/HomePage/Impact/Impact";
import OurProjects from "@/components/ui/HomePage/OurProjects/OurProjects";
import Program from "@/components/ui/HomePage/Program/Program";
import Publications from "@/components/ui/HomePage/Publications/Publications";
import RecentActivitiesOfZRF from "@/components/ui/HomePage/RecentActivitiesOfZRF/RecentActivitiesOfZRF";
import Welcome from "@/components/ui/HomePage/Welcome/Welcome";
import Featured from "@/components/ui/HomePage/Featured/Featured";
import Statistics from "@/components/ui/HomePage/Statistics/Statistics";
import dynamic from "next/dynamic";
import Head from "next/head";
import LatestNews from "@/components/ui/HomePage/Publications/LatestNews/LatestNews";
import PhotoGallery from "@/components/ui/HomePage/Gallery/PhotoGallery";
import VideoGallery from "@/components/ui/HomePage/Gallery/VideoGallery";

const Slider = dynamic(() => import("@/components/share/Slider/Slider"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <Head>

        <title>Home - Ziaur Rahman Foundation | Empowering Communities</title>
        <meta
          name="description"
          content="Ziaur Rahman Foundation is a non-profit organization committed to empowering communities through education, health programs, and impactful projects like COVID-19 relief, climate change solutions, and more."
        />
        <meta
          name="keywords"
          content="Ziaur Rahman Foundation, ZRF, Non-Profit Organization, Community Service, Charity, Education, Health Programs, COVID-19 Relief, Climate Change, Asthma Care, Empowerment"
        />
        <meta name="author" content="Ziaur Rahman Foundation" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Ziaur Rahman Foundation | Empowering Communities through Education & Health"
        />
        <meta
          property="og:description"
          content="Join Ziaur Rahman Foundation in creating a better future through impactful projects, health programs, education initiatives, and climate change solutions."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.zrf.org" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ziaur Rahman Foundation | Empowering Communities"
        />
        <meta
          name="twitter:description"
          content="Join Ziaur Rahman Foundation in creating a better future through impactful projects, health programs, education, and climate change initiatives."
        />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />
        <link rel="canonical" href="https://www.zrf.org" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NonProfitOrganization",
              name: "Ziaur Rahman Foundation",
              url: "https://www.zrf.org",
              logo: "https://www.zrf.org/images/logo.png",
              description:
                "Ziaur Rahman Foundation works on community empowerment, education, health programs, and climate change initiatives.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Hope Street",
                addressLocality: "City Name",
                addressRegion: "Region Name",
                postalCode: "12345",
                addressCountry: "Country",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+123-456-7890",
                contactType: "Customer Support",
              },
              sameAs: [
                "https://facebook.com/zrf",
                "https://twitter.com/zrf",
                "https://instagram.com/zrf",
              ],
            }),
          }}
        />
      </Head>
      <main>
        <Slider />
        <Featured />
        <Welcome />
        <OurProjects />
        <RecentActivitiesOfZRF />
        <LatestNews />


        <Program />
        <Publications />

        {/* <Statistics /> */}
        <Impact />
        <VideoGallery />
        <PhotoGallery />
      </main>
    </>
  );
};

export default Home;
