// src/pages/UzmanlikAlanlarimizPage.tsx
import React from "react";

const UzmanlikAlanlarimizPage: React.FC = () => {
  return (
      <div className="relative bg-white p-4 md:p-8">
        {/* Üst Degrade Arkaplan */}
        <div
            className="absolute top-0 left-0 w-full h-[300px] md:h-[500px]"
            style={{
              background: "linear-gradient(to right, #3b82f6, #14b8a6)",
              clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
            }}
        />

        <div className="relative z-10 max-w-5xl mx-auto pt-8 md:pt-10">
          <h1 className="text-2xl md:text-4xl text-center font-bold text-gray-800 mb-8 md:mb-12">
            Uzmanlık Alanlarımız
          </h1>

          {/* 1.satır */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-12 md:gap-y-20 mb-12 md:mb-16 items-start">
            <div className="text-center">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-6">
                Danışmanlık
              </h2>
              <p className="text-sm md:text-base text-black max-w-md mx-auto">
                Temel bankacılık ve veri yönetimi gibi alanlarda, işletmenizin
                stratejik hedeflerine ulaşması için uzman çözümler sunuyoruz.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-6">
                Temel Bankacılık
              </h2>
              <p className="text-sm md:text-base text-black max-w-md mx-auto">
                Bankacılık operasyonlarınızı modernleştirmek için güvenilir ve
                yenilikçi çözümler sunuyoruz.
              </p>
            </div>
          </div>

          {/* 2.satır */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-12 md:gap-y-20 mb-12 md:mb-16 items-start">
            <div className="text-center">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-6">
                Veri Yönetimi
              </h2>
              <p className="text-sm md:text-base text-black max-w-md mx-auto">
                Verilerinizi organize ederek anlamlı bilgilere dönüştürmek ve iş
                süreçlerinizi optimize etmek için çalışıyoruz.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-6">
                Proje Bazlı Teknoloji ve Sistem Entegrasyonu
              </h2>
              <p className="text-sm md:text-base text-gray-800 max-w-md mx-auto">
                İhtiyaçlarınıza uygun sistem entegrasyonları ile projelerinizi
                başarıyla hayata geçiriyoruz.
              </p>
            </div>
          </div>

          {/* 3.satır */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-12 md:gap-y-20 mb-12 md:mb-16 items-start">
            <div className="text-center">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-6">
                Süreç İzleme ve Geliştirme
              </h2>
              <p className="text-sm md:text-base text-gray-800 max-w-md mx-auto">
                İş süreçlerinizin performansını ölçüp geliştirilmesi için veriye
                dayalı çözümler üretiyoruz.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-6">
                Dijital Dönüşüm
              </h2>
              <p className="text-sm md:text-base text-gray-800 max-w-md mx-auto">
                İşletmenizi yeni teknolojilerle güçlendirerek dijital çağın
                gerekliliklerine hazırlıyoruz.
              </p>
            </div>
          </div>

          {/* 4.satır */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-12 md:gap-y-20 items-start">
            <div className="text-center">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-6">
                Proje Yönetimi
              </h2>
              <p className="text-sm md:text-base text-black max-w-md mx-auto">
                Projelerinizi hedeflerinize uygun şekilde planlayarak, zamanında
                ve başarıyla tamamlanmasını sağlıyoruz.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-6">
                FinAcademy
              </h2>
              <p className="text-sm md:text-base text-black max-w-md mx-auto">
                Finans ve teknoloji alanında eğitimlerle çalışanlarınıza yeni
                yetkinlikler kazandırıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default UzmanlikAlanlarimizPage;
