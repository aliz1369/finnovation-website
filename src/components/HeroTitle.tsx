import React from "react";

interface HeroTitleProps {
  title: string;
  description: string;
  highlightedWord?: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({
  title,
  description,
  highlightedWord,
}) => {
  return (
    <div className="w-full h-full md:grid md:grid-rows-2">
      <div className="flex items-center justify-start text-center px-10 py-8 md:py-0">
        <h1 className="text-black font-bold font-light text-4xl sm:text-7xl md:text-8xl lg:text-8xl leading-tight tracking-tight text-left">
          {title.split("\\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < title.split("\\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
      </div>
      <div className="relative px-9 pb-16 md:pb-0">
        <p className="md:absolute md:top-[12%] md:right-[8%] text-base sm:text-lg md:text-3xl text-gray-700 leading-relaxed text-left max-w-2xl">
          {highlightedWord && (
            <span className="font-bold">{highlightedWord}</span>
          )}
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroTitle;
