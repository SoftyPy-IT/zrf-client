"use client";

import { useLanguage } from "@/provider/LanguageProvider";
import { useProgrammData } from "@/hooks/useProgrammData";
import ProgrammData from "./ProgrammData";

const Programm = () => {
  const { programmData, loading, error } = useProgrammData();
  const { language } = useLanguage();

  if (error) return null;

  return (
    <>
      <ProgrammData
        language={language}
        programmData={programmData}
        loading={loading}
      />
    </>
  );
};
export default Programm;
