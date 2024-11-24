'use client'

import { useLanguage } from "@/provider/LanguageProvider";

import React from "react";
import { TActivity } from "@/types/type";
import ProgrammData from "./ProgrammData";
import { useProgrammData } from "@/hooks/useProgrammData";
import Loader from "@/components/Loading/Loading";
const Programm = () => {
  const { programmData, loading, error } = useProgrammData()
  const { language } = useLanguage()
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <h2 className='text-center'>Oops!  Something Went Wrong!</h2>
  }

  return (
    <>
      <ProgrammData language={language} programmData={programmData} />
    </>
  );

};


export default Programm;
