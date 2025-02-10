import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom"; 

const Footer: React.FC = () => {
    return (
        <footer className="text-white py-10">
            <div className="container mx-auto">
                {}
                <nav className="flex items-center justify-center space-x-6 text-black font-medium">
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



            </div>
        </footer>
    );
};

export default Footer;
