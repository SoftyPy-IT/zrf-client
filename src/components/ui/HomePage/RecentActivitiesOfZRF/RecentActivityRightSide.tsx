import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import { TActivity } from "@/types/type";
import truncateText from "@/utils/truncate";

interface welcomeProps {
  activityFilterData: TActivity[];
  language: string;
}
const RecentActivityRightSide = ({
  activityFilterData,
  language,
}: welcomeProps) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedData = isLargeScreen
    ? activityFilterData?.slice(1, 5)
    : activityFilterData?.slice(1, 3);
  return (
    <div className="lg:w-[500px] w-full">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-5 md:bg-gray-100 p-0 md:p-2 lg:mt-0 md:mt-5 mt-5">
        {displayedData?.map((data) => (
          <div
            key={data._id}
            className="flex items-center md:gap-0 flex-col md:flex-row bg-white h-[200px] md:h-auto lg:h-[100px] rounded shadow-md transition-transform duration-500 transform hover:scale-105  justify-between "
          >
            {data.bng_Images?.slice(0, 1).map((img) => (
              <Image
                key={img}
                src={img}
                alt="news"
                className=" h-[110px] md:h-[100px] w-full md:w-32 rounded transition-opacity duration-500"
                width={200}
                height={200}
              />
            ))}

            <div className="p-2">
              <h3 className="text-[11px] md:text-sm font-bold">
                {language === "ENG"
                  ? truncateText(data.english_title, 60)
                  : truncateText(data.bangla_title, 60)}
              </h3>

              <div className="flex justify-end">
                <Link href={`/recent-activities-of-zrf/${data._id}`}>
                  <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-2 text-white rounded-full uppercase text-xs">
                    <EastIcon sx={{ fontSize: { xs: 12, lg: 20 } }} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-7 flex justify-end">
        <Link href="/recent-activities-of-zrf">
          <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-2 text-white rounded-full uppercase text-sm">
            {language === "ENG" ? " See All" : "সব দেখুন"} <EastIcon />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecentActivityRightSide;
