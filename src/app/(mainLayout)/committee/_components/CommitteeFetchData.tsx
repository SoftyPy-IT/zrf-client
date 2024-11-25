import React from "react";
import Image, { StaticImageData } from "next/image";
import Container from "@/components/share/Container";
import CommitteeBanner from "./CommitteeBanner";
import { TCommitte } from "@/types/type";

interface CommitteProps {
    committeeData: TCommitte[];
    language: string;
}

const CommitteeFetchData: React.FC<CommitteProps> = ({ committeeData, language }) => {
    const filterCommitteeData = committeeData.filter((volunteer) => volunteer.category === "Committee");

    const sortedCommitteeData = filterCommitteeData.sort((a, b) => {
        const committeeA = a.committee.toLowerCase();
        const committeeB = b.committee.toLowerCase();
   

        if (committeeA === "board of directors") return -1;
        if (committeeB === "board of directors") return 1;

        if (committeeA < committeeB) return -1;
        if (committeeA > committeeB) return 1;

        if (committeeA === "") return 1;
        if (committeeB === "") return -1;

        // Sort remaining committees alphabetically
        if (committeeA < committeeB) return 1;
        if (committeeA > committeeB) return -1;

        return 0;
    });


    const committees = sortedCommitteeData.reduce((acc, profile) => {
        const committeeName = profile.committee;
        if (!acc[committeeName]) {
            acc[committeeName] = [];
        }
        acc[committeeName].push(profile);
        return acc;
    }, {} as Record<string, TCommitte[]>);

    const ProfileCard = ({
        name,
        imageSrc,
        designation,
    }: {
        name: string;
        imageSrc: string | StaticImageData;
        designation: string;
    }) => {
        return (
            <div className="bg-white shadow-lg rounded overflow-hidden hover:shadow-xl transform transition-transform duration-300 hover:scale-105 lg:w-72 md:w-60 w-full h-72">
                <div className="relative w-48 h-40 mx-auto mt-5">
                    <Image
                        src={imageSrc}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
                <div className="p-3 text-center">
                    <h3 className="text-[16px] font-semibold">{name}</h3>
                    <h3 className="text-[16px] font-semibold">{designation}</h3>
                </div>
            </div>
        );
    };

    return (
        <div>
            <CommitteeBanner language={language} />
            <div className="bg-gray-100">
                <Container className="py-16">
                    {Object.keys(committees).map((committeeName) => (
                        <div key={committeeName} className="mb-16">
                            <h2 className="text-3xl font-semibold text-center uppercase">
                                {committeeName}
                            </h2>
                            <div className="w-44 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-7 mx-auto"></div>
                            <div className="flex flex-wrap justify-center gap-10">
                                {committees[committeeName].map((profile) => (
                                    <ProfileCard
                                        key={profile._id}
                                        name={language === 'ENG' ? profile.english_name : profile.bangla_name}
                                        imageSrc={profile.images[0]}
                                        designation={language === 'ENG' ? profile.designation_english : profile.designation_bangla}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </Container>
            </div>
        </div>
    );
};

export default CommitteeFetchData;
