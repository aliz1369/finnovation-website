import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../translations";

const HeroSection: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="hero bg-gradient-to-r from-blue-500 to-teal-500 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{t.heroTitle}</h1>
        <p className="text-lg">{t.heroSubtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
