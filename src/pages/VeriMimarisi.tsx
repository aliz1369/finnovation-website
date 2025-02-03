// src/pages/VeriMimarisi.tsx
import React from "react";

const VeriMimarisi: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-white p-4 md:p-8">
            {/* Üstte Degrade Arka Plan */}
            <div
                className="absolute top-0 left-0 w-full h-[300px] md:h-[500px]"
                style={{
                    background: "linear-gradient(to right, #3b82f6, #14b8a6)",
                    clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
                }}
            />

            <div className="relative z-10 flex flex-col md:flex-row w-full pt-8 md:pt-[80px] items-start">
                {/* Metin Alanı */}
                <div className="w-full md:w-2/3 px-4 md:px-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-10">
                        Ölçeklenebilir ve Güçlü Veri Sistemleri Kuruyoruz
                    </h1>
                    <p className="text-sm md:text-base text-gray-800 mb-6 md:mb-10">
                        Modern iş dünyasında, büyük miktarda veriyi etkili bir şekilde yönetmek ve
                        analiz etmek, rekabet avantajı sağlamak için kritik bir gereklilik haline
                        geldi. Finnovation olarak, işletmenizin büyümesine uyum sağlayacak,
                        güvenilir ve ölçeklenebilir veri mimarisi çözümleri sunuyoruz. Veri ambarı
                        tasarımından bulut entegrasyonuna kadar uçtan uca hizmetlerimizle,
                        verilerinizi organize ediyor, kolay erişilebilir hale getiriyor ve iş
                        süreçlerinizi güçlendiren bir temel oluşturuyoruz.
                    </p>
                </div>

                {/* Görsel Alanı */}
                <div className="w-full md:w-1/3 flex justify-center items-center px-4 md:px-8">
                    <img
                        src="/data1.png"
                        alt="Veri Sistemleri"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default VeriMimarisi;
