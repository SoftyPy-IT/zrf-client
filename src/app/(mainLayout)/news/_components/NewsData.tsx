/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/share/Container";
import EastIcon from "@mui/icons-material/East";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { TActivity } from "@/types/type";
import ReactHtmlParser from "react-html-parser";
import truncateText from "@/utils/truncate";
import { Button } from "@mui/material";

const renderContent = (content: string) => {
  const parsedContent = ReactHtmlParser(content);

  return parsedContent.map((element, index) => {
    if (element.type === "h1") {
      return (
        <h1 key={index} className="text-2xl font-bold mb-2">
          {element.props.children}
        </h1>
      );
    } else if (element.type === "h2") {
      return (
        <h2 key={index} className="text-xl font-bold mb-2">
          {element.props.children}
        </h2>
      );
    } else if (element.type === "h3") {
      return (
        <h3 key={index} className="text-lg font-bold mb-2">
          {element.props.children}
        </h3>
      );
    } else if (element.type === "img") {
      return (
        <div key={index} className="w-[700px] h-[400px]">
          <img
            src={element.props.src}
            alt="this is image"
            className="mb-2"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      );
    } else if (element.type === "p") {
      return (
        <p key={index} className="mb-2">
          {element.props.children}
        </p>
      );
    } else if (element.type === "video") {
      return (
        <video
          key={index}
          className="w-full h-auto mb-4"
          controls
          src={element.props.src}
        >
          Your browser does not support the video tag.
        </video>
      );
    } else if (element.type === "iframe") {
      return (
        <iframe
          key={index}
          className="w-full h-[500px] mb-4"
          src={element.props.src}
          title={`iframe-${index}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-center"
    ) {
      return (
        <div key={index} className="text-center mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-right"
    ) {
      return (
        <div key={index} className="text-right mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-left"
    ) {
      return (
        <div key={index} className="text-left mb-2">
          {element.props.children}
        </div>
      );
    } else {
      return null;
    }
  });
};
interface activityProps {
  newsData: TActivity[];
  language: string;
}

const NewsData: React.FC<activityProps> = ({ newsData, language }) => {

  const sortedNewsData = newsData?.sort(
    (a: TActivity, b: TActivity) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    },
  );
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };


  return (
    <div>
      <CommonBanner title={language === "ENG" ? "News" : "খবর"} />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
          {sortedNewsData?.slice(0, visibleCount).map((data, index: number) => (
            <div key={index}>
              <div className="shadow-lg flex flex-col justify-between bg-gray-100  lg:h-[480px] md:h-[400px] relative">
                <div className="relative h-[250px]">
                  {
                    language === 'ENG' ? (
                      data.eng_images?.slice(0, 1).map((img) => (
                        <Image
                          width={500}
                          height={500}
                          key={img}
                          src={img}
                          alt=""
                          className="h-[240px] object-cover"
                        />
                      ))
                    ) : (
                      data.bng_Images?.slice(0, 1).map((img) => (
                        <Image
                          width={500}
                          height={500}
                          key={img}
                          src={img}
                          alt=""
                          className="h-[240px] object-cover"
                        />
                      ))
                    )
                  }

                </div>
                <div className="p-3  flex flex-col justify-between  ">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {language === "ENG"
                        ? truncateText(data?.english_title, 80)
                        : truncateText(data?.bangla_title, 80)}
                    </h3>
                    <p className="mt-2">
                      {language == "ENG"
                        ? renderContent(
                          truncateText(data?.english_description, 100),
                        )
                        : renderContent(
                          truncateText(data?.bangla_description, 100),
                        )}
                    </p>
                  </div>
                  <div className="flex justify-between  ">
                    <b>
                      {data.date}
                    </b>
                    <Link href={`/news/${data._id}`}>
                      <button className=" text-white bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-1 hover:text-white rounded-full uppercase text-sm border">
                        {language === "ENG" ? "Read More" : "আরও পড়ুন"}{" "}
                        <EastIcon />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < sortedNewsData?.length && (<div className="flex items-center justify-center">
          <Button onClick={loadMore} className="bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm  md:px-3  md:py-1 rounded text-white">
            {language === "ENG" ? "Load More" : "আরো লোড"}
          </Button>
        </div>)}

      </Container>
    </div>
  );
};

export default NewsData;
