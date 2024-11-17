import CommonBanner from '@/components/share/CommonBanner/CommonBanner';
import Container from '@/components/share/Container';
import React from 'react';
import img from '../../../../src/assets/images/volunteer/volunteer.jpg'
import Image from 'next/image';
import './Volunteer.css';

const page = () => {
    const volunteerData = [
        {
            id: 1,
            name: 'Rahat',
            designation: 'Volunteer',
            profile: img
        },
        {
            id: 1,
            name: 'Rahat',
            designation: 'Volunteer',
            profile: img
        },
        {
            id: 1,
            name: 'Rahat',
            designation: 'Volunteer',
            profile: img
        },
        {
            id: 1,
            name: 'Rahat',
            designation: 'Volunteer',
            profile: img
        },

    ]
    return (
        <>
            <CommonBanner title='Our Volunteer' />
            <Container className='sectionMargin'>
                <div className='text-center'>
                    <i className='text-[#E3C80D]'>Our Volunteer</i>
                    <h1 className='font-bold text-xl md:text-3xl '>Meet Our Volunteer</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 ">
                    {
                        volunteerData.map((data) => (
                            <>
                                <div className="volunterCard">
                                    <div className="volunteerImg">
                                        <Image src={img} alt='volunteer' width={300} />
                                    </div>
                                    <div className="mt-3">
                                        <h4 className='text-xl font-bold'>Rahat Hasan </h4>
                                        <span>Volunteer</span>
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

export default page;