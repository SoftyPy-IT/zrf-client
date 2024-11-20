import Image from "next/image";
import React from "react";
import Container from "@/components/share/Container";
import { TMessage } from "@/types/type";
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
type MessageProps = {
    messageData: TMessage[],
    language: string,
};

const MessagePresident = ({ language, messageData }: MessageProps) => {
    const filterPresidentData = messageData.filter((item: any) => item.category == "president")

    return (
        <div>
           
            <Container>
                {
                    filterPresidentData?.map((message: TMessage) => (
                        <section key={message._id} className="my-16">

                            <div className="sticky lg:top-[75px] top-20 bg-gradient-to-r from-yellow-600 to-green-600">
                                <div className="flex flex-col md:flex-row items-center justify-center mb-8 py-3">
                                    <div className="relative w-40 h-40 mb-6 md:mb-0">
                                        {
                                            message.bng_Images.slice(0, 1).map((img) => (
                                                <Image
                                                key={img}
                                                    src={img}
                                                    alt="President"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="rounded-full border-2 border-green-600 p-1"
                                                />
                                            ))
                                        }
                                    </div>
                                    <div className="md:ml-8 text-center md:text-left">
                                        <h2 className="text-3xl font-bold text-white">
                                            {language === 'ENG' ? message.name_english : message.name_bangla}
                                        </h2>
                                        <p className="text-lg font-light text-white">
                                            {language === 'ENG' ? message.designation_english : message.designation_bangla}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* President's Message */}
                            <div className="text-gray-700 text-lg leading-relaxed">

                                <p> {language === 'ENG' ? renderContent(message.english_description) : renderContent(message.bangla_description)}</p>
                            </div>
                        </section>
                    ))
                }
            </Container>
        </div>
    );
};

export default MessagePresident;
