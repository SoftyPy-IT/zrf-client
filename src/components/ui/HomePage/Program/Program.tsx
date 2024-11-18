'use client'

import { useLanguage } from "@/provider/LanguageProvider";

import React from "react";
import { TActivity } from "@/types/type";
import ProgrammData from "./ProgrammData";
import { useProgrammData } from "@/hooks/useProgrammData";
const Programm = () => {
  const { programmData } = useProgrammData()
  const { language } = useLanguage()


  return (
    <>
      <ProgrammData language={language} programmData={programmData} />
    </>
  );

};

export default Programm;
