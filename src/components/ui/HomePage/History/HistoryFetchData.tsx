import React, { useState } from "react";
import "./History.css";
import Image from "next/image";
import { TAbout } from "@/types/type";
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
        } else if (
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


const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

interface AboutProps {
    aboutData: TAbout[];
    language: string;
}

const HistoryFetchData: React.FC<AboutProps> = ({ aboutData, language }) => {
    const historyFilterData = aboutData.filter((item) => item.category === 'History');
    const [visibleCount, setVisibleCount] = useState(4); 
console.log(historyFilterData)
    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 4); 
    };

    return (
        <div className="mt-20">
            <div className="mb-10">
                <h2 className="text-center text-3xl font-bold">
                    {language === 'ENG' ? 'Our Journey' : 'আমাদের যাত্রা'}
                </h2>
                <div className="w-44 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-7 mx-auto"></div>
            </div>
            <section id="conference-timeline">
                <div className="timeline-start">{language === 'ENG' ? 'Start' : 'শুরু'}</div>
                <div className="conference-center-line"></div>
                <div className="conference-timeline-content">
                    {historyFilterData?.slice(0, visibleCount).map((data, index: number) => (
                        <div className="timeline-article" key={index}>
                            {index % 2 === 0 ? (
                                <>
                                    <div className="content-left-container">
                                        <div className="content-left">
                                            <h3 className="text-xl font-bold">
                                                {language === 'ENG' ? data.title_english : data.title_bangla}
                                            </h3>
                                            <p className="mt-3 block ">
                                                {language === 'ENG' ? renderContent(data.description_enlgish) : renderContent(data.description_banlga)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="content-right-container">
                                        <div className="content-right">
                                            <div className="contentRightImgWrap">
                                                {data.images?.slice(0, 1).map((img, idx) => (
                                                    <Image key={idx} src={img} alt="history" width={500} height={300} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="meta-date">
                                        <span className="date">{formatDate(data.date)}</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="content-right-container">
                                        <div className="content-right">
                                            <div className="contentRightImgWrap">
                                                {data.images?.slice(0, 1).map((img, idx) => (
                                                    <Image key={idx} src={img} alt="history" width={500} height={300} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-left-container">
                                        <div className="content-left">
                                            <h3 className="text-xl font-bold">
                                                {language === 'ENG' ? data.title_english : data.title_bangla}
                                            </h3>
                                            <p className="mt-3 block ">
                                                {language === 'ENG' ? renderContent(data.description_enlgish) : renderContent(data.description_banlga)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="meta-date">
                                        <span className="date">{formatDate(data.date)}</span>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className="timeline-end">
                    <button onClick={loadMore}>
                        {language === 'ENG' ? 'Load More' : 'আরো লোড'}
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HistoryFetchData;
