import Container from "@/components/share/Container";
import { TProgramm } from "@/types/type";
import truncateText from "@/utils/truncate";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import asthma from "../../../../../src/assets/icon/asthma.png";
import conservation from "../../../../../src/assets/icon/conservation.png";
import democracy from "../../../../../src/assets/icon/democracy.png";
import forest from "../../../../../src/assets/icon/forest.png";
import helth from "../../../../../src/assets/icon/herlth.png";
import medical from "../../../../../src/assets/icon/medical.png";
import publicLibrary from "../../../../../src/assets/icon/publicLibrary.png";
import scholarship from "../../../../../src/assets/icon/scholarship.png";
import seed from "../../../../../src/assets/icon/seed.png";
import surgery from "../../../../../src/assets/icon/surgery.png";
import education from "../../../../../src/assets/icon/teaching.png";
import vegetable from "../../../../../src/assets/icon/vegetables.png";
import volunteer from "../../../../../src/assets/icon/volunteering.png";
import programm from "../../../../assets/images/program/bigchild.png";
import programm2 from "../../../../assets/images/program/smallChild.png";
import "./Programm.css";
import BNPButton from "@/components/Button";

interface programmProps {
  programmData: TProgramm[];
  language: string;
}

const ProgrammData: React.FC<programmProps> = ({ programmData, language }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sortedProgrammData = programmData?.sort(
    (a: TProgramm, b: TProgramm) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    },
  );

  const getIcon = (index: number) => {
    switch (index % 16) {
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
      case 0:
        return helth;
      default:
        return helth;
    }
  };

  const programs = sortedProgrammData?.slice(0, 4) || [];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-10 md:pt-14">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/5 to-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-500/5 to-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/3 to-yellow-500/3 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="mb-8 md:mb-12 md:hidden block order-2 md:order-1">
          <h2 className="text-2xl text-center md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3">
            {language === "ENG" ? (
              <>
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-yellow-500">
                  Programs
                </span>
              </>
            ) : (
              <>
                আমাদের{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-yellow-500">
                  প্রোগ্রাম
                </span>
              </>
            )}
          </h2>
          <div className="w-20 mx-auto h-1 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full" />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-10 xl:gap-y-0 justify-items-center">

          <div
            className={` relative transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}
          >
            <div className="relative group">
              <div className="ImgWrap">
                <div className="programmBigImg">
                  <Image src={programm} width={1000} height={500} alt="programms" />
                </div>
                <div className="programmSmallImg hidden xl:block">
                  <Image
                    src={programm2}
                    width={300}
                    height={300}
                    alt="programm"
                  />
                </div>
              </div>
            </div>
          </div>


          <div
            className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
          >
            {/* Section Header */}
            <div className="mb-8 md:mb-12 hidden md:block">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3">
                {language === "ENG" ? (
                  <>
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-yellow-500">
                      Programs
                    </span>
                  </>
                ) : (
                  <>
                    আমাদের{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-yellow-500">
                      প্রোগ্রাম
                    </span>
                  </>
                )}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full" />
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {programs.map((program: TProgramm, index: number) => (
                <div
                  key={program._id}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative p-4 md:p-6 text-center">
                    {/* Icon Container */}
                    <div className="relative mb-4 flex justify-center">
                      <div className="relative">
                        {/* Icon Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                        <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-emerald-100 to-yellow-100 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                          <Image
                            className="w-7 h-7 md:w-10 md:h-10 object-contain"
                            src={getIcon(index + 1)}
                            alt={`icon-${index + 1}`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm md:text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {language === "ENG"
                        ? truncateText(program.english_title, 40)
                        : truncateText(program.bangla_title, 40)}
                    </h3>

                    {/* Description - Appears on Hover */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${hoveredCard === index ? "max-h-32 opacity-100 mt-3" : "max-h-0 opacity-0"
                        }`}
                    >
                      <p className="text-xs md:text-sm text-slate-600 line-clamp-2">
                        {language === "ENG"
                          ? truncateText(program.english_short_description, 60)
                          : truncateText(program.bangla_short_description, 60)}
                      </p>
                    </div>

                    {/* Learn More Link - Appears on Hover */}
                    <Link href={`/program/${program._id}`}>
                      <div
                        className={`overflow-hidden transition-all duration-500 ${hoveredCard === index ? "max-h-10 opacity-100 mt-3" : "max-h-0 opacity-0"
                          }`}
                      >
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 group-hover:gap-2 transition-all">
                          {language === "ENG" ? "Learn More" : "বিস্তারিত"}
                          <EastIcon className="text-xs" />
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Bottom Border Animation */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-5 md:mt-8">
              <BNPButton
                href="/program"
                language={language}
                variant="primary"
                size="sm"
                showIcon={true}
                iconPosition="right"
                customIcon={<EastIcon className="text-sm" />}
              >
                {language === "ENG" ? "View All Programs" : "সব প্রোগ্রাম দেখুন"}
              </BNPButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProgrammData;