import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu: React.FC = () => {
  return (
    <header className="bg-white w-full py-3 px-8 flex items-center justify-between fixed top-3 left-0 z-50">
      {/* Sol Kısım - Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img
            src="/finnovation-logo.png"
            alt="Finnovation"
            className="h-12"
          />
        </Link>
      </div>

      {/* Orta Kısım - Menü */}
      <nav className="flex items-center space-x-6 text-gray-700 font-medium">
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
        <span className="font-bold">•</span>
        <Link to="/careers" className="hover:text-[#3277BC]">
          Kariyer
        </Link>
      </nav>

      {/* Sağ Kısım */}
      <div className="flex items-center space-x-4">
        {/* Bize Ulaşın Butonu */}
        <Link
          to="/contact"
          className="flex items-center space-x-2 bg-[#3277BC] text-white px-4 py-2 rounded-full font-medium shadow hover:bg-[#2b66a2] transition-colors"
        >
          <img src="/phone.png" alt="Phone" className="h-4 w-4" />
          <span>Bize Ulaşın</span>
        </Link>

        {/* Sosyal Medya İkonları - Tek elips içerisinde */}
        <div className="flex items-center">
          <div className="flex items-center justify-around border-2 border-[#3277BC] text-[#3277BC] rounded-full w-40 h-12">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img src="/in.png" alt="LinkedIn" className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img src="/git.png" alt="GitHub" className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img src="/insta.png" alt="Instagram" className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img src="/x.png" alt="X/Twitter" className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Dil Değiştir Butonu */}
        <div className="flex items-center border-2 border-[#3277BC] text-[#3277BC] rounded-full px-3 py-2 font-medium hover:bg-[#3277BC] hover:text-white cursor-pointer transition-colors">
          <img src="/world.png" alt="Globe" className="h-5 w-5 mr-2" />
          <span>TR</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
