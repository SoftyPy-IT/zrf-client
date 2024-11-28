import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/share/Container";
import EastIcon from "@mui/icons-material/East";
import CommonBanner from "@/components/share/CommonBanner/CommonBanner";
import { TProject } from "@/types/type";


interface projectProps {
    projectData: TProject[];
    language: string,
}


const ProjectData: React.FC<projectProps> = ({ projectData, language }) => {
    const title = language === 'ENG' ? 'Our Project' : 'আমাদের প্রকল্প'
    return (
        <div>
            <CommonBanner title={title} />
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
                    {projectData?.map((data, index: number) => (
                        <div key={index} className="w-full  px-4 mb-6">
                        <div className="shadow-lg relative rounded-lg overflow-hidden lg:h-[500px] md:h-[450px] h-auto">
                          <div className="relative h-[200px] md:h-[250px]">
                            {data.bng_Images?.slice(0, 1).map((img) => (
                              <Image
                                key={img}
                                src={img}
                                alt=""
                                className="w-full h-full object-cover"
                                width={500}
                                height={500}
                              />
                            ))}
                          </div>
                          <div className="p-5 flex flex-col h-[calc(100%-250px)]">
                            <h3 className="text-lg md:text-xl font-semibold mb-3">
                              {language === "ENG" ? data.english_title : data.bangla_title}
                            </h3>
                            <p className="text-sm md:text-base text-justify flex-grow">
                              {language === "ENG"
                                ? data.english_short_description?.slice(0, 150)
                                : data.bangla_short_description?.slice(0, 150)}
                              ...
                            </p>
                            <div className="flex justify-end mt-3">
                              <Link href={`/our-projects/${data._id}`}>
                                <button className="hover:bg-gradient-to-r from-yellow-600 to-green-600 px-4 py-1 hover:text-white rounded-full uppercase text-xs md:text-sm border">
                                  {language === "ENG" ? "Read More" : "আরও পড়ুন"} <EastIcon />
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default ProjectData;
