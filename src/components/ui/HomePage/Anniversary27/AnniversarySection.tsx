"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/share/Container";
import SectionHeading from "@/components/share/SectionHeading";
import { useLanguage } from "@/provider/LanguageProvider";
import { BookOpen, Download, ExternalLink, CheckCircle2 } from "lucide-react";

/**
 * 27th anniversary commemorative souvenir.
 *
 * Presented as an official publication record: cover object on the left, editorial
 * summary and document actions on the right.
 */
const AnniversarySection: React.FC = () => {
  const { language } = useLanguage();
  const isEng = language === "ENG";
  const pdfUrl = "/ZRF%20Shoronika%20-%20Final.pdf";

  return (
    <section className="section-y border-y border-slate-200 bg-white">
      <Container>
        <SectionHeading
          eyebrow={
            isEng
              ? "Special commemorative publication · 1999 – 2026"
              : "বিশেষ স্মারক প্রকাশনা · ১৯৯৯ – ২০২৬"
          }
          title={
            isEng
              ? "27th Anniversary of Ziaur Rahman Foundation"
              : "জিয়াউর রহমান ফাউন্ডেশনের ২৭তম প্রতিষ্ঠাবার্ষিকী"
          }
          subtitle={
            isEng
              ? "Official commemorative souvenir celebrating twenty-seven years of public service, healthcare initiatives and community empowerment."
              : "শিক্ষা, স্বাস্থ্য ও মানবিক সেবার ২৭ বছর পূর্তি উপলক্ষ্যে প্রকাশিত ফাউন্ডেশনের বিশেষ স্মারক গ্রন্থ ও স্মরণিকা।"
          }
          className="mx-auto mb-10 max-w-3xl md:mb-14"
        />

        <div className="mx-auto max-w-5xl overflow-hidden rounded-panel border border-slate-200 bg-white shadow-card">
          <div className="flex h-1.5 w-full" aria-hidden="true">
            <span className="h-full flex-1 bg-brand-700" />
            <span className="h-full w-1/3 bg-gold-500" />
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Cover --------------------------------------------------- */}
              <div className="flex flex-col items-center lg:col-span-5">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={
                    isEng
                      ? "Open the full souvenir in a new tab"
                      : "পূর্ণাঙ্গ স্মরণিকাটি নতুন ট্যাবে খুলুন"
                  }
                  className="group relative block w-full max-w-[250px]"
                >
                  <div className="relative overflow-hidden rounded-r-lg border-b-2 border-r-4 border-slate-200 bg-white shadow-panel transition-transform duration-300 ease-editorial group-hover:-translate-y-1.5">
                    <div className="relative aspect-[1/1.3] w-full bg-slate-50">
                      <Image
                        src="/images/anniversary/shoronika-cover.webp"
                        alt={
                          isEng
                            ? "ZRF 27th anniversary souvenir cover"
                            : "জিয়াউর রহমান ফাউন্ডেশন ২৭তম প্রতিষ্ঠাবার্ষিকী স্মরণিকার প্রচ্ছদ"
                        }
                        width={600}
                        height={777}
                        sizes="250px"
                        className="h-full w-full object-cover"
                      />

                      {/* Spine depth */}
                      <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/25 via-black/5 to-transparent" />

                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-brand-950/75 p-4 text-center opacity-0 backdrop-blur-[1px] transition-opacity duration-200 group-hover:opacity-100">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 text-brand-950">
                          <BookOpen className="h-5 w-5" />
                        </span>
                        <span className="flex items-center gap-1.5 text-[13px] font-bold text-white">
                          {isEng ? "Read online" : "অনলাইনে পড়ুন"}
                          <ExternalLink className="h-3.5 w-3.5 text-gold-400" />
                        </span>
                        <span className="text-[11.5px] text-brand-100">
                          {isEng ? "88 pages · full PDF" : "৮৮ পৃষ্ঠা · সম্পূর্ণ পিডিএফ"}
                        </span>
                      </div>
                    </div>

                    <div className="h-1.5 border-t border-slate-200 bg-gradient-to-r from-slate-200 via-slate-100 to-gold-100" />
                  </div>

                  <div className="mx-auto mt-2 h-3 w-4/5 rounded-full bg-slate-900/10 blur-sm" />
                </a>

                <p className="mt-3 flex items-center gap-1.5 text-center text-[12px] text-slate-500">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-600" />
                  {isEng
                    ? "Official publication of the foundation"
                    : "ফাউন্ডেশনের আনুষ্ঠানিক প্রকাশনা"}
                </p>
              </div>

              {/* Summary ------------------------------------------------- */}
              <div className="space-y-5 text-center lg:col-span-7 lg:text-left">
                <div>
                  <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-md bg-brand-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-700">
                    <span>{isEng ? "Official publication" : "বিশেষ স্মরণিকা"}</span>
                    <span className="text-brand-300">•</span>
                    <span>{isEng ? "27th year edition" : "২৭তম বছর সংকলন"}</span>
                  </span>

                  <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
                    {isEng
                      ? "27th Anniversary Special Souvenir (Shoronika)"
                      : "জিয়াউর রহমান ফাউন্ডেশন ২৭তম প্রতিষ্ঠাবার্ষিকী স্মরণিকা"}
                  </h3>

                  <blockquote className="mt-4 rounded-r-md border-l-2 border-gold-500 bg-slate-50/80 py-3 pl-4 pr-3 text-left text-[13.5px] italic leading-relaxed text-slate-600">
                    {isEng
                      ? "“A living testament to twenty-seven years of dedicated service, commitment and humanitarian values in empowering the people of Bangladesh.”"
                      : "“মানব সেবার চিরন্তন দর্শনকে ধারণ করে ১৯৯৯ সালে যাত্রা শুরু করে অতিক্রম করেছে গৌরবের ২৭ বছর। প্রতিষ্ঠাবার্ষিকীর এই স্মরণিকা মানবতার প্রতি অঙ্গীকার ও দায়বদ্ধতার এক জীবন্ত দলিল।”"}
                  </blockquote>
                </div>

                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md"
                  >
                    <BookOpen className="h-4 w-4" />
                    {isEng ? "Read the souvenir" : "স্মরণিকা পড়ুন"}
                    <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                  </a>

                  <a
                    href={pdfUrl}
                    download="ZRF-Shoronika-27th-Anniversary.pdf"
                    className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-gold-500 px-6 py-3.5 text-sm font-bold text-brand-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-md"
                  >
                    <Download className="h-4 w-4" />
                    {isEng ? "Download PDF" : "ডাউনলোড করুন"}
                  </a>
                </div>

                <p className="text-[12px] leading-relaxed text-slate-500">
                  {isEng
                    ? "High-resolution PDF. Opens in any smartphone, tablet or desktop browser."
                    : "উচ্চ রেজোলিউশনের পিডিএফ। যেকোনো স্মার্টফোন, ট্যাবলেট বা কম্পিউটার ব্রাউজারে সরাসরি পড়া যাবে।"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AnniversarySection;
