import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../translations";

const HeaderMenu: React.FC = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  // Dropdown (Açılır menü) state ve timer'ları
  const [isBizKimizOpen, setBizKimizOpen] = useState(false);
  const [isUzmanlikOpen, setUzmanlikOpen] = useState(false);
  const [isDanismanlikOpen, setDanismanlikOpen] = useState(false);
  const [isTemelBankacilikOpen, setTemelBankacilikOpen] = useState(false);
  const [isVeriYonetimiOpen, setVeriYonetimiOpen] = useState(false);

  const bizKimizTimerRef = useRef<NodeJS.Timeout | null>(null);
  const uzmanlikTimerRef = useRef<NodeJS.Timeout | null>(null);
  const danismanlikTimerRef = useRef<NodeJS.Timeout | null>(null);
  const TemelBankacilikTimerRef = useRef<NodeJS.Timeout | null>(null);
  const VeriYonetimiTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Mobil menü state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dil değiştirme
  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  // Hover giriş/çıkış fonksiyonları
  const handleBizKimizEnter = () => {
    if (bizKimizTimerRef.current) clearTimeout(bizKimizTimerRef.current);
    setBizKimizOpen(true);
  };
  const handleBizKimizLeave = () => {
    bizKimizTimerRef.current = setTimeout(() => setBizKimizOpen(false), 200);
  };

  const handleUzmanlikEnter = () => {
    if (uzmanlikTimerRef.current) clearTimeout(uzmanlikTimerRef.current);
    setUzmanlikOpen(true);
  };
  const handleUzmanlikLeave = () => {
    uzmanlikTimerRef.current = setTimeout(() => {
      setUzmanlikOpen(false);
      setDanismanlikOpen(false);
      setTemelBankacilikOpen(false);
      setVeriYonetimiOpen(false);
    }, 200);
  };

  const handleDanismanlikEnter = () => {
    if (danismanlikTimerRef.current) clearTimeout(danismanlikTimerRef.current);
    setDanismanlikOpen(true);
  };
  const handleDanismanlikLeave = () => {
    danismanlikTimerRef.current = setTimeout(() => {
      setDanismanlikOpen(false);
      setTemelBankacilikOpen(false);
      setVeriYonetimiOpen(false);
    }, 200);
  };

  const handleTemelBankacilikEnter = () => {
    if (TemelBankacilikTimerRef.current)
      clearTimeout(TemelBankacilikTimerRef.current);
    setTemelBankacilikOpen(true);
  };
  const handleTemelBankacilikLeave = () => {
    TemelBankacilikTimerRef.current = setTimeout(() => {
      setTemelBankacilikOpen(false);
    }, 200);
  };

  const handleVeriYonetimiEnter = () => {
    if (VeriYonetimiTimerRef.current) clearTimeout(VeriYonetimiTimerRef.current);
    setVeriYonetimiOpen(true);
  };
  const handleVeriYonetimiLeave = () => {
    VeriYonetimiTimerRef.current = setTimeout(() => {
      setVeriYonetimiOpen(false);
    }, 200);
  };

  return (
      <nav className="relative w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4">
        <div className="max-w-10xl mx-auto flex items-center justify-between">
          {/* Sol kısım: Logo */}
          <div className="flex items-center">
            <img
                src="/finnovation-logo.png"
                alt="Finnovation Logo"
                className="h-11 w-auto cursor-pointer"
                onClick={() => navigate("/")}
            />
          </div>

          {/* Menü (Desktop görünüm) */}
          <ul className="hidden md:flex items-center space-x-6">
            {/* Biz Kimiz */}
            <li
                className="relative"
                onMouseEnter={handleBizKimizEnter}
                onMouseLeave={handleBizKimizLeave}
            >
              <span className="cursor-pointer">{t.bizKimiz}</span>
              {isBizKimizOpen && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 z-50">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/hakkimizda" className="text-gray-800">
                        {t.hakkimizda}
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/degerlerimiz" className="text-gray-800">
                        {t.degerlerimiz}
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/organizasyon" className="text-gray-800">
                        {t.organizasyonSeması}
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/surdurulebilirlik" className="text-gray-800">
                        {t.surdurulebilirlik}
                      </Link>
                    </li>
                  </ul>
              )}
            </li>
            {/* Dikey çizgi */}
            <li className="text-white px-2">|</li>

            {/* Uzmanlık Alanlarımız */}
            <li
                className="relative"
                onMouseEnter={handleUzmanlikEnter}
                onMouseLeave={handleUzmanlikLeave}
            >
              <Link to="/uzmanlik-alanlarimiz">{t.uzmanlikAlanlarimiz}</Link>
              {isUzmanlikOpen && (
                  <ul className="absolute left-0 mt-2 w-64 bg-white shadow-lg border border-gray-200 z-50">
                    {/* Danışmanlık alt menüsü */}
                    <li
                        className="relative px-4 py-2 hover:bg-gray-100"
                        onMouseEnter={handleDanismanlikEnter}
                        onMouseLeave={handleDanismanlikLeave}
                    >
                  <span className="cursor-pointer text-gray-800">
                    {t.danismanlik}
                  </span>
                      {isDanismanlikOpen && (
                          <ul className="absolute left-full top-0 ml-1 w-64 bg-white shadow-lg border border-gray-200 z-50">
                            {/* Temel Bankacılık */}
                            <li
                                className="relative px-4 py-2 hover:bg-gray-100"
                                onMouseEnter={handleTemelBankacilikEnter}
                                onMouseLeave={handleTemelBankacilikLeave}
                            >
                        <span className="cursor-pointer text-gray-800">
                          {t.temelBankacilik}
                        </span>
                              {isTemelBankacilikOpen && (
                                  <ul className="absolute left-full top-0 ml-1 w-56 bg-white shadow-lg border border-gray-200 z-50">
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                      <Link
                                          to="/uzmanlik-alanlarimiz/danismanlik/temel-bankacilik/hazine"
                                          className="text-gray-800"
                                      >
                                        {t.hazine}
                                      </Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                      <Link
                                          to="/uzmanlik-alanlarimiz/danismanlik/temel-bankacilik/nakit-yonetimi"
                                          className="text-gray-800"
                                      >
                                        {t.nakitYonetimi}
                                      </Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                      <Link
                                          to="/uzmanlik-alanlarimiz/danismanlik/temel-bankacilik/krediler"
                                          className="text-gray-800"
                                      >
                                        {t.krediler}
                                      </Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                      <Link
                                          to="/uzmanlik-alanlarimiz/danismanlik/temel-bankacilik/risk-yonetimi"
                                          className="text-gray-800"
                                      >
                                        {t.riskYonetimi}
                                      </Link>
                                    </li>
                                  </ul>
                              )}
                            </li>
                            {/* Veri Yönetimi */}
                            <li
                                className="relative px-4 py-2 hover:bg-gray-100"
                                onMouseEnter={handleVeriYonetimiEnter}
                                onMouseLeave={handleVeriYonetimiLeave}
                            >
                        <span className="cursor-pointer text-gray-800">
                          {t.veriYonetimi}
                        </span>
                              {isVeriYonetimiOpen && (
                                  <ul className="absolute left-full top-0 ml-1 w-56 bg-white shadow-lg border border-gray-200 z-50">
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                      <Link
                                          to="/uzmanlik-alanlarimiz/danismanlik/veri-yonetimi/veri-mimarisi"
                                          className="text-gray-800"
                                      >
                                        {t.veriMimarisi}
                                      </Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                      <Link
                                          to="/uzmanlik-alanlarimiz/danismanlik/veri-yonetimi/veri-analitigi"
                                          className="text-gray-800"
                                      >
                                        {t.veriAnalitigi}
                                      </Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                      <Link
                                          to="/uzmanlik-alanlarimiz/danismanlik/veri-yonetimi/is-zekasi"
                                          className="text-gray-800"
                                      >
                                        {t.isZekasi}
                                      </Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                      <Link
                                          to="/uzmanlik-alanlarimiz/danismanlik/veri-yonetimi/yasal-raporlama"
                                          className="text-gray-800"
                                      >
                                        {t.yasalRaporlama}
                                      </Link>
                                    </li>
                                  </ul>
                              )}
                            </li>
                            {/* Dijital Dönüşüm */}
                            <li className="px-4 py-2 hover:bg-gray-100">
                              <Link
                                  to="/projeler/dijital-donusum"
                                  className="text-gray-800"
                              >
                                {t.dijitalDonusum}
                              </Link>
                            </li>
                            {/* Eğitim Danışmanlığı */}
                            <li className="px-4 py-2 hover:bg-gray-100">
                              <Link
                                  to="/projeler/egitim-danismanligi"
                                  className="text-gray-800"
                              >
                                {t.egitimDanismanligi}
                              </Link>
                            </li>
                          </ul>
                      )}
                    </li>
                    {/* Diğer linkler */}
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/surec-izleme" className="text-gray-800">
                        {t.surecIzleme}
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link
                          to="/proje-bazli-entegrasyon"
                          className="text-gray-800"
                      >
                        {t.projeBazliTeknoloji}
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/proje-yonetimi" className="text-gray-800">
                        {t.projeYonetimi}
                      </Link>
                    </li>
                  </ul>
              )}
            </li>
            <li className="text-white px-2">|</li>

            {/* FinAcademy */}
            <li>
              <Link to="/finacademy">{t.finAcademy}</Link>
            </li>
            <li className="text-white px-2">|</li>

            {/* Projeler */}
            <li>
              <Link to="/projeler">{t.projeler}</Link>
            </li>
            <li className="text-white px-2">|</li>

            {/* Kariyer */}
            <li>
              <Link to="/kariyer">{t.kariyer}</Link>
            </li>
            <li className="text-white px-2">|</li>

            {/* Bize Ulaşın */}
            <li>
              <Link to="/bize-ulasin">{t.bizeUlasin}</Link>
            </li>
          </ul>

          {/* Masaüstü Dil Değiştirme Butonu */}
          <div className="hidden md:flex items-center">
            <div
                className="flex items-center bg-white px-3 py-1 rounded-full shadow cursor-pointer"
                onClick={toggleLanguage}
            >
            <span role="img" aria-label="Globe" className="text-blue-600">
              🌐
            </span>
              <span className="text-gray-300 mx-2">|</span>
              <span
                  role="img"
                  aria-label={language === "tr" ? "Türkçe" : "English"}
                  className="text-red-600"
              >
              {language === "tr" ? "🇹🇷" : "🇺🇸"}
            </span>
            </div>
          </div>

          {/* Mobilde (küçük ekranda) hamburger + dil seçici */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobilde Dil Butonu */}
            <div
                className="flex items-center bg-white px-3 py-1 rounded-full shadow cursor-pointer"
                onClick={toggleLanguage}
            >
            <span role="img" aria-label="Globe" className="text-blue-600">
              🌐
            </span>
              <span className="text-gray-300 mx-2">|</span>
              <span
                  role="img"
                  aria-label={language === "tr" ? "Türkçe" : "English"}
                  className="text-red-600"
              >
              {language === "tr" ? "🇹🇷" : "🇺🇸"}
            </span>
            </div>
            {/* Hamburger Butonu */}
            <button
                className="text-white focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobil Menü Açıldığında */}
        {isMobileMenuOpen && (
            <ul className="md:hidden block mt-4 space-y-2 px-4">
              <li>
                <Link to="/hakkimizda" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.bizKimiz}
                </Link>
              </li>
              <li>
                <Link
                    to="/uzmanlik-alanlarimiz"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.uzmanlikAlanlarimiz}
                </Link>
              </li>
              <li>
                <Link to="/finacademy" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.finAcademy}
                </Link>
              </li>
              <li>
                <Link to="/projeler" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.projeler}
                </Link>
              </li>
              <li>
                <Link to="/kariyer" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.kariyer}
                </Link>
              </li>
              <li>
                <Link to="/bize-ulasin" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.bizeUlasin}
                </Link>
              </li>
            </ul>
        )}
      </nav>
  );
};

export default HeaderMenu;
