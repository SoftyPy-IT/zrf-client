/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import image from "../../../../../src/assets/images/banner/zia.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const HelpingVirtue = () => {
  const [activeTab, setActiveTab] = useState("Mission");

  const tabs = ["About Us"];

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-white p-10 shadow-md mt-20 items-center border">
        <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
          <Image
            src={image}
            alt="Person with a dog"
            className="object-cover w-80 h-full"
          />
        </div>

        <div className="lg:w-1/2 text-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-semibold ${
                  activeTab === tab
                    ? "bg-green-500 text-white px-4 py-2"
                    : "bg-gray-100 px-4 py-2"
                } `}
              >
                {tab}
              </button>
            ))}
          </div>


          <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-5 ">
            Helping is The Great Virtue for Every Human’s
          </h2>

          <p className="text-gray-600 mb-6 text-justify">
            On April 14, 2000, on the occasion of Pahela Baishakh, the Ziaur
            Rahman Foundation began its journey with a successful health fair
            organized in the Dighalia and Rupsha police stations of Khulna
            district. With the slogan, "A small initiative, a little effort,
            will bring prosperity and self-reliance to the country," the
            visionary President of the foundation, Mr. Tarique Rahman, believes
            that if everyone in our country takes small steps toward progress,
            it will ultimately drive economic growth. With this vision, he
            initially led the foundation to undertake various service projects
            in the fields of healthcare, education, climate change, agriculture,
            komol water and seed projects etc.
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <CheckCircleIcon className="text-green-600 mr-2" /> Ziaur Rahman
              Foundation For Medical & Health
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="text-green-600 mr-2" /> Ziaur Rahman
              Foundation For Education to Poor People’s
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="text-green-600 mr-2" /> Ziaur Rahman
              Foundation For Clean Water
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HelpingVirtue;
