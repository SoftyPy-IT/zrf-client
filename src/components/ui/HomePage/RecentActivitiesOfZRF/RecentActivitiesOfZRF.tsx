import React from "react";
import Container from "@/components/share/Container";
import news1 from "../../../../../src/assets/images/activities/01.jpg";
import news2 from "../../../../../src/assets/images/activities/02.jpg";
import news3 from "../../../../../src/assets/images/activities/03.jpg";
import news4 from "../../../../../src/assets/images/activities/04.jpg";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

const newsItems = [
  {
    id: 1,
    image: news1,
    title:
      "জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব বাংলাদেশ ড্যাব এর উদ্যোগে মাসব্যাপী বন্যাদুর্গত অঞ্চলে মেডিকেল ক্যাম্প পরিচালিত হচ্ছে।",
    description:
      "জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব বাংলাদেশ ড্যাব এর উদ্যোগে ফেনী জেলায় সহস্রাধিক মানুষের চিকিৎসা সেবা দেবার জন্য মেডিকেল ক্যাম্প আয়োজন করা হয়েছে।আয়োজন প্রস্তুতি টিম ইতিমধ্যে ঔষধ সহ ফেনীতে পৌঁছে গেছে।",
    date: "১৭ সেপ্টেম্বর,২০২৪",
  },
  {
    id: 2,
    image: news2,
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
    image: news4,
    title:
      "জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব বাংলাদেশ ড্যাব এর উদ্যোগে মাসব্যাপী বন্যাদুর্গত অঞ্চলে মেডিকেল ক্যাম্প পরিচালিত হচ্ছে।",
    description:
      "বিএনপির ভারপ্রাপ্ত চেয়ারম্যান জনাব তারেক রহমান এর নির্দেশে বাংলাদেশ জাতীয়তাবাদী দল বিএনপির বন্যার্ত অসহায় মানুষের পাশে দাড়ানোর ধারাবাহিকতায় বন্যাদুর্গত ফেনী জেলায় ত্রান সামগ্রী বিতরণ এর উদ্দেশ্যে বিএনপির চেয়ারপারসন এর উপদেষ্টা,জিয়াউর রহমান ফাউন্ডেশন এর নির্বাহী পরিচালক ও ড্যাবের প্রধান উপদেষ্টা অধ্যাপক ডা: ফরহাদ হালিম ডোনার এর নেতৃত্বে জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব বাংলাদেশ (ড্যাব) এর নেতৃবৃন্দ এর যাত্রা।",
    date: "২৫ আগস্ট, ২০২৪",
  },
];

const sidebar = [
  {
    id: 1,
    image: news1,
    title: "শহীদ জিয়াউর রহমান শিশু হাসপাতাল",
    description:
      "জিয়াউর রহমান ফাউন্ডেশন বাংলাদেশের স্বাধীনতার ঘোষক ও মহান মুক্তিযোদ্ধা শহীদ রাষ্ট্রপতি জিয়াউর রহমানের স্মৃতির উদ্দেশ্যে প্রতিষ্ঠিত একটি মানবিক ও কল্যাণমূলক সংস্থা।",
    date: "১০ এপ্রিল ২০২৪",
  },
  {
    id: 2,
    image: news2,
    title: "শহীদ জিয়াউর রহমান শিশু হাসপাতাল",
    description:
      "জিয়াউর রহমান ফাউন্ডেশন বাংলাদেশের স্বাধীনতার ঘোষক ও মহান মুক্তিযোদ্ধা শহীদ রাষ্ট্রপতি জিয়াউর রহমানের স্মৃতির উদ্দেশ্যে প্রতিষ্ঠিত একটি মানবিক ও কল্যাণমূলক সংস্থা।",
    date: "১০ এপ্রিল ২০২৪",
  },
  {
    id: 3,
    image: news3,
    title: "শহীদ জিয়াউর রহমান শিশু হাসপাতাল",
    description:
      "জিয়াউর রহমান ফাউন্ডেশন বাংলাদেশের স্বাধীনতার ঘোষক ও মহান মুক্তিযোদ্ধা শহীদ রাষ্ট্রপতি জিয়াউর রহমানের স্মৃতির উদ্দেশ্যে প্রতিষ্ঠিত একটি মানবিক ও কল্যাণমূলক সংস্থা।",
    date: "১০ এপ্রিল ২০২৪",
  },
  {
    id: 4,
    image: news4,
    title: "শহীদ জিয়াউর রহমান শিশু হাসপাতাল",
    description:
      "জিয়াউর রহমান ফাউন্ডেশন বাংলাদেশের স্বাধীনতার ঘোষক ও মহান মুক্তিযোদ্ধা শহীদ রাষ্ট্রপতি জিয়াউর রহমানের স্মৃতির উদ্দেশ্যে প্রতিষ্ঠিত একটি মানবিক ও কল্যাণমূলক সংস্থা।",
    date: "১০ এপ্রিল ২০২৪",
  },
];

const RecentActivitiesOfZRF = () => {
  return (
    <Container className="my-20">
      <h1 className="lg:text-3xl text-2xl font-bold uppercase">Recent Activities of ZRF</h1>
      <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5"></div>
      <div className="lg:flex gap-10">
        {/* Main News Content */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:h-[500px]">
            {newsItems.slice(0, 2).map((data) => (
              <div
                key={data.id}
                className="relative shadow-xl bg-white overflow-hidden group hover:text-white"
              >
                <div className="relative">
                  <Image
                    src={data.image}
                    alt={data.title}
                    className="h-[250px] w-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                  />
                </div>

                {/* Gradient overlay with opacity */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-600 via-yellow-600 to-transparent transition-transform transform translate-y-full group-hover:translate-y-0 duration-1000 ease-in-out h-[340px] md:h-[300px] lg:h-[500px]"></div>

                <div className="p-5 space-y-3 relative z-10">
                  <h3 className="text-xl font-bold">
                    {data.title.slice(0, 60)}...
                  </h3>
                  <p className="text-justify">
                    {data.description.slice(0, 150)}...
                  </p>
                  <div className="flex justify-between">
                    <p>{data.date}</p>
                    <Link href={`/recent-activities-of-zrf/${data.id}`}>
                      <button className="hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-1 hover:text-white rounded-full uppercase text-xs border border-green-600">
                        আরো পড়ুন <EastIcon fontSize="small" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className=" lg:w-[500px] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2 gap-5 lg:h-[500px] bg-gray-100 p-5 lg:mt-0 md:mt-5 mt-5">
            {sidebar.map((data) => (
              <div
                key={data.id}
                className="flex items-center gap-5 bg-white p-3 rounded shadow-md transition-transform duration-500 transform hover:scale-105"
              >
                <Image
                  src={data.image}
                  alt={data.title}
                  className="w-20 object-cover rounded transition-opacity duration-500"
                />
                <div>
                  <h3 className="text-sm font-bold">{data.title}</h3>
                  <div className="flex justify-end">
                    <Link href="/recent-activities-of-zrf">
                      <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-2 text-white rounded-full uppercase text-xs">
                        <EastIcon />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 flex justify-end">
            <Link href="/recent-activities-of-zrf">
              <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 text-white rounded-full uppercase text-sm">
                সবগুলো পড়ুন <EastIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecentActivitiesOfZRF;
