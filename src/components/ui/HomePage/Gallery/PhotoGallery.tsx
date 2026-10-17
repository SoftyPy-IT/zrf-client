"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/share/Container";
import SectionHeading from "@/components/share/SectionHeading";
import { Skeleton } from "@/components/share/Skeleton";
import { useLanguage } from "@/provider/LanguageProvider";
import { TImgGallery } from "@/types/type";
import { formatDate } from "@/utils/formateDate";
import { X, Expand, ArrowRight } from "lucide-react";

const PhotoGallery = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const [galleryData, setGalleryData] = useState<TImgGallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<{
    src: string;
    title: string;
    date: string;
  } | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGallery = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/image-gallery?limit=5`,
          { signal: controller.signal },
        );
        const data = await response.json();
        setGalleryData(data.data?.galleries || []);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
    return () => controller.abort();
  }, []);

  /* Escape closes the lightbox */
  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  if (loading) {
    return (
      <section className="section-y bg-slate-50" aria-busy="true">
        <Container>
          <SectionHeading
            eyebrow={isBn ? "ছবিতে জেডআরএফ" : "In pictures"}
            title={isBn ? "ফটো গ্যালারি" : "Photo Gallery"}
            subtitle={
              isBn
                ? "মাঠপর্যায়ের কার্যক্রম, ক্যাম্প ও আয়োজনের ছবি।"
                : "Moments from our camps, programmes and community events."
            }
          />
          <div
            aria-hidden="true"
            className="mt-10 grid auto-rows-[190px] grid-cols-2 gap-4 lg:auto-rows-[215px] lg:grid-cols-4"
          >
            <Skeleton className="col-span-2 row-span-2 rounded-card" />
            <Skeleton className="col-span-2 rounded-card" />
            <Skeleton className="rounded-card" />
            <Skeleton className="rounded-card" />
            <Skeleton className="col-span-2 rounded-card" />
          </div>
        </Container>
      </section>
    );
  }

  if (galleryData.length === 0) return null;

  const cards = galleryData.slice(0, 5);

  return (
    <section className="section-y bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow={isBn ? "ছবিতে জেডআরএফ" : "In pictures"}
          title={isBn ? "ফটো গ্যালারি" : "Photo Gallery"}
          subtitle={
            isBn
              ? "মাঠপর্যায়ের কার্যক্রম, ক্যাম্প ও আয়োজনের ছবি।"
              : "Moments from our camps, programmes and community events."
          }
        />

        {/* Bento grid: first tile is a large feature, the rest are companions */}
        <div className="mt-10 grid auto-rows-[190px] grid-cols-2 gap-4 lg:grid-cols-4 lg:auto-rows-[215px]">
          {cards.map((item, index) => {
            const thumbnail = item.thumnailImages?.[0];
            const title = isBn ? item.title_of_bangla : item.title_of_english;
            const date = item.date || item.createdAt;

            const spanClasses =
              index === 0
                ? "col-span-2 row-span-2"
                : index === 1
                  ? "col-span-2 lg:col-span-2"
                  : "col-span-1";

            return (
              <button
                key={item._id}
                type="button"
                onClick={() =>
                  thumbnail &&
                  setActive({ src: thumbnail, title: title || "", date })
                }
                className={`group relative overflow-hidden rounded-card bg-slate-200 text-left ring-1 ring-slate-200/80 transition-all duration-300 ease-editorial hover:ring-brand-300 ${spanClasses}`}
              >
                {thumbnail && (
                  <Image
                    src={thumbnail}
                    alt={title || ""}
                    fill
                    sizes="(max-width: 1024px) 50vw, 330px"
                    className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.05]"
                  />
                )}

                <span className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/25 to-transparent" />

                <span className="absolute inset-x-0 bottom-0 p-4">
                  {date && (
                    <span className="block text-[11px] font-medium text-white/70">
                      {formatDate(date)}
                    </span>
                  )}
                  <span
                    className={`mt-1 block font-semibold leading-snug text-white ${
                      index === 0 ? "text-[16px]" : "text-[13.5px]"
                    }`}
                  >
                    <span className="clamp-2">{title}</span>
                  </span>
                </span>

                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md"
          >
            {isBn ? "সব গ্যালারি দেখুন" : "View full gallery"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>

      {/* Lightbox --------------------------------------------------- */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-brand-950/95 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label={isBn ? "বন্ধ করুন" : "Close"}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <figure
            className="relative max-h-[86vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-panel">
              <Image
                src={active.src}
                alt={active.title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>

            <figcaption className="mt-5 text-center">
              <p className="text-[15px] font-semibold text-white">
                {active.title}
              </p>
              {active.date && (
                <p className="mt-1 text-[13px] text-brand-200">
                  {formatDate(active.date)}
                </p>
              )}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
