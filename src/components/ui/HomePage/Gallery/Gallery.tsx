import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import img1 from "../../../../../src/assets/images/gallery/gallery (1).jpeg";
import img2 from "../../../../../src/assets/images/gallery/gallery (2).jpeg";
import img3 from "../../../../../src/assets/images/gallery/gallery (3).jpeg";
import img4 from "../../../../../src/assets/images/gallery/gallery (4).jpeg";
import Container from "@/components/share/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const GallerySection = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/dOWL-q-lEzY",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    },
  ];

  const images = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
  ];

  return (
    <Container>
      <div className="my-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-20">
          {/* Left Side: Videos Slider */}
          <div>
            <div>
              <h2 className="lg:text-3xl text-2xl font-bold uppercase">
                Video Gallery
              </h2>
              <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5"></div>
              <Swiper
                pagination={{ clickable: true }}
                navigation
                modules={[Navigation]}
                className="mySwiper"
              >
                {videos.map((video, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-64 md:h-80 bg-gray-200 overflow-hidden">
                      <ReactPlayer
                        url={video.url}
                        width="100%"
                        height="100%"
                        controls
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="mt-5">
              <Link href="/videos">
                <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase">
                  See All <EastIcon fontSize="small" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Images Slider */}
          <div>
            <div>
              <h2 className="lg:text-3xl text-2xl font-bold uppercase">
                Photo Gallery
              </h2>
              <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5"></div>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Autoplay]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                speed={5000}
                loop={true}
                className="mySwiper"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-64 md:h-80 bg-gray-200 overflow-hidden">
                      <Image
                        src={image.image}
                        alt={`Gallery Image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex justify-end mt-5">
              <Link href="/images">
                <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase">
                  See All <EastIcon fontSize="small" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GallerySection;
