"use client";

import helth from "../../../../../src/assets/icon/herlth.png";
import education from "../../../../../src/assets/icon/teaching.png";
import democration from "../../../../../src/assets/icon/democracy.png";
import forest from "../../../../../src/assets/icon/forest.png";
import scholarship from "../../../../../src/assets/icon/scholarship.png";
import team from "../../../../../src/assets/icon/team.png";
import volunteer from "../../../../../src/assets/icon/volunteering.png";
import water from "../../../../../src/assets/icon/water.png";
import water2 from "../../../../../src/assets/icon/water (2).png";
import vegetable from "../../../../../src/assets/icon/vegetables.png";
import surgery from "../../../../../src/assets/icon/surgery.png";
import publicLibrary from "../../../../../src/assets/icon/publicLibrary.png";
import asthma from "../../../../../src/assets/icon/asthma.png";
import democracy from "../../../../../src/assets/icon/democracy.png";
import conservation from "../../../../../src/assets/icon/conservation.png";
import trun from "../../../../../src/assets/icon/conservation.png";
import seed from "../../../../../src/assets/icon/seed.png";
import medical from "../../../../../src/assets/icon/medical.png";
import { useProgrammData } from "@/hooks/useProgrammData";
import { useLanguage } from "@/provider/LanguageProvider";
import { TProgramm } from "@/types/type";
import { useState } from "react";
import Loader from "@/app/loading";
import { usePathname } from "next/navigation";
import Container from "@/components/share/Container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";

const ProgrammSection = () => {
  const { programmData, loading, error } = useProgrammData();
  const { language } = useLanguage();

  const patname = usePathname();

  const sortedProgrammData = programmData?.sort(
    (a: TProgramm, b: TProgramm) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    }
  );

  const [visibleCount, setVisibleCount] = useState(8);
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }

  const getIcon = (index: number) => {
    switch (index) {
      case 1:
        return helth;
      case 2:
        return conservation;
      case 3:
        return volunteer;
      case 4:
        return education;
      case 5:
        return forest;
      case 6:
        return medical;
      case 7:
        return vegetable;
      case 8:
        return publicLibrary;
      case 9:
        return democracy;
      case 10:
        return scholarship;
      case 11:
        return publicLibrary;
      case 12:
        return seed;
      case 13:
        return forest;
      case 14:
        return surgery;
      case 15:
        return asthma;
      case 12:
        return seed;
      case 13:
        return forest;
      case 14:
        return trun;
      case 15:
        return forest;
      case 16:
        return forest;
      default:
        return helth;
    }
  };

  return (
    <div>
      <Container className="sectionMargin">
        <h2 className="text-center text-3xl font-bold">
          {language === "ENG" ? "Remarkable Works" : "উল্লেখযোগ্য কাজ"}
        </h2>
        <div className="w-44 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-7 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
          {sortedProgrammData
            ?.slice(0, visibleCount)
            ?.map((program: TProgramm, index: number) => (
              <div
                key={program._id}
                className="bg-white p-5 rounded shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  <div className="w-12 h-12  md:h-[68px] md:w-[68px]  rounded-full p-2 flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
                    <Image
                      className="w-auto h-auto max-w-full max-h-full object-contain"
                      src={getIcon(index + 1)}
                      alt={`icon-${index + 1}`}
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {language === "ENG"
                    ? program.english_title
                    : program.bangla_title}
                </h3>
                <p className="text-gray-600">
                  {language === "ENG"
                    ? program.english_short_description
                    : program.bangla_short_description}
                </p>
              </div>
            ))}
        </div>

        {visibleCount < sortedProgrammData?.length && (
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center mt-8 ">
              {patname === "/about" ? (
                <Link href="/program">
                  <Button className="bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm  md:px-3  md:py-1 rounded text-white">
                    {language === "ENG" ? "See More" : "আরো দেখুন"}
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={loadMore}
                  className="bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm  md:px-3  md:py-1 rounded text-white"
                >
                  {language === "ENG" ? "Load More" : "আরো লোড"}
                </Button>
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProgrammSection;
