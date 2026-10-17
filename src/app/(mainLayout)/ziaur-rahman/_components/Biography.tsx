"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/share/SectionHeading";
import RenderContent from "@/components/Common/RenderContent";
import {
  LoadingStatus,
  Skeleton,
  SkeletonText,
} from "@/components/share/Skeleton";
import { TIntroduction } from "@/types/type";
import { stripHtml } from "@/utils/stripHtml";
import truncateText from "@/utils/truncate";

interface introductionProps {
  introductionData: TIntroduction[];
  language: string;
  loading?: boolean;
  handleOpen: (
    englishTitle: string,
    banglaDescription: string,
    banglaTitle: string,
    englishDescription: string,
  ) => void;
}

/** Chapter numbers read in Bangla numerals when the page is in Bangla. */
const toBanglaDigits = (value: string) =>
  value.replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);

/**
 * The biography column.
 *
 * Every era returned by the introduction endpoint becomes its own editorial
 * section — heading, portrait figure, a short excerpt and a link into the full
 * chapter modal. Sections are separated by a gold hairline.
 */
const Biography: React.FC<introductionProps> = ({
  handleOpen,
  introductionData,
  language,
  loading,
}) => {
  const isBn = language === "BNG";
  const chapters = introductionData || [];
  const showSkeleton = Boolean(loading) && chapters.length === 0;

  if (!loading && chapters.length === 0) return null;

  return (
    <div className="max-w-3xl">
      {showSkeleton && (
        <>
          <LoadingStatus
            label={isBn ? "জীবনী লোড হচ্ছে" : "Loading biography"}
          />
          {[0, 1].map((index) => (
            <div
              key={index}
              aria-hidden="true"
              className={
                index > 0
                  ? "mt-12 border-t border-gold-500/30 pt-12 lg:mt-16 lg:pt-16"
                  : undefined
              }
            >
              <Skeleton className="h-3 w-24" />
              <Skeleton className="mt-4 h-6 w-2/3" />
              <Skeleton className="mt-7 aspect-[16/9] w-full rounded-card" />
              <SkeletonText lines={4} className="mt-6" />
            </div>
          ))}
        </>
      )}

      {chapters.map((data, index) => {
        const title =
          (isBn ? data.bangla_title : data.english_title) ||
          data.bangla_title ||
          data.english_title ||
          "";

        const description =
          (isBn ? data.bangla_description : data.english_description) ||
          data.bangla_description ||
          data.english_description ||
          "";

        const image = data.bng_images?.[0] || data.eng_images?.[0];
        const number = String(index + 1).padStart(2, "0");
        const chapterLabel = isBn
          ? `অধ্যায় ${toBanglaDigits(number)}`
          : `Chapter ${number}`;

        return (
          <React.Fragment key={data._id}>
            {index > 0 && (
              <hr className="my-12 border-t border-gold-500/30 lg:my-16" />
            )}

            <article>
              <SectionHeading
                align="left"
                eyebrow={chapterLabel}
                title={title}
              />

              {image && (
                <figure className="relative mt-7 aspect-[4/3] overflow-hidden rounded-card border border-slate-200 bg-slate-100">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 768px"
                    className="object-cover object-top"
                  />
                </figure>
              )}

              <div className="mt-6">
                <RenderContent
                  content={truncateText(stripHtml(description), 420)}
                />

                <button
                  type="button"
                  onClick={() =>
                    handleOpen(
                      data.english_title,
                      data.bangla_description,
                      data.bangla_title,
                      data.english_description,
                    )
                  }
                  className="mt-2 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-[13.5px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  {isBn ? "সম্পূর্ণ অধ্যায় পড়ুন" : "Read the full chapter"}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Biography;
