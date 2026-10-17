"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import SectionHeading from "@/components/share/SectionHeading";
import { LoadingStatus, Skeleton } from "@/components/share/Skeleton";
import { useLanguage } from "@/provider/LanguageProvider";
import { TImgGallery } from "@/types/type";
import { formatDate } from "@/utils/formateDate";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

type TAlbum = {
  /** Year of the album (or "undated"), used as the React key. */
  key: string;
  label: string;
  items: TImgGallery[];
};

type TLightbox = {
  /** Album the open photograph belongs to, so arrows page within it. */
  album: TImgGallery[];
  index: number;
};

const timestampOf = (item: TImgGallery) => {
  const raw = item.date || item.createdAt;
  const value = raw ? new Date(raw).getTime() : NaN;
  return Number.isNaN(value) ? 0 : value;
};

const yearOf = (item: TImgGallery) => {
  const raw = item.date || item.createdAt;
  if (!raw) return null;
  const value = new Date(raw).getFullYear();
  return Number.isNaN(value) ? null : String(value);
};

const titleOf = (item: TImgGallery, isBn: boolean) =>
  (isBn ? item.title_of_bangla : item.title_of_english) ||
  item.title_of_english ||
  item.title_of_bangla ||
  "";

/**
 * Photo gallery index.
 *
 * Albums are grouped by year and each album opens with a large bento tile,
 * matching the home-page `PhotoGallery`. Tiles open an accessible lightbox
 * (Escape / backdrop to close, arrows to page through the album).
 */
