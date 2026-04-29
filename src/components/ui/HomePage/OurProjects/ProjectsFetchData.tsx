"use client";
import BNPButton from "@/components/Button";
import Container from "@/components/share/Container";
import { TProject } from "@/types/type";
import truncateText from "@/utils/truncate";
import {
  CalendarToday,
  LocationOn,
  People
} from "@mui/icons-material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CTASection from "./CTASection";
import StatisticsSection from "./StatisticsSection";

interface projectProps {
  projectData: TProject[];
  language: string;
}

const ProjectsFetchData: React.FC<projectProps> = ({
  projectData,
  language,
}) => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const sliderRef = useRef<Slider>(null);

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
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    pauseOnHover: true,
  };

  const sortedProjectData = projectData?.sort((a: TProject, b: TProject) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div id="projects-slider" className="relative mt-10 md:mt-12">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              {language === "ENG" ? "Our Project" : "আমাদের প্রকল্প"}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-yellow-500 mx-auto rounded-full" />
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              {language === "ENG"
                ? "Ziaur Rahman Foundation is committed to empowering communities through impactful initiatives, sustainable solutions, and strategic support. We focus on fostering growth, improving lives, and creating lasting change across various sectors."
                : "জিয়াউর রহমান ফাউন্ডেশন (জেডআরএফ) বাংলাদেশের পিছিয়ে পড়া জনগণের জীবনযাত্রার মান উন্নয়নে একাধিক দারিদ্র্য নির্মূল প্রকল্প শুরু করেছে। টেকসই উন্নয়ন, শিক্ষা, এবং আর্থিক ক্ষমতায়নের উপর গুরুত্ব দিয়ে, জেডআরএফ দেশের সবচেয়ে অবহেলিত জনগণের জন্য কাজ করে চলেছে।"}
            </p>
          </div>

          <div className="relative px-2 md:px-0">
            {isClient && sortedProjectData && sortedProjectData.length > 0 && (
              <Slider ref={sliderRef} {...settings}>
                {sortedProjectData?.map((project: TProject, index: number) => (
                  <div key={project._id || index} className="px-3 py-4">
                    <div
                      className="group relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={
                            project.bng_Images?.[0] ||
                            project.english_Images?.[0] ||
                            project.eng_images?.[0] ||
                            "/placeholder.jpg"
                          }
                          alt={
                            language === "ENG"
                              ? project.english_title
                              : project.bangla_title
                          }
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-5 left-5 z-10">
                        <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/10">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                          <span className="text-white text-xs font-medium uppercase">
                            {project.category ||
                              (language === "ENG"
                                ? "Active Project"
                                : "সক্রিয় প্রকল্প")}
                          </span>
                        </div>
                      </div>

                      {/* Progress Indicator */}
                      <div className="absolute top-24 left-5 right-5 z-10">
                        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-yellow-400 to-emerald-500 rounded-full transition-all duration-1000"
                            style={{
                              width: `${Math.min(100, (index + 1) * 16.6)}%`,
                            }}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <div className="transform transition-all duration-500">
                          {/* Title */}
                          <h3 className="text-white text-xl md:text-2xl font-bold mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                            {language === "ENG"
                              ? truncateText(project.english_title, 55)
                              : truncateText(project.bangla_title, 55)}
                          </h3>

                          {/* Description */}
                          <p className="text-white/70 text-sm mb-4 line-clamp-2">
                            {language === "ENG"
                              ? truncateText(
                                project.english_short_description,
                                90,
                              )
                              : truncateText(
                                project.bangla_short_description,
                                90,
                              )}
                          </p>

                          {/* Metadata - Appears on Hover */}
                          <div
                            className={`flex flex-wrap gap-2 mb-4 transition-all duration-500 overflow-hidden ${hoveredIndex === index
                              ? "max-h-32 opacity-100"
                              : "max-h-0 opacity-0"
                              }`}
                          >
                            {project.location && (
                              <div className="flex items-center gap-1 text-white/70 text-xs bg-white/10 rounded-full px-2 py-1">
                                <LocationOn className="text-yellow-400 text-xs" />
                                <span>
                                  {truncateText(project.location, 15)}
                                </span>
                              </div>
                            )}
                            {project.date && (
                              <div className="flex items-center gap-1 text-white/70 text-xs bg-white/10 rounded-full px-2 py-1">
                                <CalendarToday className="text-yellow-400 text-xs" />
                                <span>
                                  {new Date(project.date).getFullYear()}
                                </span>
                              </div>
                            )}
                            {project.beneficiaries && (
                              <div className="flex items-center gap-1 text-white/70 text-xs bg-white/10 rounded-full px-2 py-1">
                                <People className="text-yellow-400 text-xs" />
                                <span>{project.beneficiaries}+</span>
                              </div>
                            )}
                          </div>

                          {/* BNPButton - Fixed */}
                          <BNPButton
                            href={`/our-projects/${project._id}`}
                            language={language}
                            variant="primary"
                            size="sm"
                            showIcon={true}
                            iconPosition="right"

                          >
                            {language === "ENG" ? "See More" : "আরও পড়ুন"}
                          </BNPButton>
                        </div>
                      </div>

                      {/* Glass Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>

          <div className="flex justify-end mt-10">
            <BNPButton
              href="/our-projects"
              language={language}
              variant="primary"
              size="md"
              showIcon={true}
              iconPosition="right"
            >
              {language === "ENG" ? "See All" : "সব দেখুন"}
            </BNPButton>
          </div>
        </Container>
      </div>
      <StatisticsSection language={language} />
      <CTASection language={language} />
    </div>
  );
};

export default ProjectsFetchData;