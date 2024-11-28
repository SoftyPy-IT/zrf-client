import React from "react";
import Container from "@/components/share/Container";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import { TActivity } from "@/types/type";


interface welcomeProps {
  activityData: TActivity[];
  language: string,
}


const RecentActivity: React.FC<welcomeProps> = ({ activityData, language }) => {
  const activityFilterData = activityData?.filter((welcome: any) => welcome.category === 'Activity')
  const newsFilterData = activityData?.filter((welcome: any) => welcome.category === 'News')

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  return (
    <Container className="my-20">
      <h1 className="lg:text-3xl text-2xl font-bold uppercase">{
        language === 'ENG' ? "Recent Activities of ZRF" : "জেডআরএফ এর সাম্প্রতিক কার্যক্রম"
      }</h1>
      <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5"></div>
      <div className="lg:flex gap-10">

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:h-[500px]">
            {activityFilterData?.slice(0, 2).map((data) => (
              <div
                key={data._id}
                className="relative shadow-xl bg-white overflow-hidden group hover:text-white"
              >
                <div className="relative">
                  {data.bng_Images?.slice(0, 1).map((img) => (
                    <>
                      <Image
                        width={500}
                        height={500}
                        src={img}
                        alt='activity'
                        className="h-[250px] w-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                      />
                    </>
                  ))}
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-600 via-yellow-600 to-transparent transition-transform transform translate-y-full group-hover:translate-y-0 duration-1000 ease-in-out h-[340px] md:h-[300px] lg:h-[500px]"></div>

                <div className="p-5 space-y-3 relative z-10">
                  <h3 className="text-xl font-bold">
                    {language === 'ENG' ? data.english_title?.slice(0, 60) : data.bangla_title?.slice(0, 60)}
                  </h3>
                  <p className="text-justify">
                    {language === 'ENG' ? data.english_short_description?.slice(0, 150) : data.bangla_short_description?.slice(0, 150)}...
                  </p>
                  <div className="flex justify-between">
                    <p>{formatDate(data.date)}</p>
                    <Link href={`/recent-activities-of-zrf/${data._id}`}>
                      <button className="hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-1 hover:text-white rounded-full uppercase text-xs border border-green-600">
                        {
                          language === 'ENG' ? " Learn More" : "আরও জানুন"
                        } <EastIcon fontSize="small" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" lg:w-[500px]  w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 bg-gray-100 p-5 lg:mt-0 md:mt-5 mt-5">
            {activityFilterData?.slice(1,4).map((data) => (
              <div
                key={data._id}
                className="flex items-center gap-5 bg-white lg:h-[100px] p-3 rounded shadow-md transition-transform duration-500 transform hover:scale-105"
              >

                {data.bng_Images?.slice(0, 1).map((img) => (
                  <>
                    <Image
                      src={img}
                      alt='news'
                      className="w-20 object-cover rounded transition-opacity duration-500"
                      width={50}
                      height={50}
                    />
                  </>
                ))}


                <div>
                  <h3 className="text-sm font-bold">{language == 'ENG' ? data.english_title?.slice(0, 50) : data.bangla_title?.slice(0, 50)}...</h3>

                  <div className="flex justify-end">
                    <Link href={`/recent-activities-of-zrf//${data._id}`}>
                      <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-2 text-white rounded-full uppercase text-xs">
                        <EastIcon />
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
                {language === 'ENG' ? ' See All' : 'সব দেখুন'} <EastIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecentActivity;
