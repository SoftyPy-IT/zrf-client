// provider/LanguageProvider.tsx
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

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ENG");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      // Try to get language from localStorage first
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }

      // Also check cookie (for server-side sync)
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(";").shift();
        return null;
      };

      const cookieLanguage = getCookie("language") as Language;
      if (cookieLanguage && cookieLanguage !== savedLanguage) {
        setLanguage(cookieLanguage);
        localStorage.setItem("language", cookieLanguage);
      }
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient && language) {
      localStorage.setItem("language", language);
      // Set cookie
      document.cookie = `language=${language}; path=/; max-age=31536000; SameSite=Lax`;
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
