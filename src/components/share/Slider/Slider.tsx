"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Slider.css";
import { useLanguage } from "@/provider/LanguageProvider";
import { TBanner } from "@/types/type";
import dynamic from "next/dynamic";
import Link from "next/link";
import Container from "../Container";

const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

type Banner = {
  _id: string;
  category: string;
  thumnailImages: string[];
  english_title: string;
  bangla_title: string;
  english_short_description: string;
  bangla_short_description: string;
};

const Slider = () => {
  const [bannerData, setBannerData] = useState<Banner[]>([]); // Specify the type here
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

  const filterBannerData = bannerData.filter(
    (item) => item.category === "Banner"
  );

  return (
    <div className="slider-container">
      {filterBannerData?.slice(0, 1)?.map((data) => (
        <div
          key={data._id}
          className="sliderWrap lg:h-[600px] md:h-[300px] h-[200px]"
        >
          {data.thumnailImages?.map((img, imgIndex) => (
            <Image
              key={imgIndex}
              src={img}
              alt="banner"
              width={1000}
              height={500}
              // objectFit="cover"
              className="w-full h-full"
            />
          ))}
            <div className="absolute inset-0 flex justify-start items-center text-left text-white p-4 bg-opacity-50 ">
              <Container>
                <div className="sliderContents max-w-lg lg:max-w-md space-y-3">
                  <h2 className="md:w-[600px] text-[18px] lg:text-3xl font-bold">
                    {language === "ENG"
                      ? data.english_title
                      : data.bangla_title}
                  </h2>
                  <p className="md:w-[600px] block text-[12px] md:text-[20px]">
                    {language === "ENG"
                      ? data.english_short_description
                      : data.bangla_short_description}
                  </p>
                  <Link href="/about">
                    <button className="bg-[#FEC909] text-white text-sm font-semibold px-3 md:px-6 py-1 md:py-2 rounded-full hover:bg-[#216740] transition duration-300 md:mt-5 mt-2">
                      {language === "ENG" ? "Learn More" : "আরও জানুন"}
                    </button>
                  </Link>
                </div>
              </Container>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
