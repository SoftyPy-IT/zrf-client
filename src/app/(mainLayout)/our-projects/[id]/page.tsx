"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Container from "@/components/share/Container";
import Banner from "../_components/Banner";

import image1 from "../../../../../src/assets/images/projects/image1.jpg";
import image2 from "../../../../../src/assets/images/projects/image2.jpg";
import image3 from "../../../../../src/assets/images/projects/image3.jpg";
import image4 from "../../../../../src/assets/images/projects/image4.jpg";
import ShareLink from "@/components/share/ShareLink/ShareLink";

const projectData = [
  {
    id: 1,
    image: image1,
    title: "Asthma Care and Prevention Center",
    description:
      "70lacs people suffer from asthma, which is about 5% of the total population. Asthma centre at Dhaka under government arrangement was the only integrated asthma management centre in our country. Asthma care and prevention centre, Bogra commenced on 14th May, 2003 to ensure effortless breathing for asthmatics. This centre is providing integrated asthma treatment by trained doctors including of patient education, which is the most important component of asthma treatment. Specialized service like, Nebulisation, Spirometry, ECG and Oxygen therapy is also available at a very rational cost. Orientation training of doctors on asthma is a unique component of this centre by which the integrated asthma management concept will be disseminated at grass root levels. Response of patients encouraged us to start a new centre at Chittagong on 11th February, 2004.",
  },
  {
    id: 2,
    image: image2,
    title: "Shahid Ziaur Rahman Shishu Hospital",
    description:
      "Shahid Ziaur Rahman Shishu Hospital is committed to providing comprehensive healthcare services to children with the goal of improving pediatric health outcomes. The hospital focuses on offering better medical care and modern facilities, aiming to reduce child morbidity and mortality rates. It is equipped with outpatient services for consultations and treatment, ensuring easy access for families. Additionally, the hospital prioritizes the development of skilled healthcare professionals by organizing specialized training programs for nurses and paramedics.",
  },
  {
    id: 3,
    image: image3,
    title: "Komol Project",
    description:
      "The farmers of our country contribute a major part in our economy. The unbelievable fact is that 5% of this farmer use quality seed, which is a mandatory requirement for booming production. Parallel to government no significant initiative was taken in private sector to explore this huge requirements.",
  },
  {
    id: 4,
    image: image4,
    title: "Scholarship Project",
    description:
      "Bangladesh with its vast natural beauty is a land of green panorama. Apart from exerting beauty trees have multiple benefits as it prevents deforestation, generate income for the owner and protects environment. Ziaur Rahman Foundation undertook program to help people reap the multiple benefits of the mother nature. Bangladesh with its vast natural beauty is a land of green panorama. Apart from exerting beauty trees have multiple benefits as it prevents deforestation, generate income for the owner and protects environment. Ziaur Rahman Foundation undertook program to help people reap the multiple benefits of the mother nature.",
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
        <div className="lg:flex md:flex gap-10 ">
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
                    <p className="text-sm font-medium mt-2">{data.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ShareLink />
      </Container>
    </div>
  );
};

export default ProjectDetailsPage;
