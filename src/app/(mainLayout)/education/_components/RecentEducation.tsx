import React from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import { TWhatWeDo } from "@/types/type";
import Link from "next/link";

interface EducationProps {
    whatWedoData: TWhatWeDo[];
    language: string,
}

const renderContent = (content: string) => {
    const parsedContent = ReactHtmlParser(content);

    return parsedContent.map((element, index) => {
        if (element.type === "h1") {
            return (
                <h1 key={index} className="text-2xl font-bold mb-2 ">
                    {element.props.children}
                </h1>
            );
        } else if (element.type === "h2") {
            return (
                <h2 key={index} className="text-xl font-bold mb-2 ">
                    {element.props.children}
                </h2>
            );
        } else if (element.type === "h3") {
            return (
                <h3 key={index} className="text-xl font-bold mb-2 ">
                    {element.props.children}
                </h3>
            );
        } else if (element.type === "p") {
            return (
                <p key={index} className="mb-2">
                    {element.props.children}
                </p>
            );
        }


        else if (
            element.type === "div" &&
            element.props.className === "ql-align-center"
        ) {
            return (
                <div key={index} className="text-center mb-2">
                    {element.props.children}
                </div>
            );
        } else if (
            element.type === "div" &&
            element.props.className === "ql-align-right"
        ) {
            return (
                <div key={index} className="text-right mb-2">
                    {element.props.children}
                </div>
            );
        } else if (
            element.type === "div" &&
            element.props.className === "ql-align-left"
        ) {
            return (
                <div key={index} className="text-left mb-2">
                    {element.props.children}
                </div>
            );
        } else {
            return null;
        }
    });
};



const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

const RecentEducation: React.FC<EducationProps> = ({ whatWedoData, language }) => {
    const educationFilterData = whatWedoData.filter((edu) => edu.category === 'ZRF Education Programm')

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
                <h3>{language === 'ENG' ? 'Popular Post' : 'জনপ্রিয় পোস্ট'}</h3>
                <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
                <div className="flex flex-col gap-3 mt-5">
                    {educationFilterData?.slice(0, 5).map((data) => (
                        <div key={data._id}>
                            <Link href={`/education/${data._id}`}>
                                <div className="flex">
                                    {
                                        data.bng_Images?.slice(0, 1).map((img) => (
                                            <div className="w-56 h-16" key={img}>
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
                                        <p className="text-sm">{data?.bangla_short_description}</p>
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

export default RecentEducation;
