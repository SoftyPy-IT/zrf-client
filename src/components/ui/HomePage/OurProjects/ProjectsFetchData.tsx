"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Container from "@/components/share/Container";
import banner from "../../../../assets/images/initiatives/banner.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import { TProject } from "@/types/type";


interface projectProps {
  projectData: TProject[];
  language: string,
}


const ProjectsFetchData: React.FC<projectProps> = ({ projectData, language }) => {

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
    speed: 8000,
    slidesToShow,
    slidesToScroll: slidesToShow,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    Autoplay: true,
  };



  return (
    <div className="h-[800px] lg:h-[800px] sectionMargin ">
      <div className="relative w-full lg:h-[600px]">
        <Image
          src={banner}
          alt="banner"
          className="h-[400px] lg:h-full xl:h-[450px] w-full -z-10"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10 h-[400px] lg:h-full xl:h-[450px]"></div>
        <Container className="px-0">
          <div className="relative z-20 flex items-center justify-center">
            <div className="w-full  md:-mt-[300px] -mt-[350px]  xl:-mt-[330px] ">
              <div className="text-white">
                <h1 className="text-4xl uppercase text-center font-bold">
                  {language === 'ENG' ? '  Our Projects ' : 'আমাদের প্রকল্প'}
                </h1>
                <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5 mx-auto"></div>

                <p className="lg:text-center md:text-center text-justify lg:w-[800px] mx-auto mb-10 lg:px-0 md:px-0 px-5 text-[16px]">

                  {language === 'ENG' ? ' Ziaur Rahman Foundation is committed to empowering communities through impactful initiatives, sustainable solutions, and strategic support. We focus on fostering growth, improving lives, and creating lasting change across various sectors.' : 'জিয়াউর রহমান ফাউন্ডেশন প্রভাবশালী উদ্যোগ, টেকসই সমাধান এবং কৌশলগত সহায়তার মাধ্যমে সম্প্রদায়ের ক্ষমতায়ন করতে প্রতিশ্রুতিবদ্ধ। আমরা বিভিন্ন সেক্টরে প্রবৃদ্ধি বৃদ্ধি, জীবনের উন্নতি এবং দীর্ঘস্থায়ী পরিবর্তনের উপর ফোকাস করি।'}
                </p>
              </div>
              <Slider {...settings}>
                {projectData.map((project: TProject, index) => (
                  <div
                    key={index}
                    className="justify-center items-center z-10 p-5"
                  >
                    <div className="relative h-[530px] bg-white shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300 animate-fadeIn rounded-md">



                      <div
                        className="relative h-full w-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${project.bng_Images?.[0] || ''})`,
                        }}
                      >

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>


                        <div className="absolute bottom-0 p-5 text-white z-20 transition-colors duration-300">

                          <h2 className="text-2xl hover:underline font-bold ">
                            {language === 'ENG' ? project.english_title?.slice(0, 70) : project.bangla_title?.slice(0, 70)}
                          </h2>
                          <p className="mt-2 text-justify">
                            {language === 'ENG' ? project.english_short_description?.slice(0, 150) : project.bangla_short_description?.slice(0, 150)}
                            ...
                          </p>

                          <div className=" mt-5">
                            <Link href={`/our-projects/${project._id}`}>
                              <button className="hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-1 hover:text-white rounded-full uppercase text-sm border">
                                {language === 'ENG' ? 'Read More' : 'আরও পড়ুন'}  <EastIcon />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="flex justify-end pb-7 pr-5">
                <Link href="/our-projects">
                  <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 text-white rounded-full uppercase text-sm">
                    {language === 'ENG' ? 'See All' : 'সব দেখুন'}   <EastIcon />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProjectsFetchData;
