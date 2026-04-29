"use client";

import React from "react";
import { motion } from "framer-motion";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { useLanguage } from "@/provider/LanguageProvider";

const PublicationStats = () => {
  const { language } = useLanguage();
  
  const stats = [
    {
      icon: <MenuBookIcon />,
      labelEn: "E-Books Available",
      labelBn: "ই-বুক উপলব্ধ",
      value: "150+",
      color: "#216740",
    },
    {
      icon: <SchoolIcon />,
      labelEn: "Active Readers",
      labelBn: "সক্রিয় পাঠক",
      value: "10K+",
      color: "#FEC909",
    },
    {
      icon: <EmojiObjectsIcon />,
      labelEn: "Topics Covered",
      labelBn: "বিষয় কভার করা হয়েছে",
      value: "25+",
      color: "#216740",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="space-y-4 md:space-y-6"
    >
      {/* Quick Stats Card */}
      <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl border border-gray-100">
        <h3 
          className="text-xl sm:text-2xl md:text-2xl font-bold mb-3 md:mb-4" 
          style={{ color: "#216740" }}
        >
          {language === "ENG" ? "Quick Stats" : "দ্রুত পরিসংখ্যান"}
        </h3>
        <div className="space-y-3 md:space-y-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, x: 5 }}
              className="p-3 sm:p-4 rounded-lg md:rounded-xl transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${stat.color}10 0%, ${stat.color === "#216740" ? "#FEC909" : "#216740"}10 100%)`,
                borderLeft: `3px solid ${stat.color}`,
              }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div 
                  className="text-base sm:text-lg md:text-xl" 
                  style={{ color: stat.color }}
                >
                  {stat.icon}
                </div>
                <div>
                  <p
                    className="text-xl sm:text-2xl md:text-2xl font-bold"
                    style={{ color: "#216740" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {language === "ENG" ? stat.labelEn : stat.labelBn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Publication Card */}
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-gradient-to-br from-[#216740] to-[#216740]/80 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl"
      >
        <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1 md:mb-2">
          {language === "ENG" ? "Featured Publication" : "বিশেষ প্রকাশনা"}
        </h3>
        <p className="text-white/80 text-xs sm:text-sm mb-3 md:mb-4 leading-relaxed">
          {language === "ENG"
            ? "Empowering Communities Through Knowledge"
            : "জ্ঞানের মাধ্যমে সম্প্রদায়কে ক্ষমতায়ন"}
        </p>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-sm sm:text-base" style={{ color: "#FEC909" }}>
                ★
              </span>
            ))}
          </div>
          <span className="text-white/70 text-[10px] sm:text-xs">
            {language === "ENG" ? "5.0 Rating" : "৫.০ রেটিং"}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PublicationStats;