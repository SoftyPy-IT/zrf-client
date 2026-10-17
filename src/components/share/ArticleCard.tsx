import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { formatDate } from "@/utils/formateDate";
import { cn } from "@/utils/cn";

type TProps = {
  href: string;
  title: string;
  excerpt?: string | null;
  image?: string | null;
  date?: string | null;
  /** Small chip over the image — category, type, tag. */
  badge?: string | null;
  /** Read-more label; omit to hide the link row. */
  actionLabel?: string;
  /** Image aspect ratio utility, e.g. "aspect-[16/10]". */
  ratio?: string;
  sizes?: string;
  className?: string;
  /** Numbers the card in a listing (e.g. "03"). */
  index?: number;
};

/**
 * The single listing card used by every index page — news, activities,
 * programmes, projects, messages, galleries.
 *
 * Keeping one card means an index page, a search result and a "related items"
 * block all share identical geometry, hover behaviour and type scale.
 */
const ArticleCard = ({
  href,
  title,
  excerpt,
  image,
  date,
  badge,
  actionLabel,
  ratio = "aspect-[16/10]",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px",
  className,
  index,
}: TProps) => (
  <article
    className={cn(
      "group surface-card surface-card-hover flex flex-col overflow-hidden",
      className,
    )}
  >
    <Link href={href} className={cn("relative block overflow-hidden bg-slate-100", ratio)}>
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.04]"
        />
      ) : (
        <span className="flex h-full items-center justify-center bg-brand-50 text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-600/70">
          ZRF
        </span>
      )}

      {badge && (
        <span className="absolute left-3 top-3 rounded-md bg-brand-700/95 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
          {badge}
        </span>
      )}

      {typeof index === "number" && !badge && (
        <span className="absolute left-3 top-3 flex h-8 min-w-8 items-center justify-center rounded-md bg-white/95 px-2 text-[12px] font-bold tabular-nums text-brand-800 shadow-sm">
          {String(index).padStart(2, "0")}
        </span>
      )}
    </Link>

    <div className="flex flex-1 flex-col p-5">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-slate-500">
        {date && (
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-brand-500" />
            {formatDate(date)}
          </span>
        )}
      </div>

      <h3 className="mt-2.5 text-[16px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
        <Link href={href}>{title}</Link>
      </h3>

      {excerpt && (
        <p className="clamp-3 mt-2 text-[13.5px] leading-relaxed text-slate-600">
          {excerpt}
        </p>
      )}

      {actionLabel && (
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[13px] font-bold text-brand-700 transition-colors hover:text-brand-800"
        >
          {actionLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  </article>
);

export default ArticleCard;
