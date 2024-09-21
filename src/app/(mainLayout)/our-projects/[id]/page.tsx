import React from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import media1 from "../../../../../src/assets/images/news/news (1).jpg";
import media2 from "../../../../../src/assets/images/news/news (2).jpg";
import media3 from "../../../../../src/assets/images/news/news (3).jpg";
import media4 from "../../../../../src/assets/images/news/news (4).jpg";
import Container from "@/components/share/Container";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Banner from "../_components/Banner";
import Volunteer from "../_components/Volunteer";

const page = () => {
  const humanRights = [
    {
      id: 1,
      img: media1,
      date: "June 30, 2024",
      postedBy: "Admin",
      title: "Shahid Ziaur Rahman Shishu Hospital",
      description:
        "Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ];

  const newsData = [
    {
      id: 1,
      date: "June 30, 2024",
      description: "তারেক রহমান, বাংলাদেশের অন্যতম রাজনৈতিক ব্যক্তিত্ব ।",
      img: media2,
    },
    {
      id: 1,
      date: "June 30, 2024",
      description: "তারেক রহমান, বাংলাদেশের অন্যতম রাজনৈতিক ব্যক্তিত্ব ।",
      img: media3,
    },
    {
      id: 1,
      date: "June 30, 2024",
      description: "তারেক রহমান, বাংলাদেশের অন্যতম রাজনৈতিক ব্যক্তিত্ব ।",
      img: media4,
    },
  ];

  return (
    <div>
      <Banner />
      <Container>
        <div className="lg:flex md:flex gap-10 my-16">
          <div className="w-full grid grid-cols-1">
            {humanRights.map((data) => (
              <div key={data.id} className="h-full w-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={media2}
                    alt={data.title}
                    className="object-cover w-full lg:h-[400px] rounded"
                  />
                </div>
                <div className="flex gap-10 mt-5">
                  <span className="flex items-center text-sm">
                    <CalendarMonthIcon /> {data.date}
                  </span>
                  <span className="flex items-center text-sm">
                    <AccountCircleIcon /> {data.postedBy}
                  </span>
                </div>
                <div className="mt-5">
                  <h3 className="text-2xl font-semibold">{data.title}</h3>


                  <div className="space-y-3 ">
                    <h4 className="mt-5 ">Objective of the project:</h4>
                    <p>To provide better medical care and facilities to the children.</p>
                    <p> To decrease the-morbidity and mortality rate.</p>
                    <p> To create modern medical facilities.</p>
                    <p>To arrange special training for nurses and paramedics.</p>
                    <p> Include facilities to provide outpatient, consultation for children in a Hospital.</p>
                    <p>To develop a partnership with the govt. to provide the treatment facilities.</p>
                    <p>Location of the project: Bogra, 60 Beded Hospital with Intensive Care Facilities</p>
                  </div>
                </div>

                {/* quotation */}
                {/* <div className="bg-gray-100 lg:p-10 p-5 mt-5 rounded border-l-4 border-green-600">
                  <h3 className="lg:text-3xl text-xl font-medium lg:text-center text-justify">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </h3>
                </div> */}
                {/* <Volunteer /> */}
              </div>
            ))}
          </div>

          <div className="w-full lg:w-[600px] lg:mt-0 md:mt-0 mt-5">
            <div className="sticky top-20">
              <div className="bg-gray-100 p-5 rounded mb-5">
                <TextField
                  id="outlined-basic"
                  label="Search Here"
                  variant="outlined"
                  fullWidth
                  size="small"
                  className="bg-white"
                />
              </div>

        
              {/* <div className="bg-gray-100 p-5 rounded mt-10">
                <h3>Popular Post</h3>
                <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
                <div className="flex flex-col gap-8 mt-5">
                  {newsData?.map((data) => (
                    <div key={data.id} className="flex gap-5">
                      <Image
                        src={data.img}
                        width={50}
                        height={30}
                        alt=""
                        className="w-44 h-16 object-contain"
                      />
                      <div>
                        <p className="text-xs">{data.date}</p>
                        <p className="text-sm">{data.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
