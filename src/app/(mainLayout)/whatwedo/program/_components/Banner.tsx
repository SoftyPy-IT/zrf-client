import React from "react";
import Image from "next/image";
import bannerImage from "../../../../../assets/images/banner/banner.jpeg";

const Banner = () => {
  return (
    <div className="relative h-80 md:h-[200px] lg:h-[250px] bg-gray-800 overflow-hidden mb-4">
      <Image
        src={bannerImage}
        alt="Blog Banner"
        layout="fill"
        objectFit="cover"
        className="opacity-75 lg:h-[300px]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-5">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          প্রোগ্রাম
        </h1>
        {/* <p className="text-lg md:text-2xl mt-3 text-center">
          Insights, stories, and updates from our team.
        </p> */}
      </div>
    </div>
  );
};

export default Banner;