const GalleryContent = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const [galleryData, setGalleryData] = useState<TImgGallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [lightbox, setLightbox] = useState<TLightbox | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGallery = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/image-gallery?limit=100`,
          { signal: controller.signal, cache: "no-store" },
        );
        const data = await response.json();
        setGalleryData(data.data?.galleries || []);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setFailed(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
    return () => controller.abort();
  }, []);

  /* Albums: newest first, assembled from the item's date (falling back to createdAt). */
  const albums = useMemo<TAlbum[]>(() => {
    const sorted = [...galleryData].sort(
      (a, b) => timestampOf(b) - timestampOf(a),
    );

    const buckets = new Map<string, TImgGallery[]>();
    sorted.forEach((item) => {
      const key = yearOf(item) ?? "undated";
      const bucket = buckets.get(key);
      if (bucket) {
        bucket.push(item);
      } else {
        buckets.set(key, [item]);
      }
    });

    return Array.from(buckets.entries()).map(([key, items]) => ({
      key,
      label: key === "undated" ? (isBn ? "তারিখবিহীন" : "Undated") : key,
      items,
    }));
  }, [galleryData, isBn]);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const stepLightbox = useCallback((delta: number) => {
    setLightbox((previous) => {
      if (!previous) return previous;
      const count = previous.album.length;
      return { ...previous, index: (previous.index + delta + count) % count };
    });
  }, []);

  /* Escape closes, arrows page through the album, body scroll is locked. */
  useEffect(() => {
    if (!lightbox) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") stepLightbox(1);
      if (event.key === "ArrowLeft") stepLightbox(-1);
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, stepLightbox]);

  const current = lightbox ? lightbox.album[lightbox.index] : null;

  const totalPhotos = galleryData.length;

  return (
    <>
      <CommonBanner
        title={isBn ? "ফটো গ্যালারি" : "Photo Gallery"}
        subtitle={
          isBn
            ? "মাঠপর্যায়ের কার্যক্রম, ক্যাম্প ও আয়োজনের ছবি।"
            : "Moments from our camps, programmes and community events."
        }
      />

      <PageBody tone="slate">
        <SectionHeading
          eyebrow={isBn ? "ছবিতে জেডআরএফ" : "In pictures"}
          title={isBn ? "ছবির অ্যালবাম" : "Photo Albums"}
          subtitle={
            isBn
              ? "বছর অনুযায়ী সাজানো ফাউন্ডেশনের কার্যক্রমের ছবি।"
              : "The foundation's work, arranged by year. Select a photograph to view it full size."
          }
        />

        {loading ? (
          <div aria-busy="true" className="mt-10 space-y-10">
            <LoadingStatus
              label={isBn ? "ছবি লোড হচ্ছে" : "Loading photographs"}
            />
            <div
              aria-hidden="true"
              className="grid auto-rows-[190px] grid-cols-2 gap-4 lg:auto-rows-[215px] lg:grid-cols-4"
            >
              <Skeleton className="col-span-2 row-span-2 rounded-card" />
              <Skeleton className="col-span-2 rounded-card" />
              <Skeleton className="rounded-card" />
              <Skeleton className="rounded-card" />
              <Skeleton className="col-span-2 rounded-card" />
            </div>
          </div>
        ) : failed || totalPhotos === 0 ? (
          <p className="py-16 text-center text-sm text-slate-500">
            {isBn
              ? "এই মুহূর্তে কোনো ছবি পাওয়া যায়নি।"
              : "No photographs found at the moment."}
          </p>
        ) : (
          <>
            <p className="mt-8 text-[13px] font-medium text-slate-500">
              {isBn
                ? `মোট ${totalPhotos}টি ছবি`
                : `${totalPhotos} photographs`}
            </p>

            <div className="mt-6 space-y-12">
              {albums.map((album) => (
                <section
                  key={album.key}
                  aria-labelledby={`gallery-album-${album.key}`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-slate-200 pb-3">
                    <h3
                      id={`gallery-album-${album.key}`}
                      className="text-[16px] font-bold text-slate-900"
                    >
                      {album.label}
                    </h3>
                    <p className="text-[12px] font-medium text-slate-500">
                      {isBn
                        ? `${album.items.length}টি ছবি`
                        : `${album.items.length} ${
                            album.items.length === 1 ? "photograph" : "photographs"
                          }`}
                    </p>
                  </div>

                  {/* Bento grid: first tile of every album is the large feature */}
                  <div className="mt-5 grid auto-rows-[190px] grid-cols-2 gap-4 lg:auto-rows-[215px] lg:grid-cols-4">
                    {album.items.map((item, index) => {
                      const thumbnail = item.thumnailImages?.[0];
                      const title = titleOf(item, isBn);
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
                            setLightbox({ album: album.items, index })
                          }
                          aria-label={
                            isBn
                              ? `ছবিটি বড় করে দেখুন: ${title}`
                              : `View photograph: ${title}`
                          }
                          className={`group relative overflow-hidden rounded-card bg-slate-200 text-left ring-1 ring-slate-200/80 transition-all duration-300 ease-editorial hover:ring-brand-300 ${spanClasses}`}
                        >
                          {thumbnail && (
                            <Image
                              src={thumbnail}
                              alt={title}
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
                            <Expand className="h-4 w-4" aria-hidden="true" />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </>
        )}
      </PageBody>

      {/* Lightbox --------------------------------------------------- */}
      {lightbox && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={titleOf(current, isBn)}
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-brand-950/95 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeLightbox}
            aria-label={isBn ? "বন্ধ করুন" : "Close"}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          {lightbox.album.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  stepLightbox(-1);
                }}
                aria-label={isBn ? "আগের ছবি" : "Previous photograph"}
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  stepLightbox(1);
                }}
                aria-label={isBn ? "পরের ছবি" : "Next photograph"}
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </>
          )}

          <figure
            className="relative max-h-[86vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-panel">
              {current.thumnailImages?.[0] && (
                <Image
                  src={current.thumnailImages[0]}
                  alt={titleOf(current, isBn)}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              )}
            </div>

            <figcaption className="mt-5 text-center">
              <p className="text-[15px] font-semibold text-white">
                {titleOf(current, isBn)}
              </p>
              <p className="mt-1 text-[12.5px] text-brand-200">
                {(current.date || current.createdAt) && (
                  <>{formatDate(current.date || current.createdAt)} · </>
                )}
                {lightbox.index + 1} / {lightbox.album.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
};

export default GalleryContent;
