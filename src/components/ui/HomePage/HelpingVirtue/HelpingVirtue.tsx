'use client'
import Image from "next/image";
import React, { useState } from "react";
import image from "../../../../../src/assets/images/featured/1.png";
import Container from "@/components/share/Container";

const HelpingVirtue = () => {
  const [activeTab, setActiveTab] = useState("Mission");

  const tabs = ["About Us", "Vision", "Mission"];

  return (
    <Container>
      <div className="flex flex-col lg:flex-row bg-white p-10 shadow-md mt-20 items-center border">
        {/* Left Section - Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
          <Image
            src={image}
            alt="Person with a dog"
            className="object-cover w-80 h-full"
          />
        </div>

        {/* Right Section - Content */}
        <div className="lg:w-1/2 text-gray-800">
          {/* Tabs */}
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

          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Helping is The Great Virtue for Every Human’s
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            A new analysis of decades of research shows that when we are kind to
            others, we are healthier and happier. We all know that it&apos;s
            good to be kind to others. Kindness is an important virtue for
            sustaining relationships, which helps to build a trusting and
            cooperative society.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔️</span> Charity For Medical
              & Health
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔️</span> Charity For
              Education to Poor People’s
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔️</span> Charity For Clean
              Water
            </li>
          </ul>

          {/* Learn More Button */}
          <button className="bg-red-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-red-600">
            Learn More
          </button>
        </div>
      </div>
    </Container>
  );
};

export default HelpingVirtue;
