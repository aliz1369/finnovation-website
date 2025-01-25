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
          {}
          <li className="relative group">
            <button className="hover:underline focus:outline-none">
              {t.bizKimiz}
            </button>
            <ul className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-2 rounded-md w-48 z-50">
              <li>
                <Link
                  to="/about"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {t.hakkimizda}
                </Link>
              </li>
              <li>
                <Link
                  to="/values"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {t.degerlerimiz}
                </Link>
              </li>
              <li>
                <Link
                  to="/sustainability"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {t.surdurulebilirlik}
                </Link>
              </li>
            </ul>
          </li>

          {}
          <li className="relative group">
            <button className="hover:underline focus:outline-none">
              {t.uzmanlikAlanlarimiz}
            </button>
            <ul className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-2 rounded-md w-56 z-50">
              <li className="relative group">
                {}
                <Link
                  to="/consulting"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {t.danismanlik}
                </Link>
                {}
                <ul className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-0 left-full top-0 rounded-md w-56 z-50">
                  <li>
                    <Link
                      to="/consulting/banking"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {t.temelBankacilik}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/consulting/data-management"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {t.veriYonetimi}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/consulting/digital-transformation"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {t.dijitalDonusum}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/consulting/training"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {t.egitimDanismanligi}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/process-monitoring"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {t.surecIzleme}
                </Link>
              </li>
              <li>
                <Link
                  to="/project-integration"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {t.projeEntegrasyonu}
                </Link>
              </li>
              <li>
                <Link
                  to="/sustainability"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {t.surdurulebilirlik}
                </Link>
              </li>
            </ul>
          </li>

          {}
          <li>
            <Link to="/finacademy" className="hover:underline">
              {t.finAcademy}
            </Link>
          </li>

          {}
          <li>
            <Link to="/projeler" className="hover:underline">
              {t.projeler}
            </Link>
          </li>

          {}
          <li>
            <Link to="/kariyer" className="hover:underline">
              {t.kariyer}
            </Link>
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
