// src/components/PartnersReferences.tsx
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../translations";

const PartnersReferences: React.FC = () => {
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    return (
        <div className="flex flex-col md:flex-row justify-around items-start md:items-center mt-8 mb-16 w-full px-4">
            {/* Partnerlerimiz */}
            <div className="mb-8 md:mb-0 text-center">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                    {t.partnerlerimiz}
                </h2>
                <div className="flex space-x-4 justify-center">
                    <img src="/finberg-logo.png" alt="Finberg" className="h-20" />
                    <img
                        src="/turkiye-bankasi-logo.png"
                        alt="Türkiye Bankası"
                        className="h-20"
                    />
                    <img src="/makers-logo.png" alt="Makers" className="h-20" />
                    <img src="/techbros-logo.png" alt="Techbros" className="h-20" />
                </div>
            </div>

            {/* Referanslarımız */}
            <div className="text-center">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                    {t.referanslarimiz}
                </h2>
                <div className="flex space-x-4 justify-center">
                    <img src="/inspire-it-logo.png" alt="Inspire IT" className="h-20" />
                    <img src="/azor-logo.png" alt="Azor" className="h-20" />
                    <img src="/qnb-logo.png" alt="QNB Finansbank" className="h-20" />
                    <img src="/workup-logo.png" alt="Workup" className="h-20" />
                </div>
            </div>
        </div>
    );
};

export default PartnersReferences;
