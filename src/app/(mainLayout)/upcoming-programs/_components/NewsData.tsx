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
        title={language === "ENG" ? "Upcoming Program" : "আসন্ন প্রোগ্রাম"}
      />
      <Container>
        {(!sortedNewsData || sortedNewsData.length === 0) ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg">
              {language === "ENG"
                ? "No upcoming programs found at the moment."
                : "এই মুহূর্তে কোনো আসন্ন প্রোগ্রাম পাওয়া যায়নি।"}
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
                          <Link href={`/upcoming-programs/${data._id}`}>
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
