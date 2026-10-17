"use client";

import React from "react";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { useLanguage } from "@/provider/LanguageProvider";

/**
 * Page header for About Us.
 *
 * Uses the shared `CommonBanner` so the header matches every other inner page;
 * the bespoke banner CSS (`.about-banner`) is gone.
 */
const AboutBanner = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  return (
    <CommonBanner
      title={isBn ? "আমাদের সম্পর্কে" : "About Us"}
      subtitle={
        isBn
          ? "মানবতার সেবায় নিবেদিত একটি প্রতিষ্ঠান — আমাদের লক্ষ্য, মিশন, ভিশন ও যাত্রার গল্প।"
          : "An institution devoted to the service of humanity — our mandate, mission, vision and journey."
      }
    />
  );
};

export default AboutBanner;
