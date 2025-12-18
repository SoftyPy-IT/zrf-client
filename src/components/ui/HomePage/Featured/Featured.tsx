import React from "react";
import FeatureSlider from "./FeatureSlider";
import { useLanguage } from "@/provider/LanguageProvider";
import { useProjectdata } from "@/hooks/useProjectdata";
import dynamic from "next/dynamic";
 

const Featured = () => {
  const { language } = useLanguage();
  const { projectData, loading, error } = useProjectdata();
   
  if (error) {
    return <h2 className="text-center">Oops! Something Went Wrong!</h2>;
  }
  return (
    <div>
      <FeatureSlider language={language} projectData={projectData} />
    </div>
  );
};

export default Featured;
