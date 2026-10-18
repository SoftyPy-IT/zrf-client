"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/share/Container";
import SectionHeading from "@/components/share/SectionHeading";
import { Skeleton, SkeletonText, LoadingStatus } from "@/components/share/Skeleton";
import { TActivity } from "@/types/type";
import truncateText from "@/utils/truncate";
import { formatDate } from "@/utils/formateDate";
import { ArrowRight, CalendarDays } from "lucide-react";
import RecentActivityRightSide from "./RecentActivityRightSide";

interface ActivityProps {
  activityData: TActivity[];
  language: string;
  loading?: boolean;
}

/**
 * Recent field activity. Two lead cards alongside a compact list of further
 * reports — an editorial hierarchy rather than a flat grid of equal cards.
 */
const RecentActivity: React.FC<ActivityProps> = ({
  activityData,
  language,
  loading,
}) => {
  const isBn = language === "BNG";

  const sortedActivityData = (activityData || [])
    .filter((item) => item.category === "Activity")
    .sort(
      (a: TActivity, b: TActivity) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

  const showSkeleton = loading && sortedActivityData.length === 0;

  if (!showSkeleton && sortedActivityData.length === 0) return null;

  const leadCards = sortedActivityData.slice(0, 2);

  return (
    <section className="section-y bg-slate-50" aria-busy={showSkeleton}>
      <Container>
        <SectionHeading
          eyebrow={isBn ? "মাঠপর্যায়ের প্রতিবেদন" : "From the field"}
          title={isBn ? "সাম্প্রতিক কার্যক্রম" : "Recent Activities"}
          subtitle={
            isBn
              ? "দেশজুড়ে পরিচালিত জেডআরএফের সাম্প্রতিক কার্যক্রম ও মানবিক সহায়তার প্রতিবেদন।"
              : "Reports from ZRF relief, awareness and community programmes across the country."
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Lead cards ------------------------------------------------ */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:col-span-2">
            {showSkeleton && (
              <>
                <LoadingStatus
                  label={isBn ? "কার্যক্রম লোড হচ্ছে" : "Loading activities"}
                />
                {[0, 1].map((index) => (
                  <div
                    key={index}
                    aria-hidden="true"
                    className="overflow-hidden rounded-card border border-slate-200 bg-white"
                  >
                    <Skeleton className="aspect-[4/3] rounded-none" />
                    <div className="p-3 sm:p-5">
                      <Skeleton className="h-3.5 sm:h-4 w-11/12" />
                      <SkeletonText lines={2} className="mt-2.5 sm:mt-3" lineClassName="h-2.5 sm:h-3" />
                      <Skeleton className="mt-4 sm:mt-5 h-2.5 sm:h-3 w-20 sm:w-28" />
                    </div>
                  </div>
                ))}
              </>
            )}

            {leadCards.map((data) => {
              const images =
                (isBn ? data.bng_Images : data.eng_images) || data.bng_Images || [];
              const title = isBn ? data.bangla_title : data.english_title;
              const description = isBn
                ? data.bangla_short_description
                : data.english_short_description;

              return (
                <article
                  key={data._id}
                  className="group surface-card surface-card-hover flex flex-col overflow-hidden"
                >
                  <Link
                    href={`/recent-activities-of-zrf/${data._id}`}
                    className="relative block aspect-[4/3] overflow-hidden bg-slate-100"
                  >
                    {images[0] ? (
                      <Image
                        src={images[0]}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 340px"
                        className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs sm:text-sm text-slate-400">
                        {isBn ? "ছবি নেই" : "No image"}
                      </div>
                    )}

                    {data.date && (
                      <span className="absolute left-2 top-2 sm:left-3 sm:top-3 inline-flex items-center gap-1 sm:gap-1.5 rounded-md bg-white/95 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9.5px] sm:text-[11px] font-bold text-slate-700 shadow-sm backdrop-blur-sm">
                        <CalendarDays className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brand-600" />
                        {formatDate(data.date)}
                      </span>
                    )}
                  </Link>

                  <div className="flex flex-1 flex-col p-3 sm:p-5">
                    <h3 className="text-[13px] sm:text-[15.5px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700 line-clamp-2">
                      <Link href={`/recent-activities-of-zrf/${data._id}`}>
                        {truncateText(title, 70)}
                      </Link>
                    </h3>

                    <p className="line-clamp-2 sm:clamp-3 mt-1.5 sm:mt-2 text-[11.5px] sm:text-[13.5px] leading-relaxed text-slate-600">
                      {truncateText(description, 120)}
                    </p>

                    <Link
                      href={`/recent-activities-of-zrf/${data._id}`}
                      className="mt-auto inline-flex items-center gap-1 sm:gap-1.5 pt-3 sm:pt-5 text-[11.5px] sm:text-[13px] font-bold text-brand-700 transition-colors hover:text-brand-800"
                    >
                      {isBn ? "আরও জানুন" : "Read report"}
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Compact list ---------------------------------------------- */}
          <div className="lg:col-span-1">
            <RecentActivityRightSide
              activityFilterData={sortedActivityData}
              language={language}
              loading={showSkeleton}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RecentActivity;
