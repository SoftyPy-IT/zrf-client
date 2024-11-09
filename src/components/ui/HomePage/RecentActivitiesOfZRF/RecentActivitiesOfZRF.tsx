import React from "react";
import Container from "@/components/share/Container";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import { useGetAllRecentActivitiesQuery } from "@/redux/api/allApi";

const RecentActivitiesOfZRF = () => {
  const { data, isError, isLoading } = useGetAllRecentActivitiesQuery({});

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong !</p>;
  }

  console.log(data);

  return (
    <Container className="my-20">
      <h1 className="text-3xl font-bold uppercase">Recent Activities of ZRF</h1>
      <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5"></div>
      <div className="lg:flex gap-10">
        {/* Main News Content */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:h-[500px]">
            {data?.activities.slice(0, 2).map((activity: any) => (
              <div
                key={data.id}
                className="relative shadow-xl bg-white overflow-hidden group"
              >
                <div className="relative">
                  <Image
                    src={activity.eng_iamges[0]}
                    alt={activity.title}
                    className="h-[250px] w-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                    width={500}
                    height={500}
                  />
                </div>
                {/* Gradient overlay with opacity */}
                {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-600 via-yellow-600 to-transparent transition-transform transform translate-y-full group-hover:translate-y-0 duration-1000 ease-in-out h-[340px] md:h-[300px] lg:h-[500px]"></div> */}

                <div className="p-5 space-y-3 relative z-10">
                  <h3 className="text-xl font-bold">
                    {activity.english_title.slice(0, 60)}...
                  </h3>
                  <p className="text-justify">
                    {activity.english_description.slice(0, 150)}...
                  </p>
                  <div className="flex justify-between">
                    <p>{activity.date}</p>
                    <Link href={`/recent-activities-of-zrf/${data.id}`}>
                      <button className="hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-1 rounded-full hover:text-white uppercase text-xs border border-green-600">
                        আরো পড়ুন <EastIcon fontSize="small" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecentActivitiesOfZRF;
