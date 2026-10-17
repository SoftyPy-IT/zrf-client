"use client";

import React from "react";
import img1 from "../../../../../assets/images/program/1.jpg";
import img2 from "../../../../../assets/images/program/2.jpg";
import img3 from "../../../../../assets/images/program/3.jpg";
import ArticleCard from "@/components/share/ArticleCard";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import PageBody from "@/components/share/PageBody";
import { useLanguage } from "@/provider/LanguageProvider";

/**
 * Programmes listing.
 *
 * The programme decks are editorially curated (not API-backed yet), so the
 * entries are held here and rendered with the same card every other index page
 * uses, keeping the listing geometry identical across the site.
 */
const Program = () => {
  const { language } = useLanguage();
  const isBn = language === "BNG";

  const cardData = [
    {
      id: 1,
      titleBn: "বন্যাদুর্গতদের মাঝে চিকিৎসা সেবা ও ঔষধ বিতরন কার্যক্রম",
      titleEn:
        "Medical care and medicine distribution for flood-affected families",
      contentBn:
        "১০ সেপ্টেম্বর,২০২৪, বিএনপির ভারপ্রাপ্ত চেয়ারম্যান ও জিয়াউর রহমান ফাউন্ডেশন এর প্রেসিডেন্ট জনাব তারেক রহমান এর নির্দেশে বন্যাদুর্গত ফেনী জেলায় সদর হাসপাতালে জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব বাংলাদেশ (ড্যাব) এর উদ্যোগে  অসুস্থ রোগীদের জন্য চলমান ধারাবাহিক চিকিৎসা সেবা ও ঔষধ বিতরন কার্যক্রম এর অংশ হিসেবে আজকে চিকিৎসা সেবা প্রদান করেন স্বনামধন্য  শিশু বিশেষজ্ঞ ঢাকা শিশু হাসপাতাল এর সহযোগী অধ্যাপক ডা সালাহউদ্দিন মাহমুদ,ডা: এম.আর. হাসান,ডা: মুননাসির জামান রেমো,ডা:ইমাম হাসান,ডা:সৌরভ,ডা: রাকিব",
      contentEn:
        "On the instruction of the Foundation's President, ZRF and the Doctors' Association of Bangladesh (DAB) are running a continuing programme of treatment and medicine distribution for patients at Feni district hospital, with senior physicians attending the flood-affected.",
      img: img1,
    },
    {
      id: 2,
      titleBn:
        "বৈষম্যবিরোধী ছাত্রজনতার আন্দোলনে আহত মামুনের চিকিৎসা সেবা কার্যক্রমে জেড আর এফ।",
      titleEn:
        "ZRF treatment support for Mamun, injured in the student-led uprising",
      contentBn:
        "আবদুল্লাহ আল মামুন,মাগুরা হোসেন শহীদ সোহরাওয়ার্দী কলেজ এর রাষ্ট্রবিজ্ঞান বিভাগের মাস্টার্স এর ছাত্র। বৈষম্যবিরোধী ছাত্রজনতার আন্দোলনে গত ৫ আগস্ট উত্তরা পূর্ব থানায় পুলিশের গুলিতে আহত হলে মুমূর্ষু অবস্থায় তাকে উত্তরা উইমেন্স মেডিকেল কলেজ হাসপাতাল এ ভর্তি করা হয়। মৃতপ্রায় মামুনকে বাচাতে তার ইমারজেন্সি ট্রাকিওস্টমি করা হয়। বিএনপি ভারপ্রাপ্ত চেয়ারম্যান ও জিয়াউর রহমান ফাউন্ডেশন এর প্রেসিডেন্ট জনাব তারেক রহমান এর নির্দেশে জিয়াউর রহমান ফাউন্ডেশন এর নির্বাহী পরিচালক অধ্যাপক ডা ফরহাদ হালিম ডোনার এর তত্বাবধানে, জেড আর এফ রিহ্যাবিলিটেশন কমিটির আহবায়ক ডা শাহ মুহম্মদ আমান উল্ল্যাহ ও সদস্য সচিব ডা পারভেজ রেজা কাকন এর সার্বিক সহযোগিতায় আই.সি,ইউ তে মৃত্যুর সাথে পাঞ্জা লড়া মামুনের চিকিৎসার সার্বিক ব্যবস্থাপনা ও দায়িত্ব গ্রহণ করেছে জিয়াউর রহমান ফাউন্ডেশন। জিয়াউর রহমান ফাউন্ডেশন এর কো অর্ডিনেটর ডা সাজিদ ইমতিয়াজ, ডা শাওন বিন রহমান,ডা রাফসান জানি আবির গনতন্ত্র পুনরুদ্ধার এর সম্মুখ যোদ্ধা  মামুনের চিকিৎসার সার্বিক তদারকি করছেন।",
      contentEn:
        "Abdullah Al Mamun, a master's student of political science at Hossain Shaheed Suhrawardy College in Magura, was shot by police at Uttara East police station on 5 August and admitted to Uttara Women's Medical College Hospital in critical condition. On the President's instruction, ZRF assumed full responsibility for his treatment and care in the ICU.",
      img: img2,
    },
    {
      id: 3,
      titleBn:
        "বৈষম্যবিরোধী ছাত্রজনতার আন্দোলনে আহত যুবদল নেতা মোঃআমিনুল হকের চিকিৎসা সেবা কার্যক্রমে জেড আর এফ।",
      titleEn:
        "ZRF treatment support for Jubo Dal leader Md. Aminul Haque, injured in the uprising",
      contentBn:
        "বৈষম্যবিরোধী ছাত্রজনতার  আন্দোলনে গত ৪ আগস্ট গাইবান্ধায় যুবদল নেতা মোঃআমিনুল হক গাইবান্ধা পুলিশ সুপার কার্যালয়ের সামনে গুলিবিদ্ধ হন। বিএনপি ভারপ্রাপ্ত চেয়ারম্যান ও জিয়াউর রহমান ফাউন্ডেশন এর প্রেসিডেন্ট জনাব তারেক রহমান এর নির্দেশে জিয়াউর রহমান ফাউন্ডেশন এর নির্বাহী পরিচালক অধ্যাপক ডা ফরহাদ হালিম ডোনার এর তত্বাবধানে, জেড আর এফ রিহ্যাবিলিটেশন কমিটির আহবায়ক ডা শাহ মুহম্মদ আমান উল্ল্যাহ ও সদস্য সচিব ডা পারভেজ রেজা কাকন এর ব্যবস্থাপনায় আমিনুল হকের চিকিৎসার সার্বিক দায়িত্ব গ্রহণ করেছে জিয়াউর রহমান ফাউন্ডেশন।জিয়াউর রহমান ফাউন্ডেশন এর কো অর্ডিনেটর ডা সাজিদ ইমতিয়াজ এর তত্বাবধানে আজকে আমিনুল হকের শরীর থেকে গুলি অপসারন করা হয়",
      contentEn:
        "Jubo Dal leader Md. Aminul Haque was shot in front of the Superintendent of Police office in Gaibandha on 4 August. On the President's instruction, ZRF took charge of his full treatment under the supervision of its rehabilitation committee; the bullet was surgically removed under the supervision of ZRF coordinator Dr. Sajid Imtiaz.",
      img: img3,
    },
  ];

  return (
    <>
      <CommonBanner
        title={isBn ? "আমাদের কর্মসূচি" : "Our Programmes"}
        subtitle={
          isBn
            ? "দেশজুড়ে অসহায় মানুষের পাশে দাঁড়িয়ে জেডআরএফ দলগুলোর পরিচালিত মাঠপর্যায়ের কর্মসূচি।"
            : "Field programmes delivered by ZRF teams for communities in need across the country."
        }
      />

      <PageBody>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card) => (
            <ArticleCard
              key={card.id}
              href={`/whatwedo/program/${card.id}`}
              title={isBn ? card.titleBn : card.titleEn}
              excerpt={isBn ? card.contentBn : card.contentEn}
              image={card.img.src}
              actionLabel={isBn ? "বিস্তারিত পড়ুন" : "Read more"}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
            />
          ))}
        </div>
      </PageBody>
    </>
  );
};

export default Program;
