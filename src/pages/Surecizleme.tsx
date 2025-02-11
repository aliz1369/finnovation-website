import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadSpinner";
import { Page } from "../types/globalTypes";
import { fetchSurecIzlemePage } from "../api/pageApi";
import StyledText from "../components/StyledText";

const SurecIzleme: React.FC = () => {
  const [data, setData] = useState<Page | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchSurecIzlemePage();
        setData(response);
      } catch (err) {
        console.error("API Hatası:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ fontFamily: "'Segoe UI Variable', sans-serif" }}>
      {/* Yükleme Ekranı */}
      <LoadingSpinner visible={loading} />

      {/* Üst Kısım - Başlık ve Açıklama */}
      <div className="relative bg-white">
        {/* Arka Plan Degrade */}
        <div
          className="absolute top-0 left-0 w-full h-[350px] md:h-[600px]"
          style={{
            background: "linear-gradient(135deg, #3b82f6, #14b8a6)",
            clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20 text-center">
          <h1 className="text-[40px] md:text-[80px] font-extrabold text-gray-900 leading-tight">
            Proje Bazlı Teknoloji ve Sistem Entegrasyonu
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed mt-6">
            Günümüzün hızlı değişen iş dünyasında, teknolojinin doğru şekilde
            uygulanması ve sistemlerin etkin bir şekilde entegre edilmesi,
            kurumların başarısı için kritik öneme sahiptir. Teknoloji ve Sistem
            Entegrasyonu hizmetlerimizle, kurumların sistem altyapılarına en
            güncel teknolojileri entegre ederek iş süreçlerinin verimliliğini
            artırıyor ve operasyonel başarılarını destekliyoruz.
          </p>
        </div>
      </div>

      {/* Hizmet Alanlarımız Bölümü */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Başlık */}
          <h2 className="text-[24px] md:text-[32px] font-bold text-center text-gray-900 mb-12">
            Hizmet Alanlarımız
          </h2>

          {/* Hizmet Kartları */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Kartlar */}
            {[
              {
                title: "Analiz",
                icon: "/icon1.png",
                text: "İş süreçleri ve mevcut sistem altyapılarınızı analiz ederek, gereksinimlerinize en uygun teknoloji çözümleri belirlenir.",
              },
              {
                title: "Yazılım Geliştirme",
                icon: "/icon2.png",
                text: "Özel yazılım çözümleri geliştirerek, operasyonel süreçlerinizi iyileştiriyoruz.",
              },
              {
                title: "Test Yönetimi",
                icon: "/icon3.png",
                text: "Geliştirilen yazılımlar için kapsamlı test süreçleri yönetiyoruz.",
              },
              {
                title: "Proje Yönetimi",
                icon: "/icon4.png",
                text: "Teknoloji entegrasyon süreçlerini uçtan uca yönetiyoruz.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-md rounded-xl flex flex-col items-center text-center transition duration-300 hover:shadow-lg"
              >
                {/* İkon */}
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-14 h-14 mb-4"
                />

                {/* Başlık */}
                <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                {/* Açıklama */}
                <div className="flex items-start gap-2">
                  <img
                    src="/checkmark.png"
                    alt="checkmark"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-gray-700 text-[16px] md:text-[18px] leading-relaxed text-left">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diğer İçerik */}
      <section className="py-16 max-w-5xl mx-auto px-6 md:px-12">
        {data?.sections?.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {section.title}
            </h2>
            {section.components?.map((component, idx) => (
              <StyledText key={idx} content={component.content_value} />
            ))}
          </div>
        ))}
      </section>

      {/* Süreç İzleme ve Geliştirmenin Avantajları */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Başlık */}
          <h2 className="text-[24px] md:text-[32px] font-bold text-gray-900 mb-12 text-center">
            Süreç İzleme ve Geliştirmenin Avantajları
          </h2>

          {/* Avantaj Kartları */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-stretch">
            {[
              {
                title: "Operasyonel Verim",
                icon: "/icon2.png",
                text: "Zamandan ve maliyetten tasarruf sağlanır.",
              },
              {
                title: "Memnuniyetiniz",
                icon: "/icon2.png",
                text: "Daha hızlı ve kaliteli hizmet sunarak müşteri deneyimini iyileştirir.",
              },
              {
                title: "Stratejik Esneklik",
                icon: "/icon3.png",
                text: "Rekabet avantajı yaratır.",
              },
              {
                title: "Hataları Azaltma",
                icon: "/icon3.png",
                text: "Hataların erken tespit edilerek önlenmesini sağlar.",
              },
              {
                title: "Şeffaflık ve Kontrol",
                icon: "/icon3.png",
                text: "Daha iyi kararlar alınmasını sağlar.",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-md rounded-xl flex flex-col items-center text-center transition duration-300 hover:shadow-lg"
              >
                <img
                  src={advantage.icon}
                  alt={advantage.title}
                  className="w-14 h-14 mb-4"
                />
                <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <div className="flex items-center gap-2">
                  <img
                    src="/checkmark.png"
                    alt="checkmark"
                    className="w-5 h-5"
                  />
                  <p className="text-gray-700 text-[16px] md:text-[18px] leading-relaxed text-left">
                    {advantage.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurecIzleme;
