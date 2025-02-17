import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import Footer from "../components/Footer/Footer";
import HeaderMenu from "../components/HeaderMenu";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // location.pathname değiştiğinde tetiklenecek

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <HeaderMenu />
      <main className="pt-[80px]">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
