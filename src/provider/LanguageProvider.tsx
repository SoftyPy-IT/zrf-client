'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "ENG" | "BNG";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ENG");
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {

    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }
  }, [isClient]);

  useEffect(() => {

    if (isClient && language) {
      localStorage.setItem("language", language);
    }
  }, [language, isClient]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
