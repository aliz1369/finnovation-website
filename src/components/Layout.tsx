// src/components/Layout.tsx
import React from "react";
import Header from "./HeaderMenu";
import Footer from "./Footer/Footer.tsx";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {/* Ana içerik */}
            <main className="flex-grow" style={{ paddingBottom: "60px" }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
