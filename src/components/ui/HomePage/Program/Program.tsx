"use client";

import { useLanguage } from "@/provider/LanguageProvider";
import { useProgrammData } from "@/hooks/useProgrammData";
import dynamic from "next/dynamic";
import ProgrammData from "./ProgrammData";
const Loader = dynamic(() => import("@/components/Loading/Loading"), {
  ssr: false,
});

const Programm = () => {
  const { programmData, loading, error } = useProgrammData();
  const { language } = useLanguage();
  if (loading) {
    return <Loader />;
  }
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
