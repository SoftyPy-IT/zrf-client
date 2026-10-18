"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/provider/LanguageProvider";
import { TEbook } from "@/types/type";
import { BookOpen, ArrowRight } from "lucide-react";
import Skeleton from "@/components/share/Skeleton";

/**
 * E-book showcase.
 *
 * Rendered as a static shelf of covers rather than an auto-rotating coverflow:
 * easier to browse, keyboard accessible, and it removes a heavy 3D carousel from the
 * critical path.
 */
const PublicationSlider = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const [ebooks, setEbooks] = useState<TEbook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchEbooks = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/ebook?limit=6`,
          { signal: controller.signal },
        );
        const data = await response.json();
        setEbooks(data.data?.ebooks || []);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setError("Failed to fetch eBook data.");
      } finally {
        setLoading(false);
      }
    };

    fetchEbooks();
    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="aspect-[3/4] rounded-card" />
        ))}
      </div>
    );
  }

  if (error || ebooks.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {ebooks.map((ebook) => {
          const cover = ebook.images?.[0];
          const title = ebook.title || ebook.name;

          return (
            <Link
              key={ebook._id}
              href="/ebooks"
              className="group flex flex-col"
              aria-label={title}
            >
              {/* Book object: cover plus a spine sliver for depth */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-slate-100 shadow-card ring-1 ring-slate-200/70 transition-all duration-300 ease-editorial group-hover:-translate-y-1.5 group-hover:shadow-card-hover">
                {cover ? (
                  <Image
                    src={cover}
                    alt={title || "E-Book cover"}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                    className="object-cover"
                  />
                ) : (
                  <span className="flex h-full items-center justify-center text-slate-300">
                    <BookOpen className="h-8 w-8" />
                  </span>
                )}

                {/* Spine + sheen */}
                <span className="pointer-events-none absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/25 via-black/5 to-transparent" />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-brand-950/70 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-brand-950">
                    <BookOpen className="h-4 w-4" />
                  </span>
                  <span className="text-[11.5px] font-bold text-white">
                    {isBn ? "পড়ুন" : "Read"}
                  </span>
                </span>
              </div>

              <span className="mt-3 line-clamp-2 text-[12.5px] font-semibold leading-snug text-slate-700 transition-colors group-hover:text-brand-700">
                {title}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/ebooks"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-[13.5px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
        >
          {isBn ? "সব ই-বুক দেখুন" : "Browse all e-books"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  );
};

export default PublicationSlider;
