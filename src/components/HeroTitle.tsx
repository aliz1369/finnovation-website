import React from "react";

interface HeroTitleProps {
  title: string;
  subtitle?: string;
  description: string;
  highlightedWord?: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({
  title,
  subtitle,
  description,
  highlightedWord,
}) => {
  return (
    <div className="container mx-auto px-8 md:px-12 lg:px-16 pt-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Ana Başlık */}
        <div className="flex flex-col text-center md:text-left md:ml-0">
          <div className="mb-8 translate-y-10">
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-bold leading-[1.1] tracking-tight">
              {title.split("\\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < title.split("\\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>
          </div>

          {/* Description ve Subtitle */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 translate-y-30">
            <div className="lg:max-w-2xl lg:min-w-[50%]">
              {subtitle && (
                <h2 className="text-[24px] sm:text-[28px] md:text-[32px] leading-tight font-medium">
                  {subtitle}
                </h2>
              )}
            </div>

            <div className="lg:max-w-xl flex flex-col items-center lg:items-start gap-8 lg:min-w-[40%]">
              <p className="text-[16px] sm:text-[18px] text-gray-700">
                {highlightedWord && (
                  <span className="font-bold">{highlightedWord}</span>
                )}
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Alt boşluk için div */}
      <div className="h-20 md:h-32 lg:h-40"></div>
    </div>
  );
};

export default HeroTitle;
