// src/pages/MainPage.tsx
import React from "react";
// import HeaderMenu from "../components/HeaderMenu";
import HeroSection from "../components/HeroSection";
import PartnersReferences from "../components/PartnersReferences";
// import Footer from "../components/Footer/Footer";

// YENİ bileşen
import ChatBubble from "../components/ChatBubble";

const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <HeaderMenu /> */}
      <HeroSection />
      <PartnersReferences />
      <ChatBubble />
      {/* <Footer /> */}
    </div>
  );
};

export default MainPage;
