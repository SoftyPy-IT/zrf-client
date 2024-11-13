import React from "react";
import "./LatestNews.css";
import news1 from "../../../../../../src/assets/images/activities/01.jpg";
import news2 from "../../../../../../src/assets/images/activities/02.jpg";
import news3 from "../../../../../../src/assets/images/activities/03.jpg";
import Image from "next/image";
import { ArrowRightAlt } from "@mui/icons-material";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import EastIcon from "@mui/icons-material/East";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      image: news3,
      title:
        "Medical camps being organized for a month in flood-affected regions under the initiative of Ziaur Rahman Foundation and Doctors Association of Bangladesh (DAB).",
      description:
        "Under the initiative of Ziaur Rahman Foundation and Doctors Association of Bangladesh (DAB), a medical camp has been set up in Feni district to provide medical services to over a thousand people. The organizing team has already reached Feni with medicines.",
      date: "September 17, 2024",
    },
    {
      id: 2,
      image: news3,
      title:
        "Medical camps being organized for a month in flood-affected regions under the initiative of Ziaur Rahman Foundation and Doctors Association of Bangladesh (DAB).",
      description:
        "On the directive of BNP's Acting Chairman and President of Ziaur Rahman Foundation, Mr. Tarique Rahman, a medical camp has been set up at the Feni district hospital for ongoing treatment and medicine distribution for sick patients as part of the relief efforts. Today's medical services were provided by renowned pediatric specialist Dr. Salahuddin Mahmood from Dhaka Shishu Hospital, along with Dr. M.R. Hasan, Dr. Munna Sirjaman Remo, Dr. Imam Hasan, Dr. Sourav, and Dr. Rakib.",
      date: "September 10, 2024",
    },
    {
      id: 3,
      image: news3,
      title:
        "Medical camps being organized for a month in flood-affected regions under the initiative of Ziaur Rahman Foundation and Doctors Association of Bangladesh (DAB).",
      description:
        "Abdullah Al Mamun, a master's student in the Department of Political Science at Magura Hossain Shaheed Sohrawardy College, was injured in a police shooting on August 5th during an anti-discrimination student movement in Uttara East. He was admitted in critical condition to Uttara Women's Medical College Hospital, where emergency tracheostomy was performed to save his life. Under the direction of BNP's Acting Chairman and Ziaur Rahman Foundation President Mr. Tarique Rahman, the Executive Director of Ziaur Rahman Foundation, Prof. Dr. Farhad Halim Donar, has taken full responsibility for Mamun's treatment, along with the support of the Rehabilitation Committee led by Dr. Shah Muhammad Aman Ullah and Dr. Parvez Reza Kakon. The treatment of Mamun, who fought for the restoration of democracy, is being closely supervised by Dr. Sajid Imtiaz, Dr. Shawon Bin Rahman, and Dr. Rafsan Jani Abir.",
      date: "August 5, 2024",
    },
    {
      id: 4,
      image: news3,
      title:
        "Medical camps being organized for a month in flood-affected regions under the initiative of Ziaur Rahman Foundation and Doctors Association of Bangladesh (DAB).",
      description:
        "Abdullah Al Mamun, a master's student in the Department of Political Science at Magura Hossain Shaheed Sohrawardy College, was injured in a police shooting on August 5th during an anti-discrimination student movement in Uttara East. He was admitted in critical condition to Uttara Women's Medical College Hospital, where emergency tracheostomy was performed to save his life. Under the direction of BNP's Acting Chairman and Ziaur Rahman Foundation President Mr. Tarique Rahman, the Executive Director of Ziaur Rahman Foundation, Prof. Dr. Farhad Halim Donar, has taken full responsibility for Mamun's treatment, along with the support of the Rehabilitation Committee led by Dr. Shah Muhammad Aman Ullah and Dr. Parvez Reza Kakon. The treatment of Mamun, who fought for the restoration of democracy, is being closely supervised by Dr. Sajid Imtiaz, Dr. Shawon Bin Rahman, and Dr. Rafsan Jani Abir.",
      date: "August 5, 2024",
    },
  ];

  return (
    <>
      <div>
        <div className="col-span-12 lg:col-span-5 hidden md:block mb-10 lg:mt-0 mt-10">
          <div className="flex items-center  border border-green-600 ">
            <h2 className="text-2xl font-bold uppercase bg-gradient-to-r from-yellow-600 to-green-600 text-white px-6 py-2">
              News
            </h2>
            <Marquee>
              <h1>
                This publication dives deep into the contributions of Ziaur
                Rahman !
              </h1>
            </Marquee>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2 items-center gap-4 lg:mt-0 mt-10">
          {newsData.map((data) => (
            <div
              key={data.id}
              className="border rounded items-center p-3 shadow-md"
            >
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="order-4 md:order-0">
                  <h4 className="text-sm font-semibold uppercase">
                    {data.title.length > 60 ? (
                      <>{data.title.slice(0, 60)}...</>
                    ) : (
                      data.title
                    )}
                  </h4>
                  <p className="text-sm text-justify">
                    {data.description.length > 100 ? (
                      <>
                        {data.description.slice(0, 100)} ...
                        <Link href={`/recent-activities-of-zrf/${data.id}`}>
                          <button className="text-green-600">See more</button>
                        </Link>
                      </>
                    ) : (
                      data.description
                    )}
                  </p>
                </div>

                <Image
                  src={data.image}
                  alt={data.title}
                  className="md:w-28 md:h-20 object-cover rounded"
                />
              </div>
            </div>
          ))}
          <div className="flex lg:justify-end  mt-5 text-center">
            <Link href="/news">
              <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase">
                See All <EastIcon fontSize="small" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
