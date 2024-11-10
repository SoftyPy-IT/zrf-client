import Container from "@/components/share/Container";
import Image from "next/image";
import React from "react";
import img1 from "../../../../../src/assets/images/featured/1.jpg";
import img2 from "../../../../../src/assets/images/featured/2.jpeg";
import img3 from "../../../../../src/assets/images/featured//3.jpeg";

const Featured = () => {
  const programs = [
    {
      title: "Clean Water",
      description: "Donation for Clean Water to the People's",
      imageUrl: img1,
    },
    {
      title: "Education",
      description: "Donating to support education for children",
      imageUrl: img2,
    },
    {
      title: "Healthy Food",
      description: "Donation for Healthy Food to Children",
      imageUrl: img3,
    },
  ];

  return (
    <Container>
      <div className="lg:relative -top-28 z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:bg-white lg:px-10 lg:py-8 lg:shadow-md lg:mt-0 ">
          {programs.map((program, index) => (
            <div key={index} className="flex gap-5 bg-green-600 p-10 ">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">
                  {program.title}
                </h3>
                <p className="text-sm text-white">{program.description}</p>
                <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 rounded-full text-white uppercase text-xs font-semibold border">
                  Read More
                </button>
              </div>
              <Image
                src={program.imageUrl}
                alt={program.title}
                className="w-32 h-full border"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Featured;
