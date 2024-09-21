import React from "react";
import Container from "@/components/share/Container";
import news1 from "../../../../../src/assets/images/news/news (1).jpg";
import news2 from "../../../../../src/assets/images/news/news (2).jpg";
import news3 from "../../../../../src/assets/images/news/news (3).jpg";
import news4 from "../../../../../src/assets/images/news/news (4).jpg";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

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
      <h1 className="text-3xl font-bold uppercase">Recent Activities of ZRF</h1>
      <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5"></div>
      <div className="lg:flex gap-10">
        {/* Main News Content */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:h-[500px]">
            {newsItems.map((data) => (
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

                <div className="p-5 space-y-5 relative z-10">
                  <h3 className="text-xl font-bold">{data.title}</h3>
                  <p className="text-justify">{data.description}...</p>
                  <div className="flex justify-between">
                    <p>{data.date}</p>
                    <Link href="/recent-activities-of-zrf/id">
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
          <div className="grid grid-cols-1 gap-5 lg:h-[500px] bg-gray-100 p-5 lg:mt-0 md:mt-5 mt-5">
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
                  {/* <p className="text-sm text-gray-600">{data.date}</p> */}
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
