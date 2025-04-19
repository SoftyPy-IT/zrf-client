import React from "react";
import Image from "next/image";
import bannerImage from "../../../../src/assets/images/banner/banner-new.jpg";

type TProps = {
  title: string;
};
const CommonBanner = ({ title }: TProps) => {
  return (
    <div className="relative md:h-[300px] h-[170px] bg-gray-800 overflow-hidden">
      <Image
        src={bannerImage}
        alt="Blog Banner"
        layout="fill"
        objectFit="cover"
        className="opacity-75 lg:h-[300px]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-5">
        <h1 className="text-2xl md:text-4xl font-bold text-center uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default CommonBanner;
