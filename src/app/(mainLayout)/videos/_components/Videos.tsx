"use client";

import React, { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import { LoadingStatus, Skeleton } from "@/components/share/Skeleton";
import { useVideoData } from "@/hooks/useVideoData";
import { useLanguage } from "@/provider/LanguageProvider";
import { TVideo } from "@/types/type";
import { ChevronDown, Play } from "lucide-react";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const getYouTubeId = (url: string): string | null => {
  if (!url) return null;
  const regExp = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|live\/|watch\?.+&v=))([\w-]{11})/;
  const match = url.match(regExp);
  if (match && match[1]) return match[1];
  const vMatch = url.match(/[?&]v=([^?#&]+)/);
  if (vMatch && vMatch[1]) return vMatch[1];
  return null;
};

const getThumbnail = (video: TVideo) => {
  /* The API may carry an uploaded still; otherwise derive the YouTube still. */
  const uploads = (video as TVideo & { thumnailImages?: string[] })
    .thumnailImages;
  if (uploads && uploads.length > 0) return uploads[0];
  if (video.thumbnail_url) return video.thumbnail_url;
  const id = getYouTubeId(video.video_url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
};

/** Videos revealed on first paint and added by each "load more" press. */
const INITIAL_COUNT = 8;
const PAGE_SIZE = 6;

/**
 * Video gallery laid out as a media centre: one featured player with a
 * scrollable playlist beside it, matching the home-page video section. The
 * playlist reveals more videos on demand.
 */
const Videos = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const { videoData, loading, error } = useVideoData();
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const selectVideo = useCallback((index: number) => {
    setActiveIndex(index);
    setPlaying(false);
  }, []);

  const visibleVideos = videoData.slice(0, visibleCount);
  const hasMore = visibleCount < videoData.length;
  const activeVideo = videoData[activeIndex];
  const showSkeleton = loading && videoData.length === 0;

  const activeTitle = activeVideo
    ? isBn
      ? activeVideo.video_title_bangla || activeVideo.video_title_english
      : activeVideo.video_title_english || activeVideo.video_title_bangla
    : "";
  const activeThumb = activeVideo ? getThumbnail(activeVideo) : null;

  return (
    <>
      <CommonBanner
        title={isBn ? "ভিডিও গ্যালারি" : "Video Gallery"}
        subtitle={
          isBn
            ? "জেডআরএফের কার্যক্রম, প্রামাণ্যচিত্র এবং কভারেজ দেখুন।"
            : "Watch ZRF programme films, documentaries and field coverage."
        }
      />

      <PageBody tone="slate">
        {showSkeleton ? (
          <div
            aria-busy="true"
            className="grid grid-cols-1 gap-6 lg:grid-cols-12"
          >
            <LoadingStatus label={isBn ? "ভিডিও লোড হচ্ছে" : "Loading videos"} />
            <div className="lg:col-span-8">
              <Skeleton className="aspect-video w-full rounded-panel" />
            </div>
            <div className="lg:col-span-4">
              <div className="flex h-full flex-col gap-2 rounded-panel border border-slate-200 bg-white p-4">
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
        ) : error || !activeVideo ? (
          <p className="py-16 text-center text-sm text-slate-500">
            {isBn
              ? "এই মুহূর্তে কোনো ভিডিও পাওয়া যায়নি।"
              : "No videos found at the moment."}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Featured player ---------------------------------------- */}
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
                      aria-label={`${
                        isBn ? "ভিডিও চালান" : "Play video"
                      }: ${activeTitle}`}
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
                          <Play className="ml-0.5 h-7 w-7 fill-current" aria-hidden="true" />
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

            {/* Playlist ------------------------------------------------ */}
            <div className="lg:col-span-4">
              <div className="flex h-full flex-col rounded-panel border border-slate-200 bg-white p-4">
                <h3 className="px-1 pb-3 text-[11.5px] font-bold uppercase tracking-[0.1em] text-slate-500">
                  {isBn ? "ভিডিও তালিকা" : "All videos"}
                </h3>

                <ul className="no-scrollbar flex max-h-[420px] flex-col gap-1.5 overflow-y-auto lg:max-h-none lg:flex-1">
                  {visibleVideos.map((video, index) => {
                    const thumb = getThumbnail(video);
                    const title =
                      (isBn
                        ? video.video_title_bangla
                        : video.video_title_english) ||
                      video.video_title_english ||
                      video.video_title_bangla;
                    const selected = index === activeIndex;

                    return (
                      <li key={video._id}>
                        <button
                          type="button"
                          onClick={() => selectVideo(index)}
                          aria-current={selected}
                          className={`flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors ${
                            selected
                              ? "bg-brand-50 ring-1 ring-brand-200"
                              : "hover:bg-slate-50"
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
                              <Play
                                className="h-4 w-4 fill-white text-white"
                                aria-hidden="true"
                              />
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

                {hasMore && (
                  <div className="mt-3 border-t border-slate-200 pt-3">
                    <button
                      type="button"
                      onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                    >
                      {isBn ? "আরও লোড করুন" : "Load more"}
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </PageBody>
    </>
  );
};

export default Videos;
