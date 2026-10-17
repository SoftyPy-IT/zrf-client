"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/share/Container";
import SectionHeading from "@/components/share/SectionHeading";
import { Skeleton, SkeletonText, LoadingStatus } from "@/components/share/Skeleton";
import { TProgramm } from "@/types/type";
import truncateText from "@/utils/truncate";
import { ArrowRight } from "lucide-react";

import asthma from "../../../../../src/assets/icon/asthma.png";
import conservation from "../../../../../src/assets/icon/conservation.png";
import democracy from "../../../../../src/assets/icon/democracy.png";
import forest from "../../../../../src/assets/icon/forest.png";
import health from "../../../../../src/assets/icon/herlth.png";
import medical from "../../../../../src/assets/icon/medical.png";
import publicLibrary from "../../../../../src/assets/icon/publicLibrary.png";
import scholarship from "../../../../../src/assets/icon/scholarship.png";
import seed from "../../../../../src/assets/icon/seed.png";
import surgery from "../../../../../src/assets/icon/surgery.png";
import education from "../../../../../src/assets/icon/teaching.png";
import vegetable from "../../../../../src/assets/icon/vegetables.png";
import volunteer from "../../../../../src/assets/icon/volunteering.png";

interface programmProps {
  programmData: TProgramm[];
  language: string;
  loading?: boolean;
}

/** Cycles the illustrated icon set so each programme card gets a distinct mark. */
const getIcon = (index: number) => {
  const icons = [
    health,
    conservation,
    volunteer,
    education,
    forest,
    medical,
    vegetable,
    publicLibrary,
    democracy,
    scholarship,
    publicLibrary,
    seed,
    forest,
    surgery,
    asthma,
  ];
  return icons[index % icons.length];
};

const ProgrammData: React.FC<programmProps> = ({
  programmData,
  language,
  loading,
}) => {
  const isBn = language === "BNG";

  const programs = [...(programmData || [])]
    .sort(
      (a: TProgramm, b: TProgramm) =>
        new Date(a.date).getTime() - new Date(b.date).getTime(),
    )
    .slice(0, 4);

  const showSkeleton = loading && programs.length === 0;

  if (!showSkeleton && programs.length === 0) return null;

  return (
    <section className="section-y bg-slate-50" aria-busy={showSkeleton}>
      <Container>
        <SectionHeading
          eyebrow={isBn ? "আমরা যা করি" : "What we do"}
          title={isBn ? "আমাদের কর্মসূচি" : "Our Programmes"}
          subtitle={
            isBn
              ? "স্বাস্থ্য, শিক্ষা, খাদ্য নিরাপত্তা ও সামাজিক অন্তর্ভুক্তির মাধ্যমে সারা দেশে মানুষের সেবা করে আমরা।"
              : "Serving communities nationwide through health, education, food security and social inclusion."
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {showSkeleton && (
            <>
              <LoadingStatus
                label={isBn ? "কর্মসূচি লোড হচ্ছে" : "Loading programmes"}
              />
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  aria-hidden="true"
                  className="rounded-card border border-slate-200 bg-white p-5"
                >
                  <Skeleton className="h-14 w-14 rounded-lg" />
                  <Skeleton className="mt-4 h-4 w-3/4" />
                  <SkeletonText lines={3} className="mt-3" lineClassName="h-3" />
                  <Skeleton className="mt-5 h-3 w-24" />
                </div>
              ))}
            </>
          )}

          {programs.map((program, index) => {
            const title = isBn ? program.bangla_title : program.english_title;
            const description = isBn
              ? program.bangla_short_description
              : program.english_short_description;

            return (
              <article
                key={program._id}
                className="group flex flex-col rounded-card border border-slate-200 bg-white p-5 transition-all duration-300 ease-editorial hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-brand-50 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:ring-brand-600">
                  <Image
                    src={getIcon(index)}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </span>

                <h3 className="mt-4 text-[15px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
                  {truncateText(title, 54)}
                </h3>

                <p className="clamp-3 mt-2 text-[13px] leading-relaxed text-slate-600">
                  {truncateText(description, 92)}
                </p>

                <Link
                  href="/program"
                  aria-label={title}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[12.5px] font-bold text-brand-700 transition-colors hover:text-brand-800"
                >
                  {isBn ? "বিস্তারিত" : "Learn more"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/program"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-[13.5px] font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
          >
            {isBn ? "সব কর্মসূচি দেখুন" : "View all programmes"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ProgrammData;
