/* eslint-disable @next/next/no-img-element */
"use client";
import { useAboutData } from "@/hooks/useAboutData";
import { useLanguage } from "@/provider/LanguageProvider";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import dynamic from "next/dynamic";
 

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

const JoinUs = () => {
  const { language } = useLanguage();
  const { aboutData, loading, error } = useAboutData();
  const filterJoinUsData = aboutData.filter(
    (item) => item.category === "Join Us",
  );
   
  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }
  return (
    <>
      <section className="py-16 my-16 bg-green-600 text-white text-center">
        {filterJoinUsData.map((data) => (
          <div key={data._id}>
            <h2 className="text-3xl font-bold uppercase">
              {language === "ENG" ? data.title_english : data.title_bangla}
            </h2>
            <p className="mt-4">
              {language === "ENG"
                ? renderContent(data.description_enlgish)
                : renderContent(data.description_banlga)}
            </p>
            <button className="mt-5 px-6 py-2 bg-yellow-600 font-semibold rounded">
              {language === "ENG" ? "Join Us" : "আমাদের সাথে যোগ দিন"}
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default JoinUs;
