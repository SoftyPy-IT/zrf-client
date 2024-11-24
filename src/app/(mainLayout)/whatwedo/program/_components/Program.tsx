// pages/index.js
import Image from "next/image";
import img1 from "../../../../../assets/images/program/1.jpg";
import img2 from "../../../../../assets/images/program/2.jpg";
import img3 from "../../../../../assets/images/program/3.jpg";
import Container from "@/components/share/Container";
import Banner from "./Banner";
import { Button } from "@mui/material";

// pages/index.js
const Program = () => {
  // Sample data for the cards
  const cardData = [
    {
      id: 1,
      title: "বন্যাদুর্গতদের মাঝে চিকিৎসা সেবা ও ঔষধ বিতরন কার্যক্রম",
      content:
        "১০ সেপ্টেম্বর,২০২৪, বিএনপির ভারপ্রাপ্ত চেয়ারম্যান ও জিয়াউর রহমান ফাউন্ডেশন এর প্রেসিডেন্ট জনাব তারেক রহমান এর নির্দেশে বন্যাদুর্গত ফেনী জেলায় সদর হাসপাতালে জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব বাংলাদেশ (ড্যাব) এর উদ্যোগে  অসুস্থ রোগীদের জন্য চলমান ধারাবাহিক চিকিৎসা সেবা ও ঔষধ বিতরন কার্যক্রম এর অংশ হিসেবে আজকে চিকিৎসা সেবা প্রদান করেন স্বনামধন্য  শিশু বিশেষজ্ঞ ঢাকা শিশু হাসপাতাল এর সহযোগী অধ্যাপক ডা সালাহউদ্দিন মাহমুদ,ডা: এম.আর. হাসান,ডা: মুননাসির জামান রেমো,ডা:ইমাম হাসান,ডা:সৌরভ,ডা: রাকিব",
      img: img1,
    },
    {
      id: 2,
      title:
        "বৈষম্যবিরোধী ছাত্রজনতার আন্দোলনে আহত মামুনের চিকিৎসা সেবা কার্যক্রমে জেড আর এফ।",
      content:
        "আবদুল্লাহ আল মামুন,মাগুরা হোসেন শহীদ সোহরাওয়ার্দী কলেজ এর রাষ্ট্রবিজ্ঞান বিভাগের মাস্টার্স এর ছাত্র। বৈষম্যবিরোধী ছাত্রজনতার আন্দোলনে গত ৫ আগস্ট উত্তরা পূর্ব থানায় পুলিশের গুলিতে আহত হলে মুমূর্ষু অবস্থায় তাকে উত্তরা উইমেন্স মেডিকেল কলেজ হাসপাতাল এ ভর্তি করা হয়। মৃতপ্রায় মামুনকে বাচাতে তার ইমারজেন্সি ট্রাকিওস্টমি করা হয়। বিএনপি ভারপ্রাপ্ত চেয়ারম্যান ও জিয়াউর রহমান ফাউন্ডেশন এর প্রেসিডেন্ট জনাব তারেক রহমান এর নির্দেশে জিয়াউর রহমান ফাউন্ডেশন এর নির্বাহী পরিচালক অধ্যাপক ডা ফরহাদ হালিম ডোনার এর তত্বাবধানে, জেড আর এফ রিহ্যাবিলিটেশন কমিটির আহবায়ক ডা শাহ মুহম্মদ আমান উল্ল্যাহ ও সদস্য সচিব ডা পারভেজ রেজা কাকন এর সার্বিক সহযোগিতায় আই.সি,ইউ তে মৃত্যুর সাথে পাঞ্জা লড়া মামুনের চিকিৎসার সার্বিক ব্যবস্থাপনা ও দায়িত্ব গ্রহণ করেছে জিয়াউর রহমান ফাউন্ডেশন। জিয়াউর রহমান ফাউন্ডেশন এর কো অর্ডিনেটর ডা সাজিদ ইমতিয়াজ, ডা শাওন বিন রহমান,ডা রাফসান জানি আবির গনতন্ত্র পুনরুদ্ধার এর সম্মুখ যোদ্ধা  মামুনের চিকিৎসার সার্বিক তদারকি করছেন।",
      img: img2,
    },
    {
      id: 3,
      title:
        "বৈষম্যবিরোধী ছাত্রজনতার আন্দোলনে আহত যুবদল নেতা মোঃআমিনুল হকের চিকিৎসা সেবা কার্যক্রমে জেড আর এফ।",
      content:
        "বৈষম্যবিরোধী ছাত্রজনতার  আন্দোলনে গত ৪ আগস্ট গাইবান্ধায় যুবদল নেতা মোঃআমিনুল হক গাইবান্ধা পুলিশ সুপার কার্যালয়ের সামনে গুলিবিদ্ধ হন। বিএনপি ভারপ্রাপ্ত চেয়ারম্যান ও জিয়াউর রহমান ফাউন্ডেশন এর প্রেসিডেন্ট জনাব তারেক রহমান এর নির্দেশে জিয়াউর রহমান ফাউন্ডেশন এর নির্বাহী পরিচালক অধ্যাপক ডা ফরহাদ হালিম ডোনার এর তত্বাবধানে, জেড আর এফ রিহ্যাবিলিটেশন কমিটির আহবায়ক ডা শাহ মুহম্মদ আমান উল্ল্যাহ ও সদস্য সচিব ডা পারভেজ রেজা কাকন এর ব্যবস্থাপনায় আমিনুল হকের চিকিৎসার সার্বিক দায়িত্ব গ্রহণ করেছে জিয়াউর রহমান ফাউন্ডেশন।জিয়াউর রহমান ফাউন্ডেশন এর কো অর্ডিনেটর ডা সাজিদ ইমতিয়াজ এর তত্বাবধানে আজকে আমিনুল হকের শরীর থেকে গুলি অপসারন করা হয়",
      img: img3,
    },
  ];

  return (
    <>
      <Banner />
      <Container className="my-20">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[1100px] md:h-[900px] lg:h-[500px]">
          {cardData.map((card, index) => (
            <div
              className="relative shadow-md overflow-hidden group border"
              key={index}
            >
              <Image
                className="w-full h-[300px] lg:h-[400px] object-cover"
                src={card.img}
                alt={card.title}
              />
              {/* Overlapping content */}
              <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 lg:p-4 bg-blue-950 border-t border-gray-300 rounded-t-3xl h-[150px] md:h-[200px] lg:h-[200px] mt-28 md:mt-0 lg:mt-0">
                <h2 className="text-xl text-white">{card.title}</h2>
                <p className="mt-2 text-white">
                  {card.content?.slice(0, 180)} ......
                </p>
              </div>
              {/* Hover content */}
              <div className="absolute inset-x-0 bottom-0 bg-green-700 text-[#fff] transition-transform transform translate-y-full group-hover:translate-y-0 duration-500 ease-in-out h-[340px] md:h-[300px] lg:h-[300px] rounded-t-3xl">
                <div className="w-full p-2 md:p-4 lg:p-6 lg:h-full">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl ">{card.title?.slice(0, 100)}</h2>
                    </div>
                    <p className="text-justify">{card.content?.slice(0, 200)}</p>
                    <Button href={`/whatwedo/program/${card.id}`}>
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Program;
