import React, { useEffect, useState } from "react";
import "./LatestNews.css";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import { TActivity } from "@/types/type";
import Marquee from "react-fast-marquee";
import truncateText from "@/utils/truncate";

interface newsProps {
  newsData: TActivity[];
  language: string;
}

const LatestNewsFetchData: React.FC<newsProps> = ({ newsData, language }) => {
  const sortedNewsData = newsData?.sort((a: TActivity, b: TActivity) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  const [itemsToShow, setItemsToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else {
        setItemsToShow(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedData = sortedNewsData?.slice(0, itemsToShow);

  return (
    <div>
      <div className="col-span-12 lg:col-span-5 hidden md:block mb-10 lg:mt-0 mt-10">
        <div className="flex items-center border border-green-600">
          <h2 className="text-2xl font-bold uppercase bg-gradient-to-r from-yellow-600 to-green-600 text-white px-6 py-2">
            {language === "ENG" ? "News" : "খবর"}
          </h2>
          <Marquee pauseOnHover={true} className="w-full" speed={50}>
            <div className="flex items-center space-x-4">
              {sortedNewsData.map((title) => (
                <Link href={`/news/${title._id}`} key={title._id}>
                  <h2 className="capitalize text-nowrap px-4">
                    {language === "ENG"
                      ? title.english_title
                      : title.bangla_title}
                  </h2>
                </Link>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-1 items-center gap-2 md:gap-4 lg:mt-5 mt-10">
        {displayedData.map((data) => (
          <div
            key={data._id}
            className="border h-[220px] md:h-auto rounded items-center p-2 lg:p-5 shadow-md flex flex-col lg:flex-row gap-2 md:gap-4"
          >
            {/* Image Section */}
            <div className="lg:w-1/3 w-full h-[150px] lg:h-[130px] overflow-hidden rounded">

              {
                language === 'ENG' ? data.bng_Images?.slice(0, 1).map((img) => (
                  <Image
                    key={img}
                    className="w-full h-full object-cover"
                    alt={data.english_title || "E-Book"}
                    src={data.bng_Images[0] || ""}
                    width={300}
                    height={400}
                  />
                )) : data.eng_images?.slice(0, 1).map((img) => (
                  <Image
                    key={img}
                    className="w-full h-full object-cover"
                    alt={data.english_title || "E-Book"}
                    src={data.bng_Images[0] || ""}
                    width={300}
                    height={400}
                  />
                ))
              }
            </div>

            {/* Text Section */}
            <div className="flex-1">
              <h4 className="text-[10px] md:text-sm font-semibold uppercase">
                {language === "ENG"
                  ? truncateText(data?.english_title, 50)
                  : truncateText(data?.bangla_title, 50)}
              </h4>
              <p className="text-[10px] md:text-sm text-justify mt-1 md:mt-2">
                {language === "ENG"
                  ? truncateText(data?.english_short_description, 80)
                  : truncateText(data?.bangla_short_description, 80)}
                <Link href={`/news/${data._id}`}>
                  <button className="text-green-600 ml-1">
                    {language === "ENG" ? "See more" : "আরো দেখুন"}
                  </button>
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex lg:justify-end mt-8 text-center">
        <Link href="/news">
          <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase">
            {language === "ENG" ? "See All " : "সব দেখুন"} <EastIcon fontSize="small" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestNewsFetchData;
