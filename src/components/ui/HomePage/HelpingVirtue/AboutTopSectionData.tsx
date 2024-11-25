/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { TAbout } from "@/types/type";

interface AboutProps {
    aboutData: TAbout[];
    language: string;
}

const AboutTopSectionData: React.FC<AboutProps> = ({ aboutData, language, }) => {
    // const allowedCategories = [language === 'ENG' ? 'About' : 'সম্পর্কে', , language === 'ENG' ? 'Mission' : 'মিশন', , language === 'ENG' ? 'Vission' : 'দৃষ্টি', , language === 'ENG' ? 'Slugan' : 'স্লুগান',];
    const allowedCategories = ["About", "Mission", "Vision", "Slogan"];

    const tabs = aboutData
        .map((item) => item.category)
        .filter((category, index, self) => self.indexOf(category) === index)
        .filter((category) => allowedCategories.includes(category));

    const defaultTab = tabs.includes("About") ? "About" : tabs[0];

    const [activeTab, setActiveTab] = useState<string>(defaultTab);


    useEffect(() => {

        setActiveTab(defaultTab);
    }, [defaultTab]);


    const renderContent = () => {
        const currentData = aboutData.find((item) => item.category === activeTab);

        if (!currentData) return <p>No data available for this category.</p>;

        const { description_enlgish, description_banlga, title_english, title_bangla } = currentData;

        return (
            <>
                <h3 className="text-2xl font-semibold mb-4">
                    {language === "ENG" ? title_english : title_bangla}
                </h3>
                <div
                    className="text-gray-600 mb-6 text-justify"
                    dangerouslySetInnerHTML={{
                        __html: language === "BNG" ? description_banlga : description_enlgish,
                    }}
                />
            </>
        );
    };

    return (
        <div className="flex flex-col lg:flex-row bg-white p-10 shadow-md mt-20 items-center border">
            <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
                <Image
                    height={500}
                    width={500}
                    src={aboutData[0]?.images?.[0] || ""}
                    alt="Foundation Overview"
                    className="object-cover w-80 h-full"
                />
            </div>

            <div className="lg:w-1/2 text-gray-800">
                {/* Tab buttons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`font-semibold ${activeTab === tab
                                ? "bg-green-500 text-white px-4 py-2"
                                : "bg-gray-100 px-4 py-2"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {renderContent()}
            </div>
        </div>
    );
};

export default AboutTopSectionData;
