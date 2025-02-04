// src/components/HeroSection.tsx
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../translations";

const HeroSection: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section className="relative w-full h-auto md:h-[57vh] overflow-hidden">
      {/* Degrade Arkaplan */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #3b82f6, #14b8a6)",
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
        }}
      />

      {/* Metin İçerikleri */}
      <div className="relative z-10 flex flex-col items-start justify-center text-white h-full px-4 py-12 md:px-12 md:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          {t.heroTitleLine1}
          <br />
          {t.heroTitleLine2}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-4">{t.heroSubtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
