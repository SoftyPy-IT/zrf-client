"use client";

import {
  FaHospitalAlt,
  FaChalkboardTeacher,
  FaGavel,
  FaTree,
  FaGraduationCap,
  FaWater,
  FaCarrot,
  FaSyringe,
  FaBook,
  FaRecycle,
  FaSeedling,
  FaStethoscope,
} from "react-icons/fa";

import { useProgrammData } from "@/hooks/useProgrammData";
import { useLanguage } from "@/provider/LanguageProvider";
import { TProgramm } from "@/types/type";
import { useState } from "react";
import Loader from "@/app/loading";
import { usePathname } from "next/navigation";
import Container from "@/components/share/Container";
import Link from "next/link";
import { Button } from "@mui/material";
import { FaHandHoldingMedical, FaHandshakeSimple } from "react-icons/fa6";
import { GiAppleSeeds } from "react-icons/gi";
import { MdVolunteerActivism } from "react-icons/md";

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
        return <FaHospitalAlt size={40} />;
      case 2:
        return <FaRecycle size={40} />;
      case 3:
        return <MdVolunteerActivism size={40} />;
      case 4:
        return <FaChalkboardTeacher size={40} />;
      case 5:
        return <FaTree size={40} />;
      case 6:
        return <FaStethoscope size={40} />;
      case 7:
        return <FaCarrot size={40} />;
      case 8:
        return <FaBook size={40} />;
      case 9:
        return <FaGavel size={40} />;
      case 10:
        return <FaGraduationCap size={40} />;
      case 11:
        return <GiAppleSeeds size={40} />;
      case 12:
        return <FaSeedling size={40} />;
      case 13:
        return <FaHandHoldingMedical size={40} />;
      case 14:
        return <FaSyringe size={40} />;
      case 15:
        return <FaWater size={40} />;
      case 16:
        return <FaHandshakeSimple size={40} />;
      default:
        return <FaHospitalAlt size={40} />;
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
                  <div className="w-12 h-12 md:h-[68px] md:w-[68px] rounded-full p-2 flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 text-white bg-gradient-to-r from-yellow-600 to-green-600">
                    {getIcon(index + 1)}
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
            <div className="flex items-center justify-center mt-8">
              {patname === "/about" ? (
                <Link href="/program">
                  <Button className="bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm md:px-3 md:py-1 rounded text-white">
                    {language === "ENG" ? "See More" : "আরো দেখুন"}
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={loadMore}
                  className="bg-gradient-to-r from-yellow-600 to-green-600 p-1 text-[9px] md:text-sm md:px-3 md:py-1 rounded text-white"
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
