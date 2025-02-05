// src/components/HeroSection.tsx
import React from "react";
import { Component } from "../types/globalTypes";
import StyledText from "./StyledText";
interface HeroProps {
  content: Component[] | null;
}
const HeroSection: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative w-full h-auto md:h-[57vh] overflow-hidden">
      {/* Degrade Arkaplan */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #3b82f6, #14b8a6)",
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
        }}
      />

      {/* Metin İçerikleri */}
      <div className="relative z-10 flex flex-col items-start justify-center text-white h-full px-4 py-12 md:px-12 md:py-0">
        {content &&
          content.map((data) =>
            data.component_type === "title" ? (
              <StyledText
                key={data.id}
                content={data.content_value}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
              />
            ) : (
              <StyledText
                key={data.id}
                content={data.content_value}
                className="text-lg sm:text-xl md:text-2xl mb-4"
              />
            )
          )}
      </div>
    </section>
  );
};

export default HeroSection;
