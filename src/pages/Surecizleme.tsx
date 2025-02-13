import React from "react";
// import { fetchSurecIzlemePage } from "../api/pageApi";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const SurecIzleme: React.FC = () => {
  const surecler = [
    {
      title: "Operasyonel Verim",
      icon: "/icon2.png",
      description: ["Zamandan ve maliyetten tasarruf sağlanır."],
    },
    {
      title: "Memnuniyetiniz",
      icon: "/icon2.png",
      description: [
        "Daha hızlı ve kaliteli hizmet sunarak müşteri deneyimini iyileştirir.",
      ],
    },
    {
      title: "Stratejik Esneklik",
      icon: "/icon3.png",
      description: ["Rekabet avantajı yaratır."],
    },
    {
      title: "Hataları Azaltma",
      icon: "/icon3.png",
      description: ["Hataların erken tespit edilerek önlenmesini sağlar."],
    },
    {
      title: "Şeffaflık ve Kontrol",
      icon: "/icon3.png",
      description: ["Daha iyi kararlar alınmasını sağlar."],
    },
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetchSurecIzlemePage();
  //       setData(response);
  //     } catch (err) {
  //       console.error("API Hatası:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <MainLayout>
      {/* Süreç İzleme ve Geliştirmenin Avantajları */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Başlık */}
          <h2 className="text-[24px] md:text-[32px] font-bold text-gray-900 mb-12 text-center">
            Süreç İzleme ve Geliştirmenin Avantajları
          </h2>
          <CardSlider
            isScrollable={true}
            cardPerView={3}
            sliderDatas={surecler}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default SurecIzleme;
