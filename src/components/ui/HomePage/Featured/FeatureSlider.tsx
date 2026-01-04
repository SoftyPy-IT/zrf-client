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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

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
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };

  const sortedProjectData = projectData?.sort((a: TProject, b: TProject) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  if (!isClient) {
    return (
      <Container>
        <div className="lg:relative -top-24 z-10">
          <div className="bg-white lg:p-2 shadow-md lg:mt-0 mt-10">
            <div style={{ height: "220px" }}></div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="lg:relative -top-24 z-10">
        <div className="bg-white lg:p-2 shadow-md lg:mt-0 mt-10">
          <Slider key={slidesToShow} {...settings}>
            {sortedProjectData?.map((program) => (
              <div
                key={program._id}
                className="flex justify-center items-center p-2"
              >
                <div className="flex flex-col md:flex-row gap-3 bg-green-600 p-5 items-center md:h-[180px] w-full">
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
                            80
                          )}{" "}
                    </p>
                    <Link href={`/our-projects/${program._id}`}>
                      <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-2 py-1 rounded-full text-white text-xs border mt-3">
                        {language == "ENG" ? "Read More" : "আরও পড়ুন"}
                      </button>
                    </Link>
                  </div>
                  {/* === RESPONSIVE IMAGE CONTAINER === */}
                  <div className="flex-none order-1 md:order-2 w-full h-48 md:w-32 md:h-28 overflow-hidden relative">
                    {program.bng_Images?.slice(0, 1).map((img) => (
                      <Image
                        key={img}
                        src={img}
                        alt={program.english_title}
                        fill
                        className="object-cover border"
                        // Updated sizes prop for better performance
                        sizes="(max-width: 768px) 100vw, 128px"
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
        .slick-prev,
        .slick-next {
          z-index: 1;
          background-color: rgba(0, 128, 0, 0.7);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: background-color 0.3s ease;
        }
        .slick-prev {
          left: 10px;
        }
        .slick-next {
          right: 10px;
        }
        .slick-prev:before,
        .slick-next:before {
          font-family: none;
          color: white;
          font-size: 28px;
          opacity: 1;
          line-height: 1;
        }
        .slick-prev:before {
          content: "‹";
        }
        .slick-next:before {
          content: "›";
        }
        .slick-prev:hover,
        .slick-next:hover {
          background-color: #006400;
        }
      `}</style>
    </Container>
  );
};

export default FeatureSlider;
