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
      <div className="sectionMargin mt-96 ">
        <div className="lg:flex gap-5 bg-white">
          {/*  Swiper for Books */}
          <div className="lg:w-[400px] lg:h-[300px]">
            <div>
              <h2 className="text-3xl font-bold uppercase">E-Books</h2>
              <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-10"></div>
              <div className="slider-container lg:h-[540px] border-2 p-1">
                <Swiper
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={0}
                  effect={"fade"}
                  zoom={true}
                  modules={[Autoplay, EffectFade, Zoom]}
                  className="mySwiper"
                >
                  {books.map((slide, index) => (
                    <SwiperSlide key={index} className="swiper-slide-zoom">
                      <div className="relative w-full h-[400px] lg:h-[700px]">
                        <Image
                          src={slide.image}
                          alt={`Slide ${index + 1}`}
                          layout="fill"
                          // objectFit="cover"
                          className="slide-image"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="mt-10 ">
              <Link href="/ebooks">
                <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase">
                  সবগুলো পড়ুন <EastIcon fontSize="small" />
                </button>
              </Link>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-10 border border-green-600 lg:mt-0 mt-10">
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
            <div className="lg:flex gap-5 bg-gray-100 p-5">
              {/* Middle content (Featured) */}
              <div className="bg-white shadow-lg lg:w-[450px] lg:h-[500px] p-5 border rounded">
                <div className="relative w-full h-64 mb-5">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-bold">
                  {featured.title.slice(0, 80)}...
                </h3>
                <p className="text-gray-600 mt-3 text-justify">
                  {featured.description}
                </p>
                <div className="flex justify-end">
                  <Link href="/publication/publication-details">
                    <button className="border border-green-600 hover:bg-gradient-to-r from-yellow-600 to-green-600 hover:text-white px-2 py-1 rounded-full text-sm mt-3">
                      আরো পড়ুন <EastIcon fontSize="small" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Sidebar: News Section */}
              <div className="lg:w-[300px]  lg:mt-0 md:mt-5 mt-5">
                <div className="grid grid-cols-1 gap-3 h-[500px] w-full">
                  {news.map((data) => (
                    <div
                      key={data.id}
                      className="flex items-center gap-5 bg-white p-3 rounded shadow-md transition-transform duration-500 transform hover:scale-105"
                    >
                      <Image
                        src={data.image}
                        alt={data.title}
                        className="w-20 h-16 object-cover rounded transition-opacity duration-500"
                      />
                      <div>
                        <h3 className="text-xs font-bold">
                          {data.title.slice(0, 50)}...
                        </h3>
                        <div className="flex justify-end">
                          <Link href="/publication">
                            <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-2 text-white rounded-full uppercase text-sm">
                              <EastIcon />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
