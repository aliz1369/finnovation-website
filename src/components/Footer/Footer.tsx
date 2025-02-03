// src/components/Footer/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-teal-500 text-white">
            {/* İçerikleri ortalamak için container ve temel padding değerleri ekliyoruz */}
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center md:items-start justify-between">

                {/* Logo Bölümü */}
                <div className="mb-4 md:mb-0">
                    <img
                        src="/finnovation-logo.png"
                        alt="Finnovation Logo"
                        className="h-11"
                    />
                </div>

                {/* Adres Bloğu (orta kısım) */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p>Barış Mahallesi, Koşuyolu Caddesi Kuğuçka Merkezi No:30 Gebze / Kocaeli</p>
                    <p>info@finnovation.com.tr</p>
                    <p className="mt-2">
                        © 2025 Finnovation Website. Tüm hakları saklıdır.
                    </p>
                </div>

                {/* Sosyal İkonlar (sağ kısım) */}
                <div className="flex space-x-4">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center"
                    >
                        <img src="/linkedin-icon.png" alt="LinkedIn" className="h-6" />
                        <span className="text-xs">LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center"
                    >
                        <img src="/github-icon.png" alt="GitHub" className="h-6" />
                        <span className="text-xs">GitHub</span>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center"
                    >
                        <img src="/twitter-icon.png" alt="Twitter" className="h-6" />
                        <span className="text-xs">Twitter</span>
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center"
                    >
                        <img src="/instagram-icon.png" alt="Instagram" className="h-6" />
                        <span className="text-xs">Instagram</span>
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
