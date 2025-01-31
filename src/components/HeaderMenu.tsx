// src/components/HeaderMenu.tsx

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../translations";

const HeaderMenu: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  return (
      <header className="relative w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          {}
          <div className="flex items-center space-x-2">
            <img
                src="/finnovation-logo.png"
                alt="Finnovation Logo"
                className="h-11 w-auto cursor-pointer"
                onClick={() => navigate("/")}
            />
          </div>

          {}
          <ul className="flex space-x-10 text-sm font-medium">

            {}
            <li className="relative group">
            <span className="hover:underline cursor-pointer inline-flex items-center">
              {t.bizKimiz}
              <span className="ml-1 text-xs">▼</span>
            </span>
              <div
                  className="
                absolute left-0 top-full
                hidden group-hover:block
                bg-white text-black
                z-50
                pt-2
                shadow-md
                min-w-[180px]
              "
              >
                <Link
                    to="/hakkimizda"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.hakkimizda}
                </Link>
                <Link
                    to="/degerlerimiz"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.degerlerimiz}
                </Link>
                <Link
                    to="/surdurulebilirlik"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.surdurulebilirlik}
                </Link>
              </div>
            </li>

            {}
            <li>
              <span className="text-gray-300">|</span>
            </li>

            {}
            <li className="relative group">
            <span className="hover:underline cursor-pointer inline-flex items-center">
              {t.uzmanlikAlanlarimiz}
              <span className="ml-1 text-xs">▼</span>
            </span>
              <div
                  className="
                absolute left-0 top-full
                hidden group-hover:block
                bg-white text-black
                z-50
                pt-2
                shadow-md
              "
              >
                <Link
                    to="/uzmanlik-alanlarimiz"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.uzmanlikAlanlarimiz}
                </Link>

                {}
                <Link
                    to="/danismanlik"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.danismanlik}
                </Link>
                <Link
                    to="/surec-izleme"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.surecIzleme}
                </Link>
                <Link
                    to="/proje-bazli-entegrasyon"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.projeBazliTeknoloji}
                </Link>
              </div>
            </li>

            {}
            <li>
              <span className="text-gray-300">|</span>
            </li>

            {}
            <li>
              <Link to="/finacademy" className="hover:underline">
                {t.finAcademy}
              </Link>
            </li>

            {}
            <li>
              <span className="text-gray-300">|</span>
            </li>

            {}
            <li className="relative group">
            <span className="hover:underline cursor-pointer inline-flex items-center">
              {t.projeler}
              <span className="ml-1 text-xs">▼</span>
            </span>
              <div
                  className="
                absolute left-0 top-full
                hidden group-hover:block
                bg-white text-black
                z-50
                pt-2
                shadow-md
                min-w-[180px]
              "
              >
                <Link
                    to="/projeler/temel-bankacilik"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.temelBankacilik}
                </Link>
                <Link
                    to="/projeler/veri-yonetimi"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.veriYonetimi}
                </Link>
                <Link
                    to="/projeler/dijital-donusum"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.dijitalDonusum}
                </Link>
                <Link
                    to="/projeler/egitim-danismanligi"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.egitimDanismanligi}
                </Link>
              </div>
            </li>

            {}
            <li>
              <span className="text-gray-300">|</span>
            </li>

            {}
            <li className="relative group">
            <span className="hover:underline cursor-pointer inline-flex items-center">
              {t.kariyer}
              <span className="ml-1 text-xs">▼</span>
            </span>
              <div
                  className="
                absolute left-0 top-full
                hidden group-hover:block
                bg-white text-black
                z-50
                pt-2
                shadow-md
                min-w-[180px]
              "
              >
                <Link
                    to="/kariyer/hazine"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.hazine}
                </Link>
                <Link
                    to="/kariyer/nakit-yonetimi"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.nakitYonetimi}
                </Link>
                <Link
                    to="/kariyer/krediler"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.krediler}
                </Link>
                <Link
                    to="/kariyer/risk-yonetimi"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.riskYonetimi}
                </Link>
              </div>
            </li>

            {}
            <li>
              <span className="text-gray-300">|</span>
            </li>

            {}
            <li>
              <Link to="/bize-ulasin" className="hover:underline">
                {t.bizeUlasin}
              </Link>
            </li>
          </ul>

          {}
          <div
              className="flex items-center bg-white px-3 py-1 rounded-full shadow space-x-3 cursor-pointer"
              onClick={toggleLanguage}
          >
          <span role="img" aria-label="Globe" className="text-blue-600">
            🌐
          </span>
            <span className="text-gray-300">|</span>
            <span
                role="img"
                aria-label={language === "tr" ? "Türkçe" : "English"}
                className="text-red-600"
            >
            {language === "tr" ? "🇹🇷" : "🇺🇸"}
          </span>
          </div>
        </nav>
      </header>
  );
};

export default HeaderMenu;
