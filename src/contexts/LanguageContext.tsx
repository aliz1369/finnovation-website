import React, { createContext, useState, ReactNode } from "react";

type Language = "tr" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
}

const defaultValue: LanguageContextType = {
    language: "tr",
    setLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(defaultValue);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>("tr");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
