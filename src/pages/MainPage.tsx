import React from "react";
import MainLayout from "../layouts/MainLayout";
import LogoSlider from "../components/LogoSlider";

const MainPage: React.FC = () => {
  const logos = [
    "/img1.png", // enpara
    "/img2.png", // netcad
    "/img3.png", // QNB Finansbank
    "/img4.png", // Workup
    "/img5.png", // Fibabanka
    "/img6.png", // Finberg
    "/img7.png", // Türkiye İş Bankası
    "/img4.png", // Workup
    "/img5.png", // Fibabanka
    "/img6.png", // Finberg
    "/img7.png", // Türkiye İş Bankası
  ];

  return (
    <MainLayout>
      <div className="h-full relative bg-white">
        {/* Hero Bölümü */}
        <section className="container mx-auto px-8 md:px-12 lg:px-16 pt-[100px]">
          <div className="max-w-[1440px] mx-auto">
            {/* Ana Başlık ve İçerik */}
            <div className="flex flex-col -ml-20">
              {/* Başlık Kısmı */}
              <div className="mb-8 translate-y-30">
                <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-bold leading-[1.1] tracking-tight">
                  Stratejinizi gerçeğe
                </h1>
                <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-bold leading-[1.1] tracking-tight mt-0">
                  Dönüştürüyoruz
                </h1>
              </div>

              {/* Alt Başlık ve Butonlar */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-12 translate-y-30">
                {/* Türkçe Başlık */}
                <div className="lg:max-w-2xl">
                  <h2 className="text-[24px] sm:text-[28px] md:text-[32px] leading-tight font-medium">
                    Yenilikçi BT çözümleri ile iş sürekliliğinizi sağlıyoruz.
                  </h2>
                </div>

                {/* İngilizce Metin ve Butonlar */}
                <div className="lg:max-w-xl flex flex-col gap-8">
                  <p className="text-[16px] sm:text-[18px] text-gray-700">
                    Empowering businesses through data-driven insights and
                    automation to achieve unparalleled growth. We built to
                    revolutionize industries and improve productivity.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-6 py-3 bg-[#3277BC] text-white font-bold rounded-full shadow-lg hover:bg-[#2b66a2] flex items-center justify-center transition-colors">
                      Explore Our Solutions
                      <span className="ml-2 text-xl">→</span>
                    </button>
                    <button className="px-6 py-3 bg-white border-2 border-[#3277BC] text-[#3277BC] font-bold rounded-full shadow-lg hover:bg-[#3277BC] hover:text-white flex items-center justify-center transition-colors">
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
            </div>
          </div>
        </section>

        {/* Logo Section'ları */}
        <div className="absolute bottom-[60px] left-0 right-0">
          <LogoSlider logos={logos} />
          <LogoSlider logos={logos} />
        </div>
      </div>
    </MainLayout>
  );
};

export default MainPage;
