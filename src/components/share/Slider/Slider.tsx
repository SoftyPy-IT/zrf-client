"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

import { EffectFade, Autoplay, Navigation, Pagination, Zoom } from "swiper/modules";

import Image from "next/image";
import img1 from "../../../assets/images/banner/sliderfisr.jpeg";
import img2 from "../../../assets/images/banner/1-1.jpg";
import img3 from "../../../assets/images/banner/Shishu.jpg";
import img4 from "../../../assets/images/banner/4-2.jpeg";

import "./Slider.css";

const slides = [
  {
    img: img1,
    title: "উদ্যোগের মাধ্যমে স্বনির্ভরতা",
    description: "একটি উদ্যোগ, একটু চেষ্টা, এনে দিবে স্বচ্ছলতা, দেশে আসবে স্বনির্ভরতা। আমাদের লক্ষ্য সমাজের প্রতিটি মানুষের জন্য সুযোগ সৃষ্টি করা, যাতে তারা নিজের পায়ে দাঁড়াতে পারে এবং দেশকে সমৃদ্ধির দিকে এগিয়ে নিয়ে যেতে পারে।",
    buttonText: "আরও জানুন",
  },
  {
    img: img2,
    title: "সমাজের উন্নয়নে একযোগে কাজ করি",
    description: "আমরা বিশ্বাস করি যে ছোট একটি পদক্ষেপও বড় পরিবর্তন আনতে পারে। আমাদের কার্যক্রমের মাধ্যমে, আমরা সমাজের সকল স্তরের মানুষের জন্য সঠিক সুযোগ তৈরি করি।",
    buttonText: "যোগদান করুন",
  },
  {
    img: img3,
    title: "একটি নতুন সূচনা, একটি নতুন পথ",
    description: "সামাজিক উন্নয়ন এবং মানুষের কল্যাণে আমাদের প্রচেষ্টা অব্যাহত। আমরা মানুষের জন্য সঠিক পদক্ষেপ নিতে এবং একটি উন্নত সমাজ গড়ে তুলতে কাজ করছি।",
    buttonText: "যোগাযোগ করুন",
  },
  {
    img: img4,
    title: "স্বনির্ভরতার দিকে পথ চলা",
    description: "আমরা দৃঢ় প্রতিজ্ঞ যে, আমাদের উদ্যোগের মাধ্যমে দেশের প্রতিটি নাগরিককে তাদের স্বপ্ন পূরণের সুযোগ দেবো, এবং তাদের আত্মনির্ভরশীল জীবন গড়ে তুলব।",
    buttonText: "আরও পড়ুন",
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
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        zoom={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination, Zoom]}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide-zoom">
            <div className="relative w-full h-[200px] lg:h-[700px] sliderWrap">
              <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-1000 ease-in-out overlay"></div>

              <Image
                src={slide.img}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="slide-image"
              />

              <div
                className={`absolute z-[99999999] inset-0 flex justify-center items-center text-center text-white p-4 transition-all duration-1000 ease-in-out ${activeSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-28"
                  }`}
              >
                <div className="w-[700px] bg-black bg-opacity-5 p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg lg:text-xl mb-6">{slide.description}</p>
                  <button className="bg-[#E3C80D] text-white px-6 py-3 rounded-full hover:bg-[#216740] transition duration-300">
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
