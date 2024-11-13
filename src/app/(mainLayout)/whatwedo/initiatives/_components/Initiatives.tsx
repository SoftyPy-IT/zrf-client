// pages/index.js
import Image from "next/image";
import img1 from "../../../../../assets/images/initiative/1.jpg";
import img2 from "../../../../../assets/images/initiative/2.jpg";
import img3 from "../../../../../assets/images/initiative/3.jpg";
import Container from "@/components/share/Container";
import Banner from "./Banner";
import { Button } from "@mui/material";

// pages/index.js
const Initiatives = () => {
  // Sample data for the cards
  const cardData = [
    {
      id: 1,
      title:
        "In the presence of Deshnetri Begum Khaleda Zia, the Chittagong District Ziaur Rahman Foundation distributed financial assistance to the families of those killed and injured in the movement.",
      content:
        "Begum Khaleda Zia attended an event in Chittagong District Ziaur Rahman Foundation distributed financial aid to the families of those who lost their lives or were injured in the movement.",
      img: img1,
    },
    {
      id: 2,
      title:
        "Ziaur Rahman Foundation Launches Disinfectant Spraying Campaign in Mohakhali Slum for COVID-19 Prevention",
      content:
        "On April 8, 2020, the Ziaur Rahman Foundation, with the support of agricultural experts, launched a disinfectant spraying campaign to prevent the spread of COVID-19 in the 7-story slum of Mohakhali. The initiative aimed to sanitize the area and protect residents from the virus.",
      img: img2,
    },
    {
      id: 3,
      title:
        "Ziaur Rahman Foundation Provides Medical Assistance to 'Tree Woman' Shahana in 2017",
      content:
        "Ziaur Rahman Foundation provided medical assistance to the Tree Woman Shahana. During this time, Professor Dr. Farhad Halim Doner, Executive Director of the Foundation, visited Dhaka Medical College to offer support.",
      img: img3,
    },
  ];

  return (
    <>
      <Banner />
      <Container className="my-20">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[1100px] md:h-[900px] lg:h-[500px]">
          {cardData.map((card, index) => (
            <div
              className="relative shadow-md overflow-hidden group border"
              key={index}
            >
              <Image
                className="w-full h-[300px] lg:h-[400px] object-cover"
                src={card.img}
                alt={card.title}
              />
              {/* Overlapping content */}
              <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 lg:p-4 bg-blue-950 border-t border-gray-300 rounded-t-3xl h-[150px] md:h-[200px] lg:h-[200px] mt-28 md:mt-0 lg:mt-0">
                <h2 className="text-xl text-white">{card.title}</h2>
                <p className="mt-2 text-white">
                  {card.content.slice(0, 180)} ......
                </p>
              </div>
              {/* Hover content */}
              <div className="absolute inset-x-0 bottom-0 bg-green-700 text-[#fff] transition-transform transform translate-y-full group-hover:translate-y-0 duration-500 ease-in-out h-[340px] md:h-[300px] lg:h-[300px] rounded-t-3xl">
                <div className="w-full p-2 md:p-4 lg:p-6 lg:h-full">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl ">{card.title.slice(0, 100)}</h2>
                    </div>
                    <p className="text-justify">{card.content.slice(0, 200)}</p>
                    <Button href={`/whatwedo/program/${card.id}`}>
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Initiatives;
