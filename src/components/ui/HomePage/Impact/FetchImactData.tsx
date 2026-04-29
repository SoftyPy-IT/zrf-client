/* eslint-disable @next/next/no-img-element */
"use client";
import Container from "@/components/share/Container";
import { overviewProps } from "@/types/type";
import {
  ArrowForward,
  CheckCircle,
  People,
  PlayArrow,
  VolunteerActivism
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import "./Impact.css";



const renderContent = (content: string) => {
  const parsedContent = ReactHtmlParser(content);

  return parsedContent.map((element, index) => {
    if (element.type === "h1") {
      return (
        <h1
          key={index}
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
        >
          {element.props.children}
        </h1>
      );
    } else if (element.type === "h2") {
      return (
        <h2
          key={index}
          className="lg:text-5xl md:text-4xl text-3xl font-bold mb-5 text-white"
        >
          {element.props.children}
        </h2>
      );
    } else if (element.type === "p") {
      return (
        <p key={index} className="mb-4 text-white/80 leading-relaxed">
          {element.props.children}
        </p>
      );
    } else if (element.type === "ol") {
      return (
        <ol
          key={index}
          className="list-decimal list-inside mb-5 text-white/80 space-y-2"
        >
          {element.props.children}
        </ol>
      );
    } else if (element.type === "ul") {
      return (
        <ul
          key={index}
          className="list-disc list-inside mb-5 text-white/80 space-y-2"
        >
          {element.props.children}
        </ul>
      );
    } else if (element.type === "video") {
      return (
        <video
          key={index}
          className="w-full h-auto rounded-xl mb-4"
          controls
          src={element.props.src}
        >
          Your browser does not support the video tag.
        </video>
      );
    } else if (element.type === "img") {
      return (
        <div key={index} className="w-full rounded-xl overflow-hidden mb-4">
          <img
            src={element.props.src}
            alt="impact image"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      );
    } else if (element.type === "iframe") {
      return (
        <div
          key={index}
          className="relative w-full pt-[56.25%] rounded-xl overflow-hidden mb-4"
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={element.props.src}
            title={`iframe-${index}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    } else if (element.type === "li") {
      return (
        <li key={index} className="mb-2">
          {element.props.children}
        </li>
      );
    } else {
      return null;
    }
  });
};

const FetchImactData: React.FC<overviewProps> = ({
  overviewData,
  language,
  handleModalOpen,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStat, setActiveStat] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const impactStats = [
    {
      number: "100K+",
      labelEn: "Lives Impacted",
      labelBn: "উপকৃত মানুষ",
      icon: <People className="w-6 h-6" />,
    },
    {
      number: "50+",
      labelEn: "Projects Completed",
      labelBn: "সম্পন্ন প্রকল্প",
      icon: <CheckCircle className="w-6 h-6" />,
    },

  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 py-16 mt-10 md:mt-12 md:py-24">
      {/* Background Pattern & Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-500/10 to-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-500/10 to-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-500/5 to-emerald-500/5 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat',
          }}
        />
      </div>

      <Container>
        {overviewData?.map((data, idx) => (
          <div key={data._id} className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              <div
                className={`space-y-6 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-150" />
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300" />
                  </div>
                  <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">
                    {language === "ENG"
                      ? "Our Impact Story"
                      : "আমাদের প্রভাবের গল্প"}
                  </span>
                </div>
                <div className="text-white">
                  {language === "ENG"
                    ? renderContent(data.description_english)
                    : renderContent(data.description_bangla)}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href='/donations'>
                    <button
                      onClick={handleModalOpen}
                      className="group relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-105"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <VolunteerActivism className="text-sm" />
                        {language === "ENG" ? "Donate Now" : "সহযোগিতা করুন"}
                        <ArrowForward className="text-sm group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </Link>


                </div>
              </div>


              <div
                className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
              >
                {data.images?.slice(0, 1).map((img, imgIdx) => (
                  <div key={imgIdx} className="relative group">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <div className="relative w-full h-[420px] md:h-[520px]">
                        <Image
                          src={img}
                          alt="Impact"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <button className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <PlayArrow className="text-3xl text-slate-900 ml-1" />
                      </button>
                    </div>

                  </div>
                ))}

                <div className="hidden sm:grid absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 grid-cols-2 gap-3">
                  {impactStats.slice(0, 2).map((stat, statIdx) => (
                    <div
                      key={statIdx}
                      className="bg-white rounded-xl shadow-xl p-3 md:p-4 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setActiveStat(statIdx)}
                      onMouseLeave={() => setActiveStat(null)}
                    >
                      <div className="flex items-center gap-2">
                        <div className="text-emerald-600">
                          {React.cloneElement(stat.icon, {
                            className: "w-5 h-5 md:w-6 md:h-6",
                          })}
                        </div>
                        <div>
                          <div className="text-xl md:text-2xl font-bold text-emerald-600">
                            {stat.number}
                          </div>
                          <div className="text-xs text-slate-500">
                            {language === "ENG" ? stat.labelEn : stat.labelBn}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default FetchImactData;
