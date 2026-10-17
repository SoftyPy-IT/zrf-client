import React from "react";
import { Metadata } from "next";
import EducationHomePage from "./_components/EducationHomePage";

export const metadata: Metadata = {
  title: "Education Programmes | Empowering Future Generations",
  description:
    "Explore our education programmes designed to empower future generations through quality learning opportunities and community support.",
};

const EducationPage = () => {
  return <EducationHomePage />;
};

export default EducationPage;
