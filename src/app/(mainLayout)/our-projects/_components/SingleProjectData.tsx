"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarDays, MapPin, Tag } from "lucide-react";
import Container from "@/components/share/Container";
import PageBody from "@/components/share/PageBody";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import RenderContent from "@/components/Common/RenderContent";
import RecentProjectPost from "./RecentProjectPost";
import { useLanguage } from "@/provider/LanguageProvider";
import { formatDate } from "@/utils/formateDate";
import { stripHtml } from "@/utils/stripHtml";
import { TProject } from "@/types/type";

type SingleProjectProps = {
  singleProjectData: TProject;
};

/**
 * Single project page.
 *
 * Editorial reading order: banner with the project title, a large hero image,
 * a quiet meta row, the rich-text body and the share row — followed by the
 * "recent projects" band. Same data and links as before, new dress.
 */
const SingleProjectData = ({ singleProjectData }: SingleProjectProps) => {
  const { language } = useLanguage();
  const isBn = language === "BNG";
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const title = isBn
    ? singleProjectData?.bangla_title
    : singleProjectData?.english_title;

  const description = stripHtml(
    (isBn
      ? singleProjectData?.bangla_description
      : singleProjectData?.english_description) ?? "",
  );

  const image = isBn
    ? singleProjectData?.bng_Images?.[0] || singleProjectData?.eng_images?.[0]
    : singleProjectData?.eng_images?.[0] || singleProjectData?.bng_Images?.[0];

  const imageAlt =
    (isBn
      ? singleProjectData?.img_tagline_bangla
      : singleProjectData?.img_tagline_english) || title;

  return (
    <>
      <CommonBanner
        title={title || (isBn ? "আমাদের প্রকল্প" : "Our Projects")}
        hideBreadcrumb
      />

      <PageBody tight bleed>
        <Container narrow>
          {image && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-panel bg-slate-100 ring-1 ring-slate-200">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 920px"
                className="object-cover"
              />
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-slate-500">
            {singleProjectData?.date && (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-brand-500" />
                {formatDate(singleProjectData.date)}
              </span>
            )}
            {singleProjectData?.category && (
              <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-50 px-2.5 py-1 text-[11.5px] font-semibold text-brand-700 ring-1 ring-brand-100">
                <Tag className="h-3.5 w-3.5" />
                {singleProjectData.category}
              </span>
            )}
            {singleProjectData?.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-brand-500" />
                {singleProjectData.location}
              </span>
            )}
          </div>

          <div className="mt-8">
            <RenderContent
              content={
                language === "ENG"
                  ? singleProjectData.english_description
                  : singleProjectData.bangla_description
              }
            />
          </div>

          <ShareLink
            shareUrl={shareUrl}
            title={title || ""}
            hashtag={`#${title?.replace(/\s+/g, "")}`}
            description={description}
            imageUrl={image}
            imageAlt={imageAlt}
          />
        </Container>
      </PageBody>

      <RecentProjectPost />
    </>
  );
};

export default SingleProjectData;
