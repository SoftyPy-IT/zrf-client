"use client";

import React from "react";
import Image from "next/image";
import { CalendarDays, UserRound } from "lucide-react";
import media2 from "../../../../../assets/images/news/news (2).jpg";
import media3 from "../../../../../assets/images/news/news (3).jpg";
import media4 from "../../../../../assets/images/news/news (4).jpg";
import img1 from "../../../../../assets/images/program/1.1.jpg";
import img2 from "../../../../../assets/images/program/1.2.jpg";
import img3 from "../../../../../assets/images/program/1.3.jpg";
import titleImage from "../../../../../assets/images/program/1.jpg";
import ArticleCard from "@/components/share/ArticleCard";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import SectionHeading from "@/components/share/SectionHeading";
import ShareLink from "@/components/share/ShareLink/ShareLink";
import RenderContent from "@/components/Common/RenderContent";
import { useLanguage } from "@/provider/LanguageProvider";

const newsData = [
  {
    id: 1,
    descriptionBn:
      "৭ নভেম্বর জাতীয় বিপ্লব ও সংহতি দিবস ক্রোড়পত্র জিয়াউর রহমান ফাউন্ডেশন (জেডআরএফ)",
    descriptionEn:
      "Supplement marking National Revolution and Solidarity Day, published by the Ziaur Rahman Foundation (ZRF).",
    img: media2,
    date: "01/01/2001",
  },
  {
    id: 2,
    descriptionBn:
      "বৃহস্পতিবার, অক্টোবর ১৯, ২০২৩, জিয়াউর রহমান ফাউন্ডেশন -জেআরএফ এর ২৪তম প্রতিষ্ঠা বার্ষিকী উপলক্ষ্যে গুলশানস্থ বিএনপি চেয়ারপারসন কার্যালয়ে বিশেষ অনুষ্ঠান",
    descriptionEn:
      "Special programme at the BNP Chairperson's office in Gulshan marking the 24th founding anniversary of the Ziaur Rahman Foundation, 19 October 2023.",
    img: media3,
    date: "01/01/2001",
  },
  {
    id: 3,
    descriptionBn:
      "জিয়াউর রহমান ফাউন্ডেশন’র ২৪তম প্রতিষ্ঠা বার্ষিকী উপলক্ষে শহিদ প্রেসিডেন্ট জিয়াউর রহমান’র সমাধিতে শ্রদ্ধা নিবেদন।",
    descriptionEn:
      "Wreaths laid at the mausoleum of Shaheed President Ziaur Rahman on the Foundation's 24th founding anniversary.",
    img: media4,
    date: "01/01/2001",
  },
];

/**
 * Programme article.
 *
 * A static editorial article held in code (not yet CMS-backed) rendered with
 * the same article layout, share row and related-posts card deck as the
 * API-driven articles elsewhere on the site.
 */
