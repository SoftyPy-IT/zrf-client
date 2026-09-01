import Container from "@/components/share/Container";
import { TProgramm } from "@/types/type";
import truncateText from "@/utils/truncate";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sortedProgrammData = [...(programmData || [])].sort(
    (a: TProgramm, b: TProgramm) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    }
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

  const headingEyebrow = () => (
    <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
      <div className="w-10 h-[3px] bg-gradient-to-r from-emerald-600 to-yellow-500 rounded-full"></div>
      <div className="w-2 h-2 rotate-45 bg-gradient-to-r from-yellow-500 to-emerald-600"></div>
      <span className="text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
        {language === "ENG" ? "What We Do" : "আমরা যা করি"}
      </span>
      <div className="w-10 h-[3px] bg-gradient-to-r from-yellow-500 to-emerald-600 rounded-full"></div>
    </div>
  );

  const headingText = () => (
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 uppercase tracking-wide text-center md:text-left">
      {language === "ENG" ? "Our Programs" : "আমাদের প্রোগ্রাম"}
    </h2>
  );

  const headingSubtitle = () => (
    <p className="text-slate-500 mt-3 text-sm md:text-base text-center md:text-left md:max-w-md mx-auto md:mx-0">
      {language === "ENG"
        ? "Serving communities through health, education, food security and inclusive initiatives across the country."
        : "স্বাস্থ্য, শিক্ষা, খাদ্য নিরাপত্তা এবং সামগ্রিক উদ্যোগের মাধ্যমে সারাদেশের মানুষের সেবা করে আমরা।"}
    </p>
  );

  const headingDivider = () => (
    <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-emerald-600 rounded-full mt-5 mx-auto md:mx-0"></div>
  );

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-14 md:pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/5 to-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-500/5 to-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/3 to-yellow-500/3 rounded-full blur-3xl" />
      </div>

      <Container>
        {/* Mobile Section Header */}
        <div className="mb-10 md:hidden">
          {headingEyebrow()}
          {headingText()}
          {headingSubtitle()}
          {headingDivider()}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-12 xl:gap-y-0 justify-items-center">
          {/* Image Collage */}
          <div
            className={`relative transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="relative group">
              <div className="ImgWrap">
                <div className="programmBigImg">
                  <Image
                    src={programm}
                    width={1000}
                    height={500}
                    alt="programms"
                  />
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

              {/* Floating Brand Badge */}
              <div className="absolute top-4 left-4 md:top-5 md:left-5 z-10 hidden md:flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-white/40 shadow-lg rounded-full pl-1.5 pr-4 py-1.5">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-yellow-500 flex items-center justify-center">
                  <Image
                    src={getIcon(3)}
                    width={16}
                    height={16}
                    alt=""
                    className="object-contain"
                  />
                </span>
                <span className="text-xs font-bold text-slate-800 whitespace-nowrap">
                  {language === "ENG" ? "Programs & Initiatives" : "প্রোগ্রাম ও উদ্যোগ"}
                </span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            {/* Desktop Section Header */}
            <div className="mb-10 hidden md:block">
              {headingEyebrow()}
              {headingText()}
              {headingSubtitle()}
              {headingDivider()}
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {programs.map((program: TProgramm, index: number) => (
                <div
                  key={program._id}
                  className="group relative bg-white rounded-2xl border border-slate-100 shadow-md shadow-slate-200/50 overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Top Accent */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />

                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative p-5 md:p-6">
                    <div className="flex items-center gap-3.5 md:gap-4 mb-3.5">
                      {/* Icon with Gradient Ring */}
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full p-[2px] bg-gradient-to-br from-emerald-500 to-yellow-500">
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-yellow-500">
                            <Image
                              className="w-6 h-6 md:w-7 md:h-7 object-contain"
                              src={getIcon(index + 1)}
                              alt={`icon-${index + 1}`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-sm md:text-base font-bold text-slate-800 leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
                        {language === "ENG"
                          ? truncateText(program.english_title, 40)
                          : truncateText(program.bangla_title, 40)}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs md:text-[13px] text-slate-500 leading-relaxed line-clamp-2">
                      {language === "ENG"
                        ? truncateText(program.english_short_description, 60)
                        : truncateText(program.bangla_short_description, 60)}
                    </p>
                  </div>

                  {/* Bottom Border Animation */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-6 md:mt-8">
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