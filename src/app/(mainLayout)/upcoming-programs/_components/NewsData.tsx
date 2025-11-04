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
import RenderContent from "@/components/Common/RenderContent";

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

  return (
    <div>
      <CommonBanner
        title={language === "ENG" ? "Upcoming News" : "আসন্ন প্রোগ্রাম"}
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
          {sortedNewsData?.slice(0, visibleCount).map((data, index: number) => (
            <div key={index}>
              <div className="shadow-md flex flex-col justify-between rounded-md">
                <div className="h-[250px]">
                  {language === "ENG"
                    ? data.eng_images
                        ?.slice(0, 1)
                        .map((img) => (
                          <Image
                            width={500}
                            height={500}
                            key={img}
                            src={img}
                            alt=""
                            className="h-[240px] rounded-t-md"
                          />
                        ))
                    : data.bng_Images
                        ?.slice(0, 1)
                        .map((img) => (
                          <Image
                            width={500}
                            height={500}
                            key={img}
                            src={img}
                            alt=""
                            className="h-[240px] rounded-t-md"
                          />
                        ))}
                </div>
                <div className="p-3 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-600">
                      {language === "ENG"
                        ? truncateText(data?.english_title, 80)
                        : truncateText(data?.bangla_title, 80)}
                    </h3>
                    <p className="mt-2">
                      <RenderContent
                        content={
                          language === "ENG"
                            ? data.english_description
                            : data.bangla_description
                        }
                      />
                    </p>
                  </div>
                  <div className="flex justify-between  ">
                    <b>{data.date}</b>
                    <Link href={`/upcoming-programs/${data._id}`}>
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
        {visibleCount < sortedNewsData?.length && (
          <div className="flex items-center justify-center">
            <Button
              onClick={loadMore}
              className="bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm  md:px-3  md:py-1 rounded text-white"
            >
              {language === "ENG" ? "Load More" : "আরো লোড"}
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default NewsData;
