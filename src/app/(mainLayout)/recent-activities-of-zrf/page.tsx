import React from "react";
import Container from "@/components/share/Container";
import news1 from "../../../../src/assets/images/activities/01.jpg";
import news2 from "../../../../src/assets/images/activities/02.jpg";
import news3 from "../../../../src/assets/images/activities/03.jpg";
import news4 from "../../../../src/assets/images/activities/04.jpg";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import Banner from "./_components/Banner";

const newsItems = [
  {
    id: 1,
    image: news1,
    title:
      "A month-long medical camp is being conducted in flood-affected areas by Ziaur Rahman Foundation and Doctors Association of Bangladesh (DAB).",
    description:
      "A medical camp has been organized in Feni district to provide medical services to over a thousand people, under the initiative of Ziaur Rahman Foundation and the Doctors Association of Bangladesh (DAB). The preparation team, along with the necessary medicines, has already arrived in Feni.",
    date: "September 17, 2024",
  },
  {
    id: 2,
    image: news2,
    title:
      "A month-long medical camp is being conducted in flood-affected areas by Ziaur Rahman Foundation and Doctors Association of Bangladesh (DAB).",
    description:
      "Under the directive of BNP’s Acting Chairman and President of Ziaur Rahman Foundation, Mr. Tarique Rahman, ongoing medical services and medicine distribution are being provided for sick patients at the Sadar Hospital in flood-affected Feni district. Today, renowned pediatrician Dr. Salahuddin Mahmood, along with Dr. M.R. Hasan, Dr. Munnasir Zaman Remo, Dr. Imam Hasan, Dr. Saurav, and Dr. Rakib, have provided their services as part of this initiative by Ziaur Rahman Foundation and DAB.",
    date: "September 10, 2024",
  },
  {
    id: 3,
    image: news3,
    title:
      "A month-long medical camp is being conducted in flood-affected areas by Ziaur Rahman Foundation and Doctors Association of Bangladesh (DAB).",
    description:
      "Abdullah Al Mamun, a Master's student in Political Science at Magura Hossain Shaheed Suhrawardy College, was injured by police gunfire during an anti-discrimination student protest on August 5 in Uttara East. He was admitted to Uttara Women's Medical College Hospital in critical condition, and an emergency tracheostomy was performed to save his life. Following the directive of BNP's Acting Chairman and President of Ziaur Rahman Foundation, Mr. Tarique Rahman, the foundation, under the supervision of Executive Director Dr. Farhad Halim Donar and with support from Dr. Shah Muhammad Amanullah and Dr. Parvez Reza Kakon, has taken full responsibility for Mamun’s treatment in ICU. Foundation coordinators Dr. Sajid Imtiaz, Dr. Shaon Bin Rahman, and Dr. Rafsan Jani Abir are overseeing his care as he battles for recovery.",
    date: "August 5, 2024",
  },
  {
    id: 4,
    image: news4,
    title:
      "A month-long medical camp is being conducted in flood-affected areas by Ziaur Rahman Foundation and Doctors Association of Bangladesh (DAB).",
    description:
      "Under the directive of BNP's Acting Chairman, Mr. Tarique Rahman, the Ziaur Rahman Foundation and Doctors Association of Bangladesh (DAB), led by Professor Dr. Farhad Halim Donar, Advisor to the BNP Chairperson and Executive Director of Ziaur Rahman Foundation, are traveling to distribute relief supplies to flood-affected and vulnerable people in Feni district as part of BNP's ongoing support.",
    date: "August 25, 2024",
  },
];

const page = () => {
  return (
    <div>
      <Banner />
      <Container className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {newsItems.map((data) => (
            <div key={data.id} className="shadow-xl bg-white overflow-hidden">
              <div className="relative">
                <Image
                  src={data.image}
                  alt={data.title}
                  className="h-[250px] w-full object-cover transition-transform duration-500 transform hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-5">
                <h3 className="text-xl font-bold">{data.title.slice(0, 60)}</h3>
                <p className="text-justify">
                  {data.description.slice(0, 150)}...
                </p>
                <div className="flex justify-between">
                  <p className="text-gray-600">{data.date}</p>
                  <Link href={`/recent-activities-of-zrf/${data.id}`}>
                    <button className="hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-1 hover:text-white rounded-full uppercase text-xs border">
                      Read More <EastIcon fontSize="small" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
