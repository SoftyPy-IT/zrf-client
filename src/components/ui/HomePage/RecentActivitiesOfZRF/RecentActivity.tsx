import React from "react";
import Container from "@/components/share/Container";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import { TActivity } from "@/types/type";
import truncateText from "@/utils/truncate";
import { formatDate } from "@/utils/formateDate";
import RecentActivityRightSide from "./RecentActivityRightSide";
// const Loader = dynamic(() => import("@/components/Loading/Loading"), {
//   ssr: false,
// });

interface ActivityProps {
  activityData: TActivity[];
  language: string;
}

const RecentActivity: React.FC<ActivityProps> = ({
  activityData,
  language,
}) => {
  const activityFilterData = activityData?.filter(
    (welcome: any) => welcome.category === "Activity"
  );

  const sortedActivityData = activityFilterData?.sort(
    (a: TActivity, b: TActivity) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    }
  );

  return (
    <Container className="my-20">
      <h1 className="lg:text-3xl text-2xl font-bold uppercase">
        {language === "ENG"
          ? "Recent Activities of ZRF"
          : "জেডআরএফ এর সাম্প্রতিক কার্যক্রম"}
      </h1>
      <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5"></div>
      <div className="lg:flex gap-10">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:h-[500px]">
            {sortedActivityData?.slice(0, 2).map((data) => (
              <div
                key={data._id}
                className="relative shadow-xl bg-white overflow-hidden group hover:text-white"
              >
                <div className="relative lg:h-[250px] md:h-[240px]">
                  {language === "ENG"
                    ? data.bng_Images
                        ?.slice(0, 1)
                        .map((img) => (
                          <Image
                            key={img}
                            width={500}
                            height={500}
                            src={img}
                            alt="activity"
                            className=" h-full w-full transition-transform duration-500 transform group-hover:scale-105"
                          />
                        ))
                    : data.eng_images
                        ?.slice(0, 1)
                        .map((img) => (
                          <Image
                            key={img}
                            width={500}
                            height={500}
                            src={img}
                            alt="activity"
                            className="h-full w-full transition-transform duration-500 transform group-hover:scale-105"
                          />
                        ))}
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-600 via-yellow-600 to-transparent transition-transform transform translate-y-full group-hover:translate-y-0 duration-1000 ease-in-out h-[340px] md:h-[300px] lg:h-[500px]"></div>

                <div className="p-5 space-y-3 relative z-10">
                  <h3 className="text-xl font-bold">
                    {language === "ENG"
                      ? truncateText(data.english_title, 60)
                      : truncateText(data.bangla_title, 60)}
                  </h3>
                  <p className="text-">
                    {language === "ENG"
                      ? truncateText(data.english_short_description, 90)
                      : truncateText(data.bangla_short_description, 90)}
                  </p>
                  <div className="flex justify-between">
                    <p>{formatDate(data.date)}</p>
                    <Link href={`/recent-activities-of-zrf/${data._id}`}>
                      <button className="hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-1 hover:text-white rounded-full uppercase text-xs border border-green-600">
                        {language === "ENG" ? " Learn More" : "আরও জানুন"}{" "}
                        <EastIcon fontSize="small" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <RecentActivityRightSide
          activityFilterData={sortedActivityData}
          language={language}
        />
      </div>
    </Container>
  );
};

export default RecentActivity;
