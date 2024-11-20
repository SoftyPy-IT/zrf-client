import { TActivity } from '@/types/type';
import React from 'react';

const RecentSidebar = ({activityData,language}) => {
    return (
        <>
             <div className=" lg:w-[500px]  w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 bg-gray-100 p-5 lg:mt-0 md:mt-5 mt-5">
            {activityData.map((data:TActivity) => (
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
                  <h3 className="text-sm font-bold">{data.english_title}</h3>

                  <div className="flex justify-end">
                    <Link href={`/news/${data._id}`}>
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
                See All <EastIcon />
              </button>
            </Link>
          </div>
        </div> 
        </>
    );
};

export default RecentSidebar;