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
import { formatDate } from "@/utils/formateDate";
import {
  Play,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Tv,
  CalendarDays,
  Sparkles,
} from "lucide-react";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

/**
 * Robust YouTube video ID extractor supporting watch?v=, youtu.be, embed, shorts, and live URLs.
 */
const getYouTubeId = (url: string): string | null => {
  if (!url) return null;
  const regExp =
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|live\/|watch\?.+&v=))([\w-]{11})/;
  const match = url.match(regExp);
  if (match && match[1]) return match[1];

  const vMatch = url.match(/[?&]v=([^?#&]+)/);
  if (vMatch && vMatch[1]) return vMatch[1];

  return null;
};

/**
 * Derives a crisp thumbnail for video cards:
 * Prefers uploaded image -> API thumbnail_url -> YouTube mqdefault (clean 16:9 widescreen).
 */
const getThumbnail = (video: TVideo): string | null => {
  if (!video) return null;
  const uploads = (
    video as TVideo & {
      thumnailImages?: string[];
      thumbnailImages?: string[];
    }
  ).thumnailImages || (video as any).thumbnailImages;

  if (uploads && uploads.length > 0 && uploads[0]) return uploads[0];
  if (video.thumbnail_url) return video.thumbnail_url;

  const id = getYouTubeId(video.video_url);
  if (id) {
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
  }
  return null;
};

/**
 * High-res thumbnail for the featured cinema player.
 */
const getFeaturedThumbnail = (video: TVideo): string | null => {
  if (!video) return null;
  const uploads = (
    video as TVideo & {
      thumnailImages?: string[];
      thumbnailImages?: string[];
    }
  ).thumnailImages || (video as any).thumbnailImages;

  if (uploads && uploads.length > 0 && uploads[0]) return uploads[0];
  if (video.thumbnail_url) return video.thumbnail_url;

  const id = getYouTubeId(video.video_url);
  if (id) {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }
  return null;
};

/**
 * Premium media center video gallery:
 * - High-end cinema player with ambient glow, glowing gold play trigger, and live title overlay.
 * - Under-player console with persistent metadata, playing indicators, and quick-skip buttons.
 * - Cohesive, scrollable playlist with animated live-pulse tags, crisp widescreen thumbnails, and smooth selection.
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

  const handlePrev = useCallback(() => {
    setActiveIndex((curr) => (curr > 0 ? curr - 1 : curr));
    setPlaying(false);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((curr) => (curr < videos.length - 1 ? curr + 1 : curr));
    setPlaying(false);
  }, [videos.length]);

  if (loading) {
    return (
      <section className="section-y bg-slate-50/70" aria-busy="true">
        <Container>
          <SectionHeading
            eyebrow={isBn ? "ভিডিও মিডিয়া" : "Video Media"}
            title={isBn ? "ভিডিও গ্যালারি" : "Video Gallery"}
            subtitle={
              isBn
                ? "জেডআরএফ-এর কার্যক্রম, প্রামাণ্যচিত্র এবং বিশেষ প্রতিবেদন দেখুন।"
                : "Watch ZRF programme films, documentaries, and field reports."
            }
          />

          <div
            aria-hidden="true"
            className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8"
          >
            <div className="lg:col-span-8 flex flex-col gap-3.5">
              <Skeleton className="aspect-video w-full rounded-2xl" />
              <Skeleton className="h-16 w-full rounded-xl" />
            </div>
            <div className="lg:col-span-4">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                <Skeleton className="h-5 w-32 mb-1" />
                {[0, 1, 2, 3, 4].map((index) => (
                  <div key={index} className="flex items-center gap-3 p-2">
                    <Skeleton className="aspect-video w-[100px] shrink-0 rounded-lg" />
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
  const activeTitle = activeVideo
    ? isBn
      ? activeVideo.video_title_bangla || activeVideo.video_title_english
      : activeVideo.video_title_english || activeVideo.video_title_bangla
    : "";
  const activeThumb = activeVideo ? getFeaturedThumbnail(activeVideo) : null;
  const activeDate = activeVideo?.createdAt || activeVideo?.date;

  return (
    <section className="section-y relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80">
      {/* Decorative ambient background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[800px] rounded-full bg-brand-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow={isBn ? "ভিডিও মিডিয়া" : "Video Media"}
          title={isBn ? "ভিডিও গ্যালারি" : "Video Gallery"}
          subtitle={
            isBn
              ? "জেডআরএফ-এর কার্যক্রম, প্রামাণ্যচিত্র এবং বিশেষ প্রতিবেদন দেখুন।"
              : "Watch ZRF programme films, documentaries, and field reports."
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-stretch">
          {/* Featured Player Column ------------------------------------- */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            {/* Cinema screen container */}
            <div className="relative overflow-hidden rounded-2xl bg-brand-950 shadow-panel border border-brand-900/40 group">
              <div className="relative aspect-video w-full bg-slate-950">
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
                    className="group absolute inset-0 h-full w-full cursor-pointer text-left focus:outline-none"
                    aria-label={`${isBn ? "ভিডিও চালান" : "Play video"}: ${activeTitle}`}
                  >
                    {/* Thumbnail Still */}
                    {activeThumb ? (
                      <Image
                        src={activeThumb}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 850px"
                        priority
                        className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-95"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-950 via-slate-900 to-brand-900">
                        <Tv className="h-16 w-16 text-slate-700" />
                      </div>
                    )}

                    {/* Dark gradient vignette */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/40 to-black/30"
                    />

                    {/* Floating top header bar */}
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-5">
                      <span className="flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-white/95 border border-white/10 shadow-sm">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                        </span>
                        <span>{isBn ? "ফিচার্ড ভিডিও" : "Featured Video"}</span>
                      </span>

                      <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white/80 border border-white/10">
                        {activeIndex + 1} / {videos.length}
                      </span>
                    </div>

                    {/* Prominent Gold Play Trigger */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="relative flex items-center justify-center">
                        <span className="absolute -inset-3 rounded-full bg-gold-400/25 animate-ping opacity-60" />
                        <span className="absolute -inset-1 rounded-full bg-gold-400/35 blur-sm" />
                        <span className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-tr from-gold-600 via-gold-500 to-gold-400 text-brand-950 shadow-[0_0_35px_rgba(200,160,46,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(200,160,46,0.85)]">
                          <Play className="ml-1 h-7 w-7 sm:h-8 sm:w-8 fill-current text-brand-950" />
                        </span>
                      </div>
                      <span className="rounded-full bg-black/75 backdrop-blur-sm px-3.5 py-1 text-xs font-medium text-white/95 opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-md">
                        {isBn ? "ভিডিওটি চালান" : "Play Video"}
                      </span>
                    </div>

                    {/* Bottom Scrim with Title */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-left">
                      {activeDate && (
                        <div className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-gold-300/90">
                          <CalendarDays className="h-3.5 w-3.5" />
                          <span>{formatDate(activeDate)}</span>
                        </div>
                      )}
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold leading-snug text-white line-clamp-2 drop-shadow-sm">
                        {activeTitle}
                      </h3>
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* Under-player interactive console */}
            <div className="mt-3.5 rounded-xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {playing ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-bold text-brand-700 ring-1 ring-brand-200">
                      <span className="flex items-end gap-0.5 h-3">
                        <span className="w-0.5 h-2.5 bg-brand-600 animate-[pulse_0.6s_ease-in-out_infinite] rounded-full" />
                        <span className="w-0.5 h-1.5 bg-brand-600 animate-[pulse_0.8s_ease-in-out_infinite_0.2s] rounded-full" />
                        <span className="w-0.5 h-3 bg-brand-600 animate-[pulse_0.7s_ease-in-out_infinite_0.4s] rounded-full" />
                      </span>
                      {isBn ? "এখন চলছে" : "Now Playing"}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                      <Sparkles className="h-3 w-3 text-gold-600" />
                      {isBn ? "নির্বাচিত ভিডিও" : "Selected"}
                    </span>
                  )}
                  {activeDate && (
                    <span className="text-[12px] text-slate-500 flex items-center gap-1">
                      <CalendarDays className="h-3 w-3 text-slate-400" />
                      {formatDate(activeDate)}
                    </span>
                  )}
                </div>
                <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug truncate">
                  {activeTitle}
                </p>
              </div>

              {/* Quick actions & skip navigation */}
              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                <a
                  href={activeVideo.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                  title={isBn ? "ইউটিউবে দেখুন" : "Watch on YouTube"}
                >
                  <span>{isBn ? "ইউটিউব" : "YouTube"}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <div className="flex items-center gap-1 border-l border-slate-200 pl-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                    aria-label={isBn ? "পূর্ববর্তী ভিডিও" : "Previous video"}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={activeIndex === videos.length - 1}
                    aria-label={isBn ? "পরবর্তী ভিডিও" : "Next video"}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Playlist Column ------------------------------------------- */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white shadow-card overflow-hidden">
              {/* Playlist Header */}
              <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50/80 via-white to-slate-50/80 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Tv className="h-4 w-4" />
                  </span>
                  <h3 className="text-sm font-bold text-slate-800">
                    {isBn ? "অন্যান্য ভিডিও" : "More Videos"}
                  </h3>
                </div>
                <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-bold text-brand-700 ring-1 ring-brand-200/60">
                  {isBn ? `${videos.length}টি ভিডিও` : `${videos.length} videos`}
                </span>
              </div>

              {/* Scrollable Playlist Items */}
              <ul className="flex-1 overflow-y-auto p-3 space-y-2 max-h-[460px] lg:max-h-[510px]">
                {videos.map((video, index) => {
                  const thumb = getThumbnail(video);
                  const title = isBn
                    ? video.video_title_bangla || video.video_title_english
                    : video.video_title_english || video.video_title_bangla;
                  const selected = index === activeIndex;

                  return (
                    <li key={video._id || index}>
                      <button
                        type="button"
                        onClick={() => selectVideo(index)}
                        aria-current={selected}
                        className={`group flex w-full items-center gap-3 rounded-xl p-2.5 text-left transition-all duration-200 ${
                          selected
                            ? "bg-brand-50/90 border-l-4 border-l-brand-600 border border-brand-200 shadow-sm"
                            : "bg-white hover:bg-slate-50/90 border border-transparent hover:border-slate-200/60"
                        }`}
                      >
                        {/* Widescreen Thumbnail */}
                        <span className="relative aspect-video w-[100px] sm:w-[108px] shrink-0 overflow-hidden rounded-lg bg-slate-900 shadow-xs">
                          {thumb ? (
                            <Image
                              src={thumb}
                              alt=""
                              fill
                              sizes="110px"
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-950 to-slate-900 text-slate-500">
                              <Tv className="h-5 w-5" />
                            </span>
                          )}

                          {/* Overlay / Play status */}
                          <span
                            className={`absolute inset-0 flex items-center justify-center transition-all ${
                              selected
                                ? "bg-brand-950/40"
                                : "bg-black/25 group-hover:bg-brand-950/40"
                            }`}
                          >
                            {selected ? (
                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white shadow-md">
                                <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                              </span>
                            ) : (
                              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-brand-950 opacity-80 group-hover:opacity-100 group-hover:scale-110 shadow-sm transition-all">
                                <Play className="ml-0.5 h-3 w-3 fill-current" />
                              </span>
                            )}
                          </span>

                          {/* Index badge */}
                          <span className="absolute bottom-1 right-1 rounded bg-black/75 px-1 py-0.5 text-[9.5px] font-semibold text-white/90">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </span>

                        {/* Title and status */}
                        <div className="flex-1 min-w-0">
                          {selected && (
                            <span className="mb-1 inline-flex items-center gap-1 text-[11px] font-bold text-brand-600">
                              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
                              {isBn ? "এখন চলছে" : "Playing"}
                            </span>
                          )}
                          <p
                            className={`line-clamp-2 text-[12.5px] sm:text-[13px] leading-snug transition-colors ${
                              selected
                                ? "font-bold text-brand-900"
                                : "font-semibold text-slate-700 group-hover:text-brand-700"
                            }`}
                          >
                            {title}
                          </p>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Explore All Videos Button ----------------------------------- */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/videos"
            className="group inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-7 py-3 text-sm font-semibold text-brand-700 shadow-card hover:border-brand-600 hover:bg-brand-600 hover:text-white hover:shadow-card-hover transition-all duration-300"
          >
            <span>{isBn ? "সব ভিডিও দেখুন" : "Explore all videos"}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default VideoGallery;
