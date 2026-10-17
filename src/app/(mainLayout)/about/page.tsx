import type { Metadata } from "next";
import React from "react";
import History from "@/components/ui/HomePage/History/History";
import ProgrammSection from "../program/_components/ProgrammSection";
import AboutTopSection from "@/components/ui/HomePage/HelpingVirtue/AboutTopSection";
import JoinUs from "./_components/JoinUs";
import AboutBanner from "./_components/AboutBanner";

export const metadata: Metadata = {
  title: "About Us | Ziaur Rahman Foundation",
  description:
    "Learn about the Ziaur Rahman Foundation — our mandate, mission, vision and the journey of service that began in 2000, from health fairs in Khulna to nationwide welfare programmes.",
};

/**
 * About Us page.
 *
 * A narrative page: the institutional banner, the "who we are" story, the
 * mission / vision / slogan pillars, the foundation's annual programmes, the
 * journey timeline and the closing call to stand with us.
 *
 * The content sections are client components (the public about API and the
 * ENG / BNG language switch); this server wrapper contributes the SEO metadata.
 */
const AboutUs = () => {
  return (
    <>
      <AboutBanner />
      <AboutTopSection />
      <ProgrammSection />
      <History />
      <JoinUs />
    </>
  );
};

export default AboutUs;
