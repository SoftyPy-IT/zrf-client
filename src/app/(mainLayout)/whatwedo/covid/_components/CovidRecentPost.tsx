"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ArticleCard from "@/components/share/ArticleCard";
import {
  LoadingStatus,
  Skeleton,
  SkeletonText,
} from "@/components/share/Skeleton";
import { TWhatWeDo } from "@/types/type";
import { formatDate } from "@/utils/formateDate";
import truncateText from "@/utils/truncate";

interface CovidProps {
  covidData: TWhatWeDo[];
  language: string;
  loading?: boolean;
  /** "compact" renders the sidebar panel, "grid" the full-width card deck. */
  variant?: "compact" | "grid";
}

const byNewest = (a: TWhatWeDo, b: TWhatWeDo) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

/**
 * Recent COVID-19 items.
 *
 * Rendered either as the compact index panel that sits beside a single article
 * (small thumbnail, two-line clamped title, date) or as a three-up card deck
 * beneath it — same data, two densities.
 */
const CovidRecentPost: React.FC<CovidProps> = ({
  covidData,
  language,
  loading,
  variant = "compact",
}) => {
  const isBn = language === "BNG";
  const sortedData = [...(covidData || [])].sort(byNewest);

  if (variant === "grid") {
    const cards = sortedData.slice(0, 3);

    if (loading && cards.length === 0) {
      return (
        <div
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          aria-busy="true"
        >
          <LoadingStatus
            label={isBn ? "কার্যক্রম লোড হচ্ছে" : "Loading COVID-19 work"}
          />
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              aria-hidden="true"
              className="overflow-hidden rounded-card border border-slate-200 bg-white"
            >
              <Skeleton className="aspect-[16/10] rounded-none" />
              <div className="p-5">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="mt-4 h-4 w-11/12" />
                <SkeletonText lines={2} className="mt-4" />
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (cards.length === 0) return null;

    return (
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((data) => {
          const image = isBn
            ? data.bng_Images?.[0] || data.eng_images?.[0]
            : data.eng_images?.[0] || data.bng_Images?.[0];

          const title =
            (isBn ? data.bangla_title : data.english_title) ||
            data.bangla_title ||
            data.english_title;

          return (
            <ArticleCard
              key={data._id}
              href={`/whatwedo/covid/${data._id}`}
              title={title}
              excerpt={
                isBn
                  ? data.bangla_short_description
                  : data.english_short_description
              }
              image={image}
              date={data.date}
              actionLabel={isBn ? "আরও পড়ুন" : "Read more"}
            />
          );
        })}
      </div>
    );
  }

  const items = sortedData.slice(1, 6);

  return (
    <nav
      aria-label={isBn ? "সাম্প্রতিক পোস্ট" : "Recent posts"}
      className="flex h-full flex-col rounded-panel border border-slate-200 bg-white p-5 shadow-card sm:p-6"
    >
      <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] text-slate-500">
        {isBn ? "সাম্প্রতিক পোস্ট" : "Recent posts"}
      </h3>
      <span
        className="mt-3 block h-[2px] w-10 rounded-full bg-gold-500"
        aria-hidden="true"
      />

      {loading ? (
        <ul
          aria-hidden="true"
          className="mt-4 flex flex-1 flex-col divide-y divide-slate-100"
        >
          {[0, 1, 2, 3].map((index) => (
            <li
              key={index}
              className="flex items-start gap-3.5 py-4 first:pt-2"
            >
              <Skeleton className="h-[62px] w-[62px] shrink-0 rounded-lg" />
              <div className="min-w-0 flex-1 space-y-2">
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-3/4" />
                <Skeleton className="h-3 w-20" />
              </div>
            </li>
          ))}
        </ul>
      ) : items.length === 0 ? (
        <p className="mt-6 text-[13.5px] text-slate-500">
          {isBn
            ? "এই মুহূর্তে আর কোনো পোস্ট নেই।"
            : "No further posts at the moment."}
        </p>
      ) : (
        <ul className="mt-4 flex flex-1 flex-col divide-y divide-slate-100">
          {items.map((data) => {
            const images =
              (isBn ? data.bng_Images : data.eng_images) ||
              data.bng_Images ||
              [];
            const title = isBn ? data.bangla_title : data.english_title;

            return (
              <li key={data._id}>
                <Link
                  href={`/whatwedo/covid/${data._id}`}
                  className="group flex items-start gap-3.5 py-4 first:pt-2"
                >
                  <span className="relative h-[62px] w-[62px] shrink-0 overflow-hidden rounded-lg bg-slate-100">
                    {images[0] ? (
                      <Image
                        src={images[0]}
                        alt={title}
                        fill
                        sizes="62px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : null}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="clamp-2 block text-[13.5px] font-semibold leading-snug text-slate-800 transition-colors group-hover:text-brand-700">
                      {truncateText(title, 62)}
                    </span>
                    {data.date && (
                      <span className="mt-1 block text-[11.5px] font-medium text-slate-400">
                        {formatDate(data.date)}
                      </span>
                    )}
                  </span>

                  <ArrowRight
                    className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-600"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      <Link
        href="/whatwedo/covid"
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md"
      >
        {isBn ? "সব কার্যক্রম দেখুন" : "View all COVID-19 work"}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </nav>
  );
};

export default CovidRecentPost;
