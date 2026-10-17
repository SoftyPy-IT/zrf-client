"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/share/Container";
import { useLanguage } from "@/provider/LanguageProvider";
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
 * Four-up shortcut strip directly beneath the hero. Mirrors the "quick access"
 * pattern used by government portals so the most-requested sections are always one
 * click from the top of the page.
 */
const QuickAccess = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  return (
    <section className="border-b border-slate-200 bg-white">
      <Container>
        <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-4 px-1 py-5 transition-colors hover:bg-brand-50/60 sm:px-5 lg:px-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                  <Icon sx={{ fontSize: 22 }} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[14px] font-bold text-slate-900 transition-colors group-hover:text-brand-700">
                    {isBn ? item.titleBn : item.titleEn}
                  </span>
                  <span className="mt-0.5 block text-[12px] leading-snug text-slate-500">
                    {isBn ? item.textBn : item.textEn}
                  </span>
                </span>

                <ChevronRightIcon
                  sx={{ fontSize: 18 }}
                  className="shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-600"
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
