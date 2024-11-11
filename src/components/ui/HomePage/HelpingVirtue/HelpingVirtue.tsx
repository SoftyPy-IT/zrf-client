/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from "next/image";
import React, { useState } from "react";
import image from "../../../../../src/assets/images/banner/zia.png";


const HelpingVirtue = () => {
  const [activeTab, setActiveTab] = useState("Mission");

  const tabs = ["About Us", "Vision", "Mission"];

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

          <div className="flex space-x-4 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-semibold ${activeTab === tab
                  ? "bg-red-500 text-white px-4 py-2"
                  : "bg-gray-100 px-4 py-2"
                  } hover:text-red-500`}
              >
                {tab}
              </button>
            ))}
          </div>


          <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-5 ">
            Helping is The Great Virtue for Every Human’s
          </h2>


          <p className="text-gray-600 mb-6">
            {/* ২০০০ সালের ১৪ এপ্রিল, ১লা বৈশাখ, খুলনা জেলার দীঘলিয়া ও রূপসা থানায় আয়োজিত স্বাস্থ্যমেলার সফল আয়োজন দিয়ে যাত্রা শুরু হয় এই সংগঠনের। "একটি উদ্যোগ, একটু চেষ্টা, এনে দেবে স্বচ্ছলতা, দেশে আসবে স্বনির্ভরতা" এই স্লোগানকে মূলমন্ত্র ধরে যাত্রা শুরু করা জিয়াউর রহমান ফাউন্ডেশন-এর ভিশনারি প্রেসিডেন্ট জনাব তারেক রহমান বিশ্বাস করেন আমাদের দেশের প্রতিটি মানুষ যদি ছোট ছোট উদ্যোগ গ্রহণ করেন তাহলে এই দেশে অর্থনৈতিক উন্নতি আসবেই। এ লক্ষ্যে তিনি প্রাথমিক অবস্থায় জিয়াউর রহমান ফাউন্ডেশনের মাধ্যমে স্বাস্থ্যখাতে, শিক্ষাখাতে, কৃষিখাতে বিভিন্ন ধরনের সেবামূলক প্রকল্প গ্রহণ করেন। */}
            On April 14, 2000, on the occasion of Pahela Baishakh, the Ziaur Rahman Foundation began its journey with a successful health fair organized in the Dighalia and Rupsha police stations of Khulna district. With the slogan, "A small initiative, a little effort, will bring prosperity and self-reliance to the country," the visionary President of the foundation, Mr. Tarique Rahman, believes that if everyone in our country takes small steps toward progress, it will ultimately drive economic growth. With this vision, he initially led the foundation to undertake various service projects in the fields of healthcare, education, climate change, agriculture, komol water and seed projects etc.
          </p>


          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔️</span> Ziaur Rahman Foundation For Medical
              & Health
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔️</span> Ziaur Rahman Foundation For
              Education to Poor People’s
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔️</span> Ziaur Rahman Foundation  For Clean
              Water
            </li>
          </ul>


          <button className="bg-red-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-red-600">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default HelpingVirtue;
