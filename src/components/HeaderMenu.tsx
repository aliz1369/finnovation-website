import React, { useContext, useState } from "react";
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

  // Mobil menü ve dropdown kontrolleri
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openBizKimiz, setOpenBizKimiz] = useState(false);
  const [openUzmanlik, setOpenUzmanlik] = useState(false);
  const [openProjeler, setOpenProjeler] = useState(false);
  const [openKariyer, setOpenKariyer] = useState(false);

  return (
      <header className="relative w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo – Her boyutta görünür */}
          <div className="flex items-center">
            <img
                src="/finnovation-logo.png"
                alt="Finnovation Logo"
                className="h-11 w-auto cursor-pointer"
                onClick={() => navigate("/")}
            />
          </div>

          {/* Masaüstü Menüsü */}
          <ul className="hidden md:flex space-x-10 text-sm font-medium">
            <li className="relative group">
            <span className="hover:underline cursor-pointer inline-flex items-center">
              {t.bizKimiz}
              <span className="ml-1 text-xs">▼</span>
            </span>
              <div
                  className="
                absolute left-0 top-full hidden group-hover:block
                bg-white text-black z-50 pt-2 shadow-md min-w-[180px]
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

            <li>
              <span className="text-gray-300">|</span>
            </li>

            <li className="relative group">
            <span className="hover:underline cursor-pointer inline-flex items-center">
              {t.uzmanlikAlanlarimiz}
              <span className="ml-1 text-xs">▼</span>
            </span>
              <div
                  className="
                absolute left-0 top-full hidden group-hover:block
                bg-white text-black z-50 pt-2 shadow-md
              "
              >
                <Link
                    to="/uzmanlik-alanlarimiz"
                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  {t.uzmanlikAlanlarimiz}
                </Link>
                <div className="flex flex-col space-y-1 px-4 pb-3">
                  <Link
                      to="/danismanlik"
                      className="py-2 hover:bg-gray-100 rounded whitespace-nowrap"
                  >
                    {t.danismanlik}
                  </Link>
                  <Link
                      to="/surec-izleme"
                      className="py-2 hover:bg-gray-100 rounded whitespace-nowrap"
                  >
                    {t.surecIzleme}
                  </Link>
                  <Link
                      to="/proje-bazli-entegrasyon"
                      className="py-2 hover:bg-gray-100 rounded whitespace-nowrap"
                  >
                    {t.projeBazliTeknoloji}
                  </Link>
                  <Link
                      to="/surdurulebilirlik2"
                      className="py-2 hover:bg-gray-100 rounded whitespace-nowrap"
                  >
                    {t.surdurulebilirlik}
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <span className="text-gray-300">|</span>
            </li>

            <li>
            <span className="hover:underline cursor-pointer">
              <Link to="/finacademy" className="py-2 rounded whitespace-nowrap">
                {t.finAcademy}
              </Link>
            </span>
            </li>

            <li>
              <span className="text-gray-300">|</span>
            </li>

            <li className="relative group">
            <span className="hover:underline cursor-pointer inline-flex items-center">
              {t.projeler}
              <span className="ml-1 text-xs">▼</span>
            </span>
              <div
                  className="
                absolute left-0 top-full hidden group-hover:block
                bg-white text-black z-50 pt-2 shadow-md min-w-[180px]
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

            <li>
              <span className="text-gray-300">|</span>
            </li>

            <li className="relative group">
            <span className="hover:underline cursor-pointer inline-flex items-center">
              {t.kariyer}
              <span className="ml-1 text-xs">▼</span>
            </span>
              <div
                  className="
                absolute left-0 top-full hidden group-hover:block
                bg-white text-black z-50 pt-2 shadow-md min-w-[180px]
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

            <li>
              <span className="text-gray-300">|</span>
            </li>

            <li>
              <Link to="/bize-ulasin" className="hover:underline">
                {t.bizeUlasin}
              </Link>
            </li>
          </ul>

          {/* Mobil Görünüm: Dil Değiştirici ve Hamburger Buton */}
          <div className="flex items-center space-x-3 md:hidden">
            <div
                className="flex items-center bg-white px-3 py-1 rounded-full shadow cursor-pointer"
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
            <button
                className="focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobil Menü – Menü açıldığında en üstte tekrar logo görüntüleniyor */}
        {isMobileMenuOpen && (
            <div className="md:hidden mt-4 bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded">
              <div className="flex justify-between items-center mb-4">
                <img

                    className="h-11 w-auto cursor-pointer"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate("/");
                    }}
                />
                <button
                    className="text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="space-y-2">
                {/* BizKimiz */}
                <li className="border-b border-gray-300">
                  <button
                      className="w-full flex justify-between items-center py-2"
                      onClick={() => setOpenBizKimiz(!openBizKimiz)}
                  >
                    <span>{t.bizKimiz}</span>
                    <span>{openBizKimiz ? "▲" : "▼"}</span>
                  </button>
                  {openBizKimiz && (
                      <ul className="pl-4">
                        <li>
                          <Link
                              to="/hakkimizda"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.hakkimizda}
                          </Link>
                        </li>
                        <li>
                          <Link
                              to="/degerlerimiz"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.degerlerimiz}
                          </Link>
                        </li>
                        <li>
                          <Link
                              to="/surdurulebilirlik"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.surdurulebilirlik}
                          </Link>
                        </li>
                      </ul>
                  )}
                </li>

                {/* Uzmanlik Alanlarimiz */}
                <li className="border-b border-gray-300">
                  <button
                      className="w-full flex justify-between items-center py-2"
                      onClick={() => setOpenUzmanlik(!openUzmanlik)}
                  >
                    <span>{t.uzmanlikAlanlarimiz}</span>
                    <span>{openUzmanlik ? "▲" : "▼"}</span>
                  </button>
                  {openUzmanlik && (
                      <ul className="pl-4">
                        <li>
                          <Link
                              to="/uzmanlik-alanlarimiz"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.uzmanlikAlanlarimiz}
                          </Link>
                        </li>
                        <li>
                          <Link
                              to="/danismanlik"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.danismanlik}
                          </Link>
                        </li>
                        <li>
                          <Link
                              to="/surec-izleme"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.surecIzleme}
                          </Link>
                        </li>
                        <li>
                          <Link
                              to="/proje-bazli-entegrasyon"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.projeBazliTeknoloji}
                          </Link>
                        </li>
                        <li>
                          <Link
                              to="/surdurulebilirlik2"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.surdurulebilirlik}
                          </Link>
                        </li>
                      </ul>
                  )}
                </li>

                {/* FinAcademy */}
                <li className="border-b border-gray-300">
                  <Link
                      to="/finacademy"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2"
                  >
                    {t.finAcademy}
                  </Link>
                </li>

                {/* Projeler */}
                <li className="border-b border-gray-300">
                  <button
                      className="w-full flex justify-between items-center py-2"
                      onClick={() => setOpenProjeler(!openProjeler)}
                  >
                    <span>{t.projeler}</span>
                    <span>{openProjeler ? "▲" : "▼"}</span>
                  </button>
                  {openProjeler && (
                      <ul className="pl-4">
                        <li>
                          <Link
                              to="/projeler/temel-bankacilik"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.temelBankacilik}
                          </Link>
                        </li>
                        <li>
                          <Link
                              to="/projeler/veri-yonetimi"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.veriYonetimi}
                          </Link>
                        </li>
                        <li>
                          <Link
                              to="/projeler/dijital-donusum"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.dijitalDonusum}
                          </Link>
                        </li>
                        <li>
                          <Link
                              to="/projeler/egitim-danismanligi"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.egitimDanismanligi}
                          </Link>
                        </li>
                      </ul>
                  )}
                </li>

                {/* Kariyer */}
                <li className="border-b border-gray-300">
                  <button
                      className="w-full flex justify-between items-center py-2"
                      onClick={() => setOpenKariyer(!openKariyer)}
                  >
                    <span>{t.kariyer}</span>
                    <span>{openKariyer ? "▲" : "▼"}</span>
                  </button>
                  {openKariyer && (
                      <ul className="pl-4">
                        <li>
                          <Link
                              to="/kariyer/hazine"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.hazine}
                          </Link>
                        </li>
                        <li>
                          <Link
                              to="/kariyer/nakit-yonetimi"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.nakitYonetimi}
                          </Link>
                        </li>
                        <li>
                          <Link
                              to="/kariyer/krediler"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.krediler}
                          </Link>
                        </li>
                        <li>
                          <Link
                              to="/kariyer/risk-yonetimi"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1"
                          >
                            {t.riskYonetimi}
                          </Link>
                        </li>
                      </ul>
                  )}
                </li>

                {/* Bize Ulaşın */}
                <li className="border-b border-gray-300">
                  <Link
                      to="/bize-ulasin"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2"
                  >
                    {t.bizeUlasin}
                  </Link>
                </li>
              </ul>
            </div>
        )}
      </header>
  );
};

export default HeaderMenu;
