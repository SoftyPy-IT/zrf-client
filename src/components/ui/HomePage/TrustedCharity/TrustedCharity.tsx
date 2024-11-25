import Image from "next/image";
import React from "react";
import image from "../../../../../src/assets/images/featured/2.jpeg";
import Container from "@/components/share/Container";

const cardData = [
  {
    id: 1,
    icon: "💵",
    title: "Give Right Place",
    description:
      "Increase the likelihood of being in the right place at the goals and work.",
  },
  {
    id: 2,
    icon: "💊",
    title: "Money & Health",
    description:
      "Between physical, mental, and financial health explore this in people.",
  },
  {
    id: 3,
    icon: "🎁",
    title: "Event & Programs",
    description:
      "Designs free with impressively easy use online event program maker.",
  },
];

const TrustedCharity = () => {
  return (
    <Container>
      <div className="bg-gray-900 text-white p-10 mt-10">
        <div>
          {/* Image Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            <Image
              src={image}
              alt="Children giving thumbs up"
              className="object-cover w-full h-full"
            />
            <div>
              <h3 className="text-yellow-400 text-2xl italic font-medium mb-5">
                Why Donation  us
              </h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>We’re So Much Trusted Charity Foundation</li>
                <li>
                  Empowering communities with transparency and unwavering
                  dedication.
                </li>
                <li>
                  Building a better future by earning trust and transforming
                  lives.
                </li>
              </ul>
            </div>
          </div>

          {/* Content Section */}
          <div className="mt-8 md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              {cardData.map((card) => (
                <div key={card.id} className="bg-gray-800 p-5">
                  <div className="text-yellow-400 text-3xl mb-2">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold">{card.title}</h4>
                  <p className="text-sm mt-2">{card.description}</p>
                  <button className="text-yellow-400 mt-4 underline">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TrustedCharity;
