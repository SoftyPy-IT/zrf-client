import { TIntroduction } from "@/types/type";
import truncateText from "@/utils/truncate";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

interface introductionProps {
  introductionData: TIntroduction[];
  language: string;
  handleOpen: (
    englishTitle: string,
    banglaDescription: string,
    banglaTitle: string,
    englishDescription: string
  ) => void;
}
import ReactHtmlParser from "react-html-parser";

const renderContent = (content: string) => {
  const parsedContent = ReactHtmlParser(content);

  return parsedContent.map((element, index) => {
    if (element.type === "h1") {
      return (
        <h1 key={index} className="text-2xl font-bold mb-2 ">
          {element.props.children}
        </h1>
      );
    } else if (element.type === "h2") {
      return (
        <h2 key={index} className="text-xl font-bold mb-2 ">
          {element.props.children}
        </h2>
      );
    } else if (element.type === "h3") {
      return (
        <h3 key={index} className="text-xl font-bold mb-2 ">
          {element.props.children}
        </h3>
      );
    } else if (element.type === "p") {
      return (
        <p key={index} className="mb-2">
          {element.props.children}
        </p>
      );
    } else {
      return null;
    }
  });
};

const Biography: React.FC<introductionProps> = ({
  handleOpen,
  introductionData,
  language,
}) => {
  const filteredData = introductionData.slice(1);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredData.map((data) => (
          <div
            key={data._id}
            className="rounded shadow-lg p-3 grid grid-cols-1 xl:grid-cols-2 gap-5"
          >
            <div className="order-1 xl:order-2 md:h-64  lg:h-full  ">
              {data.bng_images?.slice(0, 1).map((img) => (
                <Image
                  width={500}
                  height={500}
                  key={img}
                  src={img}
                  alt=""
                  className=" "
                />
              ))}
            </div>

            <div className="order-2 xl:order-1">
              <h2 className="text-2xl mb-2 text-[#216740] font-bold ">
                {language === "ENG" ? data.english_title : data.bangla_title}
              </h2>
              <p className="text-justify">
                <span
                  onClick={() =>
                    handleOpen(
                      data.english_title,
                      data.bangla_description,
                      data.bangla_title,
                      data.english_description
                    )
                  }
                >
                  {language === "ENG"
                    ? renderContent(truncateText(data.english_description, 320))
                    : renderContent(truncateText(data.bangla_description, 320))}
                </span>
                <button
                  className="bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm  md:px-3 rounded text-white"
                  onClick={() =>
                    handleOpen(
                      data.english_title,
                      data.bangla_description,
                      data.bangla_title,
                      data.english_description
                    )
                  }
                >
                  {language === "ENG" ? "See All" : "সব দেখুন"}
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Biography;
