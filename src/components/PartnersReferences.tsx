import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../translations";

const PartnersReferences: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const partnerLogos = [
    "/finberg-logo.png",
    "/turkiye-bankasi-logo.png",
    "/makers-logo.png",
    "/techbros-logo.png",
  ];

  const referenceLogos = [
    "/inspire-it-logo.png",
    "/azor-logo.png",
    "/qnb-logo.png",
    "/workup-logo.png",
  ];

  const [partnerIndex, setPartnerIndex] = useState(0);
  const [referenceIndex, setReferenceIndex] = useState(0);

  // Otomatik geçiş için kullanılıyor
  useEffect(() => {
    const partnerInterval = setInterval(() => {
      setPartnerIndex((prevIndex) => (prevIndex + 1) % partnerLogos.length);
    }, 2000); // 2 saniye sonra değişim

    const referenceInterval = setInterval(() => {
      setReferenceIndex((prevIndex) => (prevIndex + 1) % referenceLogos.length);
    }, 2000); // 2 saniye sonra değişim

    return () => {
      clearInterval(partnerInterval);
      clearInterval(referenceInterval);
    };
  }, []);

  const handlePartnerDotClick = (index: number) => {
    setPartnerIndex(index);
  };

  const handleReferenceDotClick = (index: number) => {
    setReferenceIndex(index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-start md:items-center mt-8 mb-16 w-full px-4">
      {/* Partnerler */}
      <div className="mb-8 md:mb-0 text-center relative">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          {t.partnerlerimiz}
        </h2>

        {/* Partner Logolar */}
        <div className="relative w-[200px] overflow-hidden mx-auto">
          <div className="flex justify-center">
            <img
              src={partnerLogos[partnerIndex]}
              alt={`Partner Logo ${partnerIndex}`}
              className="h-20"
            />
          </div>
        </div>

        {/* Partner Dot Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {partnerLogos.map((_, index) => (
            <button
              key={index}
              onClick={() => handlePartnerDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === partnerIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Referanslar */}
      <div className="text-center relative">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          {t.referanslarimiz}
        </h2>

        {/* Referans Logolar */}
        <div className="relative w-[200px] overflow-hidden mx-auto">
          <div className="flex justify-center">
            <img
              src={referenceLogos[referenceIndex]}
              alt={`Reference Logo ${referenceIndex}`}
              className="h-20"
            />
          </div>
        </div>

        {/* Reference Dot Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {referenceLogos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleReferenceDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === referenceIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersReferences;
