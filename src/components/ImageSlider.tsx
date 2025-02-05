import React, { useState, useEffect } from "react";
import { SliderImage } from "../types/globalTypes";

interface ImageSliderProps {
  images: SliderImage[] | null;
  title: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, title }) => {
  const [sliderImages, setSliderImages] = useState<SliderImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;

  useEffect(() => {
    if (images && images.length > 0) {
      setSliderImages(images);
    }
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, sliderImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleImages = () => {
    if (sliderImages.length < itemsPerSlide) return sliderImages;

    const visibleImages = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      visibleImages.push(
        sliderImages[(currentIndex + i) % sliderImages.length]
      );
    }
    return visibleImages;
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-[#1D71B8]">{title}</h2>

      <div className="relative w-full overflow-hidden rounded-lg">
        <div className="flex transition-transform duration-500 ease-in-out transform justify-center gap-8">
          {getVisibleImages().map((img, index) => (
            <div className="w-32 h-32 flex items-center justify-center">
              <img
                key={index}
                src={img.image}
                alt={`Slide ${index}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-3 space-x-2">
        {sliderImages.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer transition-colors ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
