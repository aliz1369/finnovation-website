import React from "react";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <HeaderMenu />
      <main className="h-full pt-[80px]">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
