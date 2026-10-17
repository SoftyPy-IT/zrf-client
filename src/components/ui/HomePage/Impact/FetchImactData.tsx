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
        return (
          <h3 key={index} className="mb-3 mt-6 text-xl font-bold text-slate-900 first:mt-0">
            {element.props.children}
          </h3>
        );
      case "h2":
        return (
          <h3 key={index} className="mb-3 mt-6 text-xl font-bold text-slate-900 first:mt-0">
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
            className="mb-4 list-disc space-y-2 pl-5 text-[14.5px] leading-relaxed text-slate-600"
          >
            {element.props.children}
          </ul>
        );
      case "li":
        return <li key={index}>{element.props.children}</li>;
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
              {data?.images?.[0] ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-panel shadow-panel ring-1 ring-slate-200/70">
                  <Image
                    src={data.images[0]}
                    alt={
                      isBn
                        ? "জিয়াউর রহমান ফাউন্ডেশনের মানবিক কার্যক্রম"
                        : "Ziaur Rahman Foundation humanitarian work"
                    }
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
                </div>
              ) : (
                <Skeleton className="aspect-[4/3] rounded-panel" />
              )}

              {/* Pull quote card */}
              <figure className="relative -mt-10 ml-4 mr-8 rounded-card border border-slate-200 bg-white p-5 shadow-panel sm:ml-8 lg:-mt-12">
                <Quote className="mb-2 h-5 w-5 text-gold-500" />
                <blockquote className="text-[13.5px] font-medium leading-relaxed text-slate-700">
                  {isBn
                    ? "“মানবতার সেবায় নিবেদিত একটি প্রতিষ্ঠান — শিক্ষা, স্বাস্থ্য ও মানবিক মর্যাদার মাধ্যমে মানুষের জীবনে পরিবর্তন আনা আমাদের লক্ষ্য।”"
                    : "“An institution devoted to the service of humanity — changing lives through education, healthcare and dignity.”"}
                </blockquote>
                <figcaption className="mt-3 text-[11.5px] font-bold uppercase tracking-[0.12em] text-brand-700">
                  {isBn ? "জিয়াউর রহমান ফাউন্ডেশন" : "Ziaur Rahman Foundation"}
                </figcaption>
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
                <Link
                  href="/donations"
                  className="mt-2 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md"
                >
                  {isBn ? "সহযোগিতা করুন" : "Support our work"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FetchImactData;
