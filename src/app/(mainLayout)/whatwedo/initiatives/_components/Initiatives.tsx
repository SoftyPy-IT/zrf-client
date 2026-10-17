"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import ArticleCard from "@/components/share/ArticleCard";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import {
  LoadingStatus,
  Skeleton,
  SkeletonText,
} from "@/components/share/Skeleton";
import { TWhatWeDo } from "@/types/type";

interface InitiativeProps {
  initiativeData: TWhatWeDo[];
  language: string;
  loading?: boolean;
}

/** Number of cards revealed per "load more" press. */
const PAGE_SIZE = 6;

/**
 * Initiatives listing — institutional banner followed by a three-up card grid
 * and a load-more control. The banner and skeleton deck stay mounted while the
 * category resolves so the page structure is complete on first paint.
 */
const Initiatives: React.FC<InitiativeProps> = ({
  initiativeData,
  language,
  loading,
}) => {
  const isBn = language === "BNG";
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const sortedInitiativeData = [...(initiativeData || [])].sort(
    (a: TWhatWeDo, b: TWhatWeDo) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const showSkeleton = Boolean(loading) && sortedInitiativeData.length === 0;
  const visibleData = sortedInitiativeData.slice(0, visibleCount);

  return (
    <>
      <CommonBanner
        title={isBn ? "আমাদের উদ্যোগ" : "Our Initiatives"}
        subtitle={
          isBn
            ? "ফাউন্ডেশনের বিশেষ সামাজিক উদ্যোগ, যা সারা বাংলাদেশের জেলায় আমাদের কাজ পৌঁছে দেয়।"
            : "Special social programmes and community initiatives that carry the foundation's work into districts across Bangladesh."
        }
      />

      <PageBody>
        {showSkeleton && (
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            aria-busy="true"
          >
            <LoadingStatus
              label={isBn ? "উদ্যোগ লোড হচ্ছে" : "Loading initiatives"}
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
                </div>
              </div>
            ))}
          </div>
        )}

        {!showSkeleton && sortedInitiativeData.length === 0 && (
          <p className="py-8 text-center text-[14.5px] text-slate-500">
            {isBn
              ? "এই মুহূর্তে কোনো উদ্যোগ প্রকাশিত হয়নি।"
              : "No initiatives are published at the moment."}
          </p>
        )}

        {!showSkeleton && visibleData.length > 0 && (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleData.map((data) => {
                const image = isBn
                  ? data.bng_Images?.[0] || data.eng_images?.[0]
                  : data.eng_images?.[0] || data.bng_Images?.[0];

                const title =
                  (isBn ? data.bangla_title : data.english_title) ||
                  data.bangla_title ||
                  data.english_title;

                const excerpt = isBn
                  ? data.bangla_short_description
                  : data.english_short_description;

                return (
                  <ArticleCard
                    key={data._id}
                    href={`/whatwedo/initiatives/${data._id}`}
                    title={title}
                    excerpt={excerpt}
                    image={image}
                    date={data.date}
                    actionLabel={isBn ? "আরও পড়ুন" : "Read more"}
                  />
                );
              })}
            </div>

            {visibleCount < sortedInitiativeData.length && (
              <div className="mt-12 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                  {isBn ? "আরও লোড করুন" : "Load more"}
                </button>
              </div>
            )}
          </>
        )}
      </PageBody>
    </>
  );
};

export default Initiatives;
