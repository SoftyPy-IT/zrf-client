"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarDays, Tag } from "lucide-react";
import Container from "@/components/share/Container";
import PageBody from "@/components/share/PageBody";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import RenderContent from "@/components/Common/RenderContent";
import ActivitySidebar from "./ActivitySidebar";
import { useLanguage } from "@/provider/LanguageProvider";
import { formatDate } from "@/utils/formateDate";
import { stripHtml } from "@/utils/stripHtml";
import { TActivity } from "@/types/type";

type SingleActivityProps = {
  singleActivityData: TActivity;
  initialLanguage?: string;
};

/**
 * Single activity report.
 *
 * Editorial reading order: banner with the report title, a large hero image,
 * a quiet meta row, the rich-text body and the share row — followed by the
 * "more reports" band. The server language cookie still syncs into the
 * provider before first paint to avoid a hydration mismatch.
 */
const SingleActivity = ({
  singleActivityData,
  initialLanguage = "ENG",
}: SingleActivityProps) => {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  // Sync client language with the server language and capture the share URL.
  useEffect(() => {
    if (initialLanguage) {
      setLanguage(initialLanguage === "BNG" ? "BNG" : "ENG");
    }
    setShareUrl(window.location.href);
    setMounted(true);
  }, [initialLanguage, setLanguage]);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const isEnglish = language === "ENG";

  const title = isEnglish
    ? singleActivityData.english_title
    : singleActivityData.bangla_title;

  const description = isEnglish
    ? stripHtml(singleActivityData.english_short_description ?? "")
    : stripHtml(singleActivityData.bangla_short_description ?? "");

  const hashtag = isEnglish
    ? `#${singleActivityData.english_title?.replace(/\s+/g, "")}`
    : `#${singleActivityData.bangla_title?.replace(/\s+/g, "")}`;

  // Use language-specific images, falling back to the other set when empty
  const image = isEnglish
    ? singleActivityData.eng_images?.[0] || singleActivityData.bng_Images?.[0]
    : singleActivityData.bng_Images?.[0] || singleActivityData.eng_images?.[0];

  // Use img_tagline for image alt text
  const imageAlt =
    (isEnglish
      ? singleActivityData.img_tagline_english
      : singleActivityData.img_tagline_bangla) || title;

  return (
    <>
      <CommonBanner title={title} hideBreadcrumb />

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
            {singleActivityData.date && (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-brand-500" />
                {formatDate(singleActivityData.date)}
              </span>
            )}
            {singleActivityData.category && (
              <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-50 px-2.5 py-1 text-[11.5px] font-semibold text-brand-700 ring-1 ring-brand-100">
                <Tag className="h-3.5 w-3.5" />
                {singleActivityData.category}
              </span>
            )}
          </div>

          <div className="mt-8">
            <RenderContent
              content={
                isEnglish
                  ? singleActivityData.english_description
                  : singleActivityData.bangla_description
              }
            />
          </div>

          <ShareLink
            shareUrl={shareUrl}
            title={title || ""}
            hashtag={hashtag}
            description={description}
            imageUrl={image}
            imageAlt={imageAlt}
          />
        </Container>
      </PageBody>

      <ActivitySidebar />
    </>
  );
};

export default SingleActivity;
