import Container from "@/components/share/Container";
import { School, HealthAndSafety } from "@mui/icons-material";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WaterIcon from "@mui/icons-material/Water";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import programm from "../../../../assets/images/program/programm2.jpeg";
import programm2 from "../../../../assets/images/program/programm.jpeg";
import Image from "next/image";
import "./Programm.css";
import { TProgramm } from "@/types/type";

interface programmProps {
    programmData: TProgramm[];
    language: string,
}


const ProgrammData: React.FC<programmProps> = ({ programmData, language }) => {

    const programs = [
        {
            title: "Education for All",
            description:
                "Providing educational opportunities for underprivileged children.",
            icon: <School fontSize="large" className="text-green-500" />,
        },
        {
            title: "Healthcare Initiative",
            description: "Providing medical assistance and healthcare services.",
            icon: <HealthAndSafety fontSize="large" className="text-green-500" />,
        },
        {
            title: "Climate Change",
            description:
                "Climate change is the alteration in global temperatures and weather patterns.",
            icon: <ThunderstormIcon fontSize="large" className="text-blue-500" />,
        },
        {
            title: "Komol Water",
            description:
                "Conserving water means creating awareness about mindful water usage.",
            icon: <WaterIcon fontSize="large" className="text-blue-500" />,
        },
    ];

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
                        <h2 className="text-3xl font-bold uppercase ">Our Program</h2>
                        <div className="w-28 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-5 "></div>
                        <p className=" lg:w-[500px]  mb-10">
                            Our program provides expert guidance, innovative strategies, and
                            personalized solutions to help businesses grow and succeed. We
                            focus on delivering measurable results.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 text-center">
                            {programs.map((program, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-5 rounded shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
                                >
                                    <div className="mb-4">{program.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {program.title}
                                    </h3>
                                    <p className="text-gray-600">{program.description}</p>
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
