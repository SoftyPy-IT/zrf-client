import Image from "next/image";
import img1 from "../../../../src/assets/images/program/1.jpg";
import img2 from "../../../../src/assets/images/program/2.jpg";
import img3 from "../../../../src/assets/images/program/3.jpg";
import Container from "@/components/share/Container";

import { Button } from "@mui/material";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";

const Rehabilitation = () => {
  const cardData = [
    {
      id: 1,
      title: "Medical Service and Medicine Distribution Program for Flood Victims",
      content:
        "On September 10, 2024, under the direction of BNP Acting Chairman and President of the Ziaur Rahman Foundation, Mr. Tarique Rahman, an ongoing medical service and medicine distribution program was held at Feni District General Hospital for flood victims. As part of this program, renowned pediatrician Dr. Salahuddin Mahmud, Associate Professor at Dhaka Shishu Hospital, along with Dr. M.R. Hasan, Dr. Munnasir Zaman Remo, Dr. Imam Hasan, Dr. Saurav, and Dr. Rakib provided medical services.",
      img: img1,
    },
    {
      id: 2,
      title:
        "ZRF in the Medical Service Program for Mamun, Injured in the Anti-Discrimination Student Movement",
      content:
        "Abdullah Al Mamun, a Master's student in Political Science at Hossain Shaheed Suhrawardy College in Magura, was severely injured by police gunfire on August 5 in Uttara East Police Station during the anti-discrimination student movement. He was admitted to Uttara Women's Medical College Hospital in a critical state, and an emergency tracheostomy was performed to save his life. Under the directive of BNP Acting Chairman and President of the Ziaur Rahman Foundation, Mr. Tarique Rahman, and the supervision of ZRF Executive Director Prof. Dr. Farhad Halim Donar, ZRF, led by Rehab Committee Convenor Dr. Shah Muhammad Aman Ullah and Member Secretary Dr. Parvez Reza Kakon, took full responsibility for Mamun's treatment in the ICU. ZRF Coordinators Dr. Sajid Imtiaz, Dr. Shawon Bin Rahman, and Dr. Rafsan Zani Abir are overseeing the treatment of Mamun, a front-line fighter for democracy.",
      img: img2,
    },
    {
      id: 3,
      title:
        "ZRF in the Medical Service Program for Jubo Dal Leader Md. Aminul Haque, Injured in the Anti-Discrimination Student Movement",
      content:
        "On August 4, during the anti-discrimination student movement, Jubo Dal leader Md. Aminul Haque was shot in front of the Gaibandha Police Superintendent's office. Following the directive of BNP Acting Chairman and ZRF President Mr. Tarique Rahman, and under the supervision of ZRF Executive Director Prof. Dr. Farhad Halim Donar, ZRF Rehab Committee Convenor Dr. Shah Muhammad Aman Ullah and Member Secretary Dr. Parvez Reza Kakon took full responsibility for Aminul Haque’s treatment. Under the supervision of ZRF Coordinator Dr. Sajid Imtiaz, the bullet was removed from Aminul Haque's body today.",
      img: img3,
    },
  ];
  

    return (
        <>
            <CommonBanner title="Health Services " />
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
