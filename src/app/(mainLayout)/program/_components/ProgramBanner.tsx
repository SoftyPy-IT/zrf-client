"use client";

import Container from "@/components/share/Container";
import React from "react";
import "./ProgramBanner.css";
import { useLanguage } from "@/provider/LanguageProvider";

const ProgramBanner = () => {
  const { language } = useLanguage();
  return (
    <div className="news-banner md:h-[300px] h-[170px]">
      <Container>
        <div className="content">
          <h1 className="text-2xl md:text-4xl font-bold uppercase">
            {language === "ENG" ? " Our Programs" : "আমাদের প্রোগ্রাম"}{" "}
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default ProgramBanner;
