// src/layouts/MainLayout.tsx
import React from "react";
import HeaderMenu from "../components/HeaderMenu";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const MainLayout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderMenu />
            <main className="flex-grow bg-gray-100">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
