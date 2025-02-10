import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

const MainPage: React.FC = () => {
  // Logoları tutan dizi
  const [logos, setLogos] = useState<string[]>([
    "/public/img1.png", // enpara
    "/public/img2.png", // netcad
    "/public/img3.png", // QNB Finansbank
    "/public/img4.png", // Workup
    "/public/img5.png", // Fibabanka
    "/public/img6.png", // Finberg
    "/public/img7.png", // Türkiye İş Bankası
  ]);

  // 2 saniyede bir dizinin son elemanını başa alacak şekilde döngü
  useEffect(() => {
    const interval = setInterval(() => {
      setLogos((prev) => {
        const last = prev[prev.length - 1];
        const rest = prev.slice(0, -1);
        return [last, ...rest];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MainLayout>
      {/*
        Dış kapsayıcıya h-screen ekleyerek ekran yüksekliğini sabitliyoruz.
        relative sayesinde içindeki absolute konumlandırmaları referans alır.
        overflow-hidden ile taşmalar gizlenir.
      */}
      <div className="h-screen pt-[80px] relative bg-white overflow-hidden top-1 left-0 right-0 ">
        {/* Hero Bölümü */}
        {/*
          pb-20 (veya ihtiyaca göre uygun bir padding) ekleyerek logoların
          hero içerikle çakışmamasını sağlıyoruz.
        */}
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
                Empowering businesses through data-driven insights and automation
                to achieve unparalleled growth. We built to revolutionize industries
                and improve productivity.
              </p>

              {/* Butonlar */}
              <div className="flex space-x-4">
                <button
                  className="px-6 py-3 bg-[#3277BC] text-white font-bold rounded-full shadow-lg hover:bg-[#2b66a2] flex items-center transition-colors"
                >
                  Explore Our Solutions
                  <span className="ml-2 text-xl">→</span>
                </button>
                <button
                  className="px-6 py-3 bg-white border-2 border-[#3277BC] text-[#3277BC] font-bold rounded-full shadow-lg hover:bg-[#3277BC] hover:text-white flex items-center transition-colors"
                >
                  Book a Demo
                  <img
                    src="/public/bd.png"
                    alt="Calendar"
                    className="h-5 w-5 ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Logolar Bölümü */}
        {/*
          Bu bölümü absolute olarak konumlandırıyoruz.
          left-0, right-0 ve bottom-0 ile dış kapsayıcının en altında yer alır.
        */}
        <section className="absolute bottom-6 left-0 right-0 py-4">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between gap-1">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-24 object-contain"
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
