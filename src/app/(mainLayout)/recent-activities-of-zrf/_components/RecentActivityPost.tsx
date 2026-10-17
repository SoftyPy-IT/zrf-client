import React from "react";
import SectionHeading from "@/components/share/SectionHeading";
import ArticleCard from "@/components/share/ArticleCard";
import { Skeleton, SkeletonText, LoadingStatus } from "@/components/share/Skeleton";
import { TActivity } from "@/types/type";
import truncateText from "@/utils/truncate";

interface activityProps {
  activityData: TActivity[];
  language: string;
  loading?: boolean;
}

/**
 * "More reports" band shown under a single activity — the list the old sidebar
 * carried, now in the shared three-up ArticleCard grid. The first item of the
 * date-sorted list is skipped, matching the previous behaviour.
 */
const RecentActivityPost: React.FC<activityProps> = ({
  activityData,
  language,
  loading,
}) => {
  const isBn = language === "BNG";

  const sortedActivityData = [...(activityData || [])].sort(
    (a: TActivity, b: TActivity) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const relatedActivities = sortedActivityData.slice(1, 4);
  const showSkeleton = Boolean(loading) && sortedActivityData.length === 0;

  if (!showSkeleton && relatedActivities.length === 0) return null;

  return (
    <>
      <SectionHeading
        align="left"
        eyebrow={isBn ? "আরও প্রতিবেদন" : "More reports"}
        title={isBn ? "সাম্প্রতিক কার্যক্রম" : "Recent activities"}
      />

      <div
        className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        aria-busy={showSkeleton}
      >
        {showSkeleton && (
          <>
            <LoadingStatus
              label={isBn ? "কার্যক্রম লোড হচ্ছে" : "Loading activities"}
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
          </>
        )}

        {!showSkeleton &&
          relatedActivities.map((data) => {
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
                excerpt={truncateText(description, 120)}
                image={images[0]}
                date={data.date}
                actionLabel={isBn ? "আরও পড়ুন" : "Read more"}
              />
            );
          })}
      </div>
    </>
  );
};

export default RecentActivityPost;
