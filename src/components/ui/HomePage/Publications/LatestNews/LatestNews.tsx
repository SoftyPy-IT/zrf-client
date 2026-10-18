"use client";

import React, { useEffect, useMemo, useState } from "react";
import Container from "@/components/share/Container";
import SectionHeading from "@/components/share/SectionHeading";
import { useActivityData } from "@/hooks/useActivityData";
import { useLanguage } from "@/provider/LanguageProvider";
import { TActivity } from "@/types/type";
import { CalendarDays, MessageSquareQuote, ArrowRight } from "lucide-react";
import Link from "next/link";
import FeaturedNewsCard from "./FeaturedNewsCard";
import RegularNewsCard from "./RegularNewsCard";
import Skeleton from "@/components/share/Skeleton";

type Tab = "upcoming" | "message";

const isUpcoming = (category?: string) => {
  if (!category) return false;
  const value = category.trim().toLowerCase();
  return [
    "upcoming programs",
    "upcoming program",
    "upcoming",
    "program",
    "programs",
    "event",
    "events",
  ].includes(value);
};

const isMessage = (category?: string) => {
  if (!category) return false;
  const value = category.trim().toLowerCase();
  return value === "message" || value === "messages" || value === "latest messages";
};

/**
 * Latest updates with an Upcoming Programmes / Messages switch.
 * The two lead items are shown as image-led feature cards, the remainder as
 * horizontal summary cards.
 */
const LatestNews = () => {
  const { activityData, loading, error } = useActivityData();
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const [activeTab, setActiveTab] = useState<Tab>("message");
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () =>
      setVisibleCount(window.innerWidth >= 1024 ? 4 : 2);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredData = useMemo(() => {
    const list = (activityData || []).filter((item: TActivity) =>
      activeTab === "upcoming"
        ? isUpcoming(item.category)
        : isMessage(item.category),
    );

    return [...list].sort(
      (a: TActivity, b: TActivity) =>
        new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime(),
    );
  }, [activityData, activeTab]);

  const featuredNews = filteredData.slice(0, 2);
  const regularNews = filteredData.slice(2, visibleCount);

  const tabs: { key: Tab; labelEn: string; labelBn: string; icon: typeof CalendarDays }[] = [
    {
      key: "upcoming",
      labelEn: "Upcoming Programmes",
      labelBn: "আসন্ন কার্যক্রম",
      icon: CalendarDays,
    },
    {
      key: "message",
      labelEn: "Latest Messages",
      labelBn: "সর্বশেষ বার্তা",
      icon: MessageSquareQuote,
    },
  ];

  return (
    <section className="section-y bg-white">
      <Container>
        <SectionHeading
          eyebrow={isBn ? "সর্বশেষ আপডেট" : "Stay updated"}
          title={isBn ? "সংবাদ ও বার্তা" : "News & Messages"}
          subtitle={
            isBn
              ? "জেডআরএফের সর্বশেষ ঘোষণা, বার্তা ও আসন্ন কার্যক্রম সম্পর্কে অবগত থাকুন।"
              : "Keep up with ZRF announcements, official messages and upcoming programmes."
          }
        />

        {/* Tab switch ------------------------------------------------- */}
        <div className="mt-8 flex justify-center">
          <div
            role="tablist"
            aria-label={isBn ? "বিষয় নির্বাচন" : "Content filter"}
            className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const selected = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveTab(tab.key)}
                  className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-[13px] font-semibold transition-all duration-200 sm:px-5 ${
                    selected
                      ? "bg-white text-brand-700 shadow-sm"
                      : "text-slate-600 hover:text-brand-700"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="hidden sm:inline">
                    {isBn ? tab.labelBn : tab.labelEn}
                  </span>
                  <span className="sm:hidden">
                    {isBn
                      ? tab.key === "upcoming"
                        ? "কার্যক্রম"
                        : "বার্তা"
                      : tab.key === "upcoming"
                        ? "Programmes"
                        : "Messages"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Loading ---------------------------------------------------- */}
        {loading && (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6">
            {[0, 1].map((key) => (
              <Skeleton key={key} className="h-[220px] sm:h-[280px] rounded-panel" />
            ))}
          </div>
        )}

        {error && (
          <p className="mt-10 text-center text-sm text-slate-500">
            {isBn ? "তথ্য লোড করা যায়নি।" : "Unable to load updates right now."}
          </p>
        )}

        {/* Empty ------------------------------------------------------ */}
        {!loading && !error && filteredData.length === 0 && (
          <p className="mt-12 text-center text-sm text-slate-500">
            {isBn
              ? activeTab === "upcoming"
                ? "এই মুহূর্তে কোনো আসন্ন কার্যক্রম নেই।"
                : "এই মুহূর্তে কোনো বার্তা নেই।"
              : activeTab === "upcoming"
                ? "No upcoming programmes at the moment."
                : "No messages at the moment."}
          </p>
        )}

        {/* Feature cards ---------------------------------------------- */}
        {featuredNews.length > 0 && (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6">
            {featuredNews.map((news, index) => (
              <FeaturedNewsCard
                key={news._id}
                news={news}
                idx={index}
                language={language}
                activeTab={activeTab}
              />
            ))}
          </div>
        )}

        {/* Summary cards ---------------------------------------------- */}
        {regularNews.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-6">
            {regularNews.map((news, index) => (
              <RegularNewsCard
                key={news._id}
                news={news}
                idx={index}
                language={language}
                activeTab={activeTab}
              />
            ))}
          </div>
        )}

        {filteredData.length > 0 && (
          <div className="mt-10 flex justify-center">
            <Link
              href={activeTab === "upcoming" ? "/upcoming-programs" : "/message"}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md"
            >
              {isBn ? "সব দেখুন" : "View all"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};

export default LatestNews;
