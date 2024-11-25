'use client'

import Container from "@/components/share/Container";
import { useProgrammData } from "@/hooks/useProgrammData";
import { TProgramm } from "@/types/type";
import { School, HealthAndSafety } from "@mui/icons-material";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WaterIcon from "@mui/icons-material/Water";
import { useLanguage } from "@/provider/LanguageProvider";
import Loader from "@/components/Loading/Loading";
const ProgrammSection = () => {
  const { programmData, loading,error } = useProgrammData()
  const { language } = useLanguage()
  if (loading) {
    return <Loader/>
  }
  if (error) {
    return <h2 className='text-center'>Oops!  Something Went Wrong!</h2>
  }
  return (
    <div>

      <Container className="sectionMargin">
      <h2 className="text-center text-3xl font-bold">{language === 'ENG' ? 'Remarkable Works' : 'উল্লেখযোগ্য কাজ'} </h2>
      <div className="w-44 h-1 bg-gradient-to-r from-yellow-600 to-green-600 rounded-full mt-2 mb-7 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
          {programmData?.map((program: TProgramm, index: number) => (
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
      </Container>
    </div>
  );
};

export default ProgrammSection;
