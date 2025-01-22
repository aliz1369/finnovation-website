import React from "react";
import HeaderMenu from "../components/HeaderMenu";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderMenu />
      <main className="flex-grow bg-gray-100 p-4">
        <Outlet />
      </main>
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>© 2025 Finnovation Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
