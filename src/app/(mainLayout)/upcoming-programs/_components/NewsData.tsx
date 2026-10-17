"use client";

import React, { useState } from "react";
import ArticleCard from "@/components/share/ArticleCard";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import {
  LoadingStatus,
  Skeleton,
  SkeletonText,
} from "@/components/share/Skeleton";
import { TActivity } from "@/types/type";
import { stripHtml } from "@/utils/stripHtml";
import truncateText from "@/utils/truncate";
import { ChevronDown } from "lucide-react";

interface activityProps {
  newsData: TActivity[];
  language: string;
  /** Shows the skeleton grid while the feed is being fetched. */
  loading?: boolean;
}

/** Number of programmes revealed on each "load more" press. */
const PAGE_SIZE = 6;

/**
 * Upcoming programmes index body.
 *
 * A calm three-up grid of `ArticleCard`s replaces the old hand-rolled cards —
 * identical geometry to every other listing on the site — with a plain
 * outline "load more" control that reveals the next six items.
 */
const NewsData: React.FC<activityProps> = ({ newsData, language, loading }) => {
  const isBn = language === "BNG";
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const sortedNewsData = [...(newsData || [])].sort(
    (a: TActivity, b: TActivity) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const visibleNews = sortedNewsData.slice(0, visibleCount);
  const hasMore = visibleCount < sortedNewsData.length;
  const showSkeleton = loading && sortedNewsData.length === 0;

  return (
    <>
      <CommonBanner
        title={isBn ? "আসন্ন কার্যক্রম" : "Upcoming Programmes"}
        subtitle={
          isBn
            ? "জিয়াউর রহমান ফাউন্ডেশনের আগামী কার্যক্রম, অনুষ্ঠান ও আয়োজনের সময়সূচি।"
            : "Programmes, events and activities scheduled by the Ziaur Rahman Foundation."
        }
      />

      <PageBody tone="slate">
        {showSkeleton ? (
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            aria-busy="true"
          >
            <LoadingStatus
              label={isBn ? "কার্যক্রম লোড হচ্ছে" : "Loading programmes"}
            />
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                aria-hidden="true"
                className="overflow-hidden rounded-card border border-slate-200 bg-white"
              >
                <Skeleton className="aspect-[16/10] rounded-none" />
                <div className="p-5">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="mt-3 h-4 w-11/12" />
                  <SkeletonText lines={3} className="mt-3" lineClassName="h-3" />
                </div>
              </div>
            ))}
          </div>
        ) : sortedNewsData.length === 0 ? (
          <p className="py-16 text-center text-sm text-slate-500">
            {isBn
              ? "এই মুহূর্তে কোনো আসন্ন কার্যক্রম পাওয়া যায়নি।"
              : "No upcoming programmes found at the moment."}
          </p>
        ) : (
          <>
            <p className="text-[13px] font-medium text-slate-500">
              {isBn
                ? `মোট ${sortedNewsData.length}টি কার্যক্রম`
                : `${sortedNewsData.length} upcoming programmes`}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleNews.map((data) => {
                const image =
                  (isBn ? data.bng_Images?.[0] : data.eng_images?.[0]) ||
                  data.eng_images?.[0] ||
                  data.bng_Images?.[0] ||
                  null;

                const title =
                  (isBn ? data.bangla_title : data.english_title) ||
                  data.bangla_title ||
                  data.english_title ||
                  "";

                const excerpt = isBn
                  ? data.bangla_short_description || data.bangla_description
                  : data.english_short_description || data.english_description;

                return (
                  <ArticleCard
                    key={data._id}
                    href={`/upcoming-programs/${data._id}`}
                    title={truncateText(title, 80)}
                    excerpt={truncateText(stripHtml(excerpt || ""), 130)}
                    image={image}
                    date={data.date}
                    actionLabel={isBn ? "আরও পড়ুন" : "Read more"}
                  />
                );
              })}
            </div>

            {hasMore && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-[13.5px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  {isBn ? "আরও লোড করুন" : "Load more"}
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </>
        )}
      </PageBody>
    </>
  );
};

export default NewsData;
