"use client";

import React from "react";
import Container from "@/components/share/Container";
import SectionHeading from "@/components/share/SectionHeading";
import { useLanguage } from "@/provider/LanguageProvider";
import dynamic from "next/dynamic";
import Skeleton from "@/components/share/Skeleton";

const PublicationSlider = dynamic(() => import("./PublicationSlider"), {
  ssr: false,
  loading: () => (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-3 lg:grid-cols-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} className="aspect-[3/4] rounded-card" />
      ))}
    </div>
  ),
});

/** Knowledge hub — the foundation's published books and reports. */
const Publications = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  return (
    <section className="section-y bg-white">
      <Container>
        <SectionHeading
          eyebrow={isBn ? "প্রকাশনা" : "Publications"}
          title={isBn ? "জ্ঞানকেন্দ্র" : "Knowledge Hub"}
          subtitle={
            isBn
              ? "ফাউন্ডেশনের প্রকাশিত ই-বুক, প্রতিবেদন ও স্মারকগ্রন্থের সংগ্রহ।"
              : "Explore the foundation's e-books, reports and commemorative publications."
          }
        />

        <div className="mt-10">
          <PublicationSlider />
        </div>
      </Container>
    </section>
  );
};

export default Publications;
