import Container from "@/components/share/Container";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import img1 from "../../../../../src/assets/images/featured/1.jpg";
import img2 from "../../../../../src/assets/images/featured/2.jpeg";
import img3 from "../../../../../src/assets/images/featured/3.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Featured = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow,
    slidesToScroll: slidesToShow,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const programs = [
    {
      title: "Clean Water",
      description: "Donation for Clean Water to the People's",
      imageUrl: img1,
    },
    {
      title: "Education",
      description: "Donating to support education for children",
      imageUrl: img2,
    },
    {
      title: "Healthy Food",
      description: "Donation for Healthy Food to Children",
      imageUrl: img3,
    },
  ];

  return (
    <Container>
      <div className="lg:relative -top-28 z-10">
        <div className="bg-white lg:p-8 shadow-md lg:mt-0 mt-10">
          <Slider {...settings}>
            {programs.map((program, index) => (
              <div key={index} className="flex justify-center items-center p-5">
                <div className="flex gap-5 bg-green-600 p-5">
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-white">
                      {program.title}
                    </h3>
                    <p className="text-sm text-white">{program.description}</p>
                    <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 rounded-full text-white uppercase text-xs font-semibold border">
                      Read More
                    </button>
                  </div>
                  <div className="flex-none w-28 overflow-hidden">
                    <Image
                      src={program.imageUrl}
                      alt={program.title}
                      className="h-full border"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Featured;
