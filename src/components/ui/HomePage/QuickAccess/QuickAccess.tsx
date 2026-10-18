"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/share/Container";
import { useLanguage } from "@/provider/LanguageProvider";
import { cn } from "@/utils/cn";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

const items = [
  {
    href: "/our-projects",
    icon: VolunteerActivismOutlinedIcon,
    titleEn: "Our Projects",
    titleBn: "আমাদের প্রকল্প",
    textEn: "Programmes delivering lasting change",
    textBn: "টেকসই পরিবর্তনের কর্মসূচি",
  },
  {
    href: "/education",
    icon: SchoolOutlinedIcon,
    titleEn: "Education",
    titleBn: "শিক্ষা কার্যক্রম",
    textEn: "Scholarships and learning support",
    textBn: "বৃত্তি ও শিক্ষা সহায়তা",
  },
  {
    href: "/health-services",
    icon: LocalHospitalOutlinedIcon,
    titleEn: "Health Services",
    titleBn: "স্বাস্থ্য সেবা",
    textEn: "Free medical camps and treatment",
    textBn: "বিনামূল্যে চিকিৎসা সেবা",
  },
  {
    href: "/volunteer",
    icon: GroupsOutlinedIcon,
    titleEn: "Get Involved",
    titleBn: "সম্পৃক্ত হোন",
    textEn: "Volunteer with our teams",
    textBn: "আমাদের সাথে কাজ করুন",
  },
];

/**
 * Four-up shortcut strip directly beneath the hero.
 * Shows 2 items per row on mobile and tablet (2x2 grid), expanding to 4 across on desktop.
 */
const QuickAccess = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  return (
    <section className="border-b border-slate-200 bg-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex flex-col justify-between p-3.5 transition-colors hover:bg-brand-50/60 sm:p-4.5 md:p-5 lg:flex-row lg:items-center lg:gap-4 lg:px-6 lg:py-5",
                  index === 0 && "border-r border-b border-slate-200 lg:border-b-0",
                  index === 1 && "border-b border-slate-200 lg:border-r lg:border-b-0",
                  index === 2 && "border-r border-slate-200 lg:border-r lg:border-b-0",
                  index === 3 && "",
                )}
              >
                <div className="flex w-full items-center justify-between lg:w-auto">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600 sm:h-11 sm:w-11">
                    <Icon sx={{ fontSize: 22 }} />
                  </span>

                  <ChevronRightIcon
                    sx={{ fontSize: 18 }}
                    className="shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-600 lg:hidden"
                  />
                </div>

                <span className="mt-2.5 min-w-0 flex-1 lg:mt-0">
                  <span className="block font-display text-[13.5px] font-bold text-slate-900 transition-colors group-hover:text-brand-700 sm:text-[14.5px]">
                    {isBn ? item.titleBn : item.titleEn}
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-snug text-slate-500 line-clamp-2 sm:text-[12px]">
                    {isBn ? item.textBn : item.textEn}
                  </span>
                </span>

                <ChevronRightIcon
                  sx={{ fontSize: 18 }}
                  className="hidden shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-600 lg:block"
                />
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default QuickAccess;
