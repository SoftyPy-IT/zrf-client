"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHospitalAlt,
  FaChalkboardTeacher,
  FaGavel,
  FaTree,
  FaGraduationCap,
  FaWater,
  FaCarrot,
  FaSyringe,
  FaBook,
  FaRecycle,
  FaSeedling,
  FaStethoscope,
} from "react-icons/fa";
import { FaHandHoldingMedical, FaHandshakeSimple } from "react-icons/fa6";
import { GiAppleSeeds } from "react-icons/gi";
import { MdVolunteerActivism } from "react-icons/md";
import { ArrowRight } from "lucide-react";

import PageBody from "@/components/share/PageBody";
import SectionHeading from "@/components/share/SectionHeading";
import { Skeleton, SkeletonText, LoadingStatus } from "@/components/share/Skeleton";
import { useProgrammData } from "@/hooks/useProgrammData";
import { useLanguage } from "@/provider/LanguageProvider";
import { TProgramm } from "@/types/type";

/** Pagination step is unchanged from the previous implementation. */
const PAGE_SIZE = 8;

/** Illustrated mark for each programme, cycled so the grid stays varied. */
const getIcon = (index: number) => {
  const iconClass =
    "h-8 w-8 text-brand-600 transition-colors group-hover:text-white";

  switch (index) {
    case 1:
      return <FaHospitalAlt className={iconClass} />;
    case 2:
      return <FaRecycle className={iconClass} />;
    case 3:
      return <MdVolunteerActivism className={iconClass} />;
    case 4:
      return <FaChalkboardTeacher className={iconClass} />;
    case 5:
      return <FaTree className={iconClass} />;
    case 6:
      return <FaStethoscope className={iconClass} />;
    case 7:
      return <FaCarrot className={iconClass} />;
    case 8:
      return <FaBook className={iconClass} />;
    case 9:
      return <FaGavel className={iconClass} />;
    case 10:
      return <FaGraduationCap className={iconClass} />;
    case 11:
      return <GiAppleSeeds className={iconClass} />;
    case 12:
      return <FaSeedling className={iconClass} />;
    case 13:
      return <FaHandHoldingMedical className={iconClass} />;
    case 14:
      return <FaSyringe className={iconClass} />;
    case 15:
      return <FaWater className={iconClass} />;
    case 16:
      return <FaHandshakeSimple className={iconClass} />;
    default:
      return <FaHospitalAlt className={iconClass} />;
  }
};

/**
 * Our Programmes listing.
 *
 * Same hook, ordering and load-more behaviour as before, presented as a
 * three-up grid of surface-card panels with the same icon-tile treatment the
 * home page uses for programmes.
 */
const ProgrammSection = () => {
  const { programmData, loading, error } = useProgrammData();
  const { language } = useLanguage();
  const pathname = usePathname();
  const isBn = language === "BNG";

  const sortedProgrammData = [...(programmData || [])].sort(
    (a: TProgramm, b: TProgramm) =>
      new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleProgrammes = sortedProgrammData.slice(0, visibleCount);
  const showSkeleton = loading && sortedProgrammData.length === 0;

  if (error) return null;

  return (
    <PageBody>
      <SectionHeading
        eyebrow={isBn ? "আমাদের কাজ" : "What we do"}
        title={isBn ? "উল্লেখযোগ্য কাজ" : "Remarkable works"}
        subtitle={
          isBn
            ? "ফাউন্ডেশনের বার্ষিক কল্যাণ কর্মসূচি — স্বাস্থ্য ক্যাম্প, শিক্ষা সহায়তা, খাদ্য নিরাপত্তা ও সামাজিক অন্তর্ভুক্তি।"
            : "The foundation's annual welfare calendar — health camps, education support, food security and social inclusion."
        }
      />

      <div
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-busy={showSkeleton}
      >
        {showSkeleton && (
          <>
            <LoadingStatus
              label={isBn ? "কর্মসূচি লোড হচ্ছে" : "Loading programmes"}
            />
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                aria-hidden="true"
                className="rounded-card border border-slate-200 bg-white p-6"
              >
                <Skeleton className="h-14 w-14 rounded-lg" />
                <Skeleton className="mt-4 h-4 w-3/4" />
                <SkeletonText lines={3} className="mt-3" lineClassName="h-3" />
                <Skeleton className="mt-5 h-3 w-24" />
              </div>
            ))}
          </>
        )}

        {!showSkeleton &&
          visibleProgrammes.map((program, index) => {
            const title = isBn ? program.bangla_title : program.english_title;
            const description = isBn
              ? program.bangla_short_description
              : program.english_short_description;

            return (
              <article
                key={program._id}
                className="group surface-card surface-card-hover flex flex-col p-6"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand-50 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:ring-brand-600">
                  {getIcon(index + 1)}
                </span>

                <h3 className="mt-4 text-[16px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
                  {title}
                </h3>

                <p className="clamp-3 mt-2 text-[13.5px] leading-relaxed text-slate-600">
                  {description}
                </p>

                <Link
                  href="/program"
                  aria-label={title}
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[13px] font-bold text-brand-700 transition-colors hover:text-brand-800"
                >
                  {isBn ? "বিস্তারিত" : "Learn more"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
      </div>

      {!showSkeleton && visibleProgrammes.length === 0 && (
        <p className="py-4 text-center text-[14px] text-slate-500">
          {isBn
            ? "এই মুহূর্তে কোনো কর্মসূচি নেই।"
            : "No programmes to show yet."}
        </p>
      )}

      {!showSkeleton && visibleCount < sortedProgrammData.length && (
        <div className="mt-10 flex justify-center">
          {pathname === "/about" ? (
            <Link
              href="/program"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-[13.5px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
            >
              {isBn ? "আরো দেখুন" : "See more"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-[13.5px] font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              {isBn ? "আরো লোড" : "Load more"}
            </button>
          )}
        </div>
      )}
    </PageBody>
  );
};

export default ProgrammSection;
