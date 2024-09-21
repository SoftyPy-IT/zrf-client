"use client";
import React from "react";
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
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
];

const Slider = () => { 
  return (
    <div className="slider-container ">
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
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide-zoom">
            <div className="relative w-full h-[200px] lg:h-[700px]">
              <Image
                src={slide.img}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="slide-image"
              />              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
