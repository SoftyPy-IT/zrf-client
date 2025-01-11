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
const Slider = dynamic(() => import("@/components/share/Slider/Slider"), {
  ssr: false,
});
const GallerySection = dynamic(
  () => import("@/components/ui/HomePage/Gallery/Gallery"),
  {
    ssr: false,
  },
);

const Home = () => {
  return (
    <div>
      <Slider />
      <Featured />
      <Welcome />
      <Statistics />
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
