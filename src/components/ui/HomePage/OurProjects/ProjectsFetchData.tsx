"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/share/Container";
import SectionHeading from "@/components/share/SectionHeading";
import { Skeleton, SkeletonText, LoadingStatus } from "@/components/share/Skeleton";
import { TProject } from "@/types/type";
import truncateText from "@/utils/truncate";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

interface projectProps {
  projectData: TProject[];
  language: string;
  loading?: boolean;
}

/**
 * Featured projects.
 *
 * A calm three-up card grid replaces the previous auto-playing carousel — easier to
 * scan, keyboard friendly, and far cheaper on the main thread.
 *
 * The section heading renders during loading so the page has a complete structure
 * on first paint (and in the server-rendered HTML).
 */
const ProjectsFetchData: React.FC<projectProps> = ({
  projectData,
  language,
  loading,
}) => {
  const isBn = language === "BNG";

  const sortedProjectData = [...(projectData || [])]
    .sort(
      (a: TProject, b: TProject) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    )
    .slice(0, 3);

  if (!loading && sortedProjectData.length === 0) return null;

  const showSkeleton = loading && sortedProjectData.length === 0;

  return (
    <section className="section-y bg-slate-50" aria-busy={showSkeleton}>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow={isBn ? "আমাদের কাজ" : "What we do"}
            title={isBn ? "আমাদের প্রকল্প" : "Our Projects"}
            subtitle={
              isBn
                ? "দারিদ্র্য বিমোচন, শিক্ষা, স্বাস্থ্য ও আর্থিক ক্ষমতায়নের মাধ্যমে বাংলাদেশের অবহেলিত জনগোষ্ঠীর জীবনমান উন্নয়নে আমরা কাজ করছি।"
                : "Working across Bangladesh to lift neglected communities through poverty alleviation, education, healthcare and financial empowerment."
            }
          />

          <Link
            href="/our-projects"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-[13.5px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            {isBn ? "সব প্রকল্প দেখুন" : "View all projects"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {showSkeleton && (
            <>
              <LoadingStatus label={isBn ? "প্রকল্প লোড হচ্ছে" : "Loading projects"} />
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  aria-hidden="true"
                  className="overflow-hidden rounded-card border border-slate-200 bg-white"
                >
                  <Skeleton className="aspect-[16/10] rounded-none" />
                  <div className="p-3 sm:p-5">
                    <div className="flex gap-2 sm:gap-4">
                      <Skeleton className="h-2.5 sm:h-3 w-10 sm:w-14" />
                      <Skeleton className="h-2.5 sm:h-3 w-14 sm:w-20" />
                    </div>
                    <Skeleton className="mt-3 sm:mt-4 h-3.5 sm:h-4 w-11/12" />
                    <SkeletonText lines={2} className="mt-3 sm:mt-4" />
                  </div>
                </div>
              ))}
            </>
          )}

          {sortedProjectData.map((project) => {
            const image =
              project.bng_Images?.[0] ||
              project.english_Images?.[0] ||
              project.eng_images?.[0];

            const title = isBn ? project.bangla_title : project.english_title;
            const description = isBn
              ? project.bangla_short_description
              : project.english_short_description;

            return (
              <article
                key={project._id}
                className="group surface-card surface-card-hover flex flex-col overflow-hidden"
              >
                <Link
                  href={`/our-projects/${project._id}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
                >
                  {image ? (
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs sm:text-sm text-slate-400">
                      {isBn ? "ছবি নেই" : "No image"}
                    </div>
                  )}

                  {project.category && (
                    <span className="absolute left-2 top-2 sm:left-3 sm:top-3 rounded-md bg-brand-700/95 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                  )}
                </Link>

                <div className="flex flex-1 flex-col p-3 sm:p-5">
                  <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-4 gap-y-1 text-[10.5px] sm:text-[12px] text-slate-500">
                    {project.date && (
                      <span className="inline-flex items-center gap-1 sm:gap-1.5">
                        <CalendarDays className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-500" />
                        {new Date(project.date).getFullYear()}
                      </span>
                    )}
                    {project.location && (
                      <span className="inline-flex items-center gap-1 sm:gap-1.5">
                        <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-500" />
                        {truncateText(project.location, 16)}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 text-[13.5px] sm:text-[16.5px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700 line-clamp-2">
                    <Link href={`/our-projects/${project._id}`}>
                      {truncateText(title, 72)}
                    </Link>
                  </h3>

                  <p className="line-clamp-2 sm:clamp-3 mt-1.5 sm:mt-2 text-[11.5px] sm:text-[13.5px] leading-relaxed text-slate-600">
                    {truncateText(description, 120)}
                  </p>

                  <Link
                    href={`/our-projects/${project._id}`}
                    className="mt-auto inline-flex items-center gap-1 sm:gap-1.5 pt-3 sm:pt-5 text-[11.5px] sm:text-[13px] font-bold text-brand-700 transition-colors hover:text-brand-800"
                  >
                    {isBn ? "বিস্তারিত দেখুন" : "Read project"}
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsFetchData;
