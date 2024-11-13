import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./Publications.css";
import Container from "@/components/share/Container";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import Marquee from "react-fast-marquee";
import PublicationSlider from "./PublicationSlider";
import LatestNews from "./LatestNews/LatestNews";

const Publication = () => {
  return (
    <Container>

      <div className="xl:flex justify-center xl:space-y-0 space-y-5  mt-44 md:my-40 ">
        <PublicationSlider />
        <LatestNews />
      </div>
    </Container>
  );
};

export default Publication;
