"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  AlertCircle,
  CalendarDays,
  CalendarX,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import Container from "@/components/share/Container";
import PageBody from "@/components/share/PageBody";
import SectionHeading from "@/components/share/SectionHeading";
import RenderContent from "@/components/Common/RenderContent";
import { Skeleton } from "@/components/share/Skeleton";
import { useLanguage } from "@/provider/LanguageProvider";
import { TIntroduction } from "@/types/type";
import Biography from "./Biography";
import Modal from "./Modal";

/**
 * Biography of Shaheed President Ziaur Rahman.
 *
 * A light editorial opening carries the portrait and a short introduction,
 * the biography itself is an editorial column of chapters separated by gold
 * rules, and the page closes on a dark record band with the essential dates.
 */
const FetchZiaurRahmanData = () => {
  const [introductionData, setIntroductionData] = React.useState<
    TIntroduction[]
  >([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const { language } = useLanguage();
  const isBn = language === "BNG";

  React.useEffect(() => {
    const fetchIntroductionData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/introduction?limit=1000`,
          {
            cache: "no-store",
          },
        );
        const data = await response.json();
        const sortedData = data.data?.introductions?.sort(
          (a: TIntroduction, b: TIntroduction) => {
            return (
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
          },
        );

        setIntroductionData(sortedData || []);
      } catch (err) {
        setError("Failed to fetch introduction data.");
      } finally {
        setLoading(false);
      }
    };

    fetchIntroductionData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: string;
  } | null>(null);

  const handleOpen = (
    englishTitle: string,
    banglaDescription: string,
    banglaTitle: string,
    englishDescription: string,
  ) => {
    setModalContent({
      title: language === "ENG" ? englishTitle : banglaTitle,
      content: language === "ENG" ? englishDescription : banglaDescription,
    });
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  const portrait =
    introductionData[0]?.bng_images?.[0] ||
    introductionData[0]?.eng_images?.[0];

  const summary = isBn
    ? "লেফটেন্যান্ট জেনারেল জিয়াউর রহমান বীর উত্তম (১৯৩৬–১৯৮১) ছিলেন স্বাধীনতার ঘোষক এবং এক বীর মুক্তিযোদ্ধা। তিনি সেনাবাহিনী প্রধান হিসেবে দায়িত্ব পালন করেন এবং পরবর্তীতে বাংলাদেশের নির্বাচিত রাষ্ট্রপতি হন। তিনিই বাংলাদেশে বহুদলীয় গণতন্ত্রের সূচনা করেন এবং বাংলাদেশী জাতীয়তাবাদকে সংজ্ঞায়িত করেন; তিনি বাংলাদেশ জাতীয়তাবাদী দলের প্রতিষ্ঠাতা।"
    : "Lieutenant General Ziaur Rahman, Bir Uttam (1936–1981), was the declarer of Bangladesh's independence and a valiant freedom fighter. He served as the Chief of the Army Staff and later became the elected President of Bangladesh. He opened up multi-party democracy in the country and gave shape to Bangladeshi nationalism, and he was the founder of the Bangladesh Nationalist Party.";

  const facts = [
    {
      icon: CalendarDays,
      label: isBn ? "জন্ম" : "Born",
      value: isBn ? "১৯ জানুয়ারি ১৯৩৬" : "19 January 1936",
      detail: isBn ? "বাগবাড়ি, গাবতলী, বগুড়া" : "Bagbari, Gabtali, Bogura",
    },
    {
      icon: CalendarX,
      label: isBn ? "মৃত্যু" : "Died",
      value: isBn ? "৩০ মে ১৯৮১" : "30 May 1981",
      detail: isBn ? "চট্টগ্রাম, বাংলাদেশ" : "Chattogram, Bangladesh",
    },
    {
      icon: Landmark,
      label: isBn ? "সমাধিস্থল" : "Resting place",
      value: isBn ? "শেরেবাংলা নগর, ঢাকা" : "Sher-e-Bangla Nagar, Dhaka",
      detail: isBn
        ? "জাতীয় সংসদ ভবনের পাশে"
        : "Beside the Jatiya Sangsad Bhaban",
    },
    {
      icon: ShieldCheck,
      label: isBn ? "দায়িত্ব" : "Role",
      value: isBn ? "রাষ্ট্রপতি ও সেনাবাহিনী প্রধান" : "President & Chief of Army Staff",
      detail: isBn
        ? "বাংলাদেশ জাতীয়তাবাদী দলের প্রতিষ্ঠাতা"
        : "Founder of the Bangladesh Nationalist Party",
    },
  ];

  return (
    <>
      <CommonBanner
        title={isBn ? "জিয়াউর রহমান" : "Ziaur Rahman"}
        subtitle={
          isBn
            ? "শহীদ রাষ্ট্রপতি জিয়াউর রহমান বীর উত্তম-এর জীবনী"
            : "The life of Shaheed President Ziaur Rahman, Bir Uttam"
        }
      />

      {/* ---------------------------------------------------------------- */}
      {/* Portrait and introduction                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="h-1 w-full bg-gold-rule" />

        <Container>
          <div className="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
            <div className="lg:col-span-5">
              <figure className="mx-auto w-full max-w-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-panel bg-slate-200 shadow-panel ring-1 ring-slate-200">
                  {portrait ? (
                    <Image
                      src={portrait}
                      alt={
                        isBn
                          ? "শহীদ রাষ্ট্রপতি জিয়াউর রহমানের প্রতিকৃতি"
                          : "Portrait of Shaheed President Ziaur Rahman"
                      }
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <Skeleton className="aspect-[4/5] w-full rounded-none" />
                  )}
                </div>
                <figcaption className="mt-4 text-center text-[12.5px] leading-relaxed text-slate-500">
                  {isBn
                    ? "শহীদ রাষ্ট্রপতি জিয়াউর রহমান, বীর উত্তম"
                    : "Shaheed President Ziaur Rahman, Bir Uttam"}
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading
                align="left"
                eyebrow={isBn ? "জীবনী" : "Biography"}
                title={isBn ? "জিয়াউর রহমান" : "Ziaur Rahman"}
              />

              <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700">
                {isBn ? "১৯৩৬ – ১৯৮১" : "1936 – 1981"}
              </p>

              <p className="mt-6 max-w-2xl text-[14.5px] leading-[1.85] text-slate-600">
                {summary}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Biography — one editorial section per era                         */}
      {/* ---------------------------------------------------------------- */}
      <PageBody>
        <SectionHeading
          align="left"
          eyebrow={isBn ? "জীবনী" : "Biography"}
          title={isBn ? "জীবনের অধ্যায়সমূহ" : "Chapters of a life"}
          subtitle={
            isBn
              ? "প্রাথমিক জীবন থেকে স্বাধীনতাযুদ্ধ ও রাষ্ট্রনায়কত্ব — জিয়াউর রহমানের জীবন ও কর্মের গুরুত্বপূর্ণ অধ্যায়সমূহ। প্রতিটি অধ্যায় সম্পূর্ণ পড়া যাবে।"
              : "From early life to the Liberation War and statesmanship — the defining chapters of Ziaur Rahman's life and work. Each chapter can be read in full."
          }
        />

        <div className="mt-12">
          <Biography
            introductionData={introductionData}
            language={language}
            handleOpen={handleOpen}
            loading={loading}
          />
        </div>

        {error && (
          <p
            role="status"
            className="mt-10 inline-flex items-center gap-2 rounded-card border border-slate-200 bg-slate-50 px-4 py-3 text-[13.5px] text-slate-600"
          >
            <AlertCircle className="h-4 w-4 text-brand-600" aria-hidden="true" />
            {isBn
              ? "জীবনীর তথ্য লোড করা যায়নি। অনুগ্রহ করে পুনরায় চেষ্টা করুন।"
              : error}
          </p>
        )}
      </PageBody>

      {/* ---------------------------------------------------------------- */}
      {/* Biographical record                                               */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="relative isolate overflow-hidden bg-brand-950"
        aria-label={isBn ? "জীবনপঞ্জি" : "Biographical record"}
      >
        <div className="h-1 w-full bg-gradient-to-r from-gold-600 via-gold-400 to-transparent" />

        <Container>
          <div className="py-12 lg:py-16">
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow={isBn ? "সংক্ষেপে" : "At a glance"}
              title={isBn ? "জীবনপঞ্জির তথ্য" : "Biographical record"}
            />

            <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className="border-l-2 border-gold-500/40 pl-4 lg:pl-5"
                  >
                    <dt className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-300">
                      <Icon
                        className="h-4 w-4 shrink-0 text-gold-400"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      {fact.label}
                    </dt>
                    <dd className="mt-3 text-[18px] font-bold leading-snug text-white lg:text-[20px]">
                      {fact.value}
                    </dd>
                    <dd className="mt-1.5 text-[12.5px] leading-relaxed text-brand-300">
                      {fact.detail}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </Container>
      </section>

      {modalContent && (
        <Modal
          isOpen={isOpen}
          onClose={handleClose}
          title={modalContent.title}
        >
          <RenderContent content={modalContent.content} />
        </Modal>
      )}
    </>
  );
};

export default FetchZiaurRahmanData;
