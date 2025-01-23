import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations";

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <footer className="footer bg-teal-500 text-white py-6">
      <div className="container mx-auto px-4">
        {}
        <div className="footer-top grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-4">{t.partnerlerimiz}</h3>
            <div className="flex justify-center space-x-6">
              <img src="/finberg-logo.png" alt="Finberg" className="h-12" />
              <img
                src="/turkiye-bankasi-logo.png"
                alt="Türkiye Bankası"
                className="h-12"
              />
              <img src="/makers-logo.png" alt="Makers" className="h-12" />
              <img src="/techbros-logo.png" alt="Techbros" className="h-12" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-4">{t.referanslarimiz}</h3>
            <div className="flex justify-center space-x-6">
              <img
                src="/inspire-it-logo.png"
                alt="Inspire IT"
                className="h-12"
              />
              <img src="/azor-logo.png" alt="Azor" className="h-12" />
              <img src="/qnb-logo.png" alt="QNB Finansbank" className="h-12" />
              <img src="/workup-logo.png" alt="Workup" className="h-12" />
            </div>
          </div>
        </div>

        {}
        <div className="footer-middle text-center mt-6">
          <p className="text-sm">
            {t.adresBilgisi} <br />
            <a
              href="mailto:info@finnovation.com.tr"
              className="underline hover:text-gray-300"
            >
              info@finnovation.com.tr
            </a>
          </p>
        </div>

        {}
        <p className="text-sm mt-4 text-center">
          ©️ 2025 Finnovation Website. {t.footerMessage}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
