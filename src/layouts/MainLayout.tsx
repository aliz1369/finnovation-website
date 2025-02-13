import React from "react";
import HeaderMenu from "../components/HeaderMenu";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <HeaderMenu />
      <main className="h-full">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
