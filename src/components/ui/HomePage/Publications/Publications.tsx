"use client";

import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Container from "@/components/share/Container";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useLanguage } from "@/provider/LanguageProvider";
import PublicationStats from "./PublicationStats";

const PublicationSlider = dynamic(() => import("./PublicationSlider"), {
  ssr: false,
  loading: () => <PublicationSkeleton />,
});

const PublicationSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-64 sm:h-80 md:h-96 bg-gradient-to-r from-[#216740]/20 to-[#FEC909]/20 rounded-2xl md:rounded-3xl"></div>
  </div>
);

const Publication = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <section className="relative py-8 md:py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-white via-[#216740]/5 to-[#FEC909]/5">
      {/* Animated Background Patterns - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-40 w-60 h-60 md:w-80 md:h-80 bg-[#216740]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-40 w-60 h-60 md:w-80 md:h-80 bg-[#FEC909]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-[#216740]/5 to-[#FEC909]/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 px-2">
            <span className="bg-gradient-to-r from-[#216740] via-[#FEC909] to-[#216740] bg-clip-text text-transparent">
              {language === "ENG" ? "Knowledge Hub" : "জ্ঞান কেন্দ্র"}
            </span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            {language === "ENG"
              ? "Explore our collection of inspiring e-books and publications"
              : "আমাদের অনুপ্রেরণাদায়ক ই-বুক এবং প্রকাশনার সংগ্রহ অন্বেষণ করুন"}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-8">
          <div className="w-full lg:w-7/12">
            <PublicationSlider />
          </div>
          <div className="w-full lg:w-5/12 mt-6 lg:mt-0">
            <PublicationStats />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Publication;