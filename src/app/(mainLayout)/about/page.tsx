/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Container from "@/components/share/Container";
import History from "@/components/ui/HomePage/History/History";
import ProgrammSection from "../program/_components/ProgrammSection";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import AboutTopSection from "@/components/ui/HomePage/HelpingVirtue/AboutTopSection";
import JoinUs from "./_components/JoinUs";



const AboutUs = () => {


  return (
    <div>
      <CommonBanner title="About Us " />
      <Container>
        <AboutTopSection />

        <section className="sectionMargin">
          <h2 className="text-center text-3xl font-bold">Remarkable Work</h2>
          <div className="w-44 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-7 mx-auto"></div>
          <ProgrammSection />
        </section>
        <History />
        <JoinUs />
      </Container>
    </div>
  );
};

export default AboutUs;
