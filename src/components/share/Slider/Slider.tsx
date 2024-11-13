"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

import {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
  Zoom,
} from "swiper/modules";

import Image from "next/image";
import img1 from "../../../assets/images/banner/sliderfisr.jpeg";
import img2 from "../../../assets/images/banner/1-1.jpg";
import img3 from "../../../assets/images/banner/Shishu.jpg";
import img4 from "../../../assets/images/banner/ziaBanner2.jpeg";

import "./Slider.css";

const slides = [
  {
    img: img4,
    title: '"A Small Initiative, A Little Effort—Bringing Prosperity and Self-Reliance to the Nation"',
    description:
      "Our goal is to create opportunities for every individual in society so they can become self-reliant and contribute to driving the nation towards prosperity.",
    buttonText: "Join Us",
  },
  {
    img: img4,
    title: "সমাজের উন্নয়নে একযোগে কাজ করি",
    description:
      "আমরা বিশ্বাস করি যে ছোট একটি পদক্ষেপও বড় পরিবর্তন আনতে পারে। আমাদের কার্যক্রমের মাধ্যমে, আমরা সমাজের সকল স্তরের মানুষের জন্য সঠিক সুযোগ তৈরি করি।",
    buttonText: "যোগদান করুন",
  },
  {
    img: img4,
    title: "একটি নতুন সূচনা, একটি নতুন পথ",
    description:
      "সামাজিক উন্নয়ন এবং মানুষের কল্যাণে আমাদের প্রচেষ্টা অব্যাহত। আমরা মানুষের জন্য সঠিক পদক্ষেপ নিতে এবং একটি উন্নত সমাজ গড়ে তুলতে কাজ করছি।",
    buttonText: "যোগাযোগ করুন",
  },
];

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true }}
        zoom={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination, Zoom]}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide-zoom">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px] sliderWrap">
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-1000 ease-in-out overlay"></div>

              {/* Background Image */}
              <Image
                src={slide.img}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />

              {/* Content Overlay */}
              <div
                className={` z-[999999] sliderContent absolute inset-0 flex justify-start items-center text-left text-white p-4 transition-all duration-1000 ease-in-out ${activeSlide === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-28"
                  }`}
              >
                <div className="max-w-lg lg:max-w-md md:p-5  rounded-lg bg-opacity-50 space-y-2 lg:space-y-3 ">
                  <h2 className="md:w-[600px] text-[18px] lg:text-3xl font-bold">
                    {slide.title}
                  </h2>
                  <p className="md:w-[600px] text-[12px] md:text-[20px] leading-5 lg:leading-7">{slide.description}</p>
                  <button className="bg-[#E3C80D] text-white text-sm px-3 md:px-6 py-1 md:py-3 rounded-full hover:bg-[#216740] transition duration-300">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
