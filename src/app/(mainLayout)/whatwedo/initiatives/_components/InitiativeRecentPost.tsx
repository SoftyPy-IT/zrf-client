import React from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import { TWhatWeDo } from "@/types/type";
import Link from "next/link";

interface EducationProps {
    whatWedoData: TWhatWeDo[];
    language: string,
}




const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

const InitiativeRecentPost: React.FC<EducationProps> = ({ whatWedoData, language }) => {
    const RehabilitatinFilterData = whatWedoData.filter((edu) => edu.category === 'Covid')

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

            <div className="bg-gray-100 p-5 rounded mt-10">
                <h3>{language === 'ENG' ? 'Recent Post' : 'সাম্প্রতিক পোস্ট'}</h3>
                <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
                <div className="flex flex-col gap-3 mt-5">
                    {RehabilitatinFilterData?.slice(1, 5).map((data) => (
                        <div key={data._id}>
                            <Link href={`/whatwedo/initiatives/${data._id}`}>
                                <div className="flex md:flex-row flex-col md:gap-5 gap-y-8 ">
                                    {
                                        data.bng_Images?.slice(0, 1).map((img) => (
                                            <div className="md:w-56 md:h-16" key={img}>
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
                                        <p className="text-sm">{language === 'ENG' ? data.english_short_description?.slice(0, 80) : data.bangla_short_description?.slice(0, 80)}...</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    );
};

export default InitiativeRecentPost;
