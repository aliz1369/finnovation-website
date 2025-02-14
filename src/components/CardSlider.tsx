import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

interface SliderData {
  icon: string;
  title: string;
  description: string[];
}

interface SliderProps {
  isScrollable: boolean;
  cardPerView: number;
  sliderDatas: SliderData[];
}

const CardSlider: React.FC<SliderProps> = ({
  isScrollable,
  cardPerView,
  sliderDatas,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(cardPerView);
  const delay = 4000;
  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : cardPerView);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, [cardPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderDatas.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + sliderDatas.length) % sliderDatas.length
    );
  };

  useEffect(() => {
    if (isScrollable) {
      const interval = setInterval(nextSlide, delay);
      return () => clearInterval(interval);
    }
  }, [isScrollable]);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="w-full h-full px-4 py-8 overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{
          transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
        }}
      >
        {sliderDatas.concat(sliderDatas).map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-2 h-96"
            style={{ width: `${100 / cardsPerView}%` }}
          >
            <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-start text-left h-96 w-full">
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-2xl font-bold mt-6">{item.title}</h3>
              <p className="text-gray-700 mt-4 leading-relaxed flex items-start">
                <span className="text-green-500 text-xl mr-2">✅</span>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
