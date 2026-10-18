"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/share/Container";
import SectionHeading from "@/components/share/SectionHeading";
import { Skeleton, SkeletonText, LoadingStatus } from "@/components/share/Skeleton";
import { overviewProps } from "@/types/type";
import ReactHtmlParser from "react-html-parser";
import {
  CalendarRange,
  Users,
  CheckCircle2,
  HandCoins,
  ArrowRight,
  Quote,
} from "lucide-react";

/** Renders the CMS rich text with the site's editorial type scale. */
const renderContent = (content: string) => {
  if (!content) return null;

  return ReactHtmlParser(content).map((element, index) => {
    switch (element.type) {
      case "h1":
      case "h2":
        return (
          <h3
            key={index}
            className="font-display mb-4 mt-6 text-lg font-bold leading-snug text-slate-900 first:mt-0 sm:text-[21px]"
          >
            {element.props.children}
          </h3>
        );
      case "p":
        return (
          <p key={index} className="mb-4 text-[14.5px] leading-[1.85] text-slate-600">
            {element.props.children}
          </p>
        );
      case "ol":
        return (
          <ol
            key={index}
            className="mb-4 list-decimal space-y-2 pl-5 text-[14.5px] leading-relaxed text-slate-600"
          >
            {element.props.children}
          </ol>
        );
      case "ul":
        return (
          <ul
            key={index}
            className="mb-6 space-y-2.5"
          >
            {element.props.children}
          </ul>
        );
      case "li":
        return (
          <li
            key={index}
            className="group flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 transition-all duration-200 hover:border-brand-300 hover:bg-brand-50/40 hover:shadow-sm sm:p-3.5"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100/80 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <CheckCircle2 className="h-3.5 w-3.5" />
            </span>
            <span className="text-[13.5px] font-medium leading-relaxed text-slate-700 group-hover:text-slate-900 sm:text-[14.5px]">
              {element.props.children}
            </span>
          </li>
        );
      case "video":
        return (
          <video
            key={index}
            className="mb-4 h-auto w-full rounded-card"
            controls
            src={element.props.src}
          />
        );
      case "img":
        return (
          <div key={index} className="mb-4 overflow-hidden rounded-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={element.props.src}
              alt=""
              className="h-auto w-full object-cover"
            />
          </div>
        );
      case "iframe":
        return (
          <div
            key={index}
            className="relative mb-4 w-full overflow-hidden rounded-card pt-[56.25%]"
          >
            <iframe
              className="absolute inset-0 h-full w-full"
              src={element.props.src}
              title={`embed-${index}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      default:
        return null;
    }
  });
};

/**
 * "Our Impact" — a dark institutional statistics band followed by the editorial
 * impact story. Statistics are the real figures returned by the overview endpoint,
 * not hard-coded placeholders.
 *
 * While the figures are in flight the band keeps its full structure and shows
 * placeholder marks, so the page never collapses into a spinner.
 */
const FetchImactData: React.FC<overviewProps> = ({
  overviewData,
  language,
  loading,
}) => {
  const isBn = language === "BNG";
  const data = overviewData?.[0];
  const showSkeleton = !data;

  if (showSkeleton && !loading) return null;

  const stats = [
    {
      icon: CalendarRange,
      value: isBn ? data?.year_count_bangla : data?.year_count_english,
      label: isBn ? data?.year_text_bangla : data?.year_text_english,
    },
    {
      icon: Users,
      value: isBn ? data?.volunteer_count_bangla : data?.volunteer_count_english,
      label: isBn ? data?.volunteer_text_bangla : data?.volunteer_text_english,
    },
    {
      icon: CheckCircle2,
      value: isBn
        ? data?.complete_project_count_bangla
        : data?.complete_project_count_english,
      label: isBn
        ? data?.complete_project_text_bangla
        : data?.complete_project_text_english,
    },
    {
      icon: HandCoins,
      value: isBn ? data?.donation_count_bangla : data?.donation_count_english,
      label: isBn ? data?.donation_text_banlga : data?.donation_text_english,
    },
  ];

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Statistics band                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="relative isolate overflow-hidden bg-brand-900"
        aria-busy={showSkeleton}
      >
        <div className="h-1 w-full bg-gold-rule" />

        <Container>
          <div className="py-12 lg:py-16">
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow={isBn ? "আমাদের প্রভাব" : "Our impact"}
              title={isBn ? "সংখ্যায় জিয়াউর রহমান ফাউন্ডেশন" : "ZRF in numbers"}
            />

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
              {showSkeleton && (
                <LoadingStatus label={isBn ? "পরিসংখ্যান লোড হচ্ছে" : "Loading statistics"} />
              )}
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="border-l-2 border-gold-500/40 pl-4 lg:pl-5"
                  >
                    <Icon
                      className="mb-3 h-5 w-5 text-gold-400"
                      strokeWidth={1.75}
                    />
                    {showSkeleton ? (
                      <>
                        <Skeleton tone="dark" className="h-9 w-20" />
                        <Skeleton tone="dark" className="mt-3 h-3 w-24" />
                      </>
                    ) : (
                      <>
                        <dd className="text-[32px] font-bold leading-none text-white lg:text-[38px]">
                          {stat.value}
                        </dd>
                        <dt className="mt-2 text-[12px] font-medium uppercase leading-snug tracking-[0.08em] text-brand-200">
                          {stat.label}
                        </dt>
                      </>
                    )}
                  </div>
                );
              })}
            </dl>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Impact story                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="section-y bg-white" aria-busy={showSkeleton}>
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image ---------------------------------------------------- */}
            <div className="relative">
              {/* Photo collage */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-900/10">
                <Image
                  src="/work.jpeg"
                  alt={
                    isBn
                      ? "জিয়াউর রহমান ফাউন্ডেশনের মানবিক কার্যক্রম ও মাঠপর্যায়ের চিত্র"
                      : "Ziaur Rahman Foundation humanitarian field operations"
                  }
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 580px"
                  className="object-cover"
                />
              </div>

              {/* Ambient backlight glow */}
              <div
                className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-brand-600/15 via-gold-500/10 to-transparent blur-2xl"
                aria-hidden="true"
              />

              {/* Pull quote card */}
              <figure className="mt-4 rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 shadow-sm sm:mt-5 sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 rounded-lg bg-gold-50 p-2 text-gold-600 ring-1 ring-gold-200/80">
                    <Quote className="h-4 w-4" />
                  </div>
                  <div>
                    <blockquote className="text-[13px] font-medium leading-relaxed text-slate-700 sm:text-[13.5px]">
                      {isBn
                        ? "“মানবতার সেবায় নিবেদিত একটি প্রতিষ্ঠান — শিক্ষা, স্বাস্থ্য ও মানবিক মর্যাদার মাধ্যমে মানুষের জীবনে পরিবর্তন আনা আমাদের লক্ষ্য।”"
                        : "“An institution devoted to the service of humanity — changing lives through education, healthcare and dignity.”"}
                    </blockquote>
                    <figcaption className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-700 sm:text-[11.5px]">
                      {isBn ? "জিয়াউর রহমান ফাউন্ডেশন" : "Ziaur Rahman Foundation"}
                    </figcaption>
                  </div>
                </div>
              </figure>
            </div>

            {/* Copy ----------------------------------------------------- */}
            <div>
              <SectionHeading
                align="left"
                eyebrow={isBn ? "আমাদের গল্প" : "Our story"}
                title={
                  isBn ? "মানবতার সেবায় ২৭ বছর" : "Twenty-seven years of service"
                }
              />

              <div className="mt-5">
                {showSkeleton ? (
                  <>
                    <LoadingStatus
                      label={isBn ? "প্রতিক্রিয়া লোড হচ্ছে" : "Loading impact story"}
                    />
                    <SkeletonText lines={3} />
                    <SkeletonText lines={4} className="mt-5" />
                  </>
                ) : (
                  renderContent(
                    isBn ? data?.description_bangla : data?.description_english,
                  )
                )}
              </div>

              {!showSkeleton && (
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/donations"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md"
                  >
                    {isBn ? "সহযোগিতা করুন" : "Support our work"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/whatwedo/program"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {isBn ? "আমাদের কর্মসূচি" : "Explore programmes"}
                  </Link>
                </div>
              )}

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-100 pt-5 text-[12px] font-semibold text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  {isBn ? "প্রতিষ্ঠিত ১৯৯৯" : "Established 1999"}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                  {isBn ? "কল্যাণমুখী ও অলাভজনক" : "Non-Profit Welfare"}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                  {isBn ? "সারাদেশে সেবা কার্যক্রম" : "Nationwide Reach"}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FetchImactData;
