"use client";

import React from "react";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { useLanguage } from "@/provider/LanguageProvider";

/**
 * Page header for Our Programmes. Uses the shared CommonBanner so the banner
 * matches every other inner page (the bespoke .news-banner CSS is gone).
 */
const ProgramBanner = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  return (
    <CommonBanner
      title={isBn ? "আমাদের কর্মসূচি" : "Our Programmes"}
      subtitle={
        isBn
          ? "স্বাস্থ্য, শিক্ষা, খাদ্য নিরাপত্তা ও সামাজিক অন্তর্ভুক্তির মাধ্যমে সারা দেশে মানুষের সেবা করে জেডআরএফ।"
          : "Serving communities nationwide through health, education, food security and social inclusion."
      }
    />
  );
};

export default ProgramBanner;
