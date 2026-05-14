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
import BNPButton from "@/components/Button";

const Loader = () => {
  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center z-50">
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="rectangular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rectangular" width={210} height={60} />
      </Stack>
    </div>
  );
};

function PublicationSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const { language } = useLanguage();
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

  // Show loader while loading
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }

  // Show message if no data available
  if (ebookData.length === 0) {
    return <h2 className="text-center">No eBooks Available</h2>;
  }

  return (
    <div>
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
        // Add observer to handle dynamic slides
        observer={true}
        observeParents={true}
      >
        {ebookData.map((ebook: TEbook) => (
          <SwiperSlide key={ebook._id} className="swiperSlide">
            <div className="swiper-zoom-container">
              <Image
                className="swiperImg"
                alt={ebook.title || "E-Book"}
                src={ebook.images[0] || "/path/to/default/image.jpg"}
                width={300}
                height={400}
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex w-full flex-col items-end lg:items-start mt-10">
        <BNPButton
          href="/ebooks"
          language={language}
          variant="primary"
          size="md"
          showIcon={true}
          iconPosition="right"
        >
          {language === "ENG" ? "See All" : "সব দেখুন"}
        </BNPButton>
      </div>
    </div>
  );
}

export default PublicationSlider;