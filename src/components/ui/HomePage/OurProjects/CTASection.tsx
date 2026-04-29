"use client";
import React from "react";
import Container from "@/components/share/Container";
import Link from "next/link";

interface CTASectionProps {
  language: string;
}

const CTASection: React.FC<CTASectionProps> = ({ language }) => {
  return (
    <div className="relative py-16 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            {language === "ENG"
              ? "Want to Make a Difference?"
              : "পরিবর্তন আনতে চান?"}
          </h3>
          <p className="text-slate-500 mb-8">
            {language === "ENG"
              ? "Join hands with us to create lasting impact in communities across Bangladesh"
              : "বাংলাদেশ জুড়ে সম্প্রদায়গুলিতে স্থায়ী প্রভাব তৈরি করতে আমাদের সাথে যোগ দিন"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:scale-105">
              {language === "ENG" ? "Become a Partner" : "অংশীদার হোন"}
            </button>
            <Link href='/donations'>
              <button className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-full font-semibold hover:bg-emerald-50 transition-all hover:scale-105">
                {language === "ENG" ? "Donate Now" : "এখন দান করুন"}
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};


export default CTASection;