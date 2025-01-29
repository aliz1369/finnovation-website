// src/components/Footer/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-teal-500 text-white py-6 relative min-h-[120px]">
            {/* Sol Alt Logo */}
            <img
                src="/finnovation-logo.png"
                alt="Finnovation Logo"
                className="absolute left-4 bottom-4 h-11"
            />

            {/* Sağ Alt Sosyal İkonlar */}
            <div className="absolute right-4 bottom-4 flex space-x-4 items-center">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    <img src="/linkedin-icon.png" alt="LinkedIn" className="h-6" />
                    <span className="text-xs">LinkedIn</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    <img src="/github-icon.png" alt="GitHub" className="h-6" />
                    <span className="text-xs">GitHub</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    <img src="/twitter-icon.png" alt="Twitter" className="h-6" />
                    <span className="text-xs">Twitter</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    <img src="/instagram-icon.png" alt="Instagram" className="h-6" />
                    <span className="text-xs">Instagram</span>
                </a>
            </div>

            <div className="container mx-auto text-center flex flex-col items-center">
                <p>Barış Mahallesi, Koşuyolu Caddesi Kuğuçka Merkezi No:30 Gebze / Kocaeli</p>
                <p>info@finnovation.com.tr</p>
                <p className="mt-2">© 2025 Finnovation Website. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;
