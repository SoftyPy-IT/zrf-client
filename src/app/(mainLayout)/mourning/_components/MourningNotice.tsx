"use client";

import React from "react";
import Image from "next/image";
import { CalendarDays, Flower2 } from "lucide-react";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import SectionHeading from "@/components/share/SectionHeading";
import { useLanguage } from "@/provider/LanguageProvider";
import mourning from "@/assets/images/mourning/zia.jpeg";
import logo from "@/assets/images/logo/logo.svg";

/**
 * Condolence notice.
 *
 * Deliberately restrained: the portrait sits beside the statement panel, and the
 * notice and prayer are repeated as a pair of calm cards. No gradients on the
 * imagery, no bright accent colour beyond the gold rule.
 */
const MourningNotice = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const passedAwayDate = isBn ? "৩০ ডিসেম্বর ২০২৫" : "30 December 2025";

  const cards = [
    {
      id: "notice",
      name: isBn ? "বেগম খালেদা জিয়া" : "Begum Khaleda Zia",
      designation: isBn
        ? "চেয়ারপার্সন, বাংলাদেশ জাতীয়তাবাদী দল · সাবেক প্রধানমন্ত্রী"
        : "Chairperson, Bangladesh Nationalist Party · Former Prime Minister",
      message: isBn ? (
        <>
          তিনি আজ{" "}
          <strong className="font-semibold text-slate-800">
            মঙ্গলবার, ৩০ ডিসেম্বর ২০২৫
          </strong>
          , সকাল{" "}
          <strong className="font-semibold text-slate-800">৬:০০ টায়</strong>{" "}
          ইন্তেকাল করেছেন।
          <span className="mt-3 block text-[13px] italic text-slate-500">
            ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন।
          </span>
        </>
      ) : (
        <>
          She passed away today,{" "}
          <strong className="font-semibold text-slate-800">
            Tuesday, 30 December 2025
          </strong>
          , at{" "}
          <strong className="font-semibold text-slate-800">6:00 AM</strong>.
          <span className="mt-3 block text-[13px] italic text-slate-500">
            Inna lillahi wa inna ilayhi raji&apos;un.
          </span>
        </>
      ),
    },
    {
      id: "prayer",
      name: isBn ? "জিয়াউর রহমান ফাউন্ডেশন" : "Ziaur Rahman Foundation",
      designation: isBn ? "শোকসন্তপ্ত পরিবার" : "Mourning family",
      message: isBn
        ? "গভীর শোক ও শ্রদ্ধায় তাঁর বিদেহী আত্মার মাগফিরাত কামনা করছি এবং দেশবাসীসহ সকলের নিকট দোয়া প্রার্থনা করছি।"
        : "We mourn this great loss with deep grief and respect. We pray that Almighty Allah grants forgiveness to her departed soul and bestows upon her the highest place in Jannatul Ferdous. We humbly request prayers from the people of the nation and all well wishers for the eternal peace of her soul.",
    },
  ];

  return (
    <>
      <CommonBanner
        title={isBn ? "শোকবার্তা" : "Condolence Message"}
        subtitle={
          isBn
            ? "স্মরণে — গভীর শোক ও শ্রদ্ধায়"
            : "In memoriam — with profound grief and respect"
        }
      />

      {/* ---------------------------------------------------------------- */}
      {/* Statement                                                         */}
      {/* ---------------------------------------------------------------- */}
      <PageBody tight>
        <SectionHeading
          align="center"
          eyebrow={isBn ? "স্মরণে" : "In memoriam"}
          title={isBn ? "বেগম খালেদা জিয়া" : "Begum Khaleda Zia"}
          subtitle={
            isBn
              ? "চেয়ারপার্সন, বাংলাদেশ জাতীয়তাবাদী দল · সাবেক প্রধানমন্ত্রী"
              : "Chairperson, Bangladesh Nationalist Party · Former Prime Minister of Bangladesh"
          }
          className="mx-auto max-w-3xl"
        />

        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <figure className="lg:col-span-5">
            <div className="overflow-hidden rounded-panel bg-slate-100 ring-1 ring-slate-200">
              <Image
                src={mourning}
                alt={isBn ? "বেগম খালেদা জিয়া" : "Begum Khaleda Zia"}
                width={1000}
                height={700}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="h-auto w-full object-cover grayscale"
              />
            </div>
            <figcaption className="mt-3 text-center text-[12px] text-slate-500">
              {isBn
                ? "দেশনেত্রী বেগম খালেদা জিয়া"
                : "Deshnetri Begum Khaleda Zia"}
            </figcaption>
          </figure>

          <div className="lg:col-span-7">
            <div className="rounded-panel border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <span className="rule-gold" aria-hidden="true" />

              <p
                dir="rtl"
                lang="ar"
                className="mt-6 text-center font-serif text-[24px] leading-[1.9] text-slate-900 sm:text-[28px]"
              >
                إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
              </p>

              <p className="mt-3 text-center text-[13.5px] leading-relaxed text-slate-600">
                {isBn
                  ? "নিশ্চয়ই আমরা আল্লাহর এবং নিশ্চয়ই আমরা তাঁরই কাছে ফিরে যাব।"
                  : "Indeed, we belong to Allah, and to Him we shall return."}
              </p>

              <hr className="my-6 border-t border-slate-200" />

              <p className="text-[14.5px] leading-[1.85] text-slate-600">
                {isBn
                  ? "গভীর শোকের সঙ্গে জানাচ্ছি যে, বাংলাদেশ জাতীয়তাবাদী দল-বিএনপি'র চেয়ারপার্সন, সাবেক প্রধানমন্ত্রী, দেশনেত্রী বেগম খালেদা জিয়া ইন্তেকাল করেছেন।"
                  : "It is with profound grief and sorrow that we announce the passing of the Chairperson of the Bangladesh Nationalist Party (BNP), former Prime Minister, and Deshnetri Begum Khaleda Zia."}
              </p>
            </div>
          </div>
        </div>
      </PageBody>

      {/* ---------------------------------------------------------------- */}
      {/* Condolence messages                                               */}
      {/* ---------------------------------------------------------------- */}
      <PageBody tone="slate" tight className="border-y border-slate-200">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            align="left"
            eyebrow={isBn ? "সমবেদনা" : "Condolence"}
            title={isBn ? "শোক ও দোয়া" : "Mourning and prayer"}
            subtitle={
              isBn
                ? "দেশনেত্রীর বিদেহী আত্মার মাগফিরাত কামনায় ফাউন্ডেশনের পক্ষ থেকে শ্রদ্ধা ও দোয়া।"
                : "Respect and prayer from the foundation for the eternal peace of her departed soul."
            }
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {cards.map((card) => (
              <article
                key={card.id}
                className="surface-card flex flex-col p-6"
              >
                <header className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-slate-200">
                    {card.id === "notice" ? (
                      <Flower2
                        className="h-5 w-5 text-slate-500"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    ) : (
                      <Image
                        src={logo}
                        alt={
                          isBn
                            ? "জিয়াউর রহমান ফাউন্ডেশনের লোগো"
                            : "Ziaur Rahman Foundation logo"
                        }
                        width={44}
                        height={44}
                        className="h-11 w-11 object-contain p-1"
                      />
                    )}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-[16px] font-bold leading-snug text-slate-900">
                      {card.name}
                    </h3>
                    <p className="mt-1 text-[12px] leading-relaxed text-slate-500">
                      {card.designation}
                    </p>
                  </div>
                </header>

                <p className="mt-4 text-[14px] leading-[1.85] text-slate-600">
                  {card.message}
                </p>

                <footer className="mt-auto flex items-center gap-1.5 pt-5 text-[12px] text-slate-500">
                  <CalendarDays
                    className="h-3.5 w-3.5 text-brand-500"
                    aria-hidden="true"
                  />
                  {passedAwayDate}
                </footer>
              </article>
            ))}
          </div>
        </div>
      </PageBody>
    </>
  );
};

export default MourningNotice;
