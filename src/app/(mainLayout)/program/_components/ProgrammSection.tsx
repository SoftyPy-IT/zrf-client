'use client'

import Container from "@/components/share/Container";
import { useProgrammData } from "@/hooks/useProgrammData";
import { TProgramm } from "@/types/type";
import logo from '../../../../../src/assets/images/logo/logo2.svg'
import { useLanguage } from "@/provider/LanguageProvider";
import Loader from "@/components/Loading/Loading";
import Image from "next/image";
const ProgrammSection = () => {
  const { programmData, loading, error } = useProgrammData()
  const { language } = useLanguage()
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <h2 className='text-center'>Oops!  Something Went Wrong!</h2>
  }
  const sortedProgrammData = programmData?.sort((a: TProgramm, b: TProgramm) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA;
  });
  return (
    <div>

      <Container className="sectionMargin">
        <h2 className="text-center text-3xl font-bold">{language === 'ENG' ? 'Remarkable Works' : 'উল্লেখযোগ্য কাজ'} </h2>
        <div className="w-44 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-7 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
          {sortedProgrammData?.map((program: TProgramm, index: number) => (
            <div
              key={program._id}
              className="bg-white p-5 rounded shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32  rounded-full p-2 flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
                  <Image
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                    src={logo}
                    alt="logo"
                  />
                </div>
              </div>



              <h3 className="text-xl font-semibold mb-2">
                {language === 'ENG' ? program.english_title : program.bangla_title}

              </h3>
              <p className="text-gray-600">{language === 'ENG' ? program.english_short_description : program.bangla_short_description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProgrammSection;
