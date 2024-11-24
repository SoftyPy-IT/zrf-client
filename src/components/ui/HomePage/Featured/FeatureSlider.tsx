import Container from "@/components/share/Container";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

import image1 from "../../../../../src/assets/images/featured/forest.jpg";
import image2 from "../../../../../src/assets/images/projects/image2.jpg";
import image3 from "../../../../../src/assets/images/projects/image3.jpg";
import image4 from "../../../../../src/assets/images/projects/image4.jpg";
import { TProject } from "@/types/type";


interface projectProps {
    projectData: TProject[];
    language: string,
}



const FeatureSlider: React.FC<projectProps> = ({ projectData, language }) => {


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
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
    };


    const cardsData = [
        {
            id: 1,
            image: image1,
            title: "Social Forestry Projects",
            description:
                "Social Forestry Projects focus on community-based tree planting and forest management initiatives. These projects aim to enhance environmental sustainability, improve livelihoods, and increase green cover by involving local communities in the cultivation and protection of forests. The primary goals include soil conservation, biodiversity preservation, and providing economic benefits to rural populations through sustainable resource use.",
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
    return (
        <Container>
            <div className="lg:relative -top-24 z-10">
                <div className="bg-white lg:p-2 shadow-md lg:mt-0 mt-10">
                    <Slider {...settings}>
                        {projectData?.map((program, index) => (
                            <div key={index} className="flex justify-center items-center p-2">
                                <div className="flex gap-5 bg-green-600 p-3  items-center justify-items-center h-[150px]">
                                    <div className="space-y-3 flex-1">
                                        <h3 className="text-xs font-bold text-white">
                                            {language == 'ENG' ? program.english_title : program.bangla_title}
                                        </h3>
                                        <p className="text-xs text-white">
                                            {language == 'ENG' ? program.english_short_description?.slice(0, 50) : program.bangla_short_description?.slice(0, 50)}...
                                        </p>
                                        <Link href={`/our-projects/${program._id}`}>
                                            <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-2 py-1 rounded-full text-white text-xs border mt-3">
                                                {language == 'ENG' ? 'Read More' : 'আরও পড়ুন'}
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="flex-none w-28 h-24 overflow-hidden">
                                        {
                                            program.bng_Images?.slice(0, 1).map((img) => (
                                                <Image
                                                    key={img}
                                                    src={img}
                                                    width={200}
                                                    height={200}
                                                    alt={program.english_title}
                                                    className="h-full border"
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>


            <style jsx global>{`
        .slick-prev {
          left: 0;
          z-index: 1; /* Ensure it stays on top of the slider content */
          background-color: rgba(0, 128, 0, 0.7); /* Custom background color */
          color: #ffffff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background-color 0.3s ease;
        }

        .slick-next {
          right: 0;
          z-index: 1;
          background-color: rgba(0, 128, 0, 0.7);
          color: #ffffff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background-color 0.3s ease;
        }

        /* Add hover effect */
        .slick-prev:hover,
        .slick-next:hover {
          background-color: #006400;
        }

        /* Prevent white background on focus */
        .slick-prev:focus,
        .slick-next:focus {
          background-color: rgba(0, 128, 0, 0.7);
        }
      `}</style>
        </Container>
    );
};

export default FeatureSlider;
