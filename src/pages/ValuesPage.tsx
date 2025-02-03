// src/pages/ValuesPage.tsx
import React from "react";

const ValuesPage: React.FC = () => {
  const values = [
    {
      title: "Yoldaşız",
      description:
          "Gerek ekip içinde, gerekse paydaşlarımıza bağlıyız ve tüm ekosisteme bu gözle bakarız.",
      icon: "icon1.png",
    },
    {
      title: "Dürüstüz",
      description:
          "Ülkemizin, ailemizin, kendimizin inanmadığı hiçbir işi yapmayız. Projelerimizin ve çalışmalarımızın takibiyle ilgili sizi anında ve net bir şekilde bilgilendiririz.",
      icon: "icon4.png",
    },
    {
      title: "Ortağız",
      description:
          "Sadece iş ortamında değil, istersek hayatın içinde de beraberiz. Kıymet biliriz, alma-verme dengesini önemseriz. Her birimiz üzerinde çalıştığımız her konuda şirketin temsilcisi ve iş geliştiricisidir. Herkes şirkette farklı oran ve tiplerde ortaktır. Kendi işimiz olduğu bilinci ile kişisel değil ailesel düşünürüz.",
      icon: "icon2.png",
    },
    {
      title: "Müşteri Odaklıyız",
      description:
          "Ülkemizin, ailemizin, kendimizin inanmadığı hiçbir işi yapmayız.",
      icon: "icon5.png",
    },
    {
      title: "Samimiyiz",
      description:
          "İyi niyet esaslı açık iletişim kurarız, net konuşuruz. Tek iletişim noktasından hareket etmez, birebir mümkünse yüzyüze konuşuruz.",
      icon: "icon3.png",
    },
    {
      title: "Müşteri Deneyimini Önemseriz",
      description: "Basit, kullanışlı, uygun fiyatlı ürünler sunarız.",
      icon: "icon6.png",
    },
  ];

  return (
      <div className="flex flex-col min-h-screen relative bg-white">
        <main className="flex-grow relative py-8 md:py-16 px-4 md:px-8">
          {/* Arka plan */}
          <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, #3b82f6, #14b8a6)",
                clipPath: "polygon(0 0, 100% 0, 100% 20%, 0 100%)",
              }}
          />

          {/* İçerik */}
          <div className="relative z-10 max-w-6xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
              Değerlerimiz
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                  <div
                      key={index}
                      className="flex items-start space-x-4 md:space-x-6 text-gray-800"
                  >
                    <img
                        src={value.icon}
                        alt={value.title}
                        className="w-10 h-10 md:w-12 md:h-12"
                    />
                    <div>
                      <h2 className="text-base md:text-xl font-bold mb-1 md:mb-2">
                        {value.title}
                      </h2>
                      <p className="text-sm md:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </main>
      </div>
  );
};

export default ValuesPage;
