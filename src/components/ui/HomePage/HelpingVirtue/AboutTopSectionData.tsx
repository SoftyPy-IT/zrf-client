"use client";

import React from "react";
import Image from "next/image";
import { Eye, Megaphone, Target } from "lucide-react";
import PageBody from "@/components/share/PageBody";
import SectionHeading from "@/components/share/SectionHeading";
import RenderContent from "@/components/Common/RenderContent";
import {
  LoadingStatus,
  Skeleton,
  SkeletonText,
} from "@/components/share/Skeleton";
import { TAbout } from "@/types/type";

type Language = "ENG" | "BNG";

interface AboutProps {
  aboutData: TAbout[];
  language: Language;
  /** Shows placeholders while the about feed is in flight. */
  loading?: boolean;
}

type PillarKey = "Mission" | "Vision" | "Slogan";

const PILLARS: {
  key: PillarKey;
  icon: React.ElementType;
  label: { ENG: string; BNG: string };
}[] = [
  {
    key: "Mission",
    icon: Target,
    label: { ENG: "Mission", BNG: "মিশন" },
  },
  {
    key: "Vision",
    icon: Eye,
    label: { ENG: "Vision", BNG: "ভিশন" },
  },
  {
    key: "Slogan",
    icon: Megaphone,
    label: { ENG: "Slogan", BNG: "স্লোগান" },
  },
];

/**
 * Top of the About page.
 *
 * Two bands: the "who we are" story (image + CMS prose, mirroring the editorial
 * story block on the home page) and the mission / vision / slogan pillars as a
 * three-up grid of `surface-card` panels with icon tiles.
 *
 * The previous tabbed switcher showed one category at a time; the grid now keeps
 * every field on the page at once, which reads better for search and screen
 * readers alike.
 */
const AboutTopSectionData: React.FC<AboutProps> = ({
  aboutData,
  language,
  loading = false,
}) => {
  const isBn = language === "BNG";

  const aboutEntry = (aboutData || []).find(
    (item) => item.category === "About",
  );

  const pillars = PILLARS.map((pillar) => ({
    ...pillar,
    data: (aboutData || []).find((item) => item.category === pillar.key),
  })).filter((pillar) => Boolean(pillar.data));

  const showSkeleton = loading && (aboutData || []).length === 0;

  if (!showSkeleton && (aboutData || []).length === 0) return null;

  const aboutImage =
    aboutEntry?.images?.[0] ||
    (aboutData || []).find((item) => item.images?.length)?.images?.[0];

  const aboutTitle = isBn
    ? aboutEntry?.title_bangla || aboutEntry?.title_english
    : aboutEntry?.title_english || aboutEntry?.title_bangla;

  const aboutDescription = isBn
    ? aboutEntry?.description_banlga
    : aboutEntry?.description_enlgish;

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Who we are                                                          */}
      {/* ------------------------------------------------------------------ */}
      {showSkeleton ? (
        <PageBody>
          <div
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            aria-busy="true"
          >
            <LoadingStatus
              label={isBn ? "আমাদের সম্পর্কে লোড হচ্ছে" : "Loading about ZRF"}
            />
            <Skeleton className="aspect-[4/3] rounded-panel" />
            <div>
              <SectionHeading
                align="left"
                eyebrow={isBn ? "আমাদের পরিচয়" : "Who we are"}
                title={isBn ? "জিয়াউর রহমান ফাউন্ডেশন" : "Ziaur Rahman Foundation"}
              />
              <SkeletonText lines={4} className="mt-5" />
              <SkeletonText lines={3} className="mt-4" />
            </div>
          </div>
        </PageBody>
      ) : (
        aboutEntry && (
          <PageBody>
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-panel bg-slate-100 shadow-panel ring-1 ring-slate-200/70">
                {aboutImage ? (
                  <Image
                    src={aboutImage}
                    alt={
                      aboutTitle ||
                      (isBn
                        ? "জিয়াউর রহমান ফাউন্ডেশনের মানবিক কার্যক্রম"
                        : "Ziaur Rahman Foundation humanitarian work")
                    }
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                ) : (
                  <span className="flex h-full items-center justify-center bg-brand-50 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-600/70">
                    ZRF
                  </span>
                )}
              </div>

              <div>
                <SectionHeading
                  align="left"
                  eyebrow={isBn ? "আমাদের পরিচয়" : "Who we are"}
                  title={
                    aboutTitle ||
                    (isBn ? "জিয়াউর রহমান ফাউন্ডেশন" : "Ziaur Rahman Foundation")
                  }
                />

                <div className="mt-5">
                  <RenderContent content={aboutDescription || ""} />
                </div>
              </div>
            </div>
          </PageBody>
        )
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Mission / Vision / Slogan                                           */}
      {/* ------------------------------------------------------------------ */}
      {showSkeleton ? (
        <PageBody tone="slate">
          <SectionHeading
            eyebrow={isBn ? "আমাদের লক্ষ্য" : "Our mandate"}
            title={isBn ? "মিশন, ভিশন ও মূল্যবোধ" : "Mission, vision and values"}
            subtitle={
              isBn
                ? "প্রতিটি জেডআরএফ কর্মসূচি ও সিদ্ধান্তের পেছনে যে নীতিমালা কাজ করে।"
                : "The principles behind every ZRF programme and every decision we make."
            }
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                aria-hidden="true"
                className="rounded-card border border-slate-200 bg-white p-6"
              >
                <Skeleton className="h-14 w-14 rounded-lg" />
                <Skeleton className="mt-4 h-4 w-3/4" />
                <SkeletonText lines={4} className="mt-4" lineClassName="h-3" />
              </div>
            ))}
          </div>
        </PageBody>
      ) : (
        pillars.length > 0 && (
          <PageBody tone="slate">
            <SectionHeading
              eyebrow={isBn ? "আমাদের লক্ষ্য" : "Our mandate"}
              title={isBn ? "মিশন, ভিশন ও মূল্যবোধ" : "Mission, vision and values"}
              subtitle={
                isBn
                  ? "প্রতিটি জেডআরএফ কর্মসূচি ও সিদ্ধান্তের পেছনে যে নীতিমালা কাজ করে।"
                  : "The principles behind every ZRF programme and every decision we make."
              }
            />

            <div
              className={`mt-10 grid grid-cols-1 gap-6 ${
                pillars.length === 1
                  ? "sm:grid-cols-1"
                  : pillars.length === 2
                    ? "sm:grid-cols-2"
                    : "sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {pillars.map(({ key, icon: Icon, label, data }) => {
                if (!data) return null;

                const title = isBn
                  ? data.title_bangla || data.title_english || label.BNG
                  : data.title_english || data.title_bangla || label.ENG;

                const description = isBn
                  ? data.description_banlga
                  : data.description_enlgish;

                return (
                  <article
                    key={key}
                    className="group surface-card surface-card-hover flex flex-col p-6"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand-50 ring-1 ring-brand-100 transition-colors duration-300 group-hover:bg-brand-600 group-hover:ring-brand-600">
                      <Icon
                        className="h-6 w-6 text-brand-600 transition-colors duration-300 group-hover:text-white"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </span>

                    <h3 className="mt-4 text-[16px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
                      {title}
                    </h3>

                    <div className="mt-2">
                      <RenderContent content={description} />
                    </div>
                  </article>
                );
              })}
            </div>
          </PageBody>
        )
      )}
    </>
  );
};

export default AboutTopSectionData;
