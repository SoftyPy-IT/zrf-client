import React from "react";
import dynamic from "next/dynamic";
import Container from "@/components/share/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import PhotoGallery from "./PhotoGallery";
import VideoGallery from "./VideoGallery";


const GallerySection = () => {



  return (
    <Container>
      <div className="my-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-20">
          <div>
            <VideoGallery />
          </div>
          <div>
            <PhotoGallery />
          </div>
        </div>
      </div>
    </Container>
  );
};



export default GallerySection;
