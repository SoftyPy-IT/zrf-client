"use client";

import React from "react";
import Image from "next/image";
import { CalendarDays, Tag } from "lucide-react";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import RenderContent from "@/components/Common/RenderContent";
import { useLanguage } from "@/provider/LanguageProvider";
import { TWhatWeDo } from "@/types/type";
import { formatDate } from "@/utils/formateDate";
import { stripHtml } from "@/utils/stripHtml";
import truncateText from "@/utils/truncate";
import Sidebar from "./Sidebar";

type SingleWhatWeDoProps = {
  whatWedoData: TWhatWeDo;
};

const SingleWhatwedo = ({ whatWedoData }: SingleWhatWeDoProps) => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const title = isBn ? whatWedoData.bangla_title : whatWedoData.english_title;
  const shortDescription = isBn
    ? whatWedoData.bangla_short_description
    : whatWedoData.english_short_description;
  const content = isBn
    ? whatWedoData.bangla_description
    : whatWedoData.english_description;
  const description = stripHtml(content ?? "");

  const heroImage =
    (isBn ? whatWedoData.bng_Images : whatWedoData.eng_images)?.[0] ||
    (isBn ? whatWedoData.eng_images : whatWedoData.bng_Images)?.[0];

  return (
    <>
      <CommonBanner
        title={title}
        subtitle={truncateText(shortDescription, 180) || undefined}
      />

      <PageBody tight>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <article className="min-w-0 lg:col-span-8">
            {heroImage && (
              <Image
                src={heroImage}
                alt={title}
                width={1200}
                height={760}
                sizes="(max-width: 1024px) 100vw, 800px"
                className="h-auto w-full rounded-panel object-cover ring-1 ring-slate-200"
              />
            )}

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-slate-500">
              {whatWedoData.date && (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-brand-500" />
                  {formatDate(whatWedoData.date)}
                </span>
              )}
              {whatWedoData.category && (
                <span className="inline-flex items-center gap-1.5">
                  <Tag className="h-3.5 w-3.5 text-brand-500" />
                  {whatWedoData.category}
                </span>
              )}
            </div>

            <RenderContent content={content} className="mt-7" />

            <ShareLink
              shareUrl={shareUrl}
              title={title}
              hashtag={`#${whatWedoData?.bangla_title}`}
              description={description}
            />
          </article>

          <aside
            className="min-w-0 lg:col-span-4"
            aria-label={
              isBn ? "সম্পর্কিত শিক্ষা কার্যক্রম" : "Related education programmes"
            }
          >
            <div className="lg:sticky lg:top-24">
              <Sidebar />
            </div>
          </aside>
        </div>
      </PageBody>
    </>
  );
};

export default SingleWhatwedo;
