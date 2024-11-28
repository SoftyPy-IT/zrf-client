import Image from "next/image";
import React from "react";
import Container from "@/components/share/Container";
import { Button } from "@mui/material";
import { TWhatWeDo } from "@/types/type";

interface EducationProps {
  whatWedoData: TWhatWeDo[];
  language: string,
}


const Rehabilitation: React.FC<EducationProps> = ({ whatWedoData, language }) => {
  const educationFilterData = whatWedoData.filter((edu) => edu.category === 'ZRF Rehabilitation Team')

  const buttonStyle = {
    paddingY: { xs: 1, md: 2 },
    paddingX: { xs: 2, md: 4 },
    fontSize: { xs: '0.75rem', md: '1rem' },
    borderRadius: 2,
    textTransform: 'none',
  }

  return (
    <>

      <Container className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {educationFilterData.map((data, index: number) => (
            <div
              key={index}
              className="relative group w-auto md:h-[450px] bg-white overflow-hidden transition-transform transform hover:scale-105 border"
            >

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
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-600 via-yellow-600 to-transparent transition-transform transform translate-y-full group-hover:translate-y-0 duration-1000 ease-in-out h-[300px] md:h-[300px] lg:h-[300px]">
                <div className="absolute inset-0 mt-20 flex flex-col text-center  justify-center items-center transition-opacity duration-300 group-hover:opacity-100 text-white p-4">
                  <h2 className="md:text-xl font-bold mb-1 md:mb-2">{language == 'ENG' ? data.english_title : data.bangla_title}</h2>
                  <p className="text-[12px] md:text-sm mb-1  md:mb-4 text-center">{language == 'ENG' ? data.english_short_description : data.bangla_short_description}</p>
                  <Button
                    href={`/whatwedo/rehabilitation/${data._id}`}
                    className="hover:bg-blue-700 text-white rounded"
                    sx={buttonStyle}
                  >
                    {language === 'ENG' ? 'Details' : 'বিস্তারিত'}
                  </Button>

                </div>
              </div>
              {/* Overlay */}

              {/* Card Border */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none" />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Rehabilitation;
