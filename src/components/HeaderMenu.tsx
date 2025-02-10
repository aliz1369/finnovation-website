import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu: React.FC = () => {
  return (
    <header className="fixed top-3 left-0 w-full z-50 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/public/finnovation-logo.png"
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
          <Link to="/about" className="hover:text-[#3277BC]">
            Biz Kimiz?
          </Link>
          <span className="font-bold">•</span>

          <Link to="/services" className="hover:text-[#3277BC]">
            Uzmanlık Alanlarımız
          </Link>
          <span className="font-bold">•</span>

          <Link to="/academy" className="hover:text-[#3277BC]">
            FinAcademy
          </Link>
          <span className="font-bold">•</span>

          <Link to="/products" className="hover:text-[#3277BC]">
            Ürünler
          </Link>
          <span className="font-bold">•</span>

          <Link to="/projects" className="hover:text-[#3277BC]">
            Projeler
          </Link>
        </nav>

        {/* Sağ Kısım */}
        <div className="flex items-center space-x-4">
          {/* Bize Ulaşın Butonu */}
          <Link
            to="/contact"
            className="flex items-center space-x-2 bg-[#3277BC] text-white px-4 py-2 rounded-full font-medium hover:bg-[#2b66a2] transition-colors"
          >
            <img src="/public/phone.png" alt="Phone" className="h-4 w-4" />
            <span>Bize Ulaşın</span>
          </Link>

          {/* Sosyal Medya İkonları */}
          <div className="hidden sm:flex items-center border-2 border-[#3277BC] text-[#3277BC] rounded-full px-4 py-2 space-x-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/public/in.png" alt="LinkedIn" className="h-5 w-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="/public/git.png" alt="GitHub" className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/public/insta.png" alt="Instagram" className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/public/x.png" alt="X/Twitter" className="h-5 w-5" />
            </a>
          </div>

          {/* Dil Değiştir Butonu */}
          <div className="flex items-center border-2 border-[#3277BC] text-[#3277BC] rounded-full px-3 py-2 font-medium hover:bg-[#3277BC] hover:text-white cursor-pointer transition-colors">
            <img src="/public/world.png" alt="Globe" className="h-5 w-5 mr-2" />
            <span>TR</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
