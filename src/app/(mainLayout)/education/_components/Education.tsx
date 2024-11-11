import Image from "next/image";
import React from "react";
import image1 from "../../../../assets/images/education/1.jpg";
import image2 from "../../../../assets/images/education/2.jpg";
import image3 from "../../../../assets/images/education/3.jpg";
import Container from "@/components/share/Container";
import { Button } from "@mui/material";

const cardData = [
  {
    id: 1,
    imageUrl: image1,
    title: "'ভবিষ্যত বিজ্ঞানীর খোঁজে'",
    description:
      "ভার্চুয়াল বিজ্ঞান মেলা 'ভবিষ্যত বিজ্ঞানীর খোঁজে'। ক গ্রুপ চূড়ান্ত পর্ব - ৩ ফেব্রুয়ারী, ২০২৩, বিকেল ৫ টা।",
  },
  {
    id: 2,
    imageUrl: image2,
    title: "'ভবিষ্যত বিজ্ঞানীর খোঁজে'",
    description:
      "ভার্চুয়াল বিজ্ঞান মেলা 'ভবিষ্যত বিজ্ঞানীর খোঁজে'। খ গ্রুপ চূড়ান্ত পর্ব - ২৮ এপ্রিল, ২০২৩, বিকেল ৪ টা।",
  },
  {
    id: 3,
    imageUrl: image3,
    title: "অনলাইন কুইজ অলিম্পিয়াড-২০২১",
    description: "মেধাবী যোদ্ধার খোঁজে : অনলাইন কুইজ অলিম্পিয়াড-২০২১",
  },
];

const Education = () => {
  return (
    <>
      <Container className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative group w-auto h-[450px] bg-white overflow-hidden transition-transform transform hover:scale-105 border"
            >
              {/* Image */}
              <Image
                src={card.imageUrl}
                alt={`Image for ${card.title}`}
                className="h-full w-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-600 via-yellow-600 to-transparent transition-transform transform translate-y-full group-hover:translate-y-0 duration-1000 ease-in-out h-[340px] md:h-[300px] lg:h-[300px]">
                <div className="absolute inset-0 mt-20 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:opacity-100 text-white p-4">
                  <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                  <p className="text-sm mb-4 text-center">{card.description}</p>
                  <Button
                    href={`/education/${card.id}`}
                    className=" hover:bg-blue-700 text-white py-2 px-4 rounded"
                  >
                    Details
                  </Button>
                </div>
              </div>
              {/* Overlay */}

              {/* Card Border */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none" />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Education;
