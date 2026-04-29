"use client";

import { useLanguage } from "@/provider/LanguageProvider";
import { useProgrammData } from "@/hooks/useProgrammData";
import ProgrammData from "./ProgrammData";

const Programm = () => {
  const { programmData, error } = useProgrammData();
  const { language } = useLanguage();

  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }

  return (
    <>
      <ProgrammData language={language} programmData={programmData} />
    </>
  );
};
export default Programm;