const ProgramArticle = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const title = isBn
    ? "বন্যাদুর্গতদের মাঝে চিকিৎসা সেবা ও ঔষধ বিতরন কার্যক্রম"
    : "Medical care and medicine distribution among flood-affected families";

  const introHtml = isBn
    ? `<p>বিএনপির ভারপ্রাপ্ত চেয়ারম্যান ও জিয়াউর রহমান ফাউন্ডেশন এর প্রেসিডেন্ট জনাব তারেক রহমান এর নির্দেশে বন্যাদুর্গত ফেনী জেলায় সদর হাসপাতালে জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব বাংলাদেশ (ড্যাব) এর উদ্যোগে অসুস্থ রোগীদের জন্য চলমান ধারাবাহিক চিকিৎসা সেবা ও ঔষধ বিতরন কার্যক্রম চালু রয়েছে।</p>
      <blockquote><p>“বন্যাদুর্গত ফেনী জেলায় সদর হাসপাতালে জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব বাংলাদেশ (ড্যাব) এর উদ্যোগে অসুস্থ রোগীদের জন্য চলমান ধারাবাহিক চিকিৎসা সেবা ও ঔষধ বিতরন কার্যক্রম”</p></blockquote>
      <p>এর অংশ হিসেবে আজকে চিকিৎসা সেবা প্রদান করেন স্বনামধন্য শিশু বিশেষজ্ঞ ঢাকা শিশু হাসপাতাল এর সহযোগী অধ্যাপক ডা সালাহউদ্দিন মাহমুদ, ডা: এম.আর. হাসান, ডা: মুননাসির জামান রেমো, ডা: ইমাম হাসান, ডা: সৌরভ, ডা: রাকিব।</p>`
    : `<p>On the instruction of Mr. Tarique Rahman, Acting Chairman of BNP and President of the Ziaur Rahman Foundation, ZRF and the Doctors' Association of Bangladesh (DAB) are running a continuing programme of medical care and medicine distribution for ailing patients at the district hospital in flood-affected Feni.</p>
      <blockquote><p>“A continuing programme of medical care and medicine distribution for ailing patients, run by the Ziaur Rahman Foundation and the Doctors' Association of Bangladesh (DAB) at the district hospital in flood-affected Feni.”</p></blockquote>
      <p>As part of the programme, treatment was provided today by the renowned paediatrician Associate Professor Dr. Salahuddin Mahmud of Dhaka Shishu Hospital, along with Dr. M. R. Hasan, Dr. Munnasir Zaman Remo, Dr. Imam Hasan, Dr. Saurav and Dr. Rakib.</p>`;

  const closingHtml = isBn
    ? `<p>বিএনপির ভারপ্রাপ্ত চেয়ারম্যান ও জিয়াউর রহমান ফাউন্ডেশন এর প্রেসিডেন্ট জনাব তারেক রহমান এর নির্দেশে বন্যাদুর্গত ফেনী জেলায় সদর হাসপাতালে চলমান ধারাবাহিক চিকিৎসা সেবা ও ঔষধ বিতরন কার্যক্রম এর অংশ হিসেবে আজকে চিকিৎসা সেবা প্রদান করেন স্বনামধন্য শিশু বিশেষজ্ঞ ঢাকা শিশু হাসপাতাল এর সহযোগী অধ্যাপক ডা সালাহউদ্দিন মাহমুদ, ডা: এম.আর. হাসান, ডা: মুননাসির জামান রেমো, ডা: ইমাম হাসান, ডা: সৌরভ, ডা: রাকিব।</p>`
    : `<p>As part of the continuing medical care and medicine distribution programme at Feni district hospital, treatment was provided today by Associate Professor Dr. Salahuddin Mahmud of Dhaka Shishu Hospital, along with Dr. M. R. Hasan, Dr. Munnasir Zaman Remo, Dr. Imam Hasan, Dr. Saurav and Dr. Rakib.</p>`;

  return (
    <>
      <CommonBanner title={title} />

      <PageBody>
        <article className="mx-auto max-w-[820px]">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-panel bg-slate-100 ring-1 ring-slate-200">
            <Image
              src={titleImage}
              alt={title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 820px"
              className="object-cover"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays
                className="h-3.5 w-3.5 text-brand-500"
                aria-hidden="true"
              />
              {isBn
                ? "প্রকাশিত: ১০ সেপ্টেম্বর, ২০২৪"
                : "Published: 10 September 2024"}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <UserRound
                className="h-3.5 w-3.5 text-brand-500"
                aria-hidden="true"
              />
              {isBn ? "লেখক: জেডআরএফ এডমিন" : "Author: ZRF Admin"}
            </span>

            <span className="inline-flex items-center rounded-md bg-brand-50 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-brand-700 ring-1 ring-brand-100">
              {isBn ? "সামাজিক কার্যক্রম" : "Social work"}
            </span>
          </div>

          <div className="mt-6">
            <RenderContent content={introHtml} />
          </div>

          <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-slate-100 ring-1 ring-slate-200">
              <Image
                src={img1}
                alt={
                  isBn
                    ? "বন্যার্ত রোগীদের জন্য চিকিৎসা সেবা"
                    : "Medical care provided to flood-affected patients"
                }
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-slate-100 ring-1 ring-slate-200">
              <Image
                src={img2}
                alt={
                  isBn
                    ? "ত্রাণ শিবিরে ঔষধ বিতরণ"
                    : "Medicine distribution at the relief camp"
                }
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-slate-100 ring-1 ring-slate-200">
              <Image
                src={img3}
                alt={
                  isBn
                    ? "জেডআরএফের চিকিৎসক দল কর্মরত অবস্থায়"
                    : "ZRF medical team at work"
                }
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          <RenderContent content={closingHtml} />

          <ShareLink
            shareUrl={shareUrl}
            title={title}
            hashtag="#ZiaurRahmanFoundation"
            description={
              isBn
                ? "বন্যাদুর্গত ফেনী জেলায় জেডআরএফ ও ড্যাবের চলমান চিকিৎসা সেবা ও ঔষধ বিতরন কার্যক্রম"
                : "ZRF and DAB's continuing medical care and medicine distribution programme in flood-affected Feni."
            }
          />
        </article>

        <section
          className="mt-16 border-t border-slate-200 pt-12"
          aria-label={isBn ? "সাম্প্রতিক পোস্ট" : "Recent posts"}
        >
          <SectionHeading
            align="left"
            eyebrow={isBn ? "আমাদের কর্মসূচি" : "Our Programmes"}
            title={isBn ? "সাম্প্রতিক পোস্ট" : "Recent posts"}
          />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsData.map((data) => (
              <ArticleCard
                key={data.id}
                href="/news"
                title={isBn ? data.descriptionBn : data.descriptionEn}
                image={data.img.src}
                date={data.date}
                actionLabel={isBn ? "সংবাদ দেখুন" : "View in news"}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
            ))}
          </div>
        </section>
      </PageBody>
    </>
  );
};

export default ProgramArticle;
