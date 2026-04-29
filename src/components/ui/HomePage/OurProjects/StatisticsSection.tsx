"use client";
import Container from "@/components/share/Container";
import { AttachMoney, CheckCircle, EmojiEvents, VolunteerActivism } from "@mui/icons-material";
import React from "react";

interface StatisticsSectionProps {
  language: string;
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({ language }) => {
  const statistics = [
    {
      numberEn: "26",
      numberBn: "২৬",
      labelEn: "Years of Foundation",
      labelBn: "বছর জয়ন্তী",
      icon: <EmojiEvents />,
    },
    {
      numberEn: "2000+",
      numberBn: "২০০০+",
      labelEn: "Volunteers",
      labelBn: "স্বেচ্ছাসেবক",
      icon: <VolunteerActivism />,
    },
    {
      numberEn: "300+",
      numberBn: "৩০০+",
      labelEn: "Projects Completed",
      labelBn: "সম্পন্ন প্রকল্প",
      icon: <CheckCircle />,
    },
    {
      numberEn: "$1M+",
      numberBn: "১ কোটি+ টাকা",
      labelEn: "Amount of Donation",
      labelBn: "অনুদানের পরিমাণ",
      icon: <AttachMoney />,
    },
  ];

  return (
    <div className="relative mt-10 md:mt-12 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 py-8 md:py-10 overflow-hidden">

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23eab308\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat',
        }}
      ></div>

      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {statistics.map((stat, idx) => (
            <div
              key={idx}
              className="group transform hover:scale-105 transition-all duration-500"
            >
              <div className="text-emerald-400 mb-3 flex justify-center">
                {React.cloneElement(stat.icon, {
                  className: "w-8 h-8 md:w-10 md:h-10",
                })}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {language === "ENG" ? stat.numberEn : stat.numberBn}
              </div>
              <p className="text-emerald-200 text-xs md:text-sm uppercase tracking-wide">
                {language === "ENG" ? stat.labelEn : stat.labelBn}
              </p>
              <div className="w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent mx-auto mt-2 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StatisticsSection;