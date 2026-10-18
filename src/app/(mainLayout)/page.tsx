import type { Metadata } from "next";
import React from "react";
import Welcome from "@/components/ui/HomePage/Welcome/Welcome";
import QuickAccess from "@/components/ui/HomePage/QuickAccess/QuickAccess";
import OurProjects from "@/components/ui/HomePage/OurProjects/OurProjects";
import Impact from "@/components/ui/HomePage/Impact/Impact";
import Program from "@/components/ui/HomePage/Program/Program";
import LatestNews from "@/components/ui/HomePage/Publications/LatestNews/LatestNews";
import RecentActivitiesOfZRF from "@/components/ui/HomePage/RecentActivitiesOfZRF/RecentActivitiesOfZRF";
import Publications from "@/components/ui/HomePage/Publications/Publications";
import VideoGallery from "@/components/ui/HomePage/Gallery/VideoGallery";
import AnniversarySection from "@/components/ui/HomePage/Anniversary27/AnniversarySection";
import PhotoGallery from "@/components/ui/HomePage/Gallery/PhotoGallery";
import Slider from "@/components/share/Slider/Slider";

export const metadata: Metadata = {
  title: "Ziaur Rahman Foundation | Dedicated to Nation Building",
  description:
    "Official website of Ziaur Rahman Foundation (ZRF). Established in memory of Shaheed President Ziaur Rahman, dedicated to health services, education, poverty alleviation, and community empowerment across Bangladesh.",
  keywords: [
    "Ziaur Rahman Foundation",
    "ZRF",
    "জিয়াউর রহমান ফাউন্ডেশন",
    "Shaheed President Ziaur Rahman",
    "humanitarian organisation Bangladesh",
    "free healthcare Bangladesh",
    "scholarships Bangladesh",
    "community empowerment",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ziaur Rahman Foundation | Dedicated to Nation Building",
    description:
      "Working across Bangladesh to lift communities through education, healthcare, and humanitarian initiatives.",
    url: "/",
    siteName: "Ziaur Rahman Foundation",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ziaur Rahman Foundation — Dedicated to Nation Building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziaur Rahman Foundation | Dedicated to Nation Building",
    description:
      "Working across Bangladesh to lift communities through education, healthcare, and humanitarian initiatives.",
    images: ["/og-image.png"],
  },
};

/**
 * Home page.
 *
 * Section order follows a deliberate narrative — who we are, what we do, the
 * evidence, then the latest news and media. Background tones alternate white /
 * slate so each band reads as its own unit without heavy dividers.
 */
const Home = () => {
  return (
    <>
      <Slider />
      <QuickAccess />
      <Welcome />
      <OurProjects />
      <Impact />
      <Program />
      <LatestNews />
      <RecentActivitiesOfZRF />
      <Publications />
      <VideoGallery />
      <AnniversarySection />
      <PhotoGallery />
    </>
  );
};

export default Home;
