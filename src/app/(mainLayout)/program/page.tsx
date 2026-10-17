import React from "react";
import { Metadata } from "next";
import ProgrammSection from "./_components/ProgrammSection";
import ProgramBanner from "./_components/ProgramBanner";

export const metadata: Metadata = {
  title: "Our Programmes | Ziaur Rahman Foundation",
  description:
    "Explore the programmes of the Ziaur Rahman Foundation — health camps, education support, food security, climate action and social inclusion across Bangladesh.",
};

/**
 * Our Programmes index.
 *
 * The banner and the programme grid are client components so they can follow
 * the active language; this server wrapper contributes the SEO metadata.
 */
const ProgramPage = () => {
  return (
    <>
      <ProgramBanner />
      <ProgrammSection />
    </>
  );
};

export default ProgramPage;
