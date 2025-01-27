// src/pages/MainPage.tsx
import React from "react";
import HeaderMenu from "../components/HeaderMenu";
import HeroSection from "../components/HeroSection";
import PartnersReferences from "../components/PartnersReferences";
import ChatButton from "../components/ChatButton";
import Footer from "../components/Footer/Footer";

const MainPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderMenu />
            <HeroSection />


            {/* Partnerler / Referanslar */}
            <PartnersReferences />

            {/* Chat Button */}
            <ChatButton />

            <Footer />
        </div>
    );
};

export default MainPage;
