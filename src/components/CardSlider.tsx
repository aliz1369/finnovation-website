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
    <div
      {...handlers}
      className="relative max-w-6xl mx-auto px-4 py-8 overflow-hidden"
    >
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{
          transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
        }}
      >
        {sliderDatas.concat(sliderDatas).map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-2 h-[500px]"
            style={{ width: `${100 / cardsPerView}%` }}
          >
            <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-start text-left h-[430px] w-full">
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

      <div className="absolute bottom-6 right-4 flex space-x-4 z-10">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow hover:shadow-lg hover:bg-gray-200 transform hover:scale-110 transition-all"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow hover:shadow-lg hover:bg-gray-200 transform hover:scale-110 transition-all"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19l7-7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
