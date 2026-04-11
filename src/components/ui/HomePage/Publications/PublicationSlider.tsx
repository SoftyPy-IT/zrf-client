import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Zoom } from "swiper/modules";
import "./Publications.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import { useLanguage } from "@/provider/LanguageProvider";
import { TEbook } from "@/types/type";
import { useEbookData } from "@/hooks/useEbookData";
import dynamic from "next/dynamic";
import { Skeleton, Stack } from "@mui/material";

const Loader = () => {
  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center  z-50">
      {/* <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="rectangular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rectangular" width={210} height={60} />
      </Stack> */}
    </div>
  );
};

function PublicationSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const { language } = useLanguage();
  // const { ebookData, loading, error } = useEbookData();
  const [ebookData, setEbookData] = useState<TEbook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchEbookData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/ebook?limit=99999999&fields=images`,
          {
            cache: "no-store",
          },
        );
        const data = await response.json();
        setEbookData(data.data?.ebooks || []);
      } catch (err) {
        setError("Failed to fetch eBook data!");
      } finally {
        setLoading(false);
      }
    };

    fetchEbookData();
  }, []);
  const updateIndex = useCallback(() => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.realIndex);
    }
  }, []);

  useEffect(() => {
    const swiperInstance = swiperRef.current;
    if (swiperInstance) {
      swiperInstance.on("slideChange", updateIndex);
    }
    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [updateIndex]);

  // if (loading) {
  //   return <Loader />;
  // }
  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold uppercase md:w-[400px]">
          {language === "ENG" ? " E-Books" : "ই-বুক"}
        </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-3 "></div>
      </div>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 10,
          stretch: 20,
          depth: 700,
          modifier: 1.3,
          slideShadows: true,
        }}
        zoom={true}
        modules={[EffectCoverflow, Autoplay, Zoom]}
        speed={900}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {ebookData.map((ebook: TEbook) => (
          <SwiperSlide key={ebook._id} className="swiperSlide">
            <Image
              className="swiperImg"
              alt={ebook.title || "E-Book"}
              src={ebook.images[0] || "/path/to/default/image.jpg"}
              width={300}
              height={400}
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex flex-col items-end lg:items-start mt-10">
        <Link href="/ebooks">
          <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase">
            {language === "ENG" ? "See All " : "সব দেখুন"}{" "}
            <EastIcon fontSize="small" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PublicationSlider;
