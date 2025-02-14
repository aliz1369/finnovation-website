import React, { useEffect, useRef } from "react";

interface LogoSliderInfo {
  logos: string[];
  direction?: number;
}
const LogoSlider: React.FC<LogoSliderInfo> = ({ logos, direction = 1 }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollAmount = 2;
    const maxScroll = scrollContainer.scrollWidth / 2;
    scrollContainer.scrollLeft = 1;
    const scroll = () => {
      if (scrollContainer) {
        if (direction === 1 && scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        } else if (direction === -1 && scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = maxScroll;
        } else {
          scrollContainer.scrollLeft += scrollAmount * direction;
        }
      }
    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);
  }, [direction]);
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
