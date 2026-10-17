"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Language = "ENG" | "BNG";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

function isLanguage(value: string | null): value is Language {
  return value === "ENG" || value === "BNG";
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ENG");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (isLanguage(saved)) {
      setLanguage(saved);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      localStorage.setItem("language", language);
    }
  }, [language, ready]);

  /**
   * Keep the document in sync with the active language. The `lang-bn` class is what
   * swaps the body font stack over to Shurjo, and the `lang` attribute keeps screen
   * readers, `:lang()` selectors and search engines accurate.
   */
  useEffect(() => {
    const root = document.documentElement;
    const isBn = language === "BNG";

    root.lang = isBn ? "bn" : "en";
    root.classList.toggle("lang-bn", isBn);
  }, [language]);

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
