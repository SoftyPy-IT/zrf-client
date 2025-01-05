'use client'

import Container from "@/components/share/Container";
import React from "react";
import "./Ebook.css";
import { useLanguage } from "@/provider/LanguageProvider";

const Ebook = () => {
  const { language } = useLanguage()
  return (
    <div className="ebook">
      <Container>
        <div className="content">
          <h1 className="text-5xl font-bold uppercase"> {language === 'ENG' ? 'E-Books' : 'ই-বুক'} </h1>
        </div>
      </Container>
    </div>
  );
};

export default Ebook;
