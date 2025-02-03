// src/pages/MainPage.tsx
import React from "react";
import HeroSection from "../components/HeroSection";
import PartnersReferences from "../components/PartnersReferences";
// import ChatBubble from "../components/ChatBubble";

const MainPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <HeroSection />
            <PartnersReferences />
            {/* <ChatBubble /> */}
        </div>
    );
};

export default MainPage;
