import React from "react";
import SectionHeading from "@/components/share/SectionHeading";
import ArticleCard from "@/components/share/ArticleCard";
import { Skeleton, SkeletonText, LoadingStatus } from "@/components/share/Skeleton";
import { TProject } from "@/types/type";
import truncateText from "@/utils/truncate";

interface projectProps {
  projectData: TProject[];
  language: string;
  loading?: boolean;
}

/**
 * "Recent projects" band shown under a single project — the list the old
 * sidebar carried, now in the shared three-up ArticleCard grid. The first item
 * of the date-sorted list is skipped, matching the previous behaviour.
 */
const RecentPostFetchData: React.FC<projectProps> = ({
  projectData,
  language,
  loading,
}) => {
  const isBn = language === "BNG";

  const sortedProjectData = [...(projectData || [])].sort(
    (a: TProject, b: TProject) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const relatedProjects = sortedProjectData.slice(1, 4);
  const showSkeleton = Boolean(loading) && sortedProjectData.length === 0;

  if (!showSkeleton && relatedProjects.length === 0) return null;

  return (
    <>
      <SectionHeading
        align="left"
        eyebrow={isBn ? "আরও প্রকল্প" : "More projects"}
        title={isBn ? "সাম্প্রতিক প্রকল্প" : "Recent projects"}
      />

      <div
        className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        aria-busy={showSkeleton}
      >
        {showSkeleton && (
          <>
            <LoadingStatus
              label={isBn ? "প্রকল্প লোড হচ্ছে" : "Loading projects"}
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
          relatedProjects.map((project) => {
            const image =
              project.bng_Images?.[0] ||
              project.english_Images?.[0] ||
              project.eng_images?.[0];
            const title = isBn ? project.bangla_title : project.english_title;
            const description = isBn
              ? project.bangla_short_description
              : project.english_short_description;

            return (
              <ArticleCard
                key={project._id}
                href={`/our-projects/${project._id}`}
                title={title}
                excerpt={truncateText(description, 120)}
                image={image}
                date={project.date}
                badge={project.category || null}
                actionLabel={isBn ? "বিস্তারিত দেখুন" : "Read the project"}
              />
            );
          })}
      </div>
    </>
  );
};

export default RecentPostFetchData;
