import CommonBanner from '@/components/share/CommonBanner/CommonBanner';
import Container from '@/components/share/Container';
import React from 'react';
import Image from 'next/image';
import '../Volunteer.css';
import { TCommitte } from '@/types/type';


interface welcomeProps {
    committeeData: TCommitte[];
    language: string,
}
const Volunteer: React.FC<welcomeProps> = ({ committeeData, language }) => {

    const filterVolunteerData = committeeData.filter((volunteer) => volunteer.category == 'Volunteer')
    return (
        <>
            <CommonBanner title={language === 'ENG' ? ' Our Volunteer' : 'আমাদের স্বেচ্ছাসেবক'} />
            <Container className='sectionMargin'>
               

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 ">
                    {
                        filterVolunteerData.map((data) => (
                            <>
                                <div className="volunterCard">
                                    <div className="volunteerImg">

                                        {data.images?.slice(0, 1).map((img) => (
                                            <>
                                                <Image key={img} height={300} src={img} alt='volunteer' width={300} />
                                            </>
                                        ))}


                                    </div>
                                    <div className="mt-3">
                                        <h4 className='text-xl font-bold'>{language === 'ENG' ? data.english_name : data.bangla_name} </h4>
                                        <span>{language === 'ENG' ? data.designation_english : data.designation_bangla}</span>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </Container>
        </>
    );
};

export default Volunteer;