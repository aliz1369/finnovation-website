// src/components/PartnersReferences.tsx
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


    useEffect(() => {
        const interval = setInterval(() => {
            handlePartnerNext();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handlePartnerNext = () => {
        setPartnerIndex((prevIndex) => (prevIndex + 1) % partnerLogos.length);
    };

    const handlePartnerPrev = () => {

        setPartnerIndex(
            (prevIndex) => (prevIndex - 1 + partnerLogos.length) % partnerLogos.length
        );
    };


    const partnerVisibleItems = partnerLogos.slice(partnerIndex, partnerIndex + 2);
    const partnerItemsToShow =
        partnerVisibleItems.length < 2
            ? [
                ...partnerVisibleItems,
                ...partnerLogos.slice(0, 2 - partnerVisibleItems.length),
            ]
            : partnerVisibleItems;


    const [referenceIndex, setReferenceIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            handleReferenceNext();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleReferenceNext = () => {
        setReferenceIndex(
            (prevIndex) => (prevIndex + 1) % referenceLogos.length
        );
    };

    const handleReferencePrev = () => {
        setReferenceIndex(
            (prevIndex) => (prevIndex - 1 + referenceLogos.length) % referenceLogos.length
        );
    };

    const referenceVisibleItems = referenceLogos.slice(
        referenceIndex,
        referenceIndex + 2
    );
    const referenceItemsToShow =
        referenceVisibleItems.length < 2
            ? [
                ...referenceVisibleItems,
                ...referenceLogos.slice(0, 2 - referenceVisibleItems.length),
            ]
            : referenceVisibleItems;


    return (
        <div className="flex flex-col md:flex-row justify-around items-start md:items-center mt-8 mb-16 w-full px-4">
            {}
            <div className="mb-8 md:mb-0 text-center relative">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                    {t.partnerlerimiz}
                </h2>

                {}
                <div className="flex items-center justify-center space-x-4">
                    {}
                    <button
                        onClick={handlePartnerPrev}
                        className="p-2 bg-gray-200 rounded hover:bg-gray-400"
                    >
                        &lt;
                    </button>

                    {}
                    <div className="relative w-[200px] overflow-hidden">
                        <div className="flex space-x-4 transition-all duration-500">
                            {partnerItemsToShow.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo}
                                    alt={`Partner Logo ${index}`}
                                    className="h-20"
                                />
                            ))}
                        </div>
                    </div>

                    {}
                    <button
                        onClick={handlePartnerNext}
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        &gt;
                    </button>
                </div>
            </div>

            {}
            <div className="text-center relative">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                    {t.referanslarimiz}
                </h2>

                <div className="flex items-center justify-center space-x-4">
                    {}
                    <button
                        onClick={handleReferencePrev}
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        &lt;
                    </button>

                    {}
                    <div className="relative w-[200px] overflow-hidden">
                        <div className="flex space-x-4 transition-all duration-500">
                            {referenceItemsToShow.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo}
                                    alt={`Reference Logo ${index}`}
                                    className="h-20"
                                />
                            ))}
                        </div>
                    </div>

                    {}
                    <button
                        onClick={handleReferenceNext}
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PartnersReferences;
