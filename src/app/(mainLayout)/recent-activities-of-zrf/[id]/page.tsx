"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Container from "@/components/share/Container";
import Banner from "../_components/Banner";

import news1 from "../../../../../src/assets/images/activities/01.jpg";
import news2 from "../../../../../src/assets/images/activities/02.jpg";
import news3 from "../../../../../src/assets/images/activities/03.jpg";
import news4 from "../../../../../src/assets/images/activities/04.jpg";
import ShareLink from "@/components/share/ShareLink/ShareLink";

const projectData = [
  {
    id: 1,
    image: news1,
    title:
      "A month-long medical camp is being conducted in flood-affected areas by the Ziaur Rahman Foundation and Doctors Association of Bangladesh (DAB).",
    description:
      "A medical camp has been organized by the Ziaur Rahman Foundation and Doctors Association of Bangladesh (DAB) in Feni district to provide healthcare services to over a thousand people. The preparation team has already reached Feni with medicines.",
    date: "September 17, 2024",
  },
  {
    id: 2,
    image: news2,
    title:
      "A month-long medical camp is being conducted in flood-affected areas by the Ziaur Rahman Foundation and Doctors Association of Bangladesh (DAB).",
    description:
      "Under the direction of BNP's Acting Chairman and President of the Ziaur Rahman Foundation, Mr. Tarique Rahman, ongoing medical services and medicine distribution were conducted at the district hospital in flood-affected Feni. Renowned pediatrician Dr. Salahuddin Mahmud, Associate Professor at Dhaka Children's Hospital, along with Dr. M.R. Hasan, Dr. Munnasir Zaman Remo, Dr. Imam Hasan, Dr. Saurav, and Dr. Rakib provided medical services today as part of the continuous healthcare initiative.",
    date: "September 10, 2024",
  },
  {
    id: 3,
    image: news3,
    title:
      "A month-long medical camp is being conducted in flood-affected areas by the Ziaur Rahman Foundation and Doctors Association of Bangladesh (DAB).",
    description:
      "Abdullah Al Mamun, a Master's student in Political Science at Hossain Shaheed Suhrawardy College in Magura, was admitted in critical condition to Uttara Women's Medical College Hospital after being injured by police fire on August 5 in the anti-discrimination student movement. To save his life, an emergency tracheostomy was performed. Under the direction of BNP's Acting Chairman and President of the Ziaur Rahman Foundation, Mr. Tarique Rahman, and with the guidance of Executive Director Professor Dr. Farhad Halim Donar, the foundation took responsibility for Mamun's ICU treatment, coordinated by Dr. Sajid Imtiaz, Dr. Shawon Bin Rahman, and Dr. Rafsan Jani Abir.",
    date: "August 5, 2024",
  },
  {
    id: 4,
    image: news4,
    title:
      "A month-long medical camp is being conducted in flood-affected areas by the Ziaur Rahman Foundation and Doctors Association of Bangladesh (DAB).",
    description:
      "In line with BNP's Acting Chairman Mr. Tarique Rahman's instructions to stand beside flood victims, the Ziaur Rahman Foundation and DAB officials led by BNP Chairperson's advisor, Professor Dr. Farhad Halim Donar, Executive Director of the Ziaur Rahman Foundation, embarked on a journey to Feni for relief distribution to flood-affected areas.",
    date: "August 25, 2024",
  },
];

const recentPost = [
  {
    id: 1,
    date: "November 8, 2023",
    description:
      "November 7, National Revolution and Solidarity Day Feature by Ziaur Rahman Foundation (ZRF)",
  },
  {
    id: 2,
    date: "October 21, 2023",
    description:
      "Thursday, October 19, 2023, Special event at the BNP Chairperson's Office in Gulshan on the occasion of the 24th founding anniversary of the Ziaur Rahman Foundation (ZRF)",
  },
  {
    id: 3,
    date: "October 18, 2023",
    description:
      "Tribute to the grave of Martyred President Ziaur Rahman on the occasion of the 24th founding anniversary of the Ziaur Rahman Foundation.",
  },
];

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const foundProject = projectData.find((item) => item.id === Number(id));
      setProject(foundProject);
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Banner />
      <Container>
        <div className="lg:flex md:flex gap-10 my-16">
          <div className="w-full grid grid-cols-1">
            <div className="h-full w-full">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full lg:h-[400px] rounded"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-justify mt-5">{project.description}</p>
              </div>
            </div>
          </div>

          {/* Sidebar for additional content */}
          <div className="border p-5 rounded lg:w-[600px]">
            <h3 className="text-xl font-bold">Recent Post</h3>
            <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
            <div className="flex flex-col gap-8 mt-5">
              {recentPost?.map((data) => (
                <div key={data.id}>
                  <div>
                    <p className="hover:underline cursor-pointer text-justify font-semibold">
                      {data.description}
                    </p>
                    <p className="text-sm mt-2">{data.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ShareLink/>
      </Container>
    </div>
  );
};

export default ProjectDetailsPage;
