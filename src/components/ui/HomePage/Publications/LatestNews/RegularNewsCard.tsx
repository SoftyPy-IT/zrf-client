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
 * Horizontal summary card used for the remainder of the news feed — image on the
 * left, headline and standfirst on the right.
 */
const RegularNewsCard = ({ news, language, activeTab }: Props) => {
  const isBn = language === "BNG";

  const images =
    (isBn ? news?.bng_Images : news?.eng_images) || news?.bng_Images || [];

  const title = isBn ? news?.bangla_title : news?.english_title;
  const description = isBn
    ? news?.bangla_short_description
    : news?.english_short_description;

  const href =
    activeTab === "upcoming"
      ? `/upcoming-programs/${news._id}`
      : `/message/${news._id}`;

  return (
    <article className="group surface-card surface-card-hover overflow-hidden">
      <Link href={href} className="flex h-full flex-col sm:flex-row">
        <span className="relative block aspect-[16/10] sm:aspect-auto shrink-0 overflow-hidden bg-slate-100 sm:h-auto sm:w-[38%]">
          {images[0] ? (
            <Image
              src={images[0]}
              alt=""
              fill
              sizes="(max-width: 640px) 50vw, 260px"
              className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.05]"
            />
          ) : null}
        </span>

        <span className="flex flex-1 flex-col p-3 sm:p-5">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[10.5px] sm:text-[11.5px] font-medium text-slate-500">
            <CalendarDays className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-500" />
            {formatDate(news.date)}
          </span>

          <span className="mt-1 sm:mt-1.5 text-[12.5px] sm:text-[15px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700 line-clamp-2">
            {truncateText(title, 74)}
          </span>

          <span className="clamp-2 mt-1 sm:mt-2 text-[11px] sm:text-[13px] leading-relaxed text-slate-600">
            {truncateText(description, 105)}
          </span>

          <span className="mt-auto inline-flex items-center gap-1 sm:gap-1.5 pt-3 sm:pt-4 text-[11px] sm:text-[12.5px] font-bold text-brand-700">
            {isBn ? "আরও পড়ুন" : "Read more"}
            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </span>
      </Link>
    </article>
  );
};

export default RegularNewsCard;
