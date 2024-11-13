// pages/index.js
import Image from "next/image";
import img1 from "../../../../../assets/images/covid/c1.jpg";
import img2 from "../../../../../assets/images/covid/2.jpg";
import img3 from "../../../../../assets/images/covid/c5.jpg";
import Container from "@/components/share/Container";
import Banner from "./Banner";
import { Button } from "@mui/material";

// pages/index.js
const Covid = () => {
  // Sample data for the cards
  const cardData = [
    {
      id: 1,
      title: "চিকিৎসকদেরকে পিপিই দিলো জেডআরএফ ও ড্যাব",
      content:
        "বিশ্বব্যাপী মহামারী করোনাভাইরাসের কারণে সৃষ্ট সঙ্কট থেকে বাংলাদেশের মানুষ যাতে দ্রুত বেরিয়ে আসতে পারে সে জন্য নানামুখী উদ্যোগ গ্রহণ করেছে জিয়াউর রহমান ফাউন্ডেশন (জেডআরএফ) ও ডক্টরস অ্যাসোসিয়েশন অব বাংলাদেশ (ড্যাব)। ",
      img: img1,
    },
    {
      id: 2,
      title: "করোনা হেল্প সেল",
      content:
        "বিএনপির ভারপ্রাপ্ত চেয়ারম্যান দেশনায়ক জনাব তারেক রহমানের নির্দেশনায় বাংলাদেশ জাতীয়তাবাদী দল বিএনপির উদ্যোগে,জিয়াউর রহমান ফাউন্ডেশন ও ডক্টরস এসোসিয়েশন অব বাংলাদেশ (ড্যাব) এর সহযোগিতায় সারা দেশব্যাপী করোনা হেল্প সেন্টার খোলার ধারাবাহিকতায় ২৩ শে জুলাই ২০২১ তারিখ পটুয়াখালী জেলা বি.এন.পি এর করোনা হেল্প সেন্টার এর উদ্বোধন অনুষ্ঠিত হয়৷ উদ্বোধন করেন জেলা বি.এন.পি এর আহবায়ক আলহাজ্জ্ব আবদুর রশিদ চুন্নু মিয়া। ",
      img: img2,
    },
    {
      id: 3,
      title: "পি পি আই বিতরণ কার্যক্রম",
      content:
        "দেশনায়ক জনাব তারেক রহমান এর নির্দেশে জিয়াউর রহমান ফাউন্ডেশনের পি পি আই বিতরণ কার্যক্রম কে গতিশীল রাখতে পর্যাপ্ত সুরক্ষা সামগ্রী প্রদানের করা হয়। রাজধানীর গণ স্বাস্থ্য নগর হাসপাতালে সুরক্ষা সামগ্রী প্রদানের করা হয়। বিএনপির সিনিয়র যুগ্ম মহাসচিব রুহুল কবির রিজভী প্রধান অতিথি হিসেবে উপস্থিত থেকে এই কর্মসূচীর আনুষ্ঠানিক উদ্বোধন করেন। ",
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
                  {card.content.slice(0, 180)} ......
                </p>
              </div>
              {/* Hover content */}
              <div className="absolute inset-x-0 bottom-0 bg-green-700 text-[#fff] transition-transform transform translate-y-full group-hover:translate-y-0 duration-500 ease-in-out h-[340px] md:h-[300px] lg:h-[300px] rounded-t-3xl">
                <div className="w-full p-2 md:p-4 lg:p-6 lg:h-full">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl ">{card.title.slice(0, 100)}</h2>
                    </div>
                    <p className="text-justify">{card.content.slice(0, 200)}</p>
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

export default Covid;
