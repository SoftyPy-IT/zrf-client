import Container from "@/components/share/Container";
import "./Impact.css";
import Image from "next/image";
import { Button } from "@mui/material";
import React from "react";
import { TOverview } from "@/types/type";
import ReactHtmlParser from "react-html-parser";

interface overviewProps {
    overviewData: TOverview[];
    language: string,
}

const renderContent = (content: string) => {
    const parsedContent = ReactHtmlParser(content);

    return parsedContent.map((element, index) => {
        if (element.type === "h1") {
            return (
                <h1 key={index} className="text-2xl font-bold mb-2">
                    {element.props.children}
                </h1>
            );
        } else if (element.type === "h2") {
            return (
                <h2 key={index} className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4">
                    {element.props.children}
                </h2>
            );
        } else if (element.type === "p") {
            return (
                <p key={index} className="mb-2">
                    {element.props.children}
                </p>
            );
        } else if (element.type === "ol") {
            return (
                <ol key={index} className="list-decimal list-inside mb-5">
                    {element.props.children}
                </ol>
            );
        } else if (element.type === "ul") {
            return (
                <ul key={index} className="list-disc list-inside mb-5">
                    {element.props.children}
                </ul>
            );
        } else if (element.type === "li") {
            return (
                <li key={index} className="mb-5">
                    {element.props.children}
                </li>
            );
        } else {
            return null;
        }
    });
};




const FetchImactData: React.FC<overviewProps> = ({ overviewData, language }) => {


    return (
        <div className="impact-bg py-16">
            <Container>
                {
                    overviewData?.map((data) => (
                        <div key={data._id} className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-16 items-center lg:mt-10 mt-20">
                            <div className="space-y-5 text-white">
                                {
                                    language == 'ENG' ? renderContent(data.description_english) : renderContent(data.description_bangla)
                                }


                                <Button sx={{ background: "#FEC909" }}>{language == 'ENG' ? 'Donation ' : 'সহযোগিতা'}</Button>
                            </div>
                            {
                                data.images?.slice(0, 1).map((img) => (
                                    <Image key={img} src={img} alt="Programm" width={1000} height={300} />
                                ))
                            }
                        </div>
                    ))
                }
            </Container>
        </div>
    );

};

export default FetchImactData;
