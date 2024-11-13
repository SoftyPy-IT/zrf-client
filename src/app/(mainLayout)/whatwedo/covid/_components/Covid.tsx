import Image from "next/image";
import img1 from "../../../../../assets/images/covid/c1.jpg";
import img2 from "../../../../../assets/images/covid/2.jpg";
import img3 from "../../../../../assets/images/covid/c5.jpg";
import Container from "@/components/share/Container";
import Banner from "./Banner";
import { Button } from "@mui/material";


const Covid = () => {
  const cardData = [
    {
      id: 1,
      title: "ZRF and DAB Provided PPE to Doctors",
      content:
        "To help Bangladesh recover quickly from the global COVID-19 crisis, the Ziaur Rahman Foundation (ZRF) and the Doctors Association of Bangladesh (DAB) have taken various initiatives.",
      img: img1,
    },
    {
      id: 2,
      title: "COVID-19 Help Cell",
      content:
        "Following the directive of BNP Acting Chairman Mr. Tarique Rahman, the Bangladesh Nationalist Party (BNP), in collaboration with the Ziaur Rahman Foundation and the Doctors Association of Bangladesh (DAB), established COVID-19 help centers across the country. On July 23, 2021, the COVID-19 Help Center in Patuakhali District BNP was inaugurated, with BNP District Convenor Alhaj Abdur Rashid Chunnu Mia presiding over the event.",
      img: img2,
    },
    {
      id: 3,
      title: "PPE Distribution Program",
      content:
        "Following the instructions of Mr. Tarique Rahman, the Ziaur Rahman Foundation provided sufficient protective equipment to accelerate the PPE distribution program. Protective equipment was provided at Gonoshasthaya Nagar Hospital in the capital. BNP Senior Joint Secretary General Ruhul Kabir Rizvi attended as the chief guest and formally inaugurated the program.",
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

export default Covid;
