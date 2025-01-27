// src/components/HeroSection.tsx
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../translations";

const HeroSection: React.FC = () => {
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    return (
        <section className="relative w-full h-[57vh] overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(to right, #3b82f6, #14b8a6)",
                    clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
                }}
            ></div>

            <div className="relative z-10 flex flex-col items-start justify-center text-white h-full px-12">
                <h1 className="text-5xl font-bold mb-4 leading-tight">
                    {t.heroTitleLine1}
                    <br />
                    {t.heroTitleLine2}
                </h1>
                <p className="text-xl mb-4">{t.heroSubtitle}</p>
            </div>
        </section>
    );
};

export default HeroSection;
