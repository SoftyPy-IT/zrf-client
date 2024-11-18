"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Container from "@/components/share/Container";
import banner from "../../../../assets/images/initiatives/banner.jpeg";
import image1 from "../../../../../src/assets/images/projects/image1.jpg";
import image2 from "../../../../../src/assets/images/projects/image2.jpg";
import image3 from "../../../../../src/assets/images/projects/komol.jpeg";
import image4 from "../../../../../src/assets/images/projects/image4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import { TProject } from "@/types/type";

const cardsData = [
  {
    id: 1,
    image: image1,
    title: "Asthma Care and Prevention Center",
    description:
      "70lacs people suffer from asthma, which is about 5% of the total population. Asthma centre at Dhaka under government arrangement was the only integrated asthma management centre in our country. Asthma care and prevention centre, Bogra commenced on 14th May, 2003 to ensure effortless breathing for asthmatics. This centre is providing integrated asthma treatment by trained doctors including of patient education, which is the most important component of asthma treatment. Specialized service like, Nebulisation, Spirometry, ECG and Oxygen therapy is also available at a very rational cost. Orientation training of doctors on asthma is a unique component of this centre by which the integrated asthma management concept will be disseminated at grass root levels. Response of patients encouraged us to start a new centre at Chittagong on 11th February, 2004.",
  },
  {
    id: 2,
    image: image2,
    title: "Shaheed Ziaur Rahman Shishu Hospital",
    description:
      "Shaheed Ziaur Rahman Shishu Hospital is committed to providing comprehensive healthcare services to children with the goal of improving pediatric health outcomes. The hospital focuses on offering better medical care and modern facilities, aiming to reduce child morbidity and mortality rates. It is equipped with outpatient services for consultations and treatment, ensuring easy access for families. Additionally, the hospital prioritizes the development of skilled healthcare professionals by organizing specialized training programs for nurses and paramedics.",
  },
  {
    id: 3,
    image: image3,
    title: "Komol Project",
    description:
      "The farmers of our country contribute a major part in our economy. The unbelievable fact is that 5% of this farmer use quality seed, which is a mandatory requirement for booming production. Parallel to government no significant initiative was taken in private sector to explore this huge requirements.",
  },
  {
    id: 4,
    image: image4,
    title: "Scholarship Project",
    description:
      "Bangladesh with its vast natural beauty is a land of green panorama. Apart from exerting beauty trees have multiple benefits as it prevents deforestation, generate income for the owner and protects environment. Ziaur Rahman Foundation undertook program to help people reap the multiple benefits of the mother nature.",
  },
];


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
                            {language === 'ENG' ? project.english_title.slice(0, 70) : project.bangla_title.slice(0, 70)}
                          </h2>
                          <p className="mt-2 text-justify">
                            {language === 'ENG' ? project.english_short_description.slice(0, 150) : project.bangla_short_description.slice(0, 150)}
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
