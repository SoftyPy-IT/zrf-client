import React from "react";
import "./LatestNews.css";
import news1 from "../../../../../../src/assets/images/activities/01.jpg";
import news2 from "../../../../../../src/assets/images/activities/02.jpg";
import news3 from "../../../../../../src/assets/images/activities/03.jpg";
import Image from "next/image";
import { ArrowRightAlt } from "@mui/icons-material";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import EastIcon from "@mui/icons-material/East";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      image: news3,
      title:
        "জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব বাংলাদেশ ড্যাব এর উদ্যোগে মাসব্যাপী বন্যাদুর্গত অঞ্চলে মেডিকেল ক্যাম্প পরিচালিত হচ্ছে।",
      description:
        "জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব বাংলাদেশ ড্যাব এর উদ্যোগে ফেনী জেলায় সহস্রাধিক মানুষের চিকিৎসা সেবা দেবার জন্য মেডিকেল ক্যাম্প আয়োজন করা হয়েছে।আয়োজন প্রস্তুতি টিম ইতিমধ্যে ঔষধ সহ ফেনীতে পৌঁছে গেছে।",
      date: "১৭ সেপ্টেম্বর,২০২৪",
    },
    {
      id: 2,
      image: news3,
      title:
        "জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব বাংলাদেশ ড্যাব এর উদ্যোগে মাসব্যাপী বন্যাদুর্গত অঞ্চলে মেডিকেল ক্যাম্প পরিচালিত হচ্ছে।",
      description:
        "বিএনপির ভারপ্রাপ্ত চেয়ারম্যান ও জিয়াউর রহমান ফাউন্ডেশন এর প্রেসিডেন্ট জনাব তারেক রহমান এর নির্দেশে বন্যাদুর্গত ফেনী জেলায় সদর হাসপাতালে জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব বাংলাদেশ (ড্যাব) এর উদ্যোগে  অসুস্থ রোগীদের জন্য চলমান ধারাবাহিক চিকিৎসা সেবা ও ঔষধ বিতরন কার্যক্রম এর অংশ হিসেবে আজকে চিকিৎসা সেবা প্রদান করেন স্বনামধন্য শিশু বিশেষজ্ঞ ঢাকা শিশু হাসপাতাল এর সহযোগী অধ্যাপক ডা সালাহউদ্দিন মাহমুদ,ডা: এম.আর. হাসান,ডা: মুননাসির জামান রেমো,ডা:ইমাম হাসান,ডা:সৌরভ,ডা: রাকিব",
      date: "১০ সেপ্টেম্বর,২০২৪",
    },
    {
      id: 3,
      image: news3,
      title:
        "জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব বাংলাদেশ ড্যাব এর উদ্যোগে মাসব্যাপী বন্যাদুর্গত অঞ্চলে মেডিকেল ক্যাম্প পরিচালিত হচ্ছে।",
      description:
        "আবদুল্লাহ আল মামুন,মাগুরা হোসেন শহীদ সোহরাওয়ার্দী কলেজ এর রাষ্ট্রবিজ্ঞান বিভাগের মাস্টার্স এর ছাত্র।বৈষম্যবিরোধী ছাত্রজনতার আন্দোলনে গত ৫ আগস্ট উত্তরা পূর্ব থানায় পুলিশের গুলিতে আহত হলে মুমূর্ষু অবস্থায় তাকে উত্তরা উইমেন্স মেডিকেল কলেজ হাসপাতাল এ ভর্তি করা হয়।মৃতপ্রায় মামুনকে বাচাতে তার ইমারজেন্সি ট্রাকিওস্টমি করা হয়। বিএনপি ভারপ্রাপ্ত চেয়ারম্যান ও জিয়াউর রহমান ফাউন্ডেশন এর প্রেসিডেন্ট জনাব তারেক রহমান এর নির্দেশে জিয়াউর রহমান ফাউন্ডেশন এর নির্বাহী পরিচালক অধ্যাপক ডা ফরহাদ হালিম ডোনার এর তত্বাবধানে, জেড আর এফ রিহ্যাবিলিটেশন কমিটির আহবায়ক ডা শাহ মুহম্মদ আমান উল্ল্যাহ ও সদস্য সচিব ডা পারভেজ রেজা কাকন এর সার্বিক সহযোগিতায় আই.সি,ইউ তে মৃত্যুর সাথে পাঞ্জা লড়া মামুনের চিকিৎসার সার্বিক ব্যবস্থাপনা ও দায়িত্ব গ্রহণ করেছে জিয়াউর রহমান ফাউন্ডেশন।জিয়াউর রহমান ফাউন্ডেশন এর কো অর্ডিনেটর ডা সাজিদ ইমতিয়াজ, ডা শাওন বিন রহমান,ডা রাফসান জানি আবির গনতন্ত্র পুনরুদ্ধার এর সম্মুখ যোদ্ধা  মামুনের চিকিৎসার সার্বিক তদারকি করছেন",
      date: "৫ আগস্ট, ২০২৪",
    },
    {
      id: 4,
      image: news3,
      title:
        "জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব বাংলাদেশ ড্যাব এর উদ্যোগে মাসব্যাপী বন্যাদুর্গত অঞ্চলে মেডিকেল ক্যাম্প পরিচালিত হচ্ছে।",
      description:
        "আবদুল্লাহ আল মামুন,মাগুরা হোসেন শহীদ সোহরাওয়ার্দী কলেজ এর রাষ্ট্রবিজ্ঞান বিভাগের মাস্টার্স এর ছাত্র।বৈষম্যবিরোধী ছাত্রজনতার আন্দোলনে গত ৫ আগস্ট উত্তরা পূর্ব থানায় পুলিশের গুলিতে আহত হলে মুমূর্ষু অবস্থায় তাকে উত্তরা উইমেন্স মেডিকেল কলেজ হাসপাতাল এ ভর্তি করা হয়।মৃতপ্রায় মামুনকে বাচাতে তার ইমারজেন্সি ট্রাকিওস্টমি করা হয়। বিএনপি ভারপ্রাপ্ত চেয়ারম্যান ও জিয়াউর রহমান ফাউন্ডেশন এর প্রেসিডেন্ট জনাব তারেক রহমান এর নির্দেশে জিয়াউর রহমান ফাউন্ডেশন এর নির্বাহী পরিচালক অধ্যাপক ডা ফরহাদ হালিম ডোনার এর তত্বাবধানে, জেড আর এফ রিহ্যাবিলিটেশন কমিটির আহবায়ক ডা শাহ মুহম্মদ আমান উল্ল্যাহ ও সদস্য সচিব ডা পারভেজ রেজা কাকন এর সার্বিক সহযোগিতায় আই.সি,ইউ তে মৃত্যুর সাথে পাঞ্জা লড়া মামুনের চিকিৎসার সার্বিক ব্যবস্থাপনা ও দায়িত্ব গ্রহণ করেছে জিয়াউর রহমান ফাউন্ডেশন।জিয়াউর রহমান ফাউন্ডেশন এর কো অর্ডিনেটর ডা সাজিদ ইমতিয়াজ, ডা শাওন বিন রহমান,ডা রাফসান জানি আবির গনতন্ত্র পুনরুদ্ধার এর সম্মুখ যোদ্ধা  মামুনের চিকিৎসার সার্বিক তদারকি করছেন",
      date: "৫ আগস্ট, ২০২৪",
    },
  ];

  return (
    <>
      <div>
        <div className="col-span-12 lg:col-span-5 hidden md:block mb-10 lg:mt-0 mt-10">
          <div className="flex items-center  border border-green-600 ">
            <h2 className="text-2xl font-bold uppercase bg-gradient-to-r from-yellow-600 to-green-600 text-white px-6 py-2">
              News
            </h2>
            <Marquee>
              <h1>
                This publication dives deep into the contributions of Ziaur
                Rahman !
              </h1>
            </Marquee>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2 items-center gap-4 lg:mt-0 mt-10">
          {newsData.map((data) => (
            <div
              key={data.id}
              className="border rounded items-center p-3 shadow-md"
            >
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="text-sm font-semibold uppercase">
                    {data.title.length > 60 ? (
                      <>{data.title.slice(0, 60)}...</>
                    ) : (
                      data.title
                    )}
                  </h4>
                  <p className="text-sm text-justify">
                    {data.description.length > 100 ? (
                      <>
                        {data.description.slice(0, 100)} ...
                        <button className="text-green-600">See more</button>
                      </>
                    ) : (
                      data.description
                    )}
                  </p>
                </div>

                <Image
                  src={data.image}
                  alt={data.title}
                  className="w-28 h-20 object-cover rounded"
                />
              </div>
            </div>
          ))}
          <div className="flex lg:justify-end  mt-5 text-center">
            <Link href="/ebooks">
              <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase">
                সবগুলো দেখুন <EastIcon fontSize="small" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
