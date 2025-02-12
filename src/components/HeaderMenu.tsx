import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu: React.FC = () => {
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
      FinTech: [
        { title: "Kredi", link: "/services/fintech/credit" },
        { title: "Hazine", link: "/services/fintech/treasury" },
        { title: "Nakit Yönetimi", link: "/services/fintech/cash-management" },
        { title: "Risk Yönetimi & ALM", link: "/services/fintech/risk-management" },
      ],
      Tech: [
        { title: "EnerjiTech", link: "/services/tech/energy" },
        { title: "AgroTech", link: "/services/tech/agro" },
        { title: "HealthTech", link: "/services/tech/health" },
        { title: "TourismTech", link: "/services/tech/tourism" },
        { title: "EduTech", link: "/services/tech/edu" },
        { title: "RetailTech", link: "/services/tech/retail" },
        { title: "AviationTech", link: "/services/tech/aviation" },
        { title: "MedTech", link: "/services/tech/med" },
      ],
      Veri: [
        { title: "Veri Mimarisi", link: "/services/data/architecture" },
        { title: "Veri Analitiği", link: "/services/data/analytics" },
        { title: "İş Zekası", link: "/services/data/bi" },
        { title: "Yasal Raporlama", link: "/services/data/reporting" },
      ],
      Dijital: [
        { title: "Süreç İzleme ve Geliştirme", link: "/services/digital/process" },
        { title: "Proje Bazlı Teknoloji ve Sistem Yönetimi", link: "/services/digital/project-tech" },
        { title: "Proje Yönetimi", link: "/services/digital/management" },
        { title: "İnovasyon ve Değişim Yönetimi", link: "/services/digital/innovation" },
        { title: "Müşteri Memnuniyeti", link: "/services/digital/customer-satisfaction" },
      ],
    },
  };

  return (
    <header className="fixed top-3 left-0 w-full z-50 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/finnovation-logo.png"
              alt="Finnovation"
              className="h-8 sm:h-9 md:h-19 object-contain"
            />
          </Link>
        </div>

        {/* Orta Kısım - Menü */}
        {/* 
            Aşağıdaki örnekte iki yöntemden birini tercih edebilirsiniz:
            1) Yalnızca Tailwind responsive sınıfları:
               className="hidden md:flex ... text-sm md:text-base lg:text-lg ..."
            2) CSS clamp() ile dinamik yazı boyutu (aşağıda aktif):
        */}
        <nav
          className="hidden md:flex flex-nowrap items-center text-gray-700 font-medium space-x-3 sm:space-x-3 lg:space-x-4"
          style={{ fontSize: "clamp(0.875rem, 1vw + 0.5rem, 1.125rem)" }}
        >
          {/* Her bir ana menü itemi için */}
          <div className="relative group">
            <Link to="/about" className="hover:text-[#3277BC] py-4">
              Biz Kimiz?
            </Link>
            
            {/* Hover menü */}
            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 top-full left-0 bg-white shadow-lg rounded-lg min-w-[200px] p-4">
              <div className="flex gap-8">
                {/* Genel Bölümü */}
                <div>
                  <h3 className="font-bold text-[#3277BC] mb-2">Genel</h3>
                  <ul className="space-y-2">
                    {menuItems["Biz Kimiz?"].Genel.map((item) => (
                      <li key={item.title}>
                        <Link
                          to={item.link}
                          className="hover:text-[#3277BC] block"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Kariyer Bölümü */}
                <div>
                  <h3 className="font-bold text-[#3277BC] mb-2">Kariyer</h3>
                  <ul className="space-y-2">
                    {menuItems["Biz Kimiz?"].Kariyer.map((item) => (
                      <li key={item.title}>
                        <Link
                          to={item.link}
                          className="hover:text-[#3277BC] block"
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

          <span className="font-bold">•</span>

          {/* Ürünler ve Hizmetler Menüsü */}
          <div className="relative group">
            <Link to="/services" className="hover:text-[#3277BC] py-4">
              Ürünler ve Hizmetler
            </Link>
            
            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 top-full left-0 bg-white shadow-lg rounded-lg p-4">
              <div className="flex gap-8">
                {/* FinTech Bölümü */}
                <div>
                  <h3 className="font-bold text-[#3277BC] mb-2">FinTech</h3>
                  <ul className="space-y-2">
                    {menuItems["Ürünler ve Hizmetler"].FinTech.map((item) => (
                      <li key={item.title}>
                        <Link to={item.link} className="hover:text-[#3277BC] block whitespace-nowrap">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Bölümü */}
                <div>
                  <h3 className="font-bold text-[#3277BC] mb-2">Tech</h3>
                  <ul className="space-y-2">
                    {menuItems["Ürünler ve Hizmetler"].Tech.map((item) => (
                      <li key={item.title}>
                        <Link to={item.link} className="hover:text-[#3277BC] block whitespace-nowrap">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Veri Bölümü */}
                <div>
                  <h3 className="font-bold text-[#3277BC] mb-2">Veri Yönetimi</h3>
                  <ul className="space-y-2">
                    {menuItems["Ürünler ve Hizmetler"].Veri.map((item) => (
                      <li key={item.title}>
                        <Link to={item.link} className="hover:text-[#3277BC] block whitespace-nowrap">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dijital Bölümü */}
                <div>
                  <h3 className="font-bold text-[#3277BC] mb-2">Dijital Dönüşüm</h3>
                  <ul className="space-y-2">
                    {menuItems["Ürünler ve Hizmetler"].Dijital.map((item) => (
                      <li key={item.title}>
                        <Link to={item.link} className="hover:text-[#3277BC] block whitespace-nowrap">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <span className="font-bold">•</span>

          {/* FinAcademy Menüsü */}
          <div className="relative group">
            <Link to="/academy" className="hover:text-[#3277BC] py-4">
              FinAcademy
            </Link>
          </div>
        </nav>

        {/* Sağ Kısım */}
        <div className="flex items-center space-x-4">
          {/* Bize Ulaşın Butonu */}
          <Link
            to="/contact"
            className="flex items-center space-x-2 bg-[#3277BC] text-white px-4 py-2 rounded-full font-medium hover:bg-[#2b66a2] transition-colors"
          >
            <img src="/phone.png" alt="Phone" className="h-4 w-4" />
            <span>Bize Ulaşın</span>
          </Link>

          {/* Sosyal Medya İkonları */}
          <div className="hidden sm:flex items-center border-2 border-[#3277BC] text-[#3277BC] rounded-full px-4 py-2 space-x-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/in.png" alt="LinkedIn" className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/git.png" alt="GitHub" className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/insta.png" alt="Instagram" className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/x.png" alt="X/Twitter" className="h-5 w-5" />
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
  );
};

export default HeaderMenu;
