import Container from "@/components/share/Container";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { TProject } from "@/types/type";
import truncateText from "@/utils/truncate";
interface projectProps {
  projectData: TProject[];
  language: string;
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
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };

  return (
    <Container>
      <div className="lg:relative -top-24 z-10">
        <div className="bg-white lg:p-2 shadow-md lg:mt-0 mt-10">
          <Slider {...settings}>
            {projectData?.map((program, index) => (
              <div key={index} className="flex justify-center items-center p-2">
                <div className="flex flex-col md:flex-row  gap-3 bg-green-600 p-5  items-center justify-items-center md:h-[180px]">
                  <div className="space-y-3 flex-1 order-2 md:order-1">
                    <h3 className="xl:text-[18px] font-bold text-white">
                      {language === "ENG"
                        ? program.english_title
                        : program.bangla_title}
                    </h3>
                    <p className="text-xs text-white">
                      {language === "ENG"
                        ? truncateText(program.english_short_description, 100)
                        : truncateText(
                            program.bangla_short_description,
                            80,
                          )}{" "}
                    </p>
                    <Link href={`/our-projects/${program._id}`}>
                      <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-2 py-1 rounded-full text-white text-xs border mt-3">
                        {language == "ENG" ? "Read More" : "আরও পড়ুন"}
                      </button>
                    </Link>
                  </div>
                  <div className="flex-none order-1 md:order-2 md:w-32 md:h-28 overflow-hidden">
                    {program.bng_Images?.slice(0, 1).map((img) => (
                      <Image
                        key={img}
                        src={img}
                        width={200}
                        height={200}
                        alt={program.english_title}
                        className="h-full border"
                      />
                    ))}
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
