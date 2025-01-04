"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Slider.css";
import { useLanguage } from "@/provider/LanguageProvider";
import { TBanner } from "@/types/type";
import dynamic from "next/dynamic";
import Link from "next/link";
import "./Slider.css";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const Slider = () => {
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  const fetchSlides = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/banner`
      );
      if (!response.ok) throw new Error("Failed to fetch slides data");
      const data = await response.json();
      setBannerData(data.data.banners);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;



  const filterBannerData = bannerData.filter((item) => item.category === "Banner");

  return (
    <div className="slider-container">
      {filterBannerData?.slice(0, 1)?.map((data: any) => (
        <div
          key={data._id}
          className="sliderWrap"
        >
          {data.thumnailImages?.map((img: string, imgIndex: number) => (
            <Image
              key={imgIndex}
              src={img}
              alt="banner"
              width={1000}
              height={500}
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          ))}
          <div className="absolute inset-0 flex justify-start items-center text-left text-white p-4 bg-opacity-50 ">
            <div className=" sliderContents max-w-lg lg:max-w-md space-y-3">
              <h2 className="md:w-[600px] text-[18px] lg:text-3xl font-bold">
                {language === "ENG"
                  ? data.english_title
                  : data.bangla_title}
              </h2>
              <p className="md:w-[600px] block text-[12px] md:text-[20px] leading-5 lg:leading-7">
                {language === "ENG"
                  ? data.english_short_description
                  : data.bangla_short_description}
              </p>
              <Link href="/about">
                <button className="bg-[#FEC909] text-white text-sm px-3 md:px-6 py-1 md:py-3 rounded-full hover:bg-[#216740] transition duration-300">
                  {language === "ENG" ? "Learn More" : "আরও জানুন"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
