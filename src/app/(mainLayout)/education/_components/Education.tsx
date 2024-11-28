import Image from "next/image";
import React from "react";
import Container from "@/components/share/Container";
import { Button } from "@mui/material";
import { TWhatWeDo } from "@/types/type";

interface EducationProps {
  whatWedoData: TWhatWeDo[];
  language: string,
}


const Education: React.FC<EducationProps> = ({ whatWedoData, language }) => {
  const educationFilterData = whatWedoData.filter((edu) => edu.category === 'ZRF Education Programm')

  return (
    <>

      <Container className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {educationFilterData.map((data, index: number) => (
            <div
              key={index}
              className="relative group w-auto  h-[300px] md:h-[450px] bg-white overflow-hidden transition-transform transform hover:scale-105 border"
            >
              {/* Image */}
              {
                data.bng_Images?.slice(0, 1).map((img) => (
                  <Image
                    width={500}
                    height={500}
                    key={img}
                    src={img}
                    alt='education'
                    className="h-full w-full transition-transform duration-300 group-hover:scale-110"
                  />
                ))
              }
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-600 via-yellow-600 to-transparent transition-transform transform translate-y-full group-hover:translate-y-0 duration-1000 ease-in-out h-[340px] md:h-[300px] lg:h-[300px]">
                <div className="absolute inset-0 mt-20 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:opacity-100 text-white p-4">
                  <h2 className="text-xl font-bold mb-2">{data.english_title}</h2>
                  <p className="text-sm mb-4 text-center">{data.bangla_short_description}</p>
                  <Button
                    href={`/education/${data._id}`}
                    className=" hover:bg-blue-700 text-white py-2 px-4 rounded"
                  >
                    {
                      language == 'ENG' ? 'Details' : 'বিস্তারিত'
                    }
                  </Button>
                </div>
              </div>
       
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none" />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Education;
