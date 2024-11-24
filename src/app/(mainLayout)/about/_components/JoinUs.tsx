'use client'
import Loader from '@/components/Loading/Loading';
import { useAboutData } from '@/hooks/useAboutData';
import { useLanguage } from '@/provider/LanguageProvider';
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
        } {
            return null;
        }
    });
};

const JoinUs = () => {
    const { language } = useLanguage()
    const { aboutData , loading, error} = useAboutData()
    const filterJoinUsData = aboutData.filter((item) => item.category === 'Join Us')
    if (loading) {
        return <Loader/>
      }
      if (error) {
        return <h2 className='text-center'>Oops!  Something Went Wrong!</h2>
      }
    return (
        <>
            <section className="py-16 my-16 bg-green-600 text-white text-center">
                {
                    filterJoinUsData.map((data) => (
                        <div key={data._id}>
                            <h2 className="text-3xl font-bold uppercase">{language === 'ENG' ? data.title_english : data.title_bangla}</h2>
                            <p className="mt-4">
                                {language === 'ENG' ? renderContent(data.description_enlgish) : renderContent(data.description_banlga)}
                            </p>
                            <button className="mt-5 px-6 py-2 bg-yellow-600 font-semibold rounded">
                                {language === 'ENG' ? 'Join Us' : 'আমাদের সাথে যোগ দিন'}
                            </button>
                        </div>
                    ))
                }
            </section>
        </>
    );
};

export default JoinUs;