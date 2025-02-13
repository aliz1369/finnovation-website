import React from "react";
import "../Footer/Footer.css";
// import { Link } from "react-router-dom"; 

const Footer: React.FC = () => {
    return (
        <footer className="text-white py-10">
            <div className="container mx-auto">
                {/* Alt Navigasyon Menüsü */}
                {/* <nav className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Link to="/about" className="hover:text-[#3377BC]">Biz Kimiz?</Link>
                    <span>•</span>
                    <Link to="/expertise" className="hover:text-[#3377BC]">Uzmanlık Alanlarımız</Link>
                    <span>•</span>
                    <Link to="/finacademy" className="hover:text-[#3377BC]">FinAcademy</Link>
                    <span>•</span>
                    <Link to="/products" className="hover:text-[#3377BC]">Ürünler</Link>
                    <span>•</span>
                    <Link to="/projects" className="hover:text-[#3377BC]">Projeler</Link>
                    <span>•</span>
                    <Link to="/career" className="hover:text-[#3377BC]">Kariyer</Link>
                </nav> */}
            </div>
        </footer>
    );
};

export default Footer;
