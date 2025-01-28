
import React from "react";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer/Footer";


const HakkimizdaPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderMenu />
      
      <Footer />
    </div>
  );
};

export default HakkimizdaPage;