import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer/Footer";
import HeaderMenu from "../components/HeaderMenu";
import ChatButton from "../components/ChatButton";

const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderMenu />
      <HeroSection />
      <div className="flex-grow flex items-center justify-center">
        <p className="text-gray-500">Buraya içerik eklenebilir.</p>
      </div>
      <ChatButton />
      <Footer />
    </div>
  );
};

export default MainPage;
