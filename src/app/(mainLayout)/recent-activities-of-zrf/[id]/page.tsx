"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Container from "@/components/share/Container";
import Banner from "../_components/Banner";

import news1 from "../../../../../src/assets/images/activities/01.jpg";
import news2 from "../../../../../src/assets/images/activities/02.jpg";
import news3 from "../../../../../src/assets/images/activities/03.jpg";
import news4 from "../../../../../src/assets/images/activities/04.jpg";

const projectData = [
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

const recentPost = [
  {
    id: 1,
    date: "November 8, 2023",
    description:
      "৭ নভেম্বর জাতীয় বিপ্লব ও সংহতি দিবস ক্রোড়পত্র জিয়াউর রহমান ফাউন্ডেশন (জেডআরএফ)",
  },
  {
    id: 1,
    date: "October 21, 2023",
    description:
      "বৃহস্পতিবার, অক্টোবর ১৯, ২০২৩, জিয়াউর রহমান ফাউন্ডেশন -জেআরএফ এর ২৪তম প্রতিষ্ঠা বার্ষিকী উপলক্ষ্যে গুলশানস্থ বিএনপি চেয়ারপারসন কার্যালয়ে বিশেষ অনুষ্ঠান",
  },
  {
    id: 1,
    date: "October 18, 2023",
    description:
      "জিয়াউর রহমান ফাউন্ডেশন’র ২৪তম প্রতিষ্ঠা বার্ষিকী উপলক্ষে শহিদ প্রেসিডেন্ট জিয়াউর রহমান’র সমাধিতে শ্রদ্ধা নিবেদন।",
  },
];

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const foundProject = projectData.find((item) => item.id === Number(id));
      setProject(foundProject);
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Banner />
      <Container>
        <div className="lg:flex md:flex gap-10 my-16">
          <div className="w-full grid grid-cols-1">
            <div className="h-full w-full">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full lg:h-[400px] rounded"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-justify mt-5">{project.description}</p>
              </div>
            </div>
          </div>

          {/* Sidebar for additional content */}
          <div className="border p-5 rounded lg:w-[600px]">
            <h3 className="text-xl font-bold">Recent Post</h3>
            <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
            <div className="flex flex-col gap-8 mt-5">
              {recentPost?.map((data) => (
                <div key={data.id}>
                  <div>
                    <p className="hover:underline cursor-pointer text-justify font-semibold">
                      {data.description}
                    </p>
                    <p className="text-sm mt-2">{data.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetailsPage;
