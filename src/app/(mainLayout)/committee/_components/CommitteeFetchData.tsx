"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import PageBody from "@/components/share/PageBody";
import SectionHeading from "@/components/share/SectionHeading";
import {
  LoadingStatus,
  Skeleton,
  SkeletonText,
} from "@/components/share/Skeleton";
import { TCommitte } from "@/types/type";
import CommitteeBanner from "./CommitteeBanner";

interface CommitteProps {
  committeeData: TCommitte[];
  language: string;
  /** Shows the skeleton grid while the committee feed is in flight. */
  loading?: boolean;
}

const SECTIONS: {
  key: string;
  label: { eng: string; bn: string };
  category: string;
}[] = [
  {
    key: "board-of-directors",
    label: { eng: "Board of Directors", bn: "পরিচালনা পর্ষদ" },
    category: "president",
  },
  {
    key: "committee",
    label: { eng: "Committee", bn: "কমিটি" },
    category: "exicutive",
  },
  {
    key: "advisory-council",
    label: { eng: "Advisory Council", bn: "পরামর্শক পরিষদ" },
    category: "Committee",
  },
];

const enhanceImageUrl = (url?: string): string | undefined => {
  if (!url) return url;
  const marker = "/image/upload/";
  const idx = url.indexOf(marker);
  if (idx === -1) return url;
  const rest = url.slice(idx + marker.length);
  if (!/^v\d+/.test(rest)) return url;
  return `${url.slice(0, idx + marker.length)}f_auto,q_auto,w_560,h_448,c_fill,g_auto/${rest}`;
};

/**
 * Committee index.
 *
 * Same endpoint, category grouping and serial-number ordering as before. The
 * decorative gradient cards are replaced by the site's uniform `surface-card`
 * member panel, with the portrait carrying a 3:4 crop.
 */
const CommitteeFetchData: React.FC<CommitteProps> = ({
  committeeData,
  language,
  loading = false,
}) => {
  const isBn = language === "BNG";

  const filteredData = (committeeData || []).filter(
    (profile) =>
      profile.category && profile.category.toLowerCase() !== "volunteer",
  );

  const byCategory = filteredData.reduce<Record<string, TCommitte[]>>(
    (acc, profile) => {
      const cat = profile.category || "";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(profile);
      return acc;
    },
    {},
  );

  Object.keys(byCategory).forEach((cat) => {
    byCategory[cat].sort((a, b) => {
      const snA = a.serial_no != null ? a.serial_no : 99999;
      const snB = b.serial_no != null ? b.serial_no : 99999;
      return snA - snB;
    });
  });

  const renderedSections = SECTIONS.filter(
    (section) => byCategory[section.category]?.length,
  );
  const extraCategories = Object.keys(byCategory).filter(
    (cat) => !SECTIONS.some((section) => section.category === cat),
  );

  const showSkeleton = loading && filteredData.length === 0;

  const ProfileCard = ({
    name,
    imageSrc,
    designation,
  }: {
    name: string;
    imageSrc?: string | StaticImageData;
    designation: string;
  }) => {
    return (
      <article className="group surface-card surface-card-hover p-4">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-slate-100 ring-1 ring-slate-100">
          {imageSrc ? (
            <Image
              src={enhanceImageUrl(imageSrc as string) || imageSrc}
              alt={name || (isBn ? "কমিটির সদস্য" : "Committee member")}
              fill
              quality={85}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
              className="object-cover object-[center_20%] transition-transform duration-500 ease-editorial group-hover:scale-[1.03]"
            />
          ) : (
            <span className="flex h-full items-center justify-center bg-brand-50 text-3xl font-bold text-brand-600/70">
              {name?.charAt(0) || "Z"}
            </span>
          )}
        </div>

        <div className="px-1 pb-1 pt-4">
          <h3 className="text-[15.5px] font-bold leading-snug text-slate-900">
            {name || ""}
          </h3>
          {designation && (
            <p className="mt-1.5 text-[12.5px] font-semibold uppercase tracking-wide text-brand-700">
              {designation}
            </p>
          )}
        </div>
      </article>
    );
  };

  const renderMembers = (members: TCommitte[]) => (
    <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {members.map((profile) => (
        <ProfileCard
          key={profile._id}
          name={
            isBn
              ? profile.bangla_name || profile.english_name || ""
              : profile.english_name || profile.bangla_name || ""
          }
          imageSrc={profile.images?.[0]}
          designation={
            isBn
              ? profile.designation_bangla ||
                profile.designation_english ||
                ""
              : profile.designation_english ||
                profile.designation_bangla ||
                ""
          }
        />
      ))}
    </div>
  );

  const renderSection = (title: string, members: TCommitte[]) => (
    <section key={title} className="mb-16 last:mb-0">
      <SectionHeading title={title} />
      {renderMembers(members)}
    </section>
  );

  return (
    <>
      <CommitteeBanner language={language} />

      <PageBody tone="slate">
        {showSkeleton ? (
          <div aria-busy="true">
            <LoadingStatus
              label={isBn ? "কমিটি লোড হচ্ছে" : "Loading committee"}
            />
            <SectionHeading
              eyebrow={isBn ? "আমাদের নেতৃত্ব" : "Our leadership"}
              title={isBn ? "কমিটি" : "Committee"}
            />
            <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                <div
                  key={index}
                  aria-hidden="true"
                  className="rounded-card border border-slate-200 bg-white p-4"
                >
                  <Skeleton className="aspect-[3/4] rounded-lg" />
                  <Skeleton className="mt-4 h-4 w-3/4" />
                  <SkeletonText
                    lines={1}
                    className="mt-2"
                    lineClassName="h-3"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : filteredData.length === 0 ? (
          <p className="rounded-card border border-slate-200 bg-white p-8 text-center text-[13.5px] text-slate-500">
            {isBn
              ? "কোনো কমিটির সদস্য পাওয়া যায়নি।"
              : "No committee members found."}
          </p>
        ) : (
          <>
            {renderedSections.map((section) =>
              renderSection(
                isBn ? section.label.bn : section.label.eng,
                byCategory[section.category],
              ),
            )}
            {extraCategories.map((cat) =>
              renderSection(cat, byCategory[cat]),
            )}
          </>
        )}
      </PageBody>
    </>
  );
};

export default CommitteeFetchData;
