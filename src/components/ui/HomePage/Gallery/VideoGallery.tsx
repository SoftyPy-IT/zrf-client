"use client";

import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/share/Container";
import SectionHeading from "@/components/share/SectionHeading";
import { Skeleton } from "@/components/share/Skeleton";
import { useLanguage } from "@/provider/LanguageProvider";
import { TVideo } from "@/types/type";
import { Play, ArrowRight } from "lucide-react";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const getYouTubeId = (url: string): string | null => {
  if (!url) return null;
  const short = url.match(/youtu\.be\/([^?#&]+)/);
  if (short) return short[1];
  const long = url.match(/[?&]v=([^?#&]+)/);
  if (long) return long[1];
  return null;
};

const getThumbnail = (url: string) => {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
};

/**
 * Video gallery laid out as a media centre: one featured player with a scrollable
 * programme list beside it. Lighter and far more predictable than the previous
 * combined swiper + thumbnail carousel + modal stack.
 */
const VideoGallery = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const [videos, setVideos] = useState<TVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/videos?limit=10`,
          { signal: controller.signal },
        );
        const data = await response.json();
        setVideos(data.data?.videos || []);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setError("Failed to fetch videos.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
    return () => controller.abort();
  }, []);

  const selectVideo = useCallback((index: number) => {
    setActiveIndex(index);
    setPlaying(false);
  }, []);

  if (loading) {
    return (
      <section className="section-y bg-slate-50" aria-busy="true">
        <Container>
          <SectionHeading
            eyebrow={isBn ? "মিডিয়া" : "Media"}
            title={isBn ? "ভিডিও গ্যালারি" : "Video Gallery"}
            subtitle={
              isBn
                ? "জেডআরএফের কার্যক্রম, প্রামাণ্যচিত্র এবং কভারেজ দেখুন।"
                : "Watch ZRF programme films, documentaries and field coverage."
            }
          />

          <div
            aria-hidden="true"
            className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12"
          >
            <div className="lg:col-span-8">
              <Skeleton className="aspect-video w-full rounded-panel" />
            </div>
            <div className="lg:col-span-4">
              <div className="flex h-full flex-col gap-2 rounded-panel border border-slate-200 bg-slate-50/60 p-4">
                <Skeleton className="mb-1 h-3 w-24" />
                {[0, 1, 2, 3, 4].map((index) => (
                  <div key={index} className="flex items-center gap-3 p-2">
                    <Skeleton className="h-[52px] w-[88px] shrink-0 rounded-md" />
                    <Skeleton className="h-4 flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (error || videos.length === 0) return null;

  const activeVideo = videos[activeIndex];
  const activeTitle = isBn
    ? activeVideo.video_title_bangla
    : activeVideo.video_title_english;
  const activeThumb = getThumbnail(activeVideo.video_url);

  return (
    <section className="section-y bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow={isBn ? "মিডিয়া" : "Media"}
          title={isBn ? "ভিডিও গ্যালারি" : "Video Gallery"}
          subtitle={
            isBn
              ? "জেডআরএফের কার্যক্রম, প্রামাণ্যচিত্র এবং কভারেজ দেখুন।"
              : "Watch ZRF programme films, documentaries and field coverage."
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Featured player ------------------------------------------- */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-panel border border-slate-200 bg-brand-950 shadow-card">
              <div className="relative aspect-video w-full">
                {playing ? (
                  <ReactPlayer
                    url={activeVideo.video_url}
                    width="100%"
                    height="100%"
                    controls
                    playing
                    config={{
                      playerVars: {
                        modestbranding: 1,
                        rel: 0,
                        fs: 1,
                        autoplay: 1,
                        playsinline: 1,
                      },
                    }}
                    style={{ position: "absolute", inset: 0 }}
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="group absolute inset-0 h-full w-full"
                    aria-label={`${isBn ? "ভিডিও চালান" : "Play video"}: ${activeTitle}`}
                  >
                    {activeThumb && (
                      <Image
                        src={activeThumb}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 800px"
                        className="object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    )}

                    <span className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />

                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 text-brand-950 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                        <Play className="ml-0.5 h-7 w-7 fill-current" />
                      </span>
                    </span>

                    <span className="absolute inset-x-0 bottom-0 p-5 text-left">
                      <span className="block text-[15px] font-bold leading-snug text-white sm:text-[17px]">
                        {activeTitle}
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Programme list ------------------------------------------- */}
          <div className="lg:col-span-4">
            <div className="flex h-full flex-col rounded-panel border border-slate-200 bg-slate-50/60 p-4">
              <h3 className="px-1 pb-3 text-[11.5px] font-bold uppercase tracking-[0.1em] text-slate-500">
                {isBn ? "অন্যান্য ভিডিও" : "More videos"}
              </h3>

              <ul className="no-scrollbar flex max-h-[420px] flex-col gap-1.5 overflow-y-auto lg:max-h-none lg:flex-1">
                {videos.map((video, index) => {
                  const thumb = getThumbnail(video.video_url);
                  const title = isBn
                    ? video.video_title_bangla
                    : video.video_title_english;
                  const selected = index === activeIndex;

                  return (
                    <li key={video._id}>
                      <button
                        type="button"
                        onClick={() => selectVideo(index)}
                        aria-current={selected}
                        className={`flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors ${
                          selected
                            ? "bg-white shadow-sm ring-1 ring-brand-200"
                            : "hover:bg-white/70"
                        }`}
                      >
                        <span className="relative h-[52px] w-[88px] shrink-0 overflow-hidden rounded-md bg-slate-200">
                          {thumb && (
                            <Image
                              src={thumb}
                              alt=""
                              fill
                              sizes="88px"
                              className="object-cover"
                            />
                          )}
                          <span className="absolute inset-0 flex items-center justify-center bg-brand-950/30">
                            <Play className="h-4 w-4 fill-white text-white" />
                          </span>
                        </span>

                        <span
                          className={`clamp-2 text-[13px] font-semibold leading-snug ${
                            selected ? "text-brand-700" : "text-slate-700"
                          }`}
                        >
                          {title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-[13.5px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
          >
            {isBn ? "সব ভিডিও দেখুন" : "Explore all videos"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default VideoGallery;
