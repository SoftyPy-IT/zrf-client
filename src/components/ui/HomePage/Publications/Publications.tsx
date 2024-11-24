import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./Publications.css";
import Container from "@/components/share/Container";
import PublicationSlider from "./PublicationSlider";
import LatestNews from "./LatestNews/LatestNews";

const Publication = () => {
  return (
    <Container>

      <div className="grid grid-cols-12 xl:space-y-0 space-y-5  mt-44 md:my-40 ">
        <div className="col-span-12 lg:col-span-7">
          <PublicationSlider />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <LatestNews />
        </div>
      </div>
    </Container>
  );
};










export default Publication;
