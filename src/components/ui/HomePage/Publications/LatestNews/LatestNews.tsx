import React from "react";
import "./LatestNews.css";
import img1 from "../../../../../../src/assets/images/New folder (2)/news (1).jpeg";
import img2 from "../../../../../../src/assets/images/New folder (2)/news (2).jpg";
import img3 from "../../../../../../src/assets/images/New folder (2)/news (3).jpg";
import img4 from "../../../../../../src/assets/images/New folder (2)/news (4).jpg";
import img5 from "../../../../../../src/assets/images/New folder (2)/news (6).jpg";


import Image from "next/image";
import { Button } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import Link from "next/link";
import useMediaQuery from '@mui/material/useMediaQuery';

const buttonStyle = {
  width: "90px",
  height: "25px",
  borderRadius: "2px",
  padding: "3px",
  fontSize: "10px",
  backgroundColor: "white",
  color: "black",
  '&:hover': {
    backgroundColor: "#f0f0f0",
  },
};

const LatestNews = () => {

    const newsData = [
        {
          id: 1,
          title:
            "জিয়াউর রহমান ফাউন্ডেশন’র ২৪তম প্রতিষ্ঠা বার্ষিকী উপলক্ষে শহিদ প্রেসিডেন্ট জিয়াউর রহমান’র সমাধিতে শ্রদ্ধা নিবেদন।",
          image: img1,
          date: "১০ এপ্রিল ২০২৪",
        },
        {
          id: 2,
          title:
            "কুড়িগ্রাম, বন্যা কবলিত এলাকার মানুষের মাঝে বিনামূল্যে স্বাস্থ্য সেবা",
          image: img2,
          date: "১০ এপ্রিল ২০২৪",
        },
        {
          id: 3,
          title: "বিশিষ্ট ক্রীড়া সংগঠক আরাফাত রহমান কোকোর",
          image: img3,
          date: "১০ এপ্রিল ২০২৪",
        },
        // {
        //   id: 4,
        //   title: "ভোলায় শহিদ নুরে আলম ও আব্দুর রহিমের",
        //   image: img4,
        //   date: "১০ এপ্রিল ২০২৪",
        // },
        // {
        //   id: 5,
        //   title:
        //     "কুড়িগ্রাম, বন্যা কবলিত এলাকার মানুষের মাঝে বিনামূল্যে স্বাস্থ্য সেবা",
        //   image: img5,
        //   date: "১০ এপ্রিল ২০২৪",
        // },
      ];
  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const newsToShow = isSmallScreen ? newsData.slice(0, 2) : newsData;

  return (
    <>
      <div className="grid grid-cols-1 gap-y-[10px] mt-10  ">
        {newsToShow.map((data) => (
          <div key={data.id} className="newsCard">
            <div className="flex md:flex-row items-center justify-between">
              <div className="newsContent text-sm">
                <small className="text-[12px] font-bold ">{data.title} </small>
                <div className="bnpBtnStyle">
                  <Button component={Link} href="/press/1" sx={buttonStyle}>
                    <span>
                      আরও পড়ুন <ArrowRightAlt sx={{ fontSize: "13px" }} />
                    </span>{" "}
                  </Button>
                </div>
              </div>
              <div className="newsImgWrap">
                <Image
                  src={data.image}
                  alt="news"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestNews;
