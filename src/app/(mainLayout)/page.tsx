"use client";
import Slider from "@/components/share/Slider/Slider";
import Impact from "@/components/ui/HomePage/Impact/Impact";
import OurProjects from "@/components/ui/HomePage/OurProjects/OurProjects";
import Program from "@/components/ui/HomePage/Program/Program";
import Publications from "@/components/ui/HomePage/Publications/Publications";
import React from "react";
import GallerySection from "@/components/ui/HomePage/Gallery/Gallery";
import RecentActivitiesOfZRF from "@/components/ui/HomePage/RecentActivitiesOfZRF/RecentActivitiesOfZRF";
import Welcome from "@/components/ui/HomePage/Welcome/Welcome";
import Featured from "@/components/ui/HomePage/Featured/Featured";
import Statistics from "@/components/ui/HomePage/Statistics/Statistics";
import Volunteer from "@/components/ui/HomePage/Volunteer/Volunteer";
import TrustedCharity from "@/components/ui/HomePage/TrustedCharity/TrustedCharity";

const Home = () => {
  return (
    <div>
      <Slider />
      <Featured />
      <Statistics />
      <Volunteer />
      <TrustedCharity />
      <Welcome />
      <Impact />
      <RecentActivitiesOfZRF />
      <Program />
      <OurProjects />
      <Publications />
      <GallerySection />
    </div>
  );
};

export default Home;
