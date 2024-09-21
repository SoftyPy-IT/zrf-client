import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./Publications.css";
import Container from "@/components/share/Container";
import img1 from "../../../../../src/assets/images/New folder (2)/news (1).jpeg";
import img2 from "../../../../../src/assets/images/New folder (2)/news (2).jpg";
import img3 from "../../../../../src/assets/images/New folder (2)/news (3).jpg";
import img4 from "../../../../../src/assets/images/New folder (2)/news (4).jpg";
import img5 from "../../../../../src/assets/images/New folder (2)/news (6).jpg";

import book1 from "../../../../../src/assets/images/ebooks/e1.jpg";
import book2 from "../../../../../src/assets/images/ebooks/e2.jpg";
import book3 from "../../../../../src/assets/images/ebooks/e3.jpg";
import book4 from "../../../../../src/assets/images/ebooks/e4.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Zoom } from "swiper/modules";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import Marquee from "react-fast-marquee";
import PublicationSlider from "./PublicationSlider";
import LatestNews from "./LatestNews/LatestNews";

const Publication = () => {
  const books = [
    { id: 1, image: book1 },
    { id: 2, image: book2 },
    { id: 3, image: book3 },
    { id: 4, image: book4 },
  ];

  const news = [
    {
      id: 1,
      title:
        "জিয়াউর রহমান ফাউন্ডেশন’র ২৪তম প্রতিষ্ঠা বার্ষিকী উপলক্ষে শহিদ প্রেসিডেন্ট জিয়াউর রহমান’র সমাধিতে শ্রদ্ধা নিবেদন।",
      image: img1,
      date: "১০ এপ্রিল ২০২৪",
    },
    {
      id: 2,
      title:
        "কুড়িগ্রাম, বন্যা কবলিত এলাকার মানুষের মাঝে বিনামূল্যে স্বাস্থ্য সেবা",
      image: img2,
      date: "১০ এপ্রিল ২০২৪",
    },
    {
      id: 3,
      title: "বিশিষ্ট ক্রীড়া সংগঠক আরাফাত রহমান কোকোর",
      image: img3,
      date: "১০ এপ্রিল ২০২৪",
    },
    {
      id: 4,
      title: "ভোলায় শহিদ নুরে আলম ও আব্দুর রহিমের",
      image: img4,
      date: "১০ এপ্রিল ২০২৪",
    },
    {
      id: 5,
      title:
        "কুড়িগ্রাম, বন্যা কবলিত এলাকার মানুষের মাঝে বিনামূল্যে স্বাস্থ্য সেবা",
      image: img5,
      date: "১০ এপ্রিল ২০২৪",
    },
  ];

  const featured = {
    title:
      "জিয়াউর রহমান ফাউন্ডেশন’র ২৪তম প্রতিষ্ঠা বার্ষিকী উপলক্ষে শহিদ প্রেসিডেন্ট জিয়াউর রহমান’র সমাধিতে শ্রদ্ধা নিবেদন।",
    description:
      "This publication dives deep into the contributions of Ziaur Rahman, highlighting his legacy and impact on the nation of Bangladesh. From his role in the...",
    image: img1,
  };

  return (
    <Container>
      <div className="sectionMargin ">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="text-3xl font-bold uppercase mdw-[400px]">E-Books</h2>
          </div>

          <div className="col-span-12 lg:col-span-5">
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
            </div >
          </div>
        </div>
        <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-10"></div>
        <div className="grid grid-cols-12 gap-10 mt-20 ">

          <div className="col-span-12 lg:col-span-7">
            <PublicationSlider />
          </div>

          <div className="col-span-12 lg:col-span-5">

            <LatestNews />
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <Link href="/news">
            <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase">
              সবগুলো পড়ুন <EastIcon fontSize="small" />
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Publication;
