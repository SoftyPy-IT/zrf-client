"use client";

import React from "react";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import SectionHeading from "@/components/share/SectionHeading";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import RenderContent from "@/components/Common/RenderContent";
import { useLanguage } from "@/provider/LanguageProvider";
import { TWhatWeDo } from "@/types/type";
import { formatDate } from "@/utils/formateDate";
import { stripHtml } from "@/utils/stripHtml";
import RehabilitationSidebar from "./RehabilitationSidebar";

type SingleWhatWeDoProps = {
  whatWedoData: TWhatWeDo;
};

/**
 * Single rehabilitation programme — banner headline, framed hero image, body
 * copy from the CMS and a recent-posts index in the rail, closing with a card
 * deck of further items from the same category.
 */
const SingleRehabilitation = ({ whatWedoData }: SingleWhatWeDoProps) => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const title =
    (isBn ? whatWedoData.bangla_title : whatWedoData.english_title) ||
    whatWedoData.bangla_title ||
    whatWedoData.english_title;

  const description = isBn
    ? stripHtml(whatWedoData?.bangla_description ?? "")
    : stripHtml(whatWedoData?.english_description ?? "");

  const image = isBn
    ? whatWedoData.bng_Images?.[0] || whatWedoData.eng_images?.[0]
    : whatWedoData.eng_images?.[0] || whatWedoData.bng_Images?.[0];

  return (
    <>
      <CommonBanner
        title={title}
        subtitle={
          isBn
            ? whatWedoData.bangla_short_description
            : whatWedoData.english_short_description
        }
      />

      <PageBody>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <article className="lg:col-span-8">
            {image && (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-panel bg-slate-100 ring-1 ring-slate-200">
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 820px"
                  className="object-cover"
                />
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-slate-500">
              {whatWedoData.date && (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays
                    className="h-3.5 w-3.5 text-brand-500"
                    aria-hidden="true"
                  />
                  {formatDate(whatWedoData.date)}
                </span>
              )}

              {whatWedoData.category && (
                <span className="inline-flex items-center rounded-md bg-brand-50 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-brand-700 ring-1 ring-brand-100">
                  {whatWedoData.category}
                </span>
              )}
            </div>

            <div className="mt-6">
              <RenderContent
                content={
                  isBn
                    ? whatWedoData.bangla_description
                    : whatWedoData.english_description
                }
              />
            </div>

            <ShareLink
              shareUrl={shareUrl}
              title={title}
              hashtag={`#${whatWedoData?.bangla_title}`}
              description={description}
            />
          </article>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <RehabilitationSidebar />
            </div>
          </aside>
        </div>

        <section
          className="mt-16 border-t border-slate-200 pt-12"
          aria-label={isBn ? "এই বিভাগ থেকে আরও" : "More from this section"}
        >
          <SectionHeading
            align="left"
            eyebrow={isBn ? "পুনর্বাসন কার্যক্রম" : "Rehabilitation"}
            title={isBn ? "এই বিভাগ থেকে আরও" : "More from this section"}
          />
          <RehabilitationSidebar variant="grid" />
        </section>
      </PageBody>
    </>
  );
};

export default SingleRehabilitation;
