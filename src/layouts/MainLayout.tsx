import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import Footer from "../components/Footer/Footer";
import CookiePopup from "../components/CookiePopup";
import HeaderMenu from "../components/HeaderMenu";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      if (window.visualViewport) {
        setViewportHeight(window.visualViewport.height);
      } else {
        setViewportHeight(window.innerHeight);
      }
    };

    updateHeight();

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", updateHeight);
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", updateHeight);
      }
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // location.pathname değiştiğinde tetiklenecek

  return (
    <>
      <CookiePopup />
      <div
        className="min-h-screen w-full overflow-x-hidden"
        style={{ minHeight: `${viewportHeight}px` }}
      >
        <HeaderMenu />
        <main className="pt-[80px]">{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MainLayout;
