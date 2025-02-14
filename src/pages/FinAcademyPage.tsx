import React from "react";
import MainLayout from "../layouts/MainLayout";
import CardSlider from "../components/CardSlider";
import AccordionList from "../components/AccordionList";

const FinAcademyPage: React.FC = () => {
  const programs = [
    {
      title: "FinTech Giriş Seviyesi",
      content: [
        "Fintech nedir?",
        "Temel kavramlar ve uygulamalar.",
        "Sektördeki yenilikçi girişimler.",
      ],
      isOpen: false,
    },
    {
      title: "Dijital Ödemeler",
      content: [
        "Dijital ödeme sistemleri nasıl çalışır?",
        "Blockchain ve kripto para teknolojileri.",
        "Mobil cüzdanların yükselişi.",
      ],
      isOpen: false,
    },
    {
      title: "Veri Analitiği ve Yapay Zeka",
      content: [
        "Veri analizi yöntemleri.",
        "Müşteri davranışlarını anlamak için AI kullanımı.",
        "Risk yönetimi ve fraud önleme teknikleri.",
      ],
      isOpen: false,
    },
    {
      title: "Regülasyonlar ve Uyum Süreçleri",
      content: [
        "Fintech regülasyonları nelerdir?",
        "Uyum süreçlerinin önemi.",
        "Global standartlar hakkında bilgilendirme.",
      ],
      isOpen: false,
    },
    {
      title: "Girişimcilik Atölyesi",
      content: [
        "Başarılı bir fintech girişimi nasıl kurulur?",
        "Yatırımcılarla etkili iletişim.",
      ],
      isOpen: false,
    },
  ];

  const benefits = [
    {
      title: "Esnek Çalışma",
      description: ["Hibrit çalışma modeli ile iş-yaşam dengenizi koruyun"],
      icon: "/public/collab.png",
    },
    {
      title: "Sürekli Gelişim",
      description: [
        "Düzenli eğitimler ve workshop'lar ile kendinizi geliştirin",
      ],
      icon: "/public/collab.png",
    },
    {
      title: "Sağlık Sigortası",
      description: ["Özel sağlık sigortası ile siz ve aileniz güvende"],
      icon: "/public/activeuser.png",
    },
    {
      title: "Sosyal Aktiviteler",
      description: ["Düzenli ekip aktiviteleri ve sosyal etkinlikler"],
      icon: "/public/activeuser.png",
    },
    {
      title: "Teknoloji Desteği",
      description: ["İhtiyacınız olan tüm teknolojik ekipman desteği"],
      icon: "/public/activeuser.png",
    },
  ];

  return (
    <MainLayout>
      <div style={{ fontFamily: "Light Small" }}>
        <section className="bg-white h-auto md:h-[calc(100vh-4rem)]">
          <div className="w-full h-full md:grid md:grid-rows-2">
            <div className="flex items-center justify-start text-center px-10 py-8 md:py-0">
              <h1
                className="text-black font-light
                           text-4xl sm:text-7xl md:text-8xl lg:text-9xl
                           leading-tight tracking-tight"
              >
                Geleceğin Finansal
                <br />
                Liderlerini Yetiştiriyoruz
              </h1>
            </div>
            <div className="relative px-9 pb-16 md:pb-0">
              <p
                className="md:absolute md:top-[12%] md:right-[8%]
                           text-base sm:text-lg md:text-3xl text-gray-700 
                           leading-relaxed text-right max-w-2xl"
              >
                <span className="font-bold">FinAcademy</span>, finansal
                teknolojiler ve inovasyon alanında bilgi ve becerilerinizi
                geliştirmeniz için tasarlanmış bir eğitim platformudur.
                Amacımız, katılımcılarımıza en güncel bilgilere odaklanarak,
                geleceğin finans dünyasında başarılı olmalarını sağlamaktır.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white h-auto]">
          <div
            className="w-full h-full mx-auto px-6 md:px-8 lg:px-10 h-full
                       flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-10">
              Neden FinAcademy?
            </h2>
            <CardSlider
              isScrollable={true}
              cardPerView={3}
              sliderDatas={benefits}
            />
          </div>
        </section>
        <section className="bg-white">
          <AccordionList title="Eğitim Programlarımız" items={programs} />
        </section>
        <section className="bg-white h-auto">
          <div
            className="w-full h-full mx-auto px-6 md:px-8 lg:px-10 h-full
                       flex flex-col justify-center"
          >
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-12">
              Eğitim Formatları
            </h2>
            <CardSlider
              isScrollable={true}
              cardPerView={3}
              sliderDatas={benefits}
            />
          </div>
        </section>
        <section className="relative overflow-hidden h-auto md:h-[calc(100vh-4rem)]">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #e9f2fa 0%, #ffffff 100%)",
            }}
          />
          <div
            className="relative max-w-4xl mx-auto h-full flex flex-col
                       items-center justify-center px-6 text-center z-10"
          >
            <h2 className="text-5xl sm:text-7xl font-light text-gray-900 mb-6">
              Ready to start your AI journey with us?
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-light text-gray-400 max-w-2xl mb-8">
              Simple, transparent pricing. No setup fees or contracts. Try
              without a credit card, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-[#3277BC] text-white px-6 py-3
                           rounded-full hover:bg-[#2b66a2] transition-colors
                           font-light"
              >
                Explore Our Solutions →
              </button>
              <button
                className="border border-gray-300 px-6 py-3
                           rounded-full hover:bg-gray-100 transition-colors
                           font-light flex items-center space-x-2"
              >
                <span>Book a Demo</span>
                <img src="/bd.png" alt="Calendar" className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default FinAcademyPage;
