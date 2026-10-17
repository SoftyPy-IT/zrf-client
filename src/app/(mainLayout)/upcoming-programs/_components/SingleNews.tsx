"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import axios from "axios";
import { ArrowRight, CalendarDays } from "lucide-react";
import ArticleCard from "@/components/share/ArticleCard";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import SectionHeading from "@/components/share/SectionHeading";
import { Skeleton, SkeletonText } from "@/components/share/Skeleton";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import RenderContent from "@/components/Common/RenderContent";
import RecentNewsSidebar from "./RecentNewsSidebar";
import { useLanguage } from "@/provider/LanguageProvider";
import { TActivity } from "@/types/type";
import { formatDate } from "@/utils/formateDate";
import { stripHtml } from "@/utils/stripHtml";
import truncateText from "@/utils/truncate";

type SingleProjectProps = {
  singleNewsData: TActivity;
};

/** Same feed as the programmes index — powers the "more programmes" strip. */
const FEED_CATEGORY = `Upcoming Programs,upcoming programs,Upcoming Program,upcoming program,Program,Event,Events`;

/** Localises the common CMS category labels for the meta row. */
const categoryLabel = (category: string | undefined, isBn: boolean) => {
  if (!category) return null;
  if (!isBn) return category;

  const value = category.trim().toLowerCase();
  if (value.includes("upcoming") || value === "program" || value === "event") {
    return "আসন্ন কার্যক্রম";
  }
  if (value === "message" || value === "messages") return "বার্তা";
  if (value === "news") return "সংবাদ";
  if (value === "activity") return "কার্যক্রম";

  return category;
};

/**
 * Single upcoming programme.
 *
 * Banner headline, ringed hero image, meta row, rendered CMS body and the
 * share row; the sidebar keeps further programmes one tap away and a related
 * strip closes the page with the standard listing card.
 */
const SingleRehabilitation = ({ singleNewsData }: SingleProjectProps) => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const [recentData, setRecentData] = useState<TActivity[]>([]);
  const [recentLoading, setRecentLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchRecentData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/activity?category=${FEED_CATEGORY}&limit=12`,
        );
        if (!cancelled) setRecentData(res.data?.data?.activities || []);
      } catch (err) {
        console.error("Error fetching upcoming programmes:", err);
        if (!cancelled) setRecentData([]);
      } finally {
        if (!cancelled) setRecentLoading(false);
      }
    };

    fetchRecentData();
    return () => {
      cancelled = true;
    };
  }, []);

  const title =
    (isBn ? singleNewsData.bangla_title : singleNewsData.english_title) ||
    singleNewsData.bangla_title ||
    singleNewsData.english_title ||
    "";

  const content = isBn
    ? singleNewsData.bangla_description
    : singleNewsData.english_description;

  const description = stripHtml(
    (isBn
      ? singleNewsData.bangla_description
      : singleNewsData.english_description) ?? "",
  );

  const heroImage =
    ((isBn ? singleNewsData.bng_Images : singleNewsData.eng_images) || [])[0] ||
    singleNewsData.eng_images?.[0] ||
    singleNewsData.bng_Images?.[0];

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const hashtag = `#${(title || "").replace(/\s+/g, "")}`;
  const category = categoryLabel(singleNewsData.category, isBn);

  const recentProgrammes = useMemo(
    () =>
      [...(recentData || [])]
        .filter((item) => item._id !== singleNewsData._id)
        .sort(
          (a: TActivity, b: TActivity) =>
            new Date(b.date).getTime() - new Date(a.date).getTime(),
        )
        .slice(0, 3),
    [recentData, singleNewsData._id],
  );

  return (
    <>
      <CommonBanner
        title={title || (isBn ? "আসন্ন কার্যক্রম" : "Upcoming Programmes")}
      />

      <PageBody>
        <div className="grid gap-10 lg:grid-cols-12">
          <article className="lg:col-span-8">
            {heroImage && (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-panel bg-slate-100 ring-1 ring-slate-200">
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 760px"
                  className="object-cover"
                />
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-slate-500">
              {singleNewsData.date && (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-brand-500" />
                  {formatDate(singleNewsData.date)}
                </span>
              )}
              {category && (
                <span className="inline-flex items-center rounded-md bg-brand-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-700 ring-1 ring-brand-100">
                  {category}
                </span>
              )}
            </div>

            <div className="mt-7">
              <RenderContent content={content} />
            </div>

            <div className="mt-8">
              <ShareLink
                shareUrl={shareUrl}
                title={title}
                hashtag={hashtag}
                description={description}
                imageUrl={heroImage}
                imageAlt={title}
              />
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <RecentNewsSidebar />
            </div>
          </aside>
        </div>
      </PageBody>

      {(recentLoading || recentProgrammes.length > 0) && (
        <PageBody tone="slate" tight>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              align="left"
              eyebrow={isBn ? "আরও দেখুন" : "More programmes"}
              title={isBn ? "আসন্ন অন্যান্য কার্যক্রম" : "More upcoming programmes"}
              subtitle={
                isBn
                  ? "ফাউন্ডেশনের অন্যান্য আসন্ন কার্যক্রম ও আয়োজন।"
                  : "Other programmes and events coming up from the foundation."
              }
            />

            <Link
              href="/upcoming-programs"
              className="group inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-[13.5px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              {isBn ? "সব কার্যক্রম দেখুন" : "View all programmes"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentLoading
              ? [0, 1, 2].map((index) => (
                  <div
                    key={index}
                    aria-hidden="true"
                    className="overflow-hidden rounded-card border border-slate-200 bg-white"
                  >
                    <Skeleton className="aspect-[16/10] rounded-none" />
                    <div className="p-5">
                      <Skeleton className="h-3 w-24" />
                      <Skeleton className="mt-3 h-4 w-11/12" />
                      <SkeletonText
                        lines={3}
                        className="mt-3"
                        lineClassName="h-3"
                      />
                    </div>
                  </div>
                ))
              : recentProgrammes.map((item) => {
                  const image =
                    (isBn ? item.bng_Images?.[0] : item.eng_images?.[0]) ||
                    item.eng_images?.[0] ||
                    item.bng_Images?.[0] ||
                    null;

                  const itemTitle =
                    (isBn ? item.bangla_title : item.english_title) ||
                    item.bangla_title ||
                    item.english_title ||
                    "";

                  const itemExcerpt = isBn
                    ? item.bangla_short_description || item.bangla_description
                    : item.english_short_description || item.english_description;

                  return (
                    <ArticleCard
                      key={item._id}
                      href={`/upcoming-programs/${item._id}`}
                      title={truncateText(itemTitle, 78)}
                      excerpt={truncateText(stripHtml(itemExcerpt || ""), 120)}
                      image={image}
                      date={item.date}
                      actionLabel={isBn ? "আরও পড়ুন" : "Read more"}
                    />
                  );
                })}
          </div>
        </PageBody>
      )}
    </>
  );
};

export default SingleRehabilitation;
