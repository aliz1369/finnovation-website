import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderMenu: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('bizKimiz');

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

  const menuCategories = [
    { id: 'bizKimiz', title: 'Biz Kimiz?' },
    { id: 'urunlerHizmetler', title: 'Ürünler ve Hizmetler' },
    { id: 'finAcademy', title: 'FinAcademy' }
  ];

  return (
    <>
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
            className={`fixed inset-0 bg-white z-50 md:hidden transform transition-all duration-300 flex flex-col ${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* Menü Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <Link to="/">
                <img
                  src="/finnovation-logo.png"
                  alt="Finnovation"
                  className="h-8"
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

            {/* Kategori Baloncukları */}
            <div className="flex gap-2 p-4 border-b overflow-x-auto">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-[#3377BC] text-white'
                      : 'bg-[#F5F5F5] text-[#1E5E81] hover:bg-[#E5E5E5]'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Seçili Kategorinin İçeriği - Scroll edilebilir alan */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 pb-24"> {/* Alt kısımda sosyal medya ikonları için boşluk bırakıyoruz */}
                <div className="p-6">
                  {selectedCategory === 'bizKimiz' && (
                    <div className="space-y-6">
                      {/* Genel Kategorisi */}
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

                      {/* Kariyer Kategorisi */}
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

                  {selectedCategory === 'urunlerHizmetler' && (
                    <div className="space-y-6">
                      {/* FinTech Kategorisi */}
                      <div>
                        <div className="font-medium text-[#3377BC] mb-2">FinTech</div>
                        {/* Temel Bankacılık Ürünleri */}
                        <div className="mb-4">
                          <div className="font-medium text-[#1E5E81] ml-2 mb-2">Temel Bankacılık Ürünleri</div>
                          <ul className="space-y-2 pl-4">
                            {menuItems["Ürünler ve Hizmetler"].FinTech.items[0].items?.map((item) => (
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
                        {/* Diğer FinTech Linkleri */}
                        <ul className="space-y-2 pl-2">
                          {menuItems["Ürünler ve Hizmetler"].FinTech.items.slice(1).map((item) => (
                            <li key={item.title}>
                              <Link
                                to={item.link || ''}
                                className="text-[#1E5E81] block py-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Vedubox Kategorisi */}
                      <div>
                        <div className="font-medium text-[#3377BC] mb-2">Vedubox</div>
                        <ul className="space-y-2 pl-2">
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
                      </div>

                      {/* Veri Kategorisi */}
                      <div>
                        <div className="font-medium text-[#3377BC] mb-2">Veri</div>
                        <ul className="space-y-2 pl-2">
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
                      </div>

                      {/* Dijital Dönüşüm Kategorisi */}
                      <div>
                        <div className="font-medium text-[#3377BC] mb-2">Dijital Dönüşüm</div>
                        <ul className="space-y-2 pl-2">
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
                      </div>
                    </div>
                  )}

                  {selectedCategory === 'finAcademy' && (
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
            </div>

            {/* Sosyal Medya İkonları - Sabit Alt Kısım */}
            <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4">
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

          {/* Desktop Menü */}
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
                    {/* ... diğer masaüstü menü içeriği ... */}
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
              <a href="https://tr.linkedin.com/company/finnovation-consultancy" target="_blank" rel="noopener noreferrer">
                <img src="/in.png" alt="LinkedIn" className="h-5 w-5" />
              </a>
              <a href="https://github.com/hayyam23" target="_blank" rel="noopener noreferrer">
                <img src="/git.png" alt="GitHub" className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/x.png" alt="X/Twitter" className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="/youtube.png" alt="Youtube" className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/finacademy_tr" target="_blank" rel="noopener noreferrer">
                <img src="/insta.png" alt="Instagram" className="h-5 w-5" />
              </a>
              <a href="https://wa.me/905325428443" target="_blank" rel="noopener noreferrer">
                <img src="/whatsapp.png" alt="Whatsapp" className="h-5 w-5" />
              </a>
              <a href="mailto:yusuf@finnovation.com.tr" target="_blank" rel="noopener noreferrer">
                <img src="/mail.png" alt="Mail" className="h-5 w-5" />
              </a>
            </div>

            {/* Dil Değiştir Butonu */}
            <div className="flex items-center border-2 border-[#3277BC] text-[#3277BC] rounded-full px-3 py-2 font-medium hover:bg-[#3277BC] hover:text-white cursor-pointer transition-colors">
              <img src="/world.png" alt="Globe" className="h-5 w-5 mr-2" />
              <span>TR</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderMenu;
