import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderMenu: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Açılır/kapanır menüler için state'ler
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({
    bizKimiz: false,
    urunlerHizmetler: false,
    fintech: false,
    temelBankacilik: false,
    vedubox: false,
    veri: false,
    dijitalDonusum: false
  });

  // Scroll'u engellemek için useEffect ekliyoruz
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Dışarı tıklamayı handle eden fonksiyon
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuOpen(false);
    }
  };

  // Bölüm açma/kapama fonksiyonu
  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Menü verilerini tanımlıyoruz
  const menuItems = {
    "Biz Kimiz?": {
      Genel: [
        { title: "Hakkımızda", link: "/about/about-us" },
        { title: "Değerlerimiz", link: "/about/values" },
        { title: "Organizasyon Şeması", link: "/about/organization" },
        { title: "Sürdürülebilirlik", link: "/about/sustainability" },
      ],
      Kariyer: [
        { title: "Başvuru", link: "/career/apply" },
        { title: "Finnovation'da Çalışmak", link: "/career/work-with-us" },
        { title: "Kültürümüz", link: "/career/culture" },
        { title: "Yetenek Programları", link: "/career/talent-programs" },
        { title: "Çeşitlilik & Kapsayıcılık", link: "/career/diversity" },
      ],
    },
    "Ürünler ve Hizmetler": {
      FinTech: {
        title: "FinTech",
        items: [
          { title: "Temel Bankacılık Ürünleri", items: [
            { title: "Kredi", link: "/services/fintech/credit" },
            { title: "Hazine", link: "/services/fintech/treasury" },
            { title: "Nakit Yönetimi", link: "/services/fintech/cash-management" },
            { title: "Risk Yönetimi & ALM", link: "/services/fintech/risk-management" },
          ]},
          { title: "RisCode", link: "/services/tech/riscode" },
          { title: "EnerjiTech", link: "/services/tech/energy" },
          { title: "AgroTech", link: "/services/tech/agro" },
          { title: "HealthTech", link: "/services/tech/health" },
          { title: "TourismTech", link: "/services/tech/tourism" },
        ]
      },
      Vedubox: [
        { title: "RetailTech", link: "/services/tech/retail" },
        { title: "AviationTech", link: "/services/tech/aviation" },
        { title: "MedTech", link: "/services/tech/med" },
        { title: "Veri Yönetimi", link: "/services/tech/data-management" },
      ],
      Veri: [
        { title: "Veri Mimarisi", link: "/services/data/architecture" },
        { title: "Veri Analitiği", link: "/services/data/analytics" },
        { title: "İş Zekası", link: "/services/data/bi" },
        { title: "Yasal Raporlama", link: "/services/data/reporting" },
      ],
      "Dijital Dönüşüm": [
        { title: "Süreç İzleme ve Geliştirme", link: "/services/digital/process" },
        { title: "Proje Bazlı Teknoloji ve Sistem Yönetimi", link: "/services/digital/project-tech" },
        { title: "Proje Yönetimi", link: "/services/digital/management" },
        { title: "İnovasyon ve Değişim Yönetimi", link: "/services/digital/innovation" },
        { title: "Müşteri Memnuniyeti", link: "/services/digital/customer-satisfaction" },
      ],
    },
  };

  return (
    <header className="fixed top-3 left-0 right-0 z-50 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo ve Mobil Menü Butonu kısmını güncelliyoruz */}
        <div className="flex items-center space-x-5">
          {/* Mobil Menü Butonu */}
          <button
            className="md:hidden text-[#1E5E81]"
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

          {/* Logo */}
          <Link to="/">
            <img
              src="/finnovation-logo.png"
              alt="Finnovation"
              className="h-8 sm:h-9 md:h-19 object-contain"
            />
          </Link>
        </div>

        {/* Overlay ve Mobil Menü */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={handleOverlayClick}
          />
        )}
        
        <div
          className={`fixed inset-y-0 left-0 w-[70%] max-w-[300px] bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-xl flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
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

          {/* Mobil Menü İçeriği - Scroll edilebilir alan */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <nav className="space-y-6">
                {/* Biz Kimiz? Bölümü */}
                <div>
                  <button
                    onClick={() => toggleSection('bizKimiz')}
                    className="w-full flex items-center justify-between text-lg font-semibold text-[#1E5E81] mb-3"
                  >
                    <span>Biz Kimiz?</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${openSections.bizKimiz ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSections.bizKimiz && (
                    <div className="pl-4 space-y-4">
                      <div>
                        <div className="font-medium text-[#3377BC] mb-2">Genel</div>
                        <ul className="space-y-2 pl-2">
                          {menuItems["Biz Kimiz?"].Genel.map((item) => (
                            <li key={item.title}>
                              <Link
                                to={item.link}
                                className="text-[#1E5E81] block py-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="font-medium text-[#3377BC] mb-2">Kariyer</div>
                        <ul className="space-y-2 pl-2">
                          {menuItems["Biz Kimiz?"].Kariyer.map((item) => (
                            <li key={item.title}>
                              <Link
                                to={item.link}
                                className="text-[#1E5E81] block py-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Ürünler ve Hizmetler Bölümü */}
                <div>
                  <button
                    onClick={() => toggleSection('urunlerHizmetler')}
                    className="w-full flex items-center justify-between text-lg font-semibold text-[#1E5E81] mb-3"
                  >
                    <span>Ürünler ve Hizmetler</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${openSections.urunlerHizmetler ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSections.urunlerHizmetler && (
                    <div className="pl-4 space-y-4">
                      {/* FinTech */}
                      <div>
                        <button
                          onClick={() => toggleSection('fintech')}
                          className="w-full flex items-center justify-between font-medium text-[#3377BC] mb-2"
                        >
                          <span>FinTech</span>
                          <svg
                            className={`w-4 h-4 transform transition-transform ${openSections.fintech ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openSections.fintech && (
                          <div className="pl-4 space-y-4">
                            {menuItems["Ürünler ve Hizmetler"].FinTech.items.map((item) => (
                              <div key={item.title}>
                                {item.items ? (
                                  // Temel Bankacılık Ürünleri için
                                  <>
                                    <button
                                      onClick={() => toggleSection('temelBankacilik')}
                                      className="w-full flex items-center justify-between font-medium text-[#1E5E81] mb-2"
                                    >
                                      <span>{item.title}</span>
                                      <svg
                                        className={`w-4 h-4 transform transition-transform ${openSections.temelBankacilik ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                      </svg>
                                    </button>
                                    {openSections.temelBankacilik && (
                                      <ul className="space-y-2 pl-4">
                                        {item.items.map((subItem) => (
                                          <li key={subItem.title}>
                                            <Link
                                              to={subItem.link}
                                              className="text-[#1E5E81] block py-1"
                                              onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                              {subItem.title}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </>
                                ) : (
                                  // Diğer linkler için
                                  <Link
                                    to={item.link}
                                    className="text-[#1E5E81] block py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {item.title}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Vedubox */}
                      <div>
                        <button
                          onClick={() => toggleSection('vedubox')}
                          className="w-full flex items-center justify-between font-medium text-[#3377BC] mb-2"
                        >
                          <span>Vedubox</span>
                          <svg
                            className={`w-4 h-4 transform transition-transform ${openSections.vedubox ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openSections.vedubox && (
                          <ul className="space-y-2 pl-4">
                            {menuItems["Ürünler ve Hizmetler"].Vedubox.map((item) => (
                              <li key={item.title}>
                                <Link
                                  to={item.link}
                                  className="text-[#1E5E81] block py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Veri */}
                      <div>
                        <button
                          onClick={() => toggleSection('veri')}
                          className="w-full flex items-center justify-between font-medium text-[#3377BC] mb-2"
                        >
                          <span>Veri</span>
                          <svg
                            className={`w-4 h-4 transform transition-transform ${openSections.veri ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openSections.veri && (
                          <ul className="space-y-2 pl-4">
                            {menuItems["Ürünler ve Hizmetler"].Veri.map((item) => (
                              <li key={item.title}>
                                <Link
                                  to={item.link}
                                  className="text-[#1E5E81] block py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Dijital Dönüşüm */}
                      <div>
                        <button
                          onClick={() => toggleSection('dijitalDonusum')}
                          className="w-full flex items-center justify-between font-medium text-[#3377BC] mb-2"
                        >
                          <span>Dijital Dönüşüm</span>
                          <svg
                            className={`w-4 h-4 transform transition-transform ${openSections.dijitalDonusum ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openSections.dijitalDonusum && (
                          <ul className="space-y-2 pl-4">
                            {menuItems["Ürünler ve Hizmetler"]["Dijital Dönüşüm"].map((item) => (
                              <li key={item.title}>
                                <Link
                                  to={item.link}
                                  className="text-[#1E5E81] block py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* FinAcademy */}
                <div>
                  <Link
                    to="/academy"
                    className="text-lg font-semibold text-[#1E5E81] block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FinAcademy
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          {/* Sabit Alt Kısım - Sosyal Medya İkonları */}
          <div className="border-t bg-white p-4">
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://tr.linkedin.com/company/finnovation-consultancy" target="_blank" rel="noopener noreferrer">
                <img src="/in.png" alt="LinkedIn" className="h-6 w-6" />
              </a>
              <a href="https://github.com/hayyam23" target="_blank" rel="noopener noreferrer">
                <img src="/git.png" alt="GitHub" className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/x.png" alt="X/Twitter" className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="/youtube.png" alt="Youtube" className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/finacademy_tr" target="_blank" rel="noopener noreferrer">
                <img src="/insta.png" alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="https://wa.me/905325428443" target="_blank" rel="noopener noreferrer">
                <img src="/whatsapp.png" alt="Whatsapp" className="h-6 w-6" />
              </a>
              <a href="mailto:yusuf@finnovation.com.tr" target="_blank" rel="noopener noreferrer">
                <img src="/mail.png" alt="Mail" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Orta Kısım - Menü */}
        <nav
          className="hidden md:flex flex-nowrap items-center text-[#1E5E81] font-medium space-x-8 ml-12"
          style={{ fontSize: "clamp(0.875rem, 1vw + 0.5rem, 1.125rem)" }}
        >
          {/* Biz Kimiz? Menüsü */}
          <div className="relative group">
            <Link to="/about" className="text-[#1E5E81] hover:text-[#FFFFFF] hover:bg-[#3377BC] py-2 px-4 rounded-full font-semibold">
              Biz Kimiz?
            </Link>
            
            <div className="fixed invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 top-20 left-0 right-0 bg-white shadow-lg p-12 w-full border-t">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 gap-12">
                  {/* Genel Bölümü */}
                  <div>
                    <h3 className="font-bold text-[#1E5E81] text-xl mb-4">Genel</h3>
                    <ul className="space-y-3">
                      {menuItems["Biz Kimiz?"].Genel.map((item) => (
                        <li key={item.title}>
                          <Link
                            to={item.link}
                            className="text-[#1E5E81] px-3 py-2 rounded-md block transition-colors duration-200"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Kariyer Bölümü */}
                  <div>
                    <h3 className="font-bold text-[#1E5E81] text-xl mb-4">Kariyer</h3>
                    <ul className="space-y-3">
                      {menuItems["Biz Kimiz?"].Kariyer.map((item) => (
                        <li key={item.title}>
                          <Link
                            to={item.link}
                            className="text-[#1E5E81] px-3 py-2 rounded-md block transition-colors duration-200"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Ürünler ve Hizmetler Menüsü */}
          <div className="relative group">
            <Link to="/services" className="text-[#1E5E81] hover:text-[#FFFFFF] hover:bg-[#3377BC] py-2 px-4 rounded-full font-semibold">
              Ürünler ve Hizmetler
            </Link>
            
            <div className="fixed invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 top-20 left-0 right-0 bg-white shadow-lg p-12 w-full border-t">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-4 gap-12">
                  {/* FinTech Bölümü */}
                  <div>
                    <h3 className="font-bold text-[#1E5E81] text-xl mb-4">FinTech</h3>
                    <ul className="space-y-3">
                      {menuItems["Ürünler ve Hizmetler"].FinTech.items.map((item) => (
                        <li key={item.title}>
                          {item.items ? (
                            // Temel Bankacılık Ürünleri için
                            <>
                              <button
                                onClick={() => toggleSection('temelBankacilik')}
                                className="w-full flex items-center justify-between font-medium text-[#1E5E81] mb-2"
                              >
                                <span>{item.title}</span>
                                <svg
                                  className={`w-4 h-4 transform transition-transform ${openSections.temelBankacilik ? 'rotate-180' : ''}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              {openSections.temelBankacilik && (
                                <ul className="space-y-2 pl-4">
                                  {item.items.map((subItem) => (
                                    <li key={subItem.title}>
                                      <Link
                                        to={subItem.link}
                                        className="text-[#1E5E81] block py-1"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {subItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          ) : (
                            // Diğer linkler için
                            <Link
                              to={item.link}
                              className="text-[#1E5E81] block py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Bölümü */}
                  <div>
                    <h3 className="font-bold text-[#1E5E81] text-xl mb-4">Tech</h3>
                    <ul className="space-y-3">
                      {menuItems["Ürünler ve Hizmetler"].FinTech.items.map((item) => (
                        <li key={item.title}>
                          <Link
                            to={item.link || '#'}
                            className="text-[#1E5E81] px-3 py-2 rounded-md block transition-colors duration-200 whitespace-nowrap"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Veri Bölümü */}
                  <div>
                    <h3 className="font-bold text-[#1E5E81] text-xl mb-4">Veri Yönetimi</h3>
                    <ul className="space-y-3">
                      {menuItems["Ürünler ve Hizmetler"].Vedubox.map((item) => (
                        <li key={item.title}>
                          <Link
                            to={item.link}
                            className="text-[#1E5E81] px-3 py-2 rounded-md block transition-colors duration-200 whitespace-nowrap"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dijital Bölümü */}
                  <div>
                    <h3 className="font-bold text-[#1E5E81] text-xl mb-4">Dijital Dönüşüm</h3>
                    <ul className="space-y-3">
                      {menuItems["Ürünler ve Hizmetler"]["Dijital Dönüşüm"].map((item) => (
                        <li key={item.title}>
                          <Link
                            to={item.link}
                            className="text-[#1E5E81] px-3 py-2 rounded-md block transition-colors duration-200 whitespace-nowrap"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FinAcademy Menüsü */}
          <div className="relative group">
            <Link to="/academy" className="text-[#1E5E81] hover:text-[#FFFFFF] hover:bg-[#3377BC] py-2 px-4 rounded-full font-semibold">
              FinAcademy
            </Link>
          </div>
        </nav>

        {/* Sağ Kısım - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Sosyal Medya İkonları */}
          <div className="flex items-center border-2 border-[#3277BC] text-[#3277BC] rounded-full px-4 py-2 space-x-3">
            <a
              href="https://tr.linkedin.com/company/finnovation-consultancy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/in.png" alt="LinkedIn" className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/hayyam23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/git.png" alt="GitHub" className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/x.png" alt="X/Twitter" className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/youtube.png" alt="Youtube" className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/finacademy_tr"
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
              href="mailto:yusuf@finnovation.com.tr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/mail.png" alt="Mail" className="h-5 w-5" />
            </a>
          </div>

          {/* Dil Değiştir Butonu - Sadece Desktop */}
          <div className="flex items-center border-2 border-[#3277BC] text-[#3277BC] rounded-full px-3 py-2 font-medium hover:bg-[#3277BC] hover:text-white cursor-pointer transition-colors">
            <img src="/world.png" alt="Globe" className="h-5 w-5 mr-2" />
            <span>TR</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
