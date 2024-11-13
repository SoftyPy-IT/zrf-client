import Image from "next/image";
import img1 from "../../../../../assets/images/program/1.jpg";
import img2 from "../../../../../assets/images/program/2.jpg";
import img3 from "../../../../../assets/images/program/3.jpg";
import Container from "@/components/share/Container";
import Banner from "./Banner";
import { Button } from "@mui/material";


const Rehabilitation = () => {
  
  const cardData = [
    {
      id: 1,
      title: "Medical Services and Medicine Distribution Program for Flood Victims",
      content:
        "On September 10, 2024, under the direction of BNP’s Acting Chairman and President of Ziaur Rahman Foundation, Mr. Tarique Rahman, the Ziaur Rahman Foundation and the Doctors' Association of Bangladesh (DAB) organized a continuous medical service and medicine distribution program for patients at the Sadar Hospital in flood-affected Feni district. Today, prominent pediatricians including Associate Professor Dr. Salahuddin Mahmud from Dhaka Shishu Hospital, Dr. M.R. Hasan, Dr. Munnasir Zaman Remo, Dr. Imam Hasan, Dr. Saurabh, and Dr. Rakib provided medical services as part of this initiative.",
      img: img1,
    },
    {
      id: 2,
      title:
        "ZRF in Medical Services for Mamun, Injured in Anti-Discrimination Student Movement",
      content:
        "Abdullah Al Mamun, a master's student in the Department of Political Science at Hossain Shaheed Suhrawardy College in Magura, was critically injured in police firing on August 5 during an anti-discrimination student movement in Uttara East Police Station. Admitted to Uttara Women's Medical College Hospital in critical condition, an emergency tracheostomy was performed to save his life. Under the direction of BNP Acting Chairman and ZRF President Mr. Tarique Rahman, Ziaur Rahman Foundation, led by Executive Director Professor Dr. Farhad Halim Donar, with the support of the ZRF Rehabilitation Committee, took over the comprehensive management of Mamun's treatment in the ICU. ZRF Coordinators Dr. Sajid Imtiaz, Dr. Shawon Bin Rahman, and Dr. Rafsan Jani Abir are overseeing the care of Mamun, a frontline fighter for the restoration of democracy.",
      img: img2,
    },
    {
      id: 3,
      title:
        "ZRF’s Medical Services for Youth Leader Aminul Haque Injured in Anti-Discrimination Movement",
      content:
        "During the anti-discrimination student movement on August 4 in Gaibandha, Youth Leader Aminul Haque was shot in front of the Gaibandha Superintendent of Police’s office. Following the directives of BNP Acting Chairman and ZRF President Mr. Tarique Rahman, Ziaur Rahman Foundation, led by Executive Director Professor Dr. Farhad Halim Donar, and supported by the ZRF Rehabilitation Committee, took full responsibility for Aminul Haque's treatment. Under the supervision of ZRF Coordinator Dr. Sajid Imtiaz, a bullet was successfully removed from Aminul Haque's body today.",
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

export default Rehabilitation;
