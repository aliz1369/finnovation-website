import React, { useEffect, useRef } from "react";
import MainLayout from "../layouts/MainLayout";

const MainPage: React.FC = () => {
  const logos = [
    "/img1.png", // enpara
    "/img2.png", // netcad
    "/img3.png", // QNB Finansbank
    "/img4.png", // Workup
    "/img5.png", // Fibabanka
    "/img6.png", // Finberg
    "/img7.png", // Türkiye İş Bankası
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Logoları iki kere kopyalayarak sürekli kayma efekti oluşturuyoruz
    slider.innerHTML = slider.innerHTML + slider.innerHTML;

    const scroll = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <MainLayout>
      <div className="h-[80vh] pt-[80px] relative bg-white overflow-hidden top-1 left-0 right-0 ">
        {/* Hero Bölümü */}
        <section className="h-full flex items-center pb-20">
          {/* Arka Plan Şekli (isteğe bağlı) */}
          <img
            src="/images/shape.png"
            alt="Shape"
            className="absolute right-0 top-0 w-[600px] h-[600px] object-contain opacity-20 pointer-events-none -z-10"
          />

          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Sol Kısım */}
            <div>
              {/* Büyük Başlık */}
              <h1 className="text-2xl xl:text-7xl font-extrabold text-gray-900 leading-tight">
                Stratejinizi Gerçeğe
                <br />
                Dönüştürüyoruz
              </h1>
              {/* Türkçe Alt Başlık */}
              <p className="mt-6 text-2xl text-gray-700 font-medium">
                Yenilikçi BT çözümleri ile iş sürekliliğinizi sağlıyoruz.
              </p>
            </div>

            {/* Sağ Kısım */}
            <div className="flex flex-col items-start lg:items-end">
              {/* İngilizce açıklama */}
              <p className="text-lg text-gray-700 max-w-md mb-8 leading-relaxed">
                Empowering businesses through data-driven insights and
                automation to achieve unparalleled growth. We built to
                revolutionize industries and improve productivity.
              </p>

              {/* Butonlar */}
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-[#3277BC] text-white font-bold rounded-full shadow-lg hover:bg-[#2b66a2] flex items-center transition-colors">
                  Explore Our Solutions
                  <span className="ml-2 text-xl">→</span>
                </button>
                <button className="px-6 py-3 bg-white border-2 border-[#3277BC] text-[#3277BC] font-bold rounded-full shadow-lg hover:bg-[#3277BC] hover:text-white flex items-center transition-colors">
                  Book a Demo
                  <img
                    src="/bd.png"
                    alt="Calendar"
                    className="h-5 w-5 ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Logolar Section */}
        <section className="absolute bottom-6 left-0 right-0 py-4">
          <div className="container mx-auto px-6">
            <div 
              ref={sliderRef}
              className="flex items-center space-x-16 whitespace-nowrap overflow-hidden"
              style={{ scrollBehavior: 'smooth' }}
            >
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity inline-block"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default MainPage;
