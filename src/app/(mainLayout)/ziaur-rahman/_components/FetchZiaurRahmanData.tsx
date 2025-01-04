/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Container from "@/components/share/Container";
import React, { useState } from "react";

import { useLanguage } from "@/provider/LanguageProvider";
import { TIntroduction } from "@/types/type";
import ReactHtmlParser from "react-html-parser";
import Biography from "./Biography";
import Modal from "./Modal";
import { Paper, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

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
    } else if (element.type === "h4") {
      return (
        <h2 key={index} className=" font-bold mb-2">
          {element.props.children}
        </h2>
      );
    } else if (element.type === "h3") {
      return (
        <h3 key={index} className="text-lg font-bold mb-2">
          {element.props.children}
        </h3>
      );
    } else if (element.type === "b") {
      return (
        <b key={index} className="font-bold">
          {element.props.children}
        </b>
      );
    } else if (element.type === "b") {
      return (
        <small key={index} className="text-sm">
          {element.props.children}
        </small>
      );
    } else if (element.type === "b") {
      return (
        <span key={index} className="inline-block">
          {element.props.children}
        </span>
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
    } else if (element.type === "ol") {
      return (
        <ol key={index} className="list-decimal list-inside mb-5">
          {element.props.children}
        </ol>
      );
    } else if (element.type === "ul") {
      return (
        <ul key={index} className="list-disc list-inside mb-5">
          {element.props.children}
        </ul>
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
const FetchZiaurRahmanData = () => {
  const [introductionData, stIntroductionData] = React.useState<
    TIntroduction[]
  >([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const { language } = useLanguage();
  React.useEffect(() => {
    const fetchPrisonData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/introduction?limit=1000`,
          {
            cache: "no-store",
          },
        );
        const data = await response.json();
        const sortedData = data.data?.introductions?.sort(
          (a: TIntroduction, b: TIntroduction) => {
            return (
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            ); // Sort ascending
          },
        );

        stIntroductionData(sortedData || []);
      } catch (err) {
        setError("Failed to fetch introduction data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrisonData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: string;
  } | null>(null);
  const handleOpen = (
    englishTitle: string,
    banglaDescription: string,
    banglaTitle: string,
    englishDescription: string,
  ) => {
    setModalContent({
      title: language === "ENG" ? englishTitle : banglaTitle,
      content: language === "ENG" ? englishDescription : banglaDescription,
    });
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setModalContent(null);
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="my-5  md:my-16">
        <Container>
          <Paper elevation={3} className=" p-3 md:p-5  md:px-14">
            <div className="text-center mb-10 ">
              <Typography
                variant="h4"
                color="#216740"
                gutterBottom
                fontWeight="bold"
                sx={{
                  fontSize: {
                    xs: "1.5rem",
                    sm: "1.75rem",
                    md: "2rem",
                    lg: "2.5rem",
                    xl: "3rem",
                  },
                }}
              >
                {language === "ENG"
                  ? "Biography of Shaheed President Ziaur Rahman"
                  : "  শহীদ প্রেসিডেন্ট জিয়াউর রহমান  এর জীবনী"}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {language === "ENG"
                  ? "Lieutenant General Ziaur Rahman Bir Uttam (1936-1981) was the founder of Bangladesh Nationalist Party. He was the declarer of independence and a valiant freedom fighter. He was also Chief of Army Staff and later became the elected President of Bangladesh. He opened up multi-party democracy in Bangladesh and defined Bangladeshi Nationalism."
                  : "লেফটেন্যান্ট জেনারেল জিয়াউর রহমান বীর উত্তম (১৯৩৬-১৯৮১) ছিলেন স্বাধীনতার ঘোষক এবং বাংলাদেশের নির্বাচিত রাষ্ট্রপতি। তিনি একজন বীর মুক্তিযোদ্ধা, সেনাপ্রধান এবং বাংলাদেশে বহুদলীয় গণতন্ত্রের প্রতিষ্ঠাতা, সেই সাথে বাংলাদেশী জাতীয়তাবাদ এবং বাংলাদেশ জাতীয়তাবাদী দল-বিএনপি'র প্রতিষ্ঠাতা ছিলেন."}
              </Typography>
            </div>
          </Paper>
        </Container>

        {introductionData?.slice(0, 1).map((data) => (
          <div key={data._id} className="mt-10 ">
            <div className="flex flex-row items-center justify-center content-center">
              <h2 className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent text-base mb-4 border rounded-full text-center w-[105px] bg-white">
                {language === "ENG" ? "Biography" : "জীবনী"}
              </h2>
            </div>
            <div className="w-full text-center space-y-4 mb-2">
              <h1 className="text-3xl lg:text-5xl xl:text-5xl text-[#FEC909] font-bold ">
                {" "}
                {language === "ENG"
                  ? data.english_title
                  : data.bangla_title}{" "}
              </h1>
            </div>
            <div className="shadow-lg rounded-lg lg:rounded-3xl  lg:h-[450px] lg:w-[1000px] mx-auto overflow-hidden grid grid-cols-12 my-10 border">
              <div className="col-span-12 lg:col-span-5">
                <div className="bg-[#fdf7f4] shadow-lg  rounded-xl">
                  <div className="w-full h-[400px] lg:h-full object-cover ">
                    {data.bng_images?.slice(0, 1).map((img) => (
                      <Image
                        width={500}
                        height={500}
                        key={img}
                        src={img}
                        alt="তারেক রহমান"
                        className="w-full h-full object-cover  "
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-7 lg:h-auto p-2 lg:p-6 space-y-6 bg-gradient-to-r from-yellow-600 to-green-600 text-white">
                <b className="text-justify text-xl">
                  {language === "ENG"
                    ? renderContent(data.english_description)
                    : renderContent(data.bangla_description)}
                </b>
              </div>
            </div>
          </div>
        ))}
        <Biography
          introductionData={introductionData}
          language={language}
          handleOpen={handleOpen}
        />
        {modalContent && (
          <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title={modalContent.title}
          >
            <p>{renderContent(modalContent.content)}</p>
          </Modal>
        )}
      </div>
    </Container>
  );
};

export default FetchZiaurRahmanData;
