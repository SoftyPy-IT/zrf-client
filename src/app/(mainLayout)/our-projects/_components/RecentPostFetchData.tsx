/* eslint-disable @next/next/no-img-element */
import { TProject } from '@/types/type';
import { Paper, TextField } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactHtmlParser from "react-html-parser";





const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

interface welcomeProps {
    projectData: TProject[];
    language: string,
}
const RecentPostFetchData: React.FC<welcomeProps> = ({ projectData, language }) => {

    return (
        <div>


            <div className='w-full lg:w-[450px]'>

                <Paper className='p-3 '>

                    <div className=" rounded ">
                        <h3>{language === 'ENG' ? 'Recent Projects' : 'সাম্প্রতিক প্রকল্প'}</h3>
                        <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
                        <div className="flex flex-col gap-3 mt-5">
                            {projectData?.slice(1, 5).map((data) => (
                                <div key={data._id} className="bg-white p-3 rounded-lg  hover:shadow-xl transition-shadow duration-300">
                                    <Link href={`/our-projects/${data._id}`}>
                                        <div className="flex gap-5">
                                            {
                                                data.bng_Images?.slice(0, 1).map((img) => (
                                                    <div className='w-56 h-16' key={img}>
                                                        <Image
                                                            src={img}
                                                            width={50}
                                                            height={30}
                                                            alt=""
                                                            className="w-full h-full object-contain rounded-lg"
                                                        />
                                                    </div>
                                                ))
                                            }
                                            <div>
                                                <p className="text-xs text-gray-500">{formatDate(data.date)}</p>
                                                <p className="text-sm font-medium text-gray-700">{language === 'ENG' ? data.english_short_description?.slice(0, 100) : data.bangla_short_description?.slice(0, 100)}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                    </div>

                </Paper>
            </div>
        </div>
    );
};

export default RecentPostFetchData;