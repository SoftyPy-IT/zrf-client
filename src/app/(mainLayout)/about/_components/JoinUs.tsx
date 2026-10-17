"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/share/Container";
import SectionHeading from "@/components/share/SectionHeading";
import RenderContent from "@/components/Common/RenderContent";
import { LoadingStatus, SkeletonText } from "@/components/share/Skeleton";
import { useAboutData } from "@/hooks/useAboutData";
import { useLanguage } from "@/provider/LanguageProvider";

/**
 * Closing call to action for the About page.
 *
 * The "Join Us" copy still comes from the public about endpoint (category
 * `Join Us`); it is presented as a full-width institutional band with a single
 * obvious action rather than the old green/yellow block.
 */
const JoinUs = () => {
  const { language } = useLanguage();
  const { aboutData, loading, error } = useAboutData();
  const isBn = language === "BNG";

  const joinUsData = (aboutData || []).filter(
    (item) => item.category === "Join Us",
  );

  if (error) return null;

  if (loading && joinUsData.length === 0) {
    return (
      <section className="bg-brand-900" aria-busy="true">
        <div className="h-1 w-full bg-gold-500" aria-hidden="true" />
        <Container>
          <div className="py-14 lg:py-16">
            <LoadingStatus
              label={isBn ? "যোগ দেওয়ার তথ্য লোড হচ্ছে" : "Loading join us details"}
            />
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow={isBn ? "পাশে থাকুন" : "Stand with us"}
              title={isBn ? "আমাদের সাথে যোগ দিন" : "Join Us"}
            />
            <SkeletonText
              lines={2}
              tone="dark"
              className="mt-5 max-w-xl"
              lineClassName="h-3.5"
            />
          </div>
        </Container>
      </section>
    );
  }

  if (joinUsData.length === 0) return null;

  return (
    <section className="bg-brand-900">
      <div className="h-1 w-full bg-gold-500" aria-hidden="true" />

      <Container>
        <div className="py-14 lg:py-16">
          {joinUsData.map((data) => {
            const title = isBn
              ? data.title_bangla || data.title_english
              : data.title_english || data.title_bangla;

            const description = isBn
              ? data.description_banlga
              : data.description_enlgish;

            return (
              <div
                key={data._id}
                className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16"
              >
                <div>
                  <SectionHeading
                    align="left"
                    tone="dark"
                    eyebrow={isBn ? "পাশে থাকুন" : "Stand with us"}
                    title={title}
                  />

                  <div className="mt-5 max-w-2xl [&_p]:text-[15px] [&_p]:leading-[1.85] [&_p]:text-brand-100 [&_a]:text-gold-300 [&_a:hover]:text-gold-200 [&_li]:text-brand-100 [&_strong]:text-white">
                    <RenderContent content={description} />
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
                >
                  {isBn ? "যোগাযোগ করুন" : "Get in touch"}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default JoinUs;
