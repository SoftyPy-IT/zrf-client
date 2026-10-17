"use client";

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
