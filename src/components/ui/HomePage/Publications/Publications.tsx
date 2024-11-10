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
      {/* <div className="grid grid-cols-12 mt-40">
        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-3xl font-bold uppercase md:w-[400px]">E-Books</h2>
          <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-10"></div>
        </div>

        <div className="col-span-12 lg:col-span-5 hidden md:block ">
          <div className="flex items-center  border border-green-600 ">
            <h2 className="text-2xl font-bold uppercase bg-gradient-to-r from-yellow-600 to-green-600 text-white px-6 py-2">
              News
            </h2>
            <Marquee>
              <h1>
                This publication dives deep into the contributions of Ziaur
                Rahman !
              </h1>
            </Marquee>
          </div>
        </div>
      </div> */}
      <div className="lg:flex justify-center my-40">
        <PublicationSlider />
        <LatestNews />
      </div>
    </Container>
  );
};

export default Publication;
