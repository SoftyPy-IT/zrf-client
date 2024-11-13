import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper as SwiperClass } from "swiper/types"; // Import Swiper type for the ref
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Zoom } from "swiper/modules";
import "./Publications.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import book1 from "../../../../../src/assets/images/ebooks/ebook.jpeg";
import book2 from "../../../../../src/assets/images/ebooks/ebook2.jpeg";
import book3 from "../../../../../src/assets/images/ebooks/ebook3.jpeg";
import book4 from "../../../../../src/assets/images/ebooks/ebook4.jpeg";
import book5 from "../../../../../src/assets/images/ebooks/ebook5.jpeg";
import book6 from "../../../../../src/assets/images/ebooks/ebook6.jpeg";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
function PublicationSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperClass | null>(null);

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

  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold uppercase md:w-[400px]">E-Books</h2>
        <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-20"></div>
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
        <SwiperSlide className="swiperSlide">
          <Image className="swiperImg" alt="slider" src={book1} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image alt="slider" src={book2} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image alt="slider" src={book3} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image className="swiperImg" alt="slider" src={book4} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image alt="slider" src={book1} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image className="swiperImg" alt="slider" src={book2} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image alt="slider" src={book3} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image alt="slider" src={book4} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image alt="slider" src={book5} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image alt="slider" src={book6} />
        </SwiperSlide>
      </Swiper>

      <div className="mt-10">
        <Link href="/ebooks">
          <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase">
            See All <EastIcon fontSize="small" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PublicationSlider;
