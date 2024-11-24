"use client";
import React, { useEffect, useState } from "react";
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
import { TBanner } from "@/types/type";
import { useLanguage } from "@/provider/LanguageProvider";
import Loader from "@/components/Loading/Loading";

const Slider = () => {
  const [slides, setSlides] = useState<TBanner[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };

  const fetchSlides = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/banner`);
      if (!response.ok) throw new Error("Failed to fetch slides data");
      const data = await response.json();
      setSlides(data.data.banners);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  const filteredSlides = slides.filter((slide) => slide.category === "Banner");

  return (
    <div className="slider-container">
      {loading ? (
        <>
          <Loader />
        </>
      ) : error ? (
        <>
        <Loader />
      </>
      ) : filteredSlides.length === 0 ? (
        <div className="text-center text-gray-500">
          {/* No Data Found */}
          <p>No banners found.</p>
        </div>
      ) : (
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
          {filteredSlides.map((slide, index) => (
            <SwiperSlide key={slide._id} className="swiper-slide-zoom">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px] sliderWrap">
                <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-1000 ease-in-out overlay"></div>
                {slide.thumnailImages?.map((img, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={img}
                    alt={`Banner ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover"
                  />
                ))}
                <div
                  className={`z-[999999] sliderContent absolute inset-0 flex justify-start items-center text-left text-white p-4 transition-all duration-1000 ease-in-out ${activeSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-28"
                    }`}
                >
                  <div className="max-w-lg lg:max-w-md md:p-5 rounded-lg bg-opacity-50 space-y-2 lg:space-y-3">
                    <h2 className="md:w-[600px] text-[18px] lg:text-3xl font-bold">
                      {language === "ENG"
                        ? slide.english_title
                        : slide.bangla_title}
                    </h2>
                    <p className="md:w-[600px] text-[12px] md:text-[20px] leading-5 lg:leading-7">
                      {language === "ENG"
                        ? slide.english_short_description
                        : slide.bangla_short_description}
                    </p>
                    <button className="bg-[#FEC909] text-white text-sm px-3 md:px-6 py-1 md:py-3 rounded-full hover:bg-[#216740] transition duration-300">
                      {language === "ENG" ? " Learn More" : "আরও জানুন"}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Slider;
