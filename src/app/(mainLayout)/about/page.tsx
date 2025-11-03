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
      <AboutBanner />
      <Container>
        <AboutTopSection />
        <ProgrammSection />
        <History />
        {/* <JoinUs /> */}
      </Container>
    </div>
  );
};

export default AboutUs;
