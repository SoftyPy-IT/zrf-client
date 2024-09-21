import React from "react";
import Container from "@/components/share/Container";
import news1 from "../../../../src/assets/images/news/news (1).jpg";
import news2 from "../../../../src/assets/images/news/news (2).jpg";
import news3 from "../../../../src/assets/images/news/news (3).jpg";
import news4 from "../../../../src/assets/images/news/news (4).jpg";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import News from "./_components/News";

const newsItems = [
  {
    id: 1,
    image: news1,
    title: "স্কলারশিপ প্রকল্প",
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
    title: "আরেকটি খবরের আইটেম",
    description:
      "জিয়াউর রহমান ফাউন্ডেশন বাংলাদেশের স্বাধীনতার ঘোষক ও মহান মুক্তিযোদ্ধা শহীদ রাষ্ট্রপতি জিয়াউর রহমানের স্মৃতির উদ্দেশ্যে প্রতিষ্ঠিত একটি মানবিক ও কল্যাণমূলক সংস্থা।",
    date: "১০ এপ্রিল ২০২৪",
  },
  {
    id: 4,
    image: news4,
    title: "আরেকটি খবরের আইটেম",
    description:
      "জিয়াউর রহমান ফাউন্ডেশন বাংলাদেশের স্বাধীনতার ঘোষক ও মহান মুক্তিযোদ্ধা শহীদ রাষ্ট্রপতি জিয়াউর রহমানের স্মৃতির উদ্দেশ্যে প্রতিষ্ঠিত একটি মানবিক ও কল্যাণমূলক সংস্থা।",
    date: "১০ এপ্রিল ২০২৪",
  },
];

const page = () => {
  return (
    <div>
      <News />
      <Container className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {newsItems.map((data) => (
            <div key={data.id} className="shadow-xl bg-white overflow-hidden">
              <div className="relative">
                <Image
                  src={data.image}
                  alt={data.title}
                  className="h-[250px] w-full object-cover transition-transform duration-500 transform hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-5">
                <h3 className="text-xl font-bold">{data.title}</h3>
                <p className="text-justify">{data.description}...</p>
                <div className="flex justify-between">
                  <p className="text-gray-600">{data.date}</p>
                  <Link href="/news/id">
                    <button className="hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-1 hover:text-white rounded-full uppercase text-xs border">
                      আরো পড়ুন <EastIcon fontSize="small" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
