import React from "react";
import ArticleCard from "@/components/share/ArticleCard";
import PageBody from "@/components/share/PageBody";
import {
  Skeleton,
  SkeletonText,
  LoadingStatus,
} from "@/components/share/Skeleton";
import { TWhatWeDo } from "@/types/type";
import truncateText from "@/utils/truncate";

interface EducationProps {
  educationData: TWhatWeDo[];
  language: string;
  loading?: boolean;
}

/**
 * Education programme listing.
 *
 * A calm three-up card grid keeps the section scannable and keyboard friendly.
 * The page banner is rendered by the parent so the page keeps a complete
 * structure while the programme data resolves.
 */
const Education: React.FC<EducationProps> = ({
  educationData,
  language,
  loading,
}) => {
  const isBn = language === "BNG";

  const programmes = [...(educationData || [])].sort(
    (a: TWhatWeDo, b: TWhatWeDo) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const showSkeleton = Boolean(loading) && programmes.length === 0;

  return (
    <PageBody tone="slate" tight>
      <div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        aria-busy={showSkeleton}
      >
        {showSkeleton && (
          <>
            <LoadingStatus
              label={isBn ? "কার্যক্রম লোড হচ্ছে" : "Loading programmes"}
            />
            {[0, 1, 2].map((index) => (
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
          programmes.map((data) => {
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
                href={`/education/${data._id}`}
                title={title}
                excerpt={truncateText(excerpt, 150)}
                image={image}
                date={data.date}
                actionLabel={isBn ? "বিস্তারিত দেখুন" : "Read more"}
              />
            );
          })}
      </div>
    </PageBody>
  );
};

export default Education;
