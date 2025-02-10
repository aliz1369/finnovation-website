import React from "react";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <HeaderMenu />
      {/* Header sabit konumda olduğu için içerik üstten biraz boşluk bırakıyor */}
      <main className="flex-grow pt-[80px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
