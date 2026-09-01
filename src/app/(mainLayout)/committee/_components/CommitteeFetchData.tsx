import React from "react";
import Image, { StaticImageData } from "next/image";
import Container from "@/components/share/Container";
import CommitteeBanner from "./CommitteeBanner";
import { TCommitte } from "@/types/type";

interface CommitteProps {
  committeeData: TCommitte[];
  language: string;
}

const SECTIONS: {
  key: string;
  label: { eng: string; bn: string };
  category: string;
}[] = [
  {
    key: "board-of-directors",
    label: { eng: "Board of Directors", bn: "পরিচালনা পর্ষদ" },
    category: "president",
  },
  {
    key: "committee",
    label: { eng: "Committee", bn: "কমিটি" },
    category: "exicutive",
  },
  {
    key: "advisory-council",
    label: { eng: "Advisory Council", bn: "পরামর্শক পরিষদ" },
    category: "Committee",
  },
];

const enhanceImageUrl = (url?: string): string | undefined => {
  if (!url) return url;
  const marker = "/image/upload/";
  const idx = url.indexOf(marker);
  if (idx === -1) return url;
  const rest = url.slice(idx + marker.length);
  if (!/^v\d+/.test(rest)) return url;
  return `${url.slice(0, idx + marker.length)}f_auto,q_auto,w_560,h_448,c_fill,g_auto/${rest}`;
};

const CommitteeFetchData: React.FC<CommitteProps> = ({
  committeeData,
  language,
}) => {
  const filteredData = (committeeData || []).filter(
    (profile) =>
      profile.category && profile.category.toLowerCase() !== "volunteer"
  );

  const byCategory = filteredData.reduce<Record<string, TCommitte[]>>(
    (acc, profile) => {
      const cat = profile.category || "";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(profile);
      return acc;
    },
    {}
  );

  Object.keys(byCategory).forEach((cat) => {
    byCategory[cat].sort((a, b) => {
      const snA = a.serial_no != null ? a.serial_no : 99999;
      const snB = b.serial_no != null ? b.serial_no : 99999;
      return snA - snB;
    });
  });

  const renderedSections = SECTIONS.filter(
    (section) => byCategory[section.category]?.length
  );
  const extraCategories = Object.keys(byCategory).filter(
    (cat) => !SECTIONS.some((section) => section.category === cat)
  );

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
      <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-200/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-700/15 w-full sm:w-60 lg:w-64">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 to-green-600 z-10" />
        <div className="relative aspect-[5/4] overflow-hidden bg-gray-100">
          {imageSrc ? (
            <Image
              src={enhanceImageUrl(imageSrc as string) || imageSrc}
              alt={name || "Committee Member"}
              layout="fill"
              objectFit="cover"
              objectPosition="center 20%"
              quality={85}
              sizes="(max-width: 640px) 100vw, 320px"
              className="transition-all duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-yellow-50">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-600 to-green-600 flex items-center justify-center">
                <span className="text-2xl font-bold text-white uppercase">
                  {name?.charAt(0) || "Z"}
                </span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-5 text-center">
          <div className="w-10 h-[3px] bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mx-auto mb-3" />
          <h3 className="text-[15px] font-bold text-gray-800 leading-snug mb-1">
            {name || ""}
          </h3>
          <p className="text-[13px] text-gray-500 font-medium">
            {designation || ""}
          </p>
        </div>
      </div>
    );
  };

  const renderMembers = (members: TCommitte[]) => (
    <div className="flex flex-wrap justify-center gap-8">
      {members.map((profile) => (
        <ProfileCard
          key={profile._id}
          name={
            language === "ENG"
              ? profile.english_name || profile.bangla_name || ""
              : profile.bangla_name || profile.english_name || ""
          }
          imageSrc={profile.images?.[0]}
          designation={
            language === "ENG"
              ? profile.designation_english ||
                profile.designation_bangla ||
                ""
              : profile.designation_bangla ||
                profile.designation_english ||
                ""
          }
        />
      ))}
    </div>
  );

  const renderSection = (title: string, members: TCommitte[]) => (
    <div className="mb-20" key={title}>
      <div className="mb-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-10 h-[3px] bg-gradient-to-r from-green-600 to-yellow-600 rounded-full"></div>
          <div className="w-2 h-2 rotate-45 bg-gradient-to-r from-yellow-600 to-green-600"></div>
          <div className="w-10 h-[3px] bg-gradient-to-r from-yellow-600 to-green-600 rounded-full"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 uppercase tracking-wide">
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-4 mx-auto"></div>
      </div>
      {renderMembers(members)}
    </div>
  );

  return (
    <div>
      <CommitteeBanner language={language} />
      <div className="bg-gray-100">
        <Container className="py-20">
          {filteredData.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              {language === "ENG"
                ? "No committee members found."
                : "কোনো কমিটির সদস্য পাওয়া যায়নি।"}
            </div>
          ) : (
            <>
              {renderedSections.map((section) =>
                renderSection(
                  language === "ENG" ? section.label.eng : section.label.bn,
                  byCategory[section.category]
                )
              )}
              {extraCategories.map((cat) =>
                renderSection(cat, byCategory[cat])
              )}
            </>
          )}
        </Container>
      </div>
    </div>
  );
};

export default CommitteeFetchData;