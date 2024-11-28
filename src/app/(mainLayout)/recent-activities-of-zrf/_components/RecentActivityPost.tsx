import { TActivity } from '@/types/type';
import { TextField } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



interface EducationProps {
    activityData: TActivity[];
    language: string,
}


const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

const RecentActivityPost: React.FC<EducationProps> = ({ activityData, language }) => {
    const ActivityFilterData = activityData.filter((activity) => activity.category === 'Activity')

    return (
        <>


            <div className='w-full lg:w-[600px]'>

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

                <div className=" p-5 rounded ">
                    <h3>{language === 'ENG' ? ' Recent Popular Activity' : 'সাম্প্রতিক জনপ্রিয় কার্যক্রম'} </h3>
                    <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5 " />
                    <div className="flex flex-col gap-5 ">
                        {ActivityFilterData?.slice(1, 5).map((data) => (
                            <div key={data._id}>
                                <Link href={`/recent-activities-of-zrf/${data._id}`}>
                                    <div className="flex gap-5  ">
                                        {
                                            data.bng_Images?.slice(0, 1).map((img) => (
                                                <div className='w-56 h-16' key={img}>
                                                    <Image

                                                        src={img}
                                                        width={50}
                                                        height={30}
                                                        alt=""
                                                        className="w-full h-full  object-contain"
                                                    />
                                                </div>
                                            ))
                                        }
                                        <div>
                                            <p className="text-xs">{formatDate(data.date)}</p>
                                            <p className="text-sm">{language === 'ENG' ? data.english_short_description?.slice(0, 100) : data.bangla_short_description?.slice(0, 100)}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </>
    );
};



export default RecentActivityPost;