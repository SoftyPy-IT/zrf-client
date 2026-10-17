"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { CalendarDays, ChevronDown, Search } from "lucide-react";
import PageBody from "@/components/share/PageBody";
import SectionHeading from "@/components/share/SectionHeading";
import RenderContent from "@/components/Common/RenderContent";
import {
  LoadingStatus,
  Skeleton,
  SkeletonText,
} from "@/components/share/Skeleton";
import { TAbout } from "@/types/type";
import { formatDate } from "@/utils/formateDate";

interface AboutProps {
  /** Kept for API compatibility with the `History` wrapper. */
  aboutData: TAbout[];
  language: string;
}

/** The foundation's timeline starts in 2000. */
const START_YEAR = 2000;
const PAGE_SIZE = 4;

/**
 * "Our Journey" — the foundation's history as a vertical timeline.
 *
 * The year-range filter, the `category=History` request and the incremental
 * "see more" behaviour are unchanged; the MUI selects became native selects and
 * the floating-card timeline became a single gold rail with quiet entry cards.
 */
const HistoryFetchData: React.FC<AboutProps> = ({ language }) => {
  const isBn = language === "BNG";

  const [historyData, setHistoryData] = useState<TAbout[]>([]);
  const [filteredData, setFilteredData] = useState<TAbout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const currentYear = new Date().getFullYear().toString();
  const [startYear, setStartYear] = useState<string>(String(START_YEAR));
  const [endYear, setEndYear] = useState<string>(currentYear);

  const category = `History`;

  const fetchHistoryData = useCallback(async () => {
    try {
      setLoading(true);
      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/about?category=${category}`;
      const response = await fetch(url, { cache: "no-store" });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setHistoryData(data.data?.abouts || []);
      setFilteredData(data.data?.abouts || []);
    } catch (err) {
      console.error("Error fetching history data:", err);
      setError("Failed to fetch history data. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchHistoryData();
  }, [fetchHistoryData]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + PAGE_SIZE);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const startDate = new Date(`${startYear}-01-01`);
    const endDate = new Date(`${endYear}-12-31`);

    const filtered = historyData.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });

    setFilteredData(filtered);
    setVisibleCount(PAGE_SIZE);
  };

  const generateYearOptions = () => {
    const years = [];
    for (let year = START_YEAR; year <= Number(currentYear); year++) {
      years.push(year);
    }
    return years;
  };

  if (error) return null;

  const showSkeleton = loading && filteredData.length === 0;
  const visibleEntries = filteredData.slice(0, visibleCount);

  const selectClassName =
    "h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-[13.5px] text-slate-700 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";

  return (
    <PageBody tone="slate">
      <SectionHeading
        eyebrow={isBn ? "আমাদের পথচলা" : "Our journey"}
        title={isBn ? "আমাদের যাত্রা" : "Our Journey"}
        subtitle={
          isBn
            ? "২০০০ সাল থেকে আজ পর্যন্ত জিয়াউর রহমান ফাউন্ডেশনের উল্লেখযোগ্য মাইলফলক।"
            : "Key milestones in the Ziaur Rahman Foundation's journey since 2000."
        }
      />

      {/* Year range filter ------------------------------------------------ */}
      <form
        onSubmit={handleSearch}
        className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row sm:items-end"
        aria-label={isBn ? "ইতিহাসের বছর অনুসন্ধান" : "Search the timeline by year"}
      >
        <div className="flex-1">
          <label
            htmlFor="history-start-year"
            className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wide text-slate-500"
          >
            {isBn ? "শুরুর বছর" : "Start Year"}
          </label>
          <select
            id="history-start-year"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
            className={selectClassName}
          >
            {generateYearOptions().map((year) => (
              <option key={year} value={year.toString()}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label
            htmlFor="history-end-year"
            className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wide text-slate-500"
          >
            {isBn ? "শেষ বছর" : "End Year"}
          </label>
          <select
            id="history-end-year"
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
            className={selectClassName}
          >
            {generateYearOptions().map((year) => (
              <option key={year} value={year.toString()}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          {isBn ? "অনুসন্ধান" : "Search"}
        </button>
      </form>

      {/* Timeline --------------------------------------------------------- */}
      <div className="mt-12" aria-busy={showSkeleton}>
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/50 bg-gold-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-gold-700">
          <span
            className="h-1.5 w-1.5 rounded-full bg-gold-500"
            aria-hidden="true"
          />
          {isBn ? "শুরু" : "Start"}
        </span>

        {showSkeleton ? (
          <ol className="relative ml-2 mt-6 border-l-2 border-gold-500/40 pl-7 sm:pl-9">
            <LoadingStatus
              label={isBn ? "ইতিহাস লোড হচ্ছে" : "Loading history"}
            />
            {[0, 1, 2, 3].map((index) => (
              <li
                key={index}
                aria-hidden="true"
                className="relative pb-8 last:pb-0"
              >
                <span className="absolute -left-[calc(1.75rem+8px)] top-6 h-3.5 w-3.5 rounded-full border-2 border-gold-500/40 bg-white sm:-left-[calc(2.25rem+8px)]" />
                <div className="rounded-card border border-slate-200 bg-white p-5">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="mt-3 h-4 w-2/3" />
                  <SkeletonText
                    lines={2}
                    className="mt-3"
                    lineClassName="h-3"
                  />
                </div>
              </li>
            ))}
          </ol>
        ) : filteredData.length === 0 ? (
          <p className="mt-6 rounded-card border border-slate-200 bg-white p-6 text-center text-[13.5px] text-slate-500">
            {isBn
              ? "এই সময়ের ব্যবধানে কোনো ঘটনা পাওয়া যায়নি। অনুগ্রহ করে অন্য বছর নির্বাচন করুন।"
              : "No entries in this range. Please try a different year range."}
          </p>
        ) : (
          <ol className="relative ml-2 mt-6 border-l-2 border-gold-500/60 pl-7 sm:pl-9">
            {visibleEntries.map((data) => {
              const image = data.images?.[0];
              const title = isBn
                ? data.title_bangla || data.title_english
                : data.title_english || data.title_bangla;
              const description = isBn
                ? data.description_banlga
                : data.description_enlgish;
              const year = data.date
                ? new Date(data.date).getFullYear()
                : null;

              return (
                <li key={data._id} className="relative pb-8 last:pb-0">
                  <span
                    className="absolute -left-[calc(1.75rem+8px)] top-6 h-3.5 w-3.5 rounded-full border-2 border-gold-500 bg-white sm:-left-[calc(2.25rem+8px)]"
                    aria-hidden="true"
                  />

                  <article className="rounded-card border border-slate-200 bg-white p-5 shadow-card transition-colors duration-300 hover:border-brand-200">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      {year && (
                        <span className="text-[13px] font-bold tabular-nums text-brand-700">
                          {year}
                        </span>
                      )}
                      {data.date && (
                        <span className="inline-flex items-center gap-1.5 text-[12px] text-slate-500">
                          <span
                            className="h-1 w-1 rounded-full bg-slate-300"
                            aria-hidden="true"
                          />
                          <CalendarDays
                            className="h-3.5 w-3.5 text-brand-500"
                            aria-hidden="true"
                          />
                          {formatDate(data.date)}
                        </span>
                      )}
                    </div>

                    <div
                      className={
                        image
                          ? "mt-3 grid gap-5 sm:grid-cols-[minmax(0,1fr)_200px] sm:items-start"
                          : "mt-3"
                      }
                    >
                      <div>
                        {title && (
                          <h3 className="text-[16px] font-bold leading-snug text-slate-900">
                            {title}
                          </h3>
                        )}

                        <div className="mt-2 [&_p]:text-[13.5px] [&_p]:leading-relaxed [&_h3]:text-[15px] [&_h4]:text-[14px]">
                          <RenderContent content={description} />
                        </div>
                      </div>

                      {image && (
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100 ring-1 ring-slate-100">
                          <Image
                            src={image}
                            alt={title || formatDate(data.date)}
                            fill
                            sizes="(max-width: 640px) 100vw, 200px"
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        )}

        {!showSkeleton && filteredData.length > visibleCount && (
          <div className="mt-2 flex justify-center">
            <button
              type="button"
              onClick={loadMore}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-[13.5px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              {isBn ? "আরো দেখুন" : "See more"}
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </PageBody>
  );
};

export default HistoryFetchData;
