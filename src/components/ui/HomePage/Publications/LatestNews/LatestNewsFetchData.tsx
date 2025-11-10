import React, { useEffect, useState } from "react";
import "./LatestNews.css";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import { TActivity } from "@/types/type";
import Marquee from "react-fast-marquee";
import truncateText from "@/utils/truncate";
import { Button } from "@mui/material";

interface newsProps {
  newsData: TActivity[];
  language: string;
  activeCategory: string;
  setActiveCategory: (val: string) => void;
}

const LatestNewsFetchData: React.FC<newsProps> = ({ newsData, language, activeCategory, setActiveCategory }) => {

  // ✅ Sort all data for marquee (latest first)
  const sortedAllData = [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // ✅ Filter only for cards based on active category
  const filteredData = sortedAllData.filter(
    (item) =>
      item.category?.trim().toLowerCase() ===
      activeCategory.trim().toLowerCase()
  );

  const [itemsToShow, setItemsToShow] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth >= 1024 ? 3 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedData = filteredData.slice(0, itemsToShow);

  return (
    <div>
      {/* ✅ MARQUEE now shows ALL latest data */}
      <div className="col-span-12 lg:col-span-5 hidden md:block mb-10 lg:mt-0 mt-10">
        <div className="flex items-center border border-green-600">
          <h2 className="text-2xl font-bold uppercase bg-gradient-to-r from-yellow-600 to-green-600 text-white px-6 py-2">
            {language === "ENG" ? "Latest" : "সর্বশেষ"}
          </h2>
          <Marquee pauseOnHover={true} speed={50}>
            <div className="flex items-center space-x-4">
              {sortedAllData.map((item) => (
                <Link href={`/upcoming-programs/${item._id}`} key={item._id}>
                  <h2 className="capitalize text-nowrap px-4">
                    {language === "ENG" ? item.english_title : item.bangla_title}
                  </h2>
                </Link>
              ))}
            </div>
          </Marquee>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 justify-end mb-4">
        <Button
          onClick={() => setActiveCategory("Upcoming Programs")}
          variant={activeCategory === "Upcoming Programs" ? "contained" : "outlined"}
          color="success"
        >
          {language === "ENG" ? "Upcoming Program" : "আসন্ন প্রোগ্রাম"}
        </Button>

        <Button
          onClick={() => setActiveCategory("Message")}
          variant={activeCategory === "Message" ? "contained" : "outlined"}
          color="success"
        >
          {language === "ENG" ? "Message" : "বার্তা"}
        </Button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-1 items-center gap-2 md:gap-4 lg:mt-5 mt-10">
        {displayedData.map((data) => (
          <div key={data._id} className="h-[220px] md:h-[150px]  items-center shadow-md flex flex-col lg:flex-row gap-2 md:gap-4">
            <div className="lg:w-1/3 w-full h-[150px] lg:h-[150px] overflow-hidden rounded">
              <Image
                className="w-full h-full"
                alt={data.english_title || "Image"}
                src={data.bng_Images?.[0] || ""}
                width={400}
                height={400}
              />
            </div>

            <div className="flex-1 p-2 lg:p-5">
              <h4 className="text-[10px] md:text-sm font-semibold uppercase">
                {language === "ENG" ? truncateText(data.english_title, 50) : truncateText(data.bangla_title, 50)}
              </h4>
              <p className="text-[10px] md:text-sm text-justify mt-1 md:mt-2">
                {language === "ENG" ? truncateText(data.english_short_description, 80) : truncateText(data.bangla_short_description, 80)}
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
            {language === "ENG" ? "See All" : "সব দেখুন"} <EastIcon fontSize="small" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestNewsFetchData;
