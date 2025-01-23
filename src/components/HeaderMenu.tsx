import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../translations";

const HeaderMenu: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4">
      <nav className="flex justify-between items-center">
        {}
        <div className="flex items-center space-x-2">
          <img src="/img.png" alt="Finnovation Logo" className="h-8" />
        </div>

        {}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <Link to="/" className="hover:underline">
              {t.bizKimiz}
            </Link>
          </li>
          <li>
            <span className="text-gray-300">|</span>
          </li>
          <li>
            <Link to="/uzmanlik-alanlarimiz" className="hover:underline">
              {t.uzmanlikAlanlarimiz}
            </Link>
          </li>
          <li>
            <span className="text-gray-300">|</span>
          </li>
          <li>
            <Link to="/finacademy" className="hover:underline">
              {t.finAcademy}
            </Link>
          </li>
          <li>
            <span className="text-gray-300">|</span>
          </li>
          <li>
            <Link to="/projeler" className="hover:underline">
              {t.projeler}
            </Link>
          </li>
          <li>
            <span className="text-gray-300">|</span>
          </li>
          <li>
            <Link to="/kariyer" className="hover:underline">
              {t.kariyer}
            </Link>
          </li>
          <li>
            <span className="text-gray-300">|</span>
          </li>
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
            aria-label={language === "tr" ? "Türkçe" : "İngilizce"}
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
