import { TProject } from '@/types/type';
import React from 'react';
import ReactHtmlParser from "react-html-parser";



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

interface welcomeProps {
    projectData: TProject[];
    language: string,
}
const RecentPostFetchData: React.FC<welcomeProps> = ({ projectData, language }) => {

    return (
        <div>

            <div className="border p-5 rounded lg:w-[600px]">
                <h3 className="text-xl font-bold"> {language === 'ENG' ? 'Recent Post' : 'সাম্প্রতিক পোস্ট'} </h3>
                <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
                <div className="flex flex-col gap-8 mt-5">
                    {projectData?.slice(0, 3)?.map((data) => (
                        <div key={data._id}>
                            <div>
                                <p className="hover:underline cursor-pointer text-justify font-semibold">
                                    {language === 'ENG' ? renderContent(data.english_description.slice(0, 100)) : renderContent(data.bangla_description.slice(0, 100))}
                                </p>
                                <p className="text-sm font-medium mt-2">{formatDate(data.date)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentPostFetchData;