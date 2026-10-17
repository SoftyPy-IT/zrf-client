"use client";

import React, { useState } from "react";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import ArticleCard from "@/components/share/ArticleCard";
import { Skeleton, SkeletonText, LoadingStatus } from "@/components/share/Skeleton";
import { TActivity } from "@/types/type";
import truncateText from "@/utils/truncate";
import { useLanguage } from "@/provider/LanguageProvider";
import { useActivityData } from "@/hooks/useActivityData";

/** Pagination step is unchanged from the previous implementation. */
const PAGE_SIZE = 6;

/**
 * Recent Activities index.
 *
 * Same hook, category filter and load-more behaviour as before, presented as
 * the shared three-up ArticleCard grid under the institutional banner.
 */
const ActivityFetchData = () => {
  const { activityData, loading, error } = useActivityData();
  const { language } = useLanguage();
  const isBn = language === "BNG";
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const sortedActivityData = [...(activityData || [])]
    .filter((activity) => activity.category === "Activity")
    .sort(
      (a: TActivity, b: TActivity) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

  const visibleActivities = sortedActivityData.slice(0, visibleCount);
  const showSkeleton = loading && sortedActivityData.length === 0;

  if (error) return null;

  return (
    <>
      <CommonBanner
        title={isBn ? "জেডআরএফ এর সাম্প্রতিক কার্যক্রম" : "Recent Activities of ZRF"}
        subtitle={
          isBn
            ? "সারা দেশে জেডআরএফ দলের মাঠপর্যায়ের প্রতিবেদন ও মানবিক সহায়তার খবর।"
            : "Field reports and humanitarian response from ZRF teams across Bangladesh."
        }
      />

      <PageBody tight>
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          aria-busy={showSkeleton}
        >
          {showSkeleton && (
            <>
              <LoadingStatus
                label={isBn ? "কার্যক্রম লোড হচ্ছে" : "Loading activities"}
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
                    <Skeleton className="mt-4 h-4 w-11/12" />
                    <SkeletonText lines={3} className="mt-4" />
                    <Skeleton className="mt-5 h-3 w-28" />
                  </div>
                </div>
              ))}
            </>
          )}

          {!showSkeleton &&
            visibleActivities.map((data) => {
              const images =
                (isBn ? data.bng_Images : data.eng_images) ||
                data.bng_Images ||
                [];
              const title = isBn ? data.bangla_title : data.english_title;
              const description = isBn
                ? data.bangla_short_description
                : data.english_short_description;

              return (
                <ArticleCard
                  key={data._id}
                  href={`/recent-activities-of-zrf/${data._id}`}
                  title={title}
                  excerpt={truncateText(description, 150)}
                  image={images[0]}
                  date={data.date}
                  actionLabel={isBn ? "আরও পড়ুন" : "Read more"}
                />
              );
            })}
        </div>

        {!showSkeleton && visibleActivities.length === 0 && (
          <p className="py-4 text-center text-[14px] text-slate-500">
            {isBn
              ? "এই মুহূর্তে কোনো কার্যক্রম নেই।"
              : "No activities to show yet."}
          </p>
        )}

        {!showSkeleton && visibleCount < sortedActivityData.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-[13.5px] font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              {isBn ? "আরো লোড" : "Load more"}
            </button>
          </div>
        )}
      </PageBody>
    </>
  );
};

export default ActivityFetchData;
