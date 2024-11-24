'use client'
import Loader from '@/components/Loading/Loading';
import { useAboutData } from '@/hooks/useAboutData';
import { useLanguage } from '@/provider/LanguageProvider';
import React from 'react';

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
                                {language === 'ENG' ? data.description_enlgish : data.description_banlga}
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