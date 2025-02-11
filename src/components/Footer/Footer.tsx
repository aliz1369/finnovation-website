import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom"; 

const Footer: React.FC = () => {
    return (
        <footer className="text-white py-5 md:py-10">
            <div className="container mx-auto px-4">
                <nav className="grid grid-cols-2 gap-4 sm:flex sm:flex-row sm:flex-wrap items-center justify-center sm:space-x-6 text-black font-medium">
                    <Link to="/about" className="hover:text-[#3277BC] text-sm md:text-base text-center">
                        Biz Kimiz?
                    </Link>
                    <span className="font-bold hidden sm:block">•</span>
                    <Link to="/services" className="hover:text-[#3277BC] text-sm md:text-base text-center">
                        Uzmanlık Alanlarımız
                    </Link>
                    <span className="font-bold hidden sm:block">•</span>
                    <Link to="/academy" className="hover:text-[#3277BC] text-sm md:text-base text-center">
                        FinAcademy
                    </Link>
                    <span className="font-bold hidden sm:block">•</span>
                    <Link to="/products" className="hover:text-[#3277BC] text-sm md:text-base text-center">
                        Ürünler
                    </Link>
                    <span className="font-bold hidden sm:block">•</span>
                    <Link to="/projects" className="hover:text-[#3277BC] text-sm md:text-base text-center">
                        Projeler
                    </Link>
                    <span className="font-bold hidden sm:block">•</span>
                    <Link to="/careers" className="hover:text-[#3277BC] text-sm md:text-base text-center">
                        Kariyer
                    </Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
