"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { TAbout } from "@/types/type";


type TabLabelKeys = "About" | "Mission" | "Vision" | "Slogan";
type Language = "ENG" | "BNG";
interface AboutProps {
  aboutData: TAbout[];
  language: Language;
}

const AboutTopSectionData: React.FC<AboutProps> = ({ aboutData, language }) => {

  const tabLabels: Record<TabLabelKeys, { ENG: string; BNG: string }> = {
    About: { ENG: "About", BNG: "আমাদের সম্পর্কে" },
    Mission: { ENG: "Mission", BNG: "মিশন" },
    Vision: { ENG: "Vision", BNG: "ভিশন" },
    Slogan: { ENG: "Slogan", BNG: "স্লোগান" },
  };

  const tabs: TabLabelKeys[] = aboutData
    .map((item) => item.category)
    .filter((category, index, self) => self.indexOf(category) === index)
    .filter((category) => ["About", "Mission", "Vision", "Slogan"].includes(category))
    .map((category) => category as TabLabelKeys);


  const defaultTab: TabLabelKeys = tabs.includes("About") ? "About" : tabs[0];
  const [activeTab, setActiveTab] = useState<TabLabelKeys>(defaultTab);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const aboutImage = aboutData.find((item) => item.category === "About");
  const currentData = aboutData.find((item) => item.category === activeTab);
  const activeTabIndex = tabs.indexOf(activeTab);

  const selectedImage = currentData?.images?.[0] || "/path/to/default/image.jpg";

  const renderContent = () => {
    if (!currentData) return <p>No data available for this category.</p>;

    const {
      description_enlgish,
      description_banlga,
      title_english,
      title_bangla,
    } = currentData;

    const isSloganTab = activeTab === "Slogan";

    return (
      <>
        <h3 className={`mb-4 ${isSloganTab ? "text-sm" : "text-2xl font-semibold"}`}>
          {language === "ENG" ? title_english : title_bangla}
        </h3>
        <div
          className={`mb-6 text-justify ${isSloganTab ? "font-bold text-black text-[25px]" : ""}`}
          dangerouslySetInnerHTML={{
            __html: language === "BNG" ? description_banlga : description_enlgish,
          }}
        />
      </>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white p-10 mt-20 border">
      <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
        <Image
          height={500}
          width={500}
          src={selectedImage}
          alt={`Image for ${activeTab}`}
          className="object-cover w-80 h-full"
        />
      </div>

      <div className="lg:w-1/2 text-gray-800 flex flex-col justify-start items-start">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-semibold ${activeTab === tab ? "bg-green-500 text-white py-2" : "bg-gray-100 py-2"} ${language === "BNG" ? "px-2" : "px-4"}`}
            >
              {tabLabels[tab]?.[language as "ENG" | "BNG"]}
            </button>
          ))}
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default AboutTopSectionData;
