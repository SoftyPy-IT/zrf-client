"use client";

import Container from "@/components/share/Container";
import { useActivityData } from "@/hooks/useActivityData";
import { useLanguage } from "@/provider/LanguageProvider";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import RegularNewsCard from "./RegularNewsCard";
import FeaturedNewsCard from "./FeaturedNewsCard";
import { TActivity } from "@/types/type";
import BNPButton from "@/components/Button";


const LatestNews = () => {
  const { activityData, loading, error } = useActivityData();
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"upcoming" | "message">("message");
  const [filteredData, setFilteredData] = useState<TActivity[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 4 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (activityData) {
      const filtered = activityData.filter(
        (news: TActivity) =>
          news.category?.trim().toLowerCase() ===
          (activeTab === "upcoming" ? "upcoming programs" : "message"),
      );
      setFilteredData(
        [...filtered].sort(
          (a: TActivity, b: TActivity) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        ),
      );
    }
  }, [activityData, activeTab]);

  if (error) return <h2>Something went wrong!</h2>;
  if (loading) return <NewsSkeleton />;

  const featuredNews = filteredData.slice(0, 2);
  const regularNews = filteredData.slice(2, visibleCount);

  return (
    <section className="relative  py-10 md:py-12 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#216740]/10 to-[#FEC909]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-[#FEC909]/10 to-[#216740]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#216740]/5 to-[#FEC909]/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23216740' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <Container className="relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              {language === "ENG" ? "Latest" : "সর্বশেষ"}
            </span>{" "}
            <span className="bg-gradient-to-r from-[#216740] to-[#FEC909] bg-clip-text text-transparent">
              {language === "ENG" ? "News" : "সংবাদ"}
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-[#216740] to-[#FEC909] mx-auto rounded-full mb-2" />

        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-6 md:mb-12 px-3 sm:px-0 w-[200px] mx-auto md:w-auto"
        >
          <div className="relative p-0.5 sm:p-1 bg-white rounded-full shadow-2xl border border-gray-100 w-full sm:w-auto max-w-[95%] sm:max-w-none">
            <div className="flex gap-0.5 sm:gap-1 md:gap-2">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`relative px-2.5 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold transition-all duration-500 overflow-hidden group text-xs sm:text-sm md:text-base ${activeTab === "upcoming"
                  ? "text-white"
                  : "text-gray-600 hover:text-[#216740]"
                  }`}
              >
                {activeTab === "upcoming" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#216740] to-[#FEC909] rounded-full"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                  <Calendar className="w-3 h-3 sm:w-3.5 md:w-4 sm:h-3.5 md:h-4" />
                  <span className="hidden sm:inline">
                    {language === "ENG" ? "Upcoming Programs" : "আসন্ন প্রোগ্রাম"}
                  </span>
                  <span className="sm:hidden">
                    {language === "ENG" ? "Programs" : "প্রোগ্রাম"}
                  </span>
                </span>
              </button>
              <button
                onClick={() => setActiveTab("message")}
                className={`relative px-2.5 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold transition-all duration-500 overflow-hidden group text-xs sm:text-sm md:text-base ${activeTab === "message"
                  ? "text-white"
                  : "text-gray-600 hover:text-[#216740]"
                  }`}
              >
                {activeTab === "message" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#216740] to-[#FEC909] rounded-full"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                  <MessageCircle className="w-3 h-3 sm:w-3.5 md:w-4 sm:h-3.5 md:h-4" />
                  <span className="hidden sm:inline">
                    {language === "ENG" ? "Latest Messages" : "সর্বশেষ বার্তা"}
                  </span>
                  <span className="sm:hidden">
                    {language === "ENG" ? "Messages" : "বার্তা"}
                  </span>
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Featured News Cards (Hero Style) */}
        {featuredNews.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-2 md:gap-x-4 mb-5">
            {featuredNews.map((news, idx) => (
              <FeaturedNewsCard
                key={news._id}
                news={news}
                idx={idx}
                language={language}
                activeTab={activeTab}
                onHover={setHoveredCard}
                isHovered={hoveredCard === idx}
              />
            ))}
          </div>
        )}


        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 "
          >
            {regularNews.map((news, idx) => (
              <RegularNewsCard
                key={news._id}
                news={news}
                idx={idx}
                language={language}
                activeTab={activeTab}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredData.length > visibleCount && (
          <div className="flex justify-end  mt-0 md:mt-5">
            <BNPButton
              href={activeTab === "upcoming" ? "/upcoming-programs" : "/message"}
              language={language}
              variant="primary"
              size="md"
              fullWidth={false}
              showIcon={true}
              iconPosition="right"

            >
              {language === "ENG" ? "View All" : "সব দেখুন"}
            </BNPButton>
          </div>
        )}

      </Container>

    </section>
  );
};

const NewsSkeleton = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50">
    <div className="text-center">
      <div className="relative w-24 h-24 mx-auto mb-6">
        <div className="absolute inset-0 border-4 border-[#216740]/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-[#FEC909] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-gray-600 animate-pulse">Loading latest updates...</p>
    </div>
  </div>
);

export default LatestNews;