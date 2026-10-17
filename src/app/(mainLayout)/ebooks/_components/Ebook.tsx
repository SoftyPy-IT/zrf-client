"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, ArrowRight } from "lucide-react";
import { LoadingStatus, Skeleton, SkeletonText } from "@/components/share/Skeleton";
import { useLanguage } from "@/provider/LanguageProvider";
import { TEbook } from "@/types/type";

interface ebookShelfProps {
  ebookData: TEbook[];
  loading?: boolean;
  /** Opens the PDF reader modal in the parent. */
  onRead: (book: TEbook) => void;
}

/** The API stores the publication date under `date`; older records use `published_date`. */
const yearOf = (book: TEbook) => {
  const raw =
    book.published_date || (book as TEbook & { date?: string }).date || "";
  if (!raw) return null;
  const year = new Date(raw).getFullYear();
  return Number.isNaN(year) ? null : String(year);
};

/**
 * The publications shelf: covers as 3:4 book objects with title and
 * author / year beneath, matching the home-page `PublicationSlider`.
 * Selecting a book that has a PDF opens the reader through `onRead`.
 */
const Ebook = ({ ebookData, loading, onRead }: ebookShelfProps) => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  if (loading && ebookData.length === 0) {
    return (
      <div
        aria-busy="true"
        className="mt-10 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <LoadingStatus label={isBn ? "ই-বুক লোড হচ্ছে" : "Loading e-books"} />
        {[0, 1, 2, 3, 4].map((index) => (
          <div key={index} aria-hidden="true" className="flex flex-col">
            <Skeleton className="aspect-[3/4] rounded-md" />
            <Skeleton className="mt-3 h-3.5 w-11/12" />
            <SkeletonText lines={1} className="mt-2" lineClassName="h-3" />
          </div>
        ))}
      </div>
    );
  }

  if (ebookData.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-slate-500">
        {isBn
          ? "এই মুহূর্তে কোনো ই-বুক পাওয়া যায়নি।"
          : "No e-books found at the moment."}
      </p>
    );
  }

  return (
    <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {ebookData.map((book) => {
        const cover = book.images?.[0];
        const title =
          book.title ||
          book.name ||
          (isBn ? "প্রকাশনা" : "Publication");
        const year = yearOf(book);
        const readable = Boolean(book.ebook);
        const meta = [book.author, year].filter(Boolean).join(" · ");

        const shelfCard = (
          <>
            {/* Book object: cover plus a spine sliver for depth */}
            <span className="relative block aspect-[3/4] w-full overflow-hidden rounded-md bg-slate-100 shadow-card ring-1 ring-slate-200 transition-all duration-300 ease-editorial group-hover:-translate-y-1.5 group-hover:shadow-card-hover">
              {cover ? (
                <Image
                  src={cover}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 240px"
                  className="object-cover"
                />
              ) : (
                <span className="flex h-full items-center justify-center text-slate-300">
                  <BookOpen className="h-8 w-8" aria-hidden="true" />
                </span>
              )}

              <span
                className="pointer-events-none absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/25 via-black/5 to-transparent"
                aria-hidden="true"
              />

              {readable && (
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-brand-950/70 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-brand-950">
                    <BookOpen className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-[11.5px] font-bold text-white">
                    {isBn ? "পড়ুন" : "Read"}
                  </span>
                </span>
              )}
            </span>

            <span className="clamp-2 mt-3 text-[13px] font-semibold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
              {title}
            </span>

            {meta && (
              <span className="mt-1 text-[12px] text-slate-500">{meta}</span>
            )}

            {readable && (
              <span className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brand-700 transition-colors group-hover:text-brand-800">
                {isBn ? "পড়ুন" : "Read e-book"}
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            )}
          </>
        );

        return readable ? (
          <button
            key={book._id}
            type="button"
            onClick={() => onRead(book)}
            aria-label={`${isBn ? "ই-বুক পড়ুন" : "Read e-book"}: ${title}`}
            className="group flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
          >
            {shelfCard}
          </button>
        ) : (
          <div key={book._id} className="group flex flex-col text-left">
            {shelfCard}
          </div>
        );
      })}
    </div>
  );
};

export default Ebook;
