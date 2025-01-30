import React from "react";

const VeriMimarisi: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white p-8 flex items-start">
      {/* ÜST KISIM: Gradient ve Başlık */}
      <div
        className="absolute top-0 left-0 w-full h-[500px]"
        style={{
          background: "linear-gradient(to right, #3b82f6, #14b8a6)",
          clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
        }}
      ></div>

      {/* İÇERİK */}
      <div className="relative z-10 flex w-full pl-8 pr-8 pt-[80px]">
        {/* METİN ALANI */}
        <div className="w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-10">
            Ölçeklenebilir ve Güçlü Veri Sistemleri Kuruyoruz
          </h1>
          <p className="text-gray-800 text-base mb-10">
            Modern iş dünyasında, büyük miktarda veriyi etkili bir şekilde yönetmek ve
            analiz etmek, rekabet avantajı sağlamak için kritik bir gereklilik haline
            geldi. Finnovation olarak, işletmenizin büyümesine uyum sağlayacak,
            güvenilir ve ölçeklenebilir veri mimarisi çözümleri sunuyoruz. Veri ambarı
            tasarımından bulut entegrasyonuna kadar uçtan uca hizmetlerimizle, verilerinizi
            organize ediyor, kolay erişilebilir hale getiriyor ve iş süreçlerinizi
            güçlendiren bir temel oluşturuyoruz.
          </p>
        </div>

        {/* GÖRSEL ALANI */}
        <div className="w-1/3 flex justify-center items-center">
          <img src="/data1.png" alt="Veri Sistemleri" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default VeriMimarisi;
