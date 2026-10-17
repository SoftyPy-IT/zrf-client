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
 * Home hero.
 *
 * Two balanced halves on large screens — the mission statement on the institutional
 * green, the foundation's own photography framed beside it — stacking to copy-then-image
 * on smaller screens. The height is driven by the content, so nothing leaves a dead
 * band under the calls to action, and the banner artwork is never crushed under a
 * full-bleed scrim. Autoplay pauses on hover, on keyboard focus and for
 * `prefers-reduced-motion`.
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

  const facts = [
    isBn ? "প্রতিষ্ঠিত ১৯৯৯" : "Established 1999",
    isBn ? "ঢাকা, বাংলাদেশ" : "Dhaka, Bangladesh",
    isBn ? "মানবিক ও কল্যাণমূলক" : "Humanitarian & welfare",
  ];

  return (
    <section
      ref={regionRef}
      aria-roledescription="carousel"
      aria-label={isBn ? "প্রধান ব্যানার" : "Featured banners"}
      className="relative isolate overflow-hidden bg-brand-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-900 via-brand-950 to-brand-950"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-10 py-11 lg:grid-cols-12 lg:gap-14 lg:py-16">
          {/* ------------------------------------------------------------ */}
          {/* Mission statement                                            */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-6">
            <div key={current._id} className="animate-fade-up">
              <h1 className="text-[27px] font-bold leading-[1.16] tracking-tight text-white sm:text-4xl md:text-[40px] lg:text-[42px] lg:leading-[1.1] xl:text-[46px]">
                {isBn ? current.bangla_title : current.english_title}
              </h1>

              <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-brand-100 sm:text-[15px] lg:text-base">
                {isBn
                  ? current.bangla_short_description
                  : current.english_short_description}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-brand-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-md focus-visible:outline-offset-4"
              >
                {isBn ? "আরও জানুন" : "Learn More"}
                <ChevronRightIcon sx={{ fontSize: 18 }} />
              </Link>

              <Link
                href="/donations"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gold-500/70 bg-transparent px-6 py-3 text-sm font-bold text-gold-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-500 hover:text-brand-950 focus-visible:outline-offset-4"
              >
                <VolunteerActivismOutlinedIcon sx={{ fontSize: 18 }} />
                {isBn ? "অনুদান দিন" : "Donate Now"}
              </Link>
            </div>

            {/* Institutional reference line */}
            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2.5 border-t border-white/10 pt-5 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-brand-300">
              {facts.map((fact) => (
                <li key={fact} className="flex items-center gap-2">
                  <span
                    className="h-1 w-1 rounded-full bg-gold-500"
                    aria-hidden="true"
                  />
                  {fact}
                </li>
              ))}
            </ul>

            {/* Slide control bar — only meaningful with more than one banner */}
            {slides.length > 1 && (
              <div className="mt-8 flex items-center gap-6">
                <div className="flex flex-1 items-center gap-2.5" role="tablist">
                  {slides.map((slide, index) => (
                    <button
                      key={slide._id}
                      type="button"
                      role="tab"
                      aria-selected={index === active}
                      aria-label={`${isBn ? "স্লাইড" : "Slide"} ${index + 1}`}
                      onClick={() => goTo(index)}
                      className="group relative h-1 flex-1 max-w-[72px] overflow-hidden rounded-full bg-white/25"
                    >
                      <span
                        className={`absolute inset-y-0 left-0 rounded-full bg-gold-500 transition-all ${
                          index === active
                            ? "w-full duration-[7000ms] ease-linear"
                            : "w-0 duration-200"
                        }`}
                        style={{
                          transitionDuration:
                            index === active && !paused
                              ? `${AUTOPLAY_MS}ms`
                              : "200ms",
                        }}
                      />
                    </button>
                  ))}
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <span className="mr-1 text-[12px] font-bold tabular-nums text-white/70">
                    {String(active + 1).padStart(2, "0")}
                    <span className="mx-1 text-white/40">/</span>
                    {String(slides.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={() => goTo(active - 1)}
                    aria-label={isBn ? "পূর্ববর্তী স্লাইড" : "Previous slide"}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition-colors hover:border-gold-400 hover:bg-gold-500 hover:text-brand-950"
                  >
                    <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(active + 1)}
                    aria-label={isBn ? "পরবর্তী স্লাইড" : "Next slide"}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition-colors hover:border-gold-400 hover:bg-gold-500 hover:text-brand-950"
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ------------------------------------------------------------ */}
          {/* Banner artwork                                               */}
          {/* ------------------------------------------------------------ */}
          <figure className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-panel bg-brand-900 ring-1 ring-white/10 sm:aspect-[2/1] lg:aspect-[4/3] xl:aspect-[16/11]">
              {slides.map((slide, index) => {
                const image = slide.thumnailImages?.[0];
                return (
                  <div
                    key={slide._id}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} / ${slides.length}`}
                    aria-hidden={index !== active}
                    className={`absolute inset-0 transition-opacity duration-700 ease-editorial ${
                      index === active
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
                  >
                    {image && (
                      <Image
                        src={image}
                        alt=""
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 640px"
                        className="object-cover object-[93%_50%]"
                      />
                    )}
                  </div>
                );
              })}

              {/* Grounding shade keeps the frame from looking pasted on */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
};

export default Slider;
