import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeaderMenu: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Kurumsal");
  const [openSections, setOpenSections] = useState({
    genel: false,
    kariyer: false,
    fintech: false,
    tech: false,
    veri: false,
    dijital: false,
  });
  // const [showMobileLang, setShowMobileLang] = useState(false);
  const {
    t,
    // i18n
  } = useTranslation();
  // const currentLang = i18n.language;
  // const availableLang = currentLang === "tr" ? "en" : "tr";

  // const handleLanguageChange = () => {
  //   i18n.changeLanguage(availableLang);
  // };
  // Scroll'u engellemek için useEffect ekliyoruz
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Toggle fonksiyonu
  const toggleSection = (section: string) => {
    setOpenSections((prev) => {
      if (
        section === "genel" ||
        section === "kariyer" ||
        section === "fintech" ||
        section === "tech" ||
        section === "veri" ||
        section === "dijital"
      ) {
        return {
          ...prev,
          [section]: !prev[section],
        };
      }
      return prev;
    });
  };

  // Menü verilerini tanımlıyoruz
  const menuItems = {
    Kurumsal: {
      Genel: [
        { title: "hakkimizda", link: "/about/about-us" },
        { title: "degerlerimiz", link: "/about/values" },
        { title: "organizasyonsemasi", link: "/about/organization" },
        { title: "surdurulebilirlik", link: "/about/sustainability" },
      ],
      Kariyer: [
        { title: "basvuru", link: "/career/apply" },
        { title: "finnovationdacalismak", link: "/career/work-with-us" },
        { title: "kulturmuz", link: "/career/culture" },
        { title: "yetenekprogramlari", link: "/career/talent-programs" },
        { title: "cesitlilik&kapsayicilik", link: "/career/diversity" },
      ],
    },
    "Ürünler ve Hizmetler": {
      FinTech: [
        { title: "kredi", link: "/services/fintech/credit" },
        { title: "hazine", link: "/services/fintech/treasury" },
        { title: "nakityonetimi", link: "/services/fintech/cash-management" },
        {
          title: "riskyonetimivealm",
          link: "/services/fintech/risk-management",
        },
      ],
      Tech: [
        { title: "enerjitech", link: "/services/tech/energy" },
        { title: "agrotech", link: "/services/tech/agro" },
        { title: "healthtech", link: "/services/tech/health" },
        { title: "tourismtech", link: "/services/tech/tourism" },
        { title: "edutech", link: "/services/tech/edu" },
        { title: "retailtech", link: "/services/tech/retail" },
        { title: "aviationtech", link: "/services/tech/aviation" },
        { title: "medtech", link: "/services/tech/med" },
      ],
      Veri: [
        { title: "verimimarsi", link: "/services/data/architecture" },
        { title: "verianalitigi", link: "/services/data/analytics" },
        { title: "iszekasi", link: "/services/data/bi" },
        { title: "yasalreporlama", link: "/services/data/reporting" },
      ],
      Dijital: [
        {
          title: "surecizlemevegelistirme",
          link: "/services/digital/process",
        },
        {
          title: "projebazliteknolojivesistemyonetimi",
          link: "/services/digital/project-tech",
        },
        { title: "projeyonetimi", link: "/services/digital/management" },
        {
          title: "inovasyonvedegisimyonetimi",
          link: "/services/digital/innovation",
        },
        {
          title: "musterimemnuniyeti",
          link: "/services/digital/customer-satisfaction",
        },
      ],
    },
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1280 || isMobileMenuOpen) {
        setVisible(true);
        return;
      }

      const currentScrollPos = window.scrollY;

      if (currentScrollPos < 10) {
        setVisible(true);
        return;
      }

      const isVisible = prevScrollPos > currentScrollPos;
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [prevScrollPos, isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-3 bg-white transition-transform duration-300 ${
          visible ? "translate-y-0" : "xl:translate-y-0 -translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 ">
          {/* Logo ve Mobil Menü Butonu kısmını güncelliyoruz */}
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* Logo */}
            <Link to="/">
              <img
                src="/finnovation-logo.png"
                alt="Finnovation"
                className="h-8 sm:h-10 md:h-16 object-contain"
              />
            </Link>
          </div>

          {/* Overlay ve Mobil Menü */}
          <div
            className={`fixed inset-0 bg-white z-50 transition-transform duration-200 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } flex flex-col h-screen`}
          >
            {/* Mobil Menü Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <Link to="/">
                <img
                  src="/finnovation-logo.png"
                  alt="Finnovation"
                  className="h-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </Link>
              <div className="flex items-center gap-4">
                {/* Dil Değiştir Butonu - Mobil */}
                {/* <div className="relative">
                  <button
                    className="flex items-center text-[#3277BC]"
                    onClick={() => setShowMobileLang(!showMobileLang)}
                  >
                    <img
                      src="/world.png"
                      alt="Globe"
                      className="h-5 w-5 mr-2"
                    />
                    <span>{currentLang.toUpperCase()}</span>
                  </button>
                  {showMobileLang && (
                    <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-md py-2 w-20">
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-[#3377BC] hover:text-white"
                        onClick={handleLanguageChange}
                      >
                        {availableLang.toUpperCase()}
                      </button>
                    </div>
                  )}
                </div> */}

                {/* Kapatma Butonu */}
                <button
                  className="text-[#1E5E81]"
                  onClick={() => setIsMobileMenuOpen(false)}
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Kategori Baloncukları */}
            <div className="flex gap-2 p-4 border-b overflow-x-auto">
              {[
                { name: "Kurumsal", cat: "kurumsal" },
                { name: "Ürünler ve Hizmetler", cat: "urunlervehizmetler" },
                { name: "FinAcademy", cat: "FinAcademy" },
              ].map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                    selectedCategory === category.name
                      ? "bg-[#3377BC] text-white"
                      : "bg-[#F5F5F5] text-[#1E5E81] hover:bg-[#E5E5E5]"
                  }`}
                >
                  {t(category.cat)}
                </button>
              ))}
            </div>

            {/* Menü İçeriği - Scroll edilebilir alan */}
            <div className="flex-1 overflow-y-auto ">
              <div className="p-6 pb-24">
                {selectedCategory === "Kurumsal" && (
                  <div className="space-y-6">
                    {/* Genel Kategorisi */}
                    <div>
                      <button
                        onClick={() => toggleSection("genel")}
                        className="flex items-center justify-between w-full font-bold text-[#3377BC] mb-2"
                      >
                        <span>{t("genel")}</span>
                        <svg
                          className={`w-5 h-5 transition-transform ${
                            openSections.genel ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openSections.genel && (
                        <ul className="space-y-2 pl-2">
                          {menuItems["Kurumsal"].Genel.map((item) => (
                            <li key={item.title}>
                              <Link
                                to={item.link}
                                className="text-[#1E5E81] block py-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {t(item.title)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Kariyer Kategorisi */}
                    <div>
                      <button
                        onClick={() => toggleSection("kariyer")}
                        className="flex items-center justify-between w-full font-bold text-[#3377BC] mb-2"
                      >
                        <span>{t("kariyer")}</span>
                        <svg
                          className={`w-5 h-5 transition-transform ${
                            openSections.kariyer ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openSections.kariyer && (
                        <ul className="space-y-2 pl-2">
                          {menuItems["Kurumsal"].Kariyer.map((item) => (
                            <li key={item.title}>
                              <Link
                                to={item.link}
                                className="text-[#1E5E81] block py-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {t(item.title)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}

                {selectedCategory === "Ürünler ve Hizmetler" && (
                  <div className="space-y-6">
                    {/* FinTech Kategorisi */}
                    <div>
                      <button
                        onClick={() => toggleSection("fintech")}
                        className="flex items-center justify-between w-full font-bold text-[#3377BC] mb-2"
                      >
                        <span>FinTech</span>
                        <svg
                          className={`w-5 h-5 transition-transform ${
                            openSections.fintech ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openSections.fintech && (
                        <ul className="space-y-2 pl-2">
                          {menuItems["Ürünler ve Hizmetler"].FinTech.map(
                            (item) => (
                              <li key={item.title}>
                                <Link
                                  to={item.link}
                                  className="text-[#1E5E81] block py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {t(item.title)}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </div>

                    {/* Tech Kategorisi */}
                    <div>
                      <button
                        onClick={() => toggleSection("tech")}
                        className="flex items-center justify-between w-full font-bold text-[#3377BC] mb-2"
                      >
                        <span>Tech</span>
                        <svg
                          className={`w-5 h-5 transition-transform ${
                            openSections.tech ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openSections.tech && (
                        <ul className="space-y-2 pl-2">
                          {menuItems["Ürünler ve Hizmetler"].Tech.map(
                            (item) => (
                              <li key={item.title}>
                                <Link
                                  to={item.link}
                                  className="text-[#1E5E81] block py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {t(item.title)}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </div>

                    {/* Veri Kategorisi */}
                    <div>
                      <button
                        onClick={() => toggleSection("veri")}
                        className="flex items-center justify-between w-full font-bold text-[#3377BC] mb-2"
                      >
                        <span>{t("veri")}</span>
                        <svg
                          className={`w-5 h-5 transition-transform ${
                            openSections.veri ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openSections.veri && (
                        <ul className="space-y-2 pl-2">
                          {menuItems["Ürünler ve Hizmetler"].Veri.map(
                            (item) => (
                              <li key={item.title}>
                                <Link
                                  to={item.link}
                                  className="text-[#1E5E81] block py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {t(item.title)}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </div>

                    {/* Dijital Kategorisi */}
                    <div>
                      <button
                        onClick={() => toggleSection("dijital")}
                        className="flex items-center justify-between w-full font-bold text-[#3377BC] mb-2"
                      >
                        <span>{t("dijital")}</span>
                        <svg
                          className={`w-5 h-5 transition-transform ${
                            openSections.dijital ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openSections.dijital && (
                        <ul className="space-y-2 pl-2">
                          {menuItems["Ürünler ve Hizmetler"].Dijital.map(
                            (item) => (
                              <li key={item.title}>
                                <Link
                                  to={item.link}
                                  className="text-[#1E5E81] block py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {t(item.title)}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                  </div>
                )}

                {selectedCategory === "FinAcademy" && (
                  <div>
                    <Link
                      to="/academy"
                      className="text-[#1E5E81] block py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      FinAcademy
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Sosyal Medya İkonları - Sabit Alt Kısım */}
            <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4">
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="https://www.linkedin.com/company/finnovation-consultancy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/in.png" alt="LinkedIn" className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/Finnovation0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/git.png" alt="GitHub" className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/FinnovationC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/x.png" alt="X/Twitter" className="h-6 w-6" />
                </a>
                { <a
                  href="https://www.youtube.com/@finnovationyazlmcozumleri9346"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/youtube.png" alt="Youtube" className="h-6 w-6" />
                </a> }
                <a
                  href="https://www.instagram.com/finnovation_consultancy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/insta.png" alt="Instagram" className="h-6 w-6" />
                </a>
                <a
                  href="https://wa.me/905325428443"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/whatsapp.png" alt="Whatsapp" className="h-6 w-6" />
                </a>
                <a
                  href="/contact"
                  className="flex items-center"
                >
                  <img src="/mail.png" alt="Mail" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Menü */}
          <nav className="hidden lg:flex flex-nowrap items-center text-[#1E5E81] font-medium space-x-8 ml-12">
            {/* Kurumsal Menüsü */}
            <div className="relative group text-[#1E5E81] hover:text-[#FFFFFF] hover:bg-[#3377BC] py-2 px-4 rounded-full font-semibold hover:cursor-pointer">
              {/* <Link
                to="/about"
                className="text-[#1E5E81] hover:text-[#FFFFFF] hover:bg-[#3377BC] py-2 px-4 rounded-full font-semibold"
              > */}
              {t("kurumsal")}
              {/* </Link> */}

              <div className="absolute h-8 w-full left-0 bottom-0 translate-y-full"></div>
              <div className="fixed invisible group-hover:visible group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-300 top-[80px] left-0 right-0 bg-white shadow-lg border-t">
                <div className="max-w-5xl mx-auto p-6">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Genel Bölümü */}
                    <div>
                      <h3 className="font-bold text-[#1E5E81] text-lg mb-3">
                        {t("genel")}
                      </h3>
                      <ul className="space-y-2">
                        {menuItems["Kurumsal"].Genel.map((item) => (
                          <li key={item.title}>
                            <Link
                              to={item.link}
                              className="text-[#1E5E81] px-3 py-2 rounded-md block transition-colors duration-200"
                            >
                              {t(item.title)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Kariyer Bölümü */}
                    <div>
                      <h3 className="font-bold text-[#1E5E81] text-lg mb-3">
                        {t("kariyer")}
                      </h3>
                      <ul className="space-y-2">
                        {menuItems["Kurumsal"].Kariyer.map((item) => (
                          <li key={item.title}>
                            <Link
                              to={item.link}
                              className="text-[#1E5E81] px-3 py-2 rounded-md block transition-colors duration-200"
                            >
                              {t(item.title)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ürünler ve Hizmetler Menüsü - Desktop */}
            <div className="relative group text-[#1E5E81] hover:text-[#FFFFFF] hover:bg-[#3377BC] py-2 px-4 rounded-full font-semibold whitespace-nowrap hover:cursor-pointer">
              {/* <Link
                to="/services"
                className="text-[#1E5E81] hover:text-[#FFFFFF] hover:bg-[#3377BC] py-2 px-4 rounded-full font-semibold whitespace-nowrap"
              > */}
              {t("urunlervehizmetler")}
              {/* </Link> */}

              <div className="absolute h-8 w-full left-0 bottom-0 translate-y-full"></div>
              <div className="fixed invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 top-[80px] left-0 right-0 bg-white shadow-lg border-t">
                <div className="max-w-5xl mx-auto p-6">
                  <div className="grid grid-cols-4 gap-6">
                    {/* FinTech Bölümü */}
                    <div>
                      <h3 className="font-bold text-[#1E5E81] text-lg mb-3">
                        FinTech
                      </h3>
                      <ul className="space-y-2">
                        {menuItems["Ürünler ve Hizmetler"].FinTech.map(
                          (item) => (
                            <li key={item.title}>
                              <Link
                                to={item.link}
                                className="text-[#1E5E81] px-3 py-2 rounded-md block transition-colors duration-200 whitespace-nowrap"
                              >
                                {t(item.title)}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Tech Bölümü */}
                    <div>
                      <h3 className="font-bold text-[#1E5E81] text-lg mb-3">
                        Tech
                      </h3>
                      <ul className="space-y-2">
                        {menuItems["Ürünler ve Hizmetler"].Tech.map((item) => (
                          <li key={item.title}>
                            <Link
                              to={item.link}
                              className="text-[#1E5E81] px-3 py-2 rounded-md block transition-colors duration-200 whitespace-nowrap"
                            >
                              {t(item.title)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Veri Bölümü */}
                    <div>
                      <h3 className="font-bold text-[#1E5E81] text-lg mb-3">
                        {t("veri")}
                      </h3>
                      <ul className="space-y-2">
                        {menuItems["Ürünler ve Hizmetler"].Veri.map((item) => (
                          <li key={item.title}>
                            <Link
                              to={item.link}
                              className="text-[#1E5E81] px-3 py-2 rounded-md block transition-colors duration-200 whitespace-nowrap"
                            >
                              {t(item.title)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Dijital Bölümü */}
                    <div>
                      <h3 className="font-bold text-[#1E5E81] text-lg mb-3">
                        {t("dijital")}
                      </h3>
                      <ul className="space-y-2">
                        {menuItems["Ürünler ve Hizmetler"].Dijital.map(
                          (item) => (
                            <li key={item.title}>
                              <Link
                                to={item.link}
                                className="text-[#1E5E81] px-3 py-2 rounded-md block transition-colors duration-200 whitespace-nowrap"
                              >
                                {t(item.title)}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FinAcademy Menüsü */}
            <div className="relative group">
              <Link
                to="/academy"
                className="text-[#1E5E81] hover:text-[#FFFFFF] hover:bg-[#3377BC] py-2 px-4 rounded-full font-semibold"
              >
                FinAcademy
              </Link>
            </div>
          </nav>

          {/* Sağ Kısım - Desktop */}
          <div
            className="hidden xl:flex items-center space-x-4 justify-end"
            style={{ minWidth: "500px" }}
          >
            {/* Sosyal Medya İkonları */}
            <div className="flex items-center border-2 border-[#3277BC] text-[#3277BC] rounded-full px-4 py-2 space-x-3 min-w-max">
              <a
                href="https://www.linkedin.com/company/finnovation-consultancy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/in.png" alt="LinkedIn" className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Finnovation0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/git.png" alt="GitHub" className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/FinnovationC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/x.png" alt="X/Twitter" className="h-5 w-5" />
              </a>
              { <a
                href="https://www.youtube.com/@finnovationyazlmcozumleri9346"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/youtube.png" alt="Youtube" className="h-5 w-5" />
              </a> }
              <a
                href="https://www.instagram.com/finnovation_consultancy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/insta.png" alt="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/905325428443"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/whatsapp.png" alt="Whatsapp" className="h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="flex items-center"
              >
                <img src="/mail.png" alt="Mail" className="h-5 w-5" />
              </a>
            </div>

            {/* Dil Değiştir Butonu - Desktop */}
            {/* <div className="group relative">
              <div className="flex items-center border-2 border-[#3277BC] text-[#3277BC] rounded-full px-3 py-2 font-medium hover:bg-[#3277BC] hover:text-white cursor-pointer transition-colors group-hover:bg-[#3277BC] group-hover:text-white">
                <img
                  src="/world.png"
                  alt="Globe"
                  className="h-5 w-5 mr-2 group-hover:brightness-0 group-hover:invert"
                />
                <span>{currentLang.toUpperCase()}</span>
              </div>
              <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 top-full right-0 mt-1 bg-white shadow-lg rounded-md py-2">
                <button
                  onClick={handleLanguageChange}
                  className="w-full text-left px-4 py-2 hover:bg-[#3377BC] hover:text-white"
                >
                  {availableLang.toUpperCase()}
                </button>
              </div>
            </div> */}
          </div>

          {/* Mobil Menü Butonu */}
          <button
            className="xl:hidden text-[#1E5E81] ml-4"
            onClick={() => setIsMobileMenuOpen(true)}
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
      </header>
    </>
  );
};

export default HeaderMenu;
