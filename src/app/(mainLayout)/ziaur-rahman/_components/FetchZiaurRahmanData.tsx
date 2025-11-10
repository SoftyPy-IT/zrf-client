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
import { Box, Paper, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
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
          }
        );
        const data = await response.json();
        const sortedData = data.data?.introductions?.sort(
          (a: TIntroduction, b: TIntroduction) => {
            return (
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
          }
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
    englishDescription: string
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
    <>
      <CommonBanner title="Biography" />
      <Container>
        <div className="my-5 md:my-16">
          <div className="shadow-md rounded md:p-10 p-5">
            <h1 className="md:text-4xl text-2xl font-bold text-center text-green-800 mb-5">
              {language === "ENG"
                ? "Biography of Shaheed President Ziaur Rahman"
                : "  শহীদ প্রেসিডেন্ট জিয়াউর রহমান  এর জীবনী"}
            </h1>
            <p className="lg:text-center text-justify">
              {language === "ENG"
                ? "Lieutenant General Ziaur Rahman Bir Uttam (1936-1981) was the founder of Bangladesh Nationalist Party. He was the declarer of independence and a valiant freedom fighter. He was also Chief of Army Staff and later became the elected President of Bangladesh. He opened up multi-party democracy in Bangladesh and defined Bangladeshi Nationalism."
                : "লেফটেন্যান্ট জেনারেল জিয়াউর রহমান বীর উত্তম (১৯৩৬-১৯৮১) ছিলেন স্বাধীনতার ঘোষক এবং বাংলাদেশের নির্বাচিত রাষ্ট্রপতি। তিনি একজন বীর মুক্তিযোদ্ধা, সেনাপ্রধান এবং বাংলাদেশে বহুদলীয় গণতন্ত্রের প্রতিষ্ঠাতা, সেই সাথে বাংলাদেশী জাতীয়তাবাদ এবং বাংলাদেশ জাতীয়তাবাদী দল-বিএনপি'র প্রতিষ্ঠাতা ছিলেন."}
            </p>
          </div>

          {introductionData?.slice(0, 1).map((data) => (
            <div key={data._id} className="mt-20 ">
              <div className="flex flex-row items-center justify-center content-center">
                <h2 className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent text-base mb-4 border rounded-full text-center w-[105px] bg-white">
                  {language === "ENG" ? "Biography" : "জীবনী"}
                </h2>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-12 my-10">
                <div className="md:col-span-4 lg:h-[500px]">
                  {data.bng_images?.slice(0, 1).map((img) => (
                    <Image
                      width={400}
                      height={500}
                      key={img}
                      src={img}
                      alt="তারেক রহমান"
                      className="w-full h-full md:rounded-l"
                    />
                  ))}
                </div>

                <div className="md:col-span-8 bg-gradient-to-r from-yellow-600 to-green-600 text-white p-5 md:rounded-r">
                  <div className="w-full space-y-4 mb-2">
                    <h1 className="text-xl lg:text-xl xl:text-3xl text-[#FEC909] font-bold ">
                      {" "}
                      {language === "ENG"
                        ? data.english_title
                        : data.bangla_title}{" "}
                    </h1>
                  </div>
                  <p className="lg:text-xl text-justify lg:leading-loose">
                    {language === "ENG"
                      ? renderContent(data.english_description)
                      : renderContent(data.bangla_description)}
                  </p>
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
              <p className="text-justify">{renderContent(modalContent.content)}</p>
            </Modal>
          )}
        </div>
      </Container>
    </>
  );
};

export default FetchZiaurRahmanData;
