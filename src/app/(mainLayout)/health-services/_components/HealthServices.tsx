"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ArticleCard from "@/components/share/ArticleCard";
import PageBody from "@/components/share/PageBody";
import {
  Skeleton,
  SkeletonText,
  LoadingStatus,
} from "@/components/share/Skeleton";
import { TWhatWeDo } from "@/types/type";
import truncateText from "@/utils/truncate";

interface HealthServicesProps {
  healthServicesData: TWhatWeDo[];
  language: string;
  loading?: boolean;
}

/**
 * Health service listing.
 *
 * Three-up card grid with progressive disclosure — the first six services are
 * rendered and the rest arrive six at a time so the page stays light. The page
 * banner is rendered by the parent while this data resolves.
 */
const HealthServices: React.FC<HealthServicesProps> = ({
  healthServicesData,
  language,
  loading,
}) => {
  const isBn = language === "BNG";

  const [visibleCount, setVisibleCount] = useState(6);
  const loadMore = () => setVisibleCount((prevCount) => prevCount + 6);

  const services = [...(healthServicesData || [])].sort(
    (a: TWhatWeDo, b: TWhatWeDo) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const visibleServices = services.slice(0, visibleCount);
  const hasMore = visibleCount < services.length;
  const showSkeleton = Boolean(loading) && services.length === 0;

  return (
    <PageBody tone="slate" tight>
      <div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        aria-busy={showSkeleton}
      >
        {showSkeleton && (
          <>
            <LoadingStatus
              label={isBn ? "স্বাস্থ্য সেবা লোড হচ্ছে" : "Loading health services"}
            />
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                aria-hidden="true"
                className="overflow-hidden rounded-card border border-slate-200 bg-white"
              >
                <Skeleton className="aspect-[16/10] rounded-none" />
                <div className="p-5">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="mt-4 h-4 w-11/12" />
                  <SkeletonText lines={3} className="mt-4" />
                </div>
              </div>
            ))}
          </>
        )}

        {!showSkeleton &&
          visibleServices.map((data) => {
            const image =
              (isBn ? data.bng_Images : data.eng_images)?.[0] ||
              (isBn ? data.eng_images : data.bng_Images)?.[0];
            const title = isBn ? data.bangla_title : data.english_title;
            const excerpt = isBn
              ? data.bangla_short_description
              : data.english_short_description;

            return (
              <ArticleCard
                key={data._id}
                href={`/health-services/${data._id}`}
                title={title}
                excerpt={truncateText(excerpt, 150)}
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
            onClick={loadMore}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 ease-editorial hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            {isBn ? "আরো লোড" : "Load more"}
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      )}
    </PageBody>
  );
};

export default HealthServices;
