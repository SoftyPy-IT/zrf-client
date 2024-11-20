import { TActivity } from '@/types/type';
import React from 'react';



interface EducationProps {
    activityData: TActivity[];
    language: string,
}


const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

const RecentActivityPost: React.FC<EducationProps> = ({ activityData, language }) => {
    const ActivityFilterData = activityData.filter((activity) => activity.category === 'Activity')

    return (
        <>
            <div className="border p-5 rounded lg:w-[600px]">
                <h3 className="text-xl font-bold">{language === 'ENG' ? 'Recent Post' : 'সাম্প্রতিক পোস্ট'}</h3>
                <hr className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-green-600 border-0 rounded-full mb-5" />
                <div className="flex flex-col gap-8 mt-5">
                    {ActivityFilterData?.slice(0, 5).map((data) => (
                        <div key={data._id}>
                            <div>
                                <p className="hover:underline cursor-pointer text-justify font-semibold">
                                    {language === 'ENG' ? data.english_short_description.slice(0, 150) : data.bangla_short_description.slice(0, 150)}...
                                </p>
                                <p className="text-sm mt-2">{formatDate(data.date)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default RecentActivityPost;