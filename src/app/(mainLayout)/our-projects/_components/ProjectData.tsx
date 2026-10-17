"use client";

import React, { useMemo, useState } from "react";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import ArticleCard from "@/components/share/ArticleCard";
import { Skeleton, SkeletonText, LoadingStatus } from "@/components/share/Skeleton";
import { TProject } from "@/types/type";
import truncateText from "@/utils/truncate";

interface projectProps {
  projectData: TProject[];
  language: string;
  loading?: boolean;
}

/** Pagination step is unchanged from the previous implementation. */
const PAGE_SIZE = 6;

/**
 * Our Projects index.
 *
 * Banner, then a calm three-up card grid built from the shared ArticleCard so
 * the listing matches every other index page. The heading-level skeleton keeps
 * the page structure complete while the API resolves.
 */
const ProjectData: React.FC<projectProps> = ({
  projectData,
  language,
  loading,
}) => {
  const isBn = language === "BNG";
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const sortedProjectData = useMemo(
    () =>
      [...(projectData || [])].sort(
        (a: TProject, b: TProject) =>
          new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    [projectData],
  );

  const visibleProjects = sortedProjectData.slice(0, visibleCount);
  const showSkeleton = Boolean(loading) && sortedProjectData.length === 0;

  return (
    <>
      <CommonBanner
        title={isBn ? "আমাদের প্রকল্প" : "Our Projects"}
        subtitle={
          isBn
            ? "ত্রাণ, শিক্ষা, স্বাস্থ্যসেবা ও জীবিকা সহায়তাসহ সারা দেশে জেডআরএফের চলমান ও সম্পন্ন প্রকল্পসমূহ।"
            : "Ongoing and completed ZRF initiatives across Bangladesh — relief, education, healthcare and livelihood support."
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
                label={isBn ? "প্রকল্প লোড হচ্ছে" : "Loading projects"}
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
            visibleProjects.map((project) => {
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
                  excerpt={truncateText(description, 150)}
                  image={image}
                  date={project.date}
                  badge={project.category || null}
                  actionLabel={isBn ? "বিস্তারিত দেখুন" : "Read the project"}
                />
              );
            })}
        </div>

        {!showSkeleton && visibleProjects.length === 0 && (
          <p className="py-4 text-center text-[14px] text-slate-500">
            {isBn
              ? "এই মুহূর্তে কোনো প্রকল্প নেই।"
              : "No projects to show yet."}
          </p>
        )}

        {!showSkeleton && visibleCount < sortedProjectData.length && (
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

export default ProjectData;
