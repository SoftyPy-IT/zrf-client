import React from 'react';
import FeatureSlider from './FeatureSlider';
import { useLanguage } from '@/provider/LanguageProvider';
import { useProjectdata } from '@/hooks/useProjectdata';

const Featured = () => {
  const {language} = useLanguage()
  const {projectData} = useProjectdata()
  return (
    <div>
      <FeatureSlider language={language} projectData={projectData} />
    </div>
  );
};

export default Featured;