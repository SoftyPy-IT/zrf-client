"use client";
import React from "react";
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
import "./Slider.css";
import { useGetAllBannerQuery } from "@/redux/api/allApi";

interface BannerItem {
  _id: string;
  thumnailImages: string[];
}

const Slider = () => {
  const { data, isLoading, isError } = useGetAllBannerQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  // console.log(data);

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
        className="mySwiper"
      >
        {data?.banners.map((slide: BannerItem, index: number) => (
          <SwiperSlide key={index} className="swiper-slide-zoom">
            <div className="relative w-full h-[300px] md:h-[500px] lg:h-[500px]">
              {slide.thumnailImages.map((item: string, index: number) => (
                <Image
                  key={index}
                  src={item}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="slide-image h-[500px] w-full"
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
