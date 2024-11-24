'use client'
import React from 'react';
import ProjectData from './_components/ProjectData';
import { useLanguage } from '@/provider/LanguageProvider';
import { useProjectdata } from '@/hooks/useProjectdata';
import Loader from '@/components/Loading/Loading';

const Project = () => {
  const { language } = useLanguage()
  const { projectData, loading } = useProjectdata()
  if(loading){
    return <Loader/>
  }
  return (
    <div>
      <ProjectData projectData={projectData} language={language} />
    </div>
  );
};

export default Project;
