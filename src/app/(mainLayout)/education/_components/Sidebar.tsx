import React from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import StopIcon from "@mui/icons-material/Stop";
import titleImage from "../../../../assets/images/banner/banner3.png";
import media1 from "../../../../assets/images/news/news (1).jpg";
import media2 from "../../../../assets/images/news/news (2).jpg";
import media3 from "../../../../assets/images/news/news (3).jpg";
import media4 from "../../../../assets/images/news/news (4).jpg";

const newsData = [
  {
    id: 1,
    description:
      "৭ নভেম্বর জাতীয় বিপ্লব ও সংহতি দিবস ক্রোড়পত্র জিয়াউর রহমান ফাউন্ডেশন (জেডআরএফ)",
    img: media2,
    date: "01/01/2001",
  },
  {
    id: 1,
    description:
      "বৃহস্পতিবার, অক্টোবর ১৯, ২০২৩, জিয়াউর রহমান ফাউন্ডেশন -জেআরএফ এর ২৪তম প্রতিষ্ঠা বার্ষিকী উপলক্ষ্যে গুলশানস্থ বিএনপি চেয়ারপারসন কার্যালয়ে বিশেষ অনুষ্ঠান",
    img: media3,
    date: "01/01/2001",
  },
  {
    id: 1,
    description:
      "জিয়াউর রহমান ফাউন্ডেশন’র ২৪তম প্রতিষ্ঠা বার্ষিকী উপলক্ষে শহিদ প্রেসিডেন্ট জিয়াউর রহমান’র সমাধিতে শ্রদ্ধা নিবেদন।",
    img: media4,
    date: "01/01/2001",
  },
];

const Sidebar = () => {
  return (
    <div>
      
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

        {/* Recent Posts */}
        <div className="bg-gray-100 p-5 rounded mt-10">
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
        </div>

        {/* achieves */}
        {/* <div className="bg-gray-100 p-5 rounded mt-10">
          <h3>Achieves</h3>
          <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
          <div>
            <div className="my-3">
              <button className="font-medium text-sm">
                <StopIcon fontSize="small" /> May 2024
              </button>
            </div>

            <hr />
            <div className="my-3">
              <button className="font-medium text-sm">
                <StopIcon fontSize="small" /> April 2024
              </button>
            </div>
            <hr />
            <div className="my-3">
              <button className="font-medium text-sm">
                <StopIcon fontSize="small" /> June 2024
              </button>
            </div>
            <hr />
            <div className="my-3">
              <button className="font-medium text-sm">
                <StopIcon fontSize="small" /> July 2024
              </button>
            </div>
          </div>
        </div> */}

        {/* category */}
        {/* <div className="bg-gray-100 p-5 rounded mt-10">
          <h3>Category</h3>
          <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
          <div>
            <div className="flex gap-2 my-3">
              <button className="font-medium text-sm">
                <StopIcon fontSize="small" /> Education
              </button>
              <span className="block font-medium text-sm">(10)</span>
            </div>

            <hr />
            <div className="flex gap-2 my-3">
              <button className="font-medium text-sm">
                <StopIcon fontSize="small" /> National
              </button>
              <span className="block font-medium text-sm">(20)</span>
            </div>
            <hr />
            <div className="flex gap-2 my-3">
              <button className="font-medium text-sm">
                <StopIcon fontSize="small" /> Health
              </button>
              <span className="block font-medium text-sm">(17)</span>
            </div>
            <hr />
            <div className="flex gap-2 my-3">
              <button className="font-medium text-sm">
                <StopIcon fontSize="small" /> Sports
              </button>
              <span className="block font-medium text-sm">(12)</span>
            </div>
            <hr />
            <div className="flex gap-2 my-3">
              <button className="font-medium text-sm">
                <StopIcon fontSize="small" /> Magazine
              </button>
              <span className="block font-medium text-sm">(16)</span>
            </div>
          </div>
        </div> */}

        {/* tags */}
        {/* <div className="bg-gray-100 p-5 rounded mt-10">
          <h3>Tags</h3>
          <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
          <div className="flex flex-wrap gap-3">
            <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
              Fashion
            </button>
            <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
              Education
            </button>
            <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
              Nation
            </button>
            <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
              Study
            </button>
            <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
              Health
            </button>
            <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
              Food
            </button>
            <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
              Travel
            </button>
            <button className="border hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 rounded hover:text-white text-sm">
              Science
            </button>
          </div>
        </div> */}
      </div>
    
  );
};

export default Sidebar;
