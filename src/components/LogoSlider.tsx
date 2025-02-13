import React, { useEffect, useRef } from "react";

interface LogoSliderInfo {
  logos: string[];
}
const LogoSlider: React.FC<LogoSliderInfo> = ({ logos }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollAmount = 2; // Speed of scrolling
    const maxScroll = scrollContainer.scrollWidth / 2; // Half of duplicated content

    const scroll = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0; // Reset when reaching midpoint
        } else {
          scrollContainer.scrollLeft += scrollAmount;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-4 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex w-full overflow-x-scroll whitespace-nowrap scrollbar-hide"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-24 mx-4 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
