import Container from "@/components/share/Container";
import { School, HealthAndSafety } from "@mui/icons-material";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WaterIcon from "@mui/icons-material/Water";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import programm from "../../../../assets/images/program/bigchild.png";
import programm2 from "../../../../assets/images/program/smallChild.png";
import Image from "next/image";
import "./Programm.css";
import { TProgramm } from "@/types/type";

interface programmProps {
    programmData: TProgramm[];
    language: string,
}



const ProgrammData: React.FC<programmProps> = ({ programmData, language }) => {


    return (
        <div className="my-20">
            <Container>
                <div className="grid grid-cols-1 xl:grid-cols-2  gap-y-10 xl:gap-y-0  justify-items-center">
                    <div className="ImgWrap">
                        <div className="programmBigImg ">
                            <Image src={programm} width={1000} height={500} alt="programm" />
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
                        <h2 className="text-3xl font-bold uppercase "> {language === 'ENG' ? 'Our Programm ' : 'আমাদের প্রোগ্রাম'}</h2>
                        <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5 "></div>
                        {/* <p className=" lg:w-[500px]  mb-10">

                            {language === 'ENG' ? '   Our program provides expert guidance, innovative strategies, and personalized solutions to help businesses grow and succeed. We focus on delivering measurable results.' : 'আমাদের প্রোগ্রাম বিশেষজ্ঞ নির্দেশিকা প্রদান করে, উদ্ভাবনী কৌশল, এবং ব্যবসার বৃদ্ধি এবং সফল হতে সাহায্য করার জন্য ব্যক্তিগতকৃত সমাধান। আমরা পরিমাপযোগ্য ফলাফল প্রদানের উপর ফোকাস করুন।'}
                        </p> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 text-center">
                            {programmData?.slice(0, 4).map((program: TProgramm, index: number) => (
                                <div
                                    key={program._id}
                                    className="bg-white p-5 rounded shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
                                >
                                    <div className="mb-4">
                                        {
                                            index === 0 ? <School fontSize="large" className="text-green-500" /> : index === 1 ? <HealthAndSafety fontSize="large" className="text-green-500" /> : index === 2 ? <ThunderstormIcon fontSize="large" className="text-blue-500" /> : index === 3 ? <WaterIcon fontSize="large" className="text-blue-500" /> : null
                                        }

                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {language === 'ENG' ? program.english_title : program.bangla_title}

                                    </h3>
                                    <p className="text-gray-600">{language === 'ENG' ? program.english_short_description : program.bangla_short_description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end mt-7">
                            <Link href="/program">
                                <button className="bg-gradient-to-r from-yellow-600 to-green-600 px-6 py-2 text-white rounded-full uppercase text-sm">
                                    See All <EastIcon />
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
