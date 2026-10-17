import React from "react";
import { Metadata } from "next";
import ClimateChangeHomePage from "./_components/ClimateChangeHomePage";

export const metadata: Metadata = {
  title: "Climate Change | Ziaur Rahman Foundation",
  description:
    "Learn about the impact of climate change and the Ziaur Rahman Foundation's efforts to combat it through education, advocacy and sustainable programmes.",
};

const ClimateChangePage = () => {
  return <ClimateChangeHomePage />;
};

export default ClimateChangePage;
