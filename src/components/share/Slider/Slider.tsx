"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/provider/LanguageProvider";
import Container from "../Container";
import SliderFallback from "./SliderFallback";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type Banner = {
  _id: string;
  category: string;
  thumnailImages: string[];
  english_title: string;
  bangla_title: string;
  english_short_description: string;
  bangla_short_description: string;
};

const AUTOPLAY_MS = 7000;

/**
 * Home hero — official masthead.
 *
 * Mobile first (the majority of visitors): the banner artwork leads as a
 * full-bleed strip directly under the header, followed by the statement block,
 * so the identity of the foundation is visible without scrolling. From `sm`
 * upward the artwork becomes a framed, captioned plaque, and from `xl` the two
 * halves sit side by side — statement on the institutional green, plaque on the
 * right.
 *
 * The banner feed carries wide, art-directed artwork (≈2.7:1, a watercolour
 * field with the photograph pulled to one side). The frame therefore keeps a
 * wide 2.5:1 window at every breakpoint with a centred crop, which preserves
 * essentially the whole design instead of slicing it into a portrait box.
 * Autoplay pauses on hover, on keyboard focus and for `prefers-reduced-motion`;
 * arrows and progress tabs only appear when more than one banner is published.
 */
const Slider = () => {
  const [bannerData, setBannerData] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { language } = useLanguage();
  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchSlides = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/banner`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error("Failed to fetch slides data");
        const data = await response.json();
        setBannerData(data?.data?.banners ?? []);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setError((err as Error).message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
    return () => controller.abort();
  }, []);

  const slides = React.useMemo(
    () => bannerData.filter((item) => item.category === "Banner").slice(0, 5),
    [bannerData],
  );

  const goTo = useCallback(
    (index: number) => {
      if (slides.length === 0) return;
      setActive(((index % slides.length) + slides.length) % slides.length);
    },
    [slides.length],
  );

  /* Autoplay */
  useEffect(() => {
    if (paused || slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % slides.length),
      AUTOPLAY_MS,
    );
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  if (error || loading || slides.length === 0) {
    return <SliderFallback isBn={language === "BNG"} />;
  }

  const isBn = language === "BNG";
  const current = slides[active];
  const multi = slides.length > 1;

  return (
    <section
      ref={regionRef}
      aria-roledescription="carousel"
      aria-label={isBn ? "প্রধান ব্যানার" : "Featured banners"}
      className="relative isolate overflow-hidden bg-brand-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Institutional green field with a soft light source at the top left */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(120% 150% at 14% 0%, #0F5C3A 0%, #0A3D28 44%, #072A1C 100%)",
        }}
      />

      <Container>
        <div className="grid items-center gap-8 pb-8 sm:gap-10 sm:py-11 xl:grid-cols-12 xl:gap-14 xl:py-16">
          {/* ------------------------------------------------------------ */}
          {/* Statement                                                     */}
          {/* ------------------------------------------------------------ */}
          <div className="xl:col-span-6">
            <div key={current._id} className="animate-fade-up motion-reduce:animate-none">
              <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-300">
                <span
                  className="h-[2px] w-7 rounded-full bg-gradient-to-r from-gold-500 to-gold-300"
                  aria-hidden="true"
                />
                {isBn ? "রাষ্ট্র গঠনে নিবেদিত" : "Dedicated to nation building"}
              </p>

              <h1 className="font-display mt-4 text-[26px] font-bold leading-[1.2] tracking-tight text-white sm:text-4xl sm:leading-[1.16] md:text-[40px] xl:text-[44px] xl:leading-[1.14]">
                {isBn ? current.bangla_title : current.english_title}
              </h1>

              <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-brand-100 sm:text-[15px] xl:text-[15.5px]">
                {isBn
                  ? current.bangla_short_description
                  : current.english_short_description}
              </p>
            </div>

            <div className="mt-7 flex gap-3">
              <Link
                href="/about"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-white/45 hover:bg-white/10 focus-visible:outline-offset-4 sm:flex-none sm:px-6"
              >
                {isBn ? "আরও জানুন" : "Learn More"}
                <ChevronRightIcon sx={{ fontSize: 18 }} />
              </Link>

              <Link
                href="/donations"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-sm font-bold text-brand-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-md focus-visible:outline-offset-4 sm:flex-none sm:px-6"
              >
                <VolunteerActivismOutlinedIcon sx={{ fontSize: 18 }} />
                {isBn ? "অনুদান দিন" : "Donate Now"}
              </Link>
            </div>

            {/* Slide control bar — only meaningful with more than one banner */}
            {multi && (
              <div className="mt-6 flex items-center gap-5">
                <div
                  className="flex items-center gap-2"
                  role="tablist"
                  aria-label={isBn ? "স্লাইড নির্বাচন" : "Choose slide"}
                >
                  {slides.map((slide, index) => (
                    <button
                      key={slide._id}
                      type="button"
                      role="tab"
                      aria-selected={index === active}
                      aria-label={`${isBn ? "স্লাইড" : "Slide"} ${index + 1}`}
                      onClick={() => goTo(index)}
                      className="group flex h-6 items-center"
                    >
                      <span className="relative block h-[3px] w-10 overflow-hidden rounded-full bg-white/20 sm:w-12">
                        <span
                          className="absolute inset-y-0 left-0 rounded-full bg-gold-500"
                          style={{
                            width: index === active ? "100%" : "0%",
                            transitionProperty: "width",
                            transitionTimingFunction: "linear",
                            transitionDuration:
                              index === active && !paused
                                ? `${AUTOPLAY_MS}ms`
                                : "200ms",
                          }}
                        />
                      </span>
                    </button>
                  ))}
                </div>

                <span className="shrink-0 text-[11.5px] font-bold tabular-nums text-white/60">
                  {String(active + 1).padStart(2, "0")}
                  <span className="mx-1 text-white/30">/</span>
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>
            )}
          </div>

          {/* ------------------------------------------------------------ */}
          {/* Banner artwork — 27th anniversary commemorative medallion    */}
          {/* ------------------------------------------------------------ */}
          <div className="relative order-first flex items-center justify-center xl:order-none xl:col-span-6">
            <div className="relative aspect-square w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] xl:max-w-[480px]">
              {/* Ambient backlight glow */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gold-500/15 blur-2xl filter"
                aria-hidden="true"
              />
              {slides.map((slide, index) => {
                const heroFallbackImage =
                  "/images/anniversary/shoronika-hero-circle.png";
                const rawImage = slide.thumnailImages?.[0];
                const image =
                  index === 0 || !rawImage || rawImage === "/banner.svg"
                    ? heroFallbackImage
                    : rawImage;
                return (
                  <div
                    key={slide._id}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} / ${slides.length}`}
                    aria-hidden={index !== active}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-editorial motion-reduce:transition-none ${
                      index === active
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
                  >
                    {image && (
                      <div className="relative h-full w-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]">
                        <Image
                          src={image}
                          alt={
                            isBn
                              ? "জিয়াউর রহমান ফাউন্ডেশন ২৭তম প্রতিষ্ঠাবার্ষিকী"
                              : "Ziaur Rahman Foundation 27th Anniversary"
                          }
                          fill
                          priority={index === 0}
                          unoptimized={image.endsWith(".svg")}
                          sizes="(max-width: 639px) 340px, (max-width: 1279px) 460px, 480px"
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                );
              })}

              {multi && (
                <div className="absolute bottom-2 right-2 z-10 flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => goTo(active - 1)}
                    aria-label={isBn ? "পূর্ববর্তী স্লাইড" : "Previous slide"}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-950/60 text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-brand-950/80 hover:ring-gold-400/70 focus-visible:outline-offset-2 sm:h-10 sm:w-10"
                  >
                    <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(active + 1)}
                    aria-label={isBn ? "পরবর্তী স্লাইড" : "Next slide"}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-950/60 text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-brand-950/80 hover:ring-gold-400/70 focus-visible:outline-offset-2 sm:h-10 sm:w-10"
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: 13 }} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Gold hairline closes the masthead, mirroring the header rule */}
      <div
        className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-brand-700 via-gold-500 to-brand-700"
        aria-hidden="true"
      />
    </section>
  );
};

export default Slider;
