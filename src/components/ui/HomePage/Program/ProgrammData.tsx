import Container from "@/components/share/Container";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import programm from "../../../../assets/images/program/bigchild.png";
import programm2 from "../../../../assets/images/program/smallChild.png";
import Image from "next/image";
import "./Programm.css";
import { TProgramm } from "@/types/type";
import logo from '../../../../../src/assets/images/logo/16 by 16.svg'

import helth from '../../../../../src/assets/icon/herlth.png';
import education from '../../../../../src/assets/icon/teaching.png';
import democration from '../../../../../src/assets/icon/democracy.png';
import forest from '../../../../../src/assets/icon/forest.png';
import scholarship from '../../../../../src/assets/icon/scholarship.png';
import team from '../../../../../src/assets/icon/team.png';
import volunteer from '../../../../../src/assets/icon/volunteering.png';
import water from '../../../../../src/assets/icon/water.png';
import water2 from '../../../../../src/assets/icon/water (2).png';
import vegetable from '../../../../../src/assets/icon/vegetables.png';
import surgery from '../../../../../src/assets/icon/surgery.png';
import publicLibrary from '../../../../../src/assets/icon/publicLibrary.png';
import asthma from '../../../../../src/assets/icon/asthma.png';
import democracy from '../../../../../src/assets/icon/democracy.png';
import conservation from '../../../../../src/assets/icon/conservation.png';
import trun from '../../../../../src/assets/icon/conservation.png';
import seed from '../../../../../src/assets/icon/seed.png';
import medical from '../../../../../src/assets/icon/medical.png';
import truncateText from "@/utils/truncate";
interface programmProps {
    programmData: TProgramm[];
    language: string,
}


const ProgrammData: React.FC<programmProps> = ({ programmData, language }) => {

    const sortedProgrammData = programmData?.sort(
        (a: TProgramm, b: TProgramm) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateA - dateB;
        },
    );

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

        <div className="my-20">
            <Container>
                <div className="grid grid-cols-1 xl:grid-cols-2  gap-y-10 xl:gap-y-0  justify-items-center">
                    <div className="ImgWrap">
                        <div className="programmBigImg ">
                            <Image src={programm} width={1000} height={500} alt="programms" />
                        </div>
                        <div className="programmSmallImg hidden xl:block ">
                            <Image
                                src={programm2}
                                width={300}
                                height={300}
                                className=""
                                alt="programm"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold uppercase "> {language === 'ENG' ? 'Our Programs ' : 'আমাদের প্রোগ্রাম'}</h2>
                        <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5 "></div>

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 text-center">
                            {sortedProgrammData?.slice(0, 4).map((program: TProgramm, index: number) => (
                                <div
                                    key={program._id}
                                    className="bg-white p-2 md:p-5 rounded shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 h-[135px] lg:h-auto "
                                >
                                    <div className="mb-4">
                                        <div className="w-12 h-12  md:h-16 md:w-16  rounded-full p-2 flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
                                           
                                            <Image
                                                className="w-auto h-auto max-w-full max-h-full object-contain"
                                                src={getIcon(index + 1)}
                                                alt={`icon-${index + 1}`}
                                            />
                                        </div>
                                    </div>

                                    <h3 className="text-[12px] md:text-xl font-semibold md:mb-2">
                                        {language === 'ENG' ? program.english_title : program.bangla_title}

                                    </h3>
                                    <p className="text-[10px] md:text-sm text-gray-600">{language === 'ENG' ? truncateText(program.english_short_description, 80) : truncateText(program.bangla_short_description, 80)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end mt-7">
                            <Link href="/program">
                                <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase text-sm">
                                    {language === 'ENG' ? ' See All' : 'সব দেখুন'} <EastIcon />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProgrammData;
