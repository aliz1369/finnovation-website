// src/pages/BizeUlasinPage.tsx

import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../translations";

const BizeUlasinPage: React.FC = () => {
    const { language } = useContext(LanguageContext);

    const t = translations[language].bizeUlasinForm;

    const initialFormData = {
        ad: "",
        soyad: "",
        sirket: "",
        email: "",
        yardimTipi: "",
        mesaj: "",
        kvkkOnay: false,
    };

    const [formData, setFormData] = useState(initialFormData);


    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data:", formData);


        alert(t.alertMsg);


        setFormData(initialFormData);
    };

    return (
        <div className="relative min-h-screen bg-white p-8">
            {}
            <div
                className="absolute top-0 left-0 w-full h-[500px]"
                style={{
                    background: "linear-gradient(to right, #3b82f6, #14b8a6)",
                    clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
                }}
            ></div>

            {}
            <div className="relative z-10 max-w-4xl mx-auto pt-[50px]">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b border-gray-800 pb-2">
                    {t.title}
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
                    {}
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="flex-1 mb-4 md:mb-0">
                            <label className="block mb-1 font-semibold">{t.labelAd}</label>
                            <input
                                type="text"
                                name="ad"
                                value={formData.ad}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                placeholder={t.placeholderAd}
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-1 font-semibold">{t.labelSoyad}</label>
                            <input
                                type="text"
                                name="soyad"
                                value={formData.soyad}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                placeholder={t.placeholderSoyad}
                                required
                            />
                        </div>
                    </div>

                    {}
                    <div>
                        <label className="block mb-1 font-semibold">{t.labelSirket}</label>
                        <input
                            type="text"
                            name="sirket"
                            value={formData.sirket}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder={t.placeholderSirket}
                        />
                    </div>

                    {}
                    <div>
                        <label className="block mb-1 font-semibold">{t.labelEmail}</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder={t.placeholderEmail}
                            required
                        />
                    </div>

                    {}
                    <div>
                        <label className="block mb-1 font-semibold">{t.labelYardim}</label>
                        <select
                            name="yardimTipi"
                            value={formData.yardimTipi}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        >
                            <option value="">{t.selectDefault}</option>
                            <option value="Danışmanlık">{t.optionDanismanlik}</option>
                            <option value="Teknik Destek">{t.optionTeknik}</option>
                            <option value="Proje Teklifi">{t.optionProje}</option>
                            <option value="Diğer">{t.optionDiger}</option>
                        </select>
                    </div>

                    {}
                    <div>
                        <label className="block mb-1 font-semibold">{t.labelMesaj}</label>
                        <textarea
                            name="mesaj"
                            value={formData.mesaj}
                            onChange={handleChange}
                            rows={4}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder={t.placeholderMesaj}
                        />
                    </div>

                    {}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="kvkkOnay"
                            checked={formData.kvkkOnay}
                            onChange={handleChange}
                            className="mr-2"
                            required
                        />
                        <label className="text-sm">{t.labelKvkk}</label>
                    </div>

                    {}
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        {t.submitText}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BizeUlasinPage;
