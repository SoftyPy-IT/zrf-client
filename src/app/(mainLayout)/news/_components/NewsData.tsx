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
  const sortedNewsData = newsData?.sort((a: TActivity, b: TActivity) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };


   const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    if (language === "ENG") {
      return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    } else {
      // Convert to Bangla numerals
      const banglaFormatted = date
        .toLocaleDateString("bn-BD", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
        .replace(/[০-৯]/g, (d) =>
          "০১২৩৪৫৬৭৮৯"["০১২৩৪৫৬৭৮৯".indexOf(d)] ?? d
        );
      return banglaFormatted;
    }
  };
  return (
    <div>
      <CommonBanner
        title={language === "ENG" ? "News & Updates" : "সংবাদ ও আপডেট"}
      />
      <Container>
        {(!sortedNewsData || sortedNewsData.length === 0) ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg">
              {language === "ENG"
                ? "No news found at the moment."
                : "এই মুহূর্তে কোনো সংবাদ পাওয়া যায়নি।"}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
              {sortedNewsData?.slice(0, visibleCount).map((data, index: number) => {
                const img =
                  (language === "ENG" ? data.eng_images?.[0] : data.bng_Images?.[0]) ||
                  data.eng_images?.[0] ||
                  data.bng_Images?.[0] ||
                  "/placeholder.jpg";

                const title =
                  (language === "ENG" ? data?.english_title : data?.bangla_title) ||
                  data?.bangla_title ||
                  data?.english_title ||
                  "";

                return (
                  <div key={data._id || index}>
                    <div className="shadow-md flex flex-col justify-between rounded-md overflow-hidden bg-white">
                      <div className="h-[240px] relative w-full overflow-hidden">
                        <Image
                          width={500}
                          height={500}
                          src={img}
                          alt={title}
                          className="h-[240px] w-full object-cover rounded-t-md"
                        />
                      </div>
                      <div className="p-4 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="font-semibold text-gray-700 text-base mb-3">
                            {truncateText(title, 80)}
                          </h3>
                        </div>
                        <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
                          <b className="text-xs text-gray-500">{formatDate(data.date)}</b>
                          <Link href={`/news/${data._id}`}>
                            <button className="text-white bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-1 hover:opacity-90 rounded-full uppercase text-xs font-semibold flex items-center gap-1">
                              {language === "ENG" ? "Read More" : "আরও পড়ুন"} <EastIcon fontSize="small" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {visibleCount < (sortedNewsData?.length || 0) && (
              <div className="flex items-center justify-center mb-16">
                <Button
                  onClick={loadMore}
                  className="bg-gradient-to-r from-yellow-600 to-green-600 px-5 py-2 rounded-full text-white text-sm font-semibold"
                >
                  {language === "ENG" ? "Load More" : "আরো লোড"}
                </Button>
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default NewsData;
