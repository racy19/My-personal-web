import React, { createContext, useState, useContext, useEffect } from 'react';
import en from '../translations/en.json';
import cs from '../translations/cs.json';

const LanguageContext = createContext();

// en (cs) represents the object containing translations from the JSON files, i. e. landguageData[en].introduction will return intro text in English
const languageData = {
  en: en,
  cs: cs,
};

export const LanguageProvider = ({ children }) => {
  // get the language from the local storage or set it to default: 'cs'
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'cs');

  // save the language to the local storage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // set the new language
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, content: languageData[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
