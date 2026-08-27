import React from "react";
import Image, { StaticImageData } from "next/image";
import Container from "@/components/share/Container";
import CommitteeBanner from "./CommitteeBanner";
import { TCommitte } from "@/types/type";

interface CommitteProps {
  committeeData: TCommitte[];
  language: string;
}

const CommitteeFetchData: React.FC<CommitteProps> = ({
  committeeData,
  language,
}) => {
  const sortedCommitteeData = (committeeData || [])
    .filter((profile) => profile.category !== "Volunteer" || profile.committee)
    .sort((a, b) => {
      const dateA = new Date(a.createdAt || 0).getTime();
      const dateB = new Date(b.createdAt || 0).getTime();
      return dateB - dateA;
    })
    .sort((a, b) => {
      const committeeA = (a.committee || "").toLowerCase();
      const committeeB = (b.committee || "").toLowerCase();

      if (committeeA === "board of directors") return -1;
      if (committeeB === "board of directors") return 1;

      if (committeeA === "advisory council" && committeeB !== "board of directors") return -1;
      if (committeeB === "advisory council" && committeeA !== "board of directors") return 1;

      if (committeeA < committeeB) return -1;
      if (committeeA > committeeB) return 1;

      return 0;
    });

  const committees = sortedCommitteeData.reduce((acc, profile) => {
    const committeeName = profile.committee || (language === "ENG" ? "Committee" : "কমিটি");
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
    imageSrc?: string | StaticImageData;
    designation: string;
  }) => {
    return (
      <div className="bg-white shadow-lg rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-110 lg:w-72 md:w-60 w-full h-72">
        <div className="relative w-48 h-40 mx-auto mt-5">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name || "Committee Member"}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>
        <div className="p-3 text-center">
          <h3 className="text-[16px] font-semibold">{name || ""}</h3>
          <h3 className="text-[16px] font-semibold text-gray-600">{designation || ""}</h3>
        </div>
      </div>
    );
  };

  const getCommitteeName = (committeeName: string) => {
    if (committeeName.toLowerCase() === "board of directors") {
      return language === "ENG" ? "Board of Directors" : "পরিচালনা পর্ষদ";
    } else if (committeeName.toLowerCase() === "advisory council") {
      return language === "ENG" ? "Advisory Council" : "পরামর্শক পরিষদ";
    }
    return committeeName;
  };

  return (
    <div>
      <CommitteeBanner language={language} />
      <div className="bg-gray-100">
        <Container className="py-16">
          {Object.keys(committees).length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              {language === "ENG"
                ? "No committee members found."
                : "কোনো কমিটির সদস্য পাওয়া যায়নি।"}
            </div>
          ) : (
            Object.keys(committees).map((committeeName) => (
              <div key={committeeName} className="mb-16">
                <h2 className="text-3xl font-semibold text-center uppercase">
                  {getCommitteeName(committeeName)}
                </h2>
                <div className="w-44 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-7 mx-auto"></div>
                <div className="flex flex-wrap justify-center gap-10">
                  {committees[committeeName].map((profile) => (
                    <ProfileCard
                      key={profile._id}
                      name={
                        language === "ENG"
                          ? (profile.english_name || profile.bangla_name || "")
                          : (profile.bangla_name || profile.english_name || "")
                      }
                      imageSrc={profile.images?.[0]}
                      designation={
                        language === "ENG"
                          ? (profile.designation_english || profile.designation_bangla || "")
                          : (profile.designation_bangla || profile.designation_english || "")
                      }
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </Container>
      </div>
    </div>
  );
};

export default CommitteeFetchData;
