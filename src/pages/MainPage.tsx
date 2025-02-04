// src/pages/MainPage.tsx
import React, { useEffect, useState } from "react";
// import HeroSection from "../components/HeroSection";
import PartnersReferences from "../components/PartnersReferences";
import { fetchHomePage } from "../api/pageApi";
import { Page } from "../types/globalTypes";
import LoadingSpinner from "../components/LoadSpinner";
import StyledText from "../components/StyledText";
// import ChatBubble from "../components/ChatBubble";

const MainPage: React.FC = () => {
  const [data, setData] = useState<Page | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      try {
        setLoading(true);
        const response = await fetchHomePage();
        setData(response);
      } catch (err) {
        setLoading(false);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    data();
  }, []);

  return (
    <>
      <LoadingSpinner visible={loading} />
      <div className="flex flex-col min-h-screen">
        {data?.sections.map((section, index) => (
          <div
            key={section.id}
            className={`relative py-20 px-6 ${
              index % 2 === 0
                ? "bg-gradient-to-r from-blue-600 to-teal-500 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            <div className="max-w-4xl mx-auto">
              {section.components.map((component) => (
                <div
                  key={component.id}
                  className={
                    component.component_type === "title"
                      ? "text-3xl font-bold text-white mb-4"
                      : "text-lg text-gray-200 leading-relaxed"
                  }
                >
                  <StyledText content={component.content_value} />
                </div>
              ))}
            </div>
            {/* <HeroSection /> */}
          </div>
        ))}
        <PartnersReferences />
        {/* <ChatBubble /> */}
      </div>
    </>
  );
};

export default MainPage;
