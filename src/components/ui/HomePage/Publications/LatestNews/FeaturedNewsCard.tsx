"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { formatDate } from "@/utils/formateDate";
import truncateText from "@/utils/truncate";
import { TActivity } from "@/types/type";

interface Props {
  news: TActivity;
  idx: number;
  language: string;
  activeTab: "upcoming" | "message";
}

/**
 * Image-led feature card used for the two leading items in the news feed.
 */
const FeaturedNewsCard = ({ news, idx, language, activeTab }: Props) => {
  const isBn = language === "BNG";

  const image =
    (isBn ? news?.bng_Images?.[0] : news?.eng_images?.[0]) ||
    news?.eng_images?.[0] ||
    news?.bng_Images?.[0];

  const title = isBn ? news?.bangla_title : news?.english_title;
  const description = isBn
    ? news?.bangla_short_description
    : news?.english_short_description;

  const href =
    activeTab === "upcoming"
      ? `/upcoming-programs/${news._id}`
      : `/message/${news._id}`;

  const badge =
    activeTab === "upcoming"
      ? isBn
        ? "আসন্ন কার্যক্রম"
        : "Upcoming Programme"
      : isBn
        ? "বার্তা"
        : "Message";

  return (
    <article className="group surface-card surface-card-hover overflow-hidden">
      <Link
        href={href}
        className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            priority={idx === 0}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-400">
            {isBn ? "ছবি নেই" : "No image"}
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-md bg-brand-700/95 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
          {badge}
        </span>
      </Link>

      <div className="p-5">
        {news.date && (
          <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-slate-500">
            <CalendarDays className="h-3.5 w-3.5 text-brand-500" />
            {formatDate(news.date)}
          </span>
        )}

        <h3 className="mt-2 text-[17px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
          <Link href={href}>{truncateText(title, 78)}</Link>
        </h3>

        <p className="clamp-2 mt-2 text-[13.5px] leading-relaxed text-slate-600">
          {truncateText(description, 120)}
        </p>

        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-700 transition-colors hover:text-brand-800"
        >
          {isBn ? "বিস্তারিত" : "Read more"}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default FeaturedNewsCard;
