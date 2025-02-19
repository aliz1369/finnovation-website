import React from "react";
import AccordionList from "../components/AccordionList";
import CallToAction from "../components/CallToAction";
import CardSlider from "../components/CardSlider";
import HeroTitle from "../components/HeroTitle";
import MainLayout from "../layouts/MainLayout";

const InnovationManagementPage: React.FC = () => {
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
      icon: "/collab.png",
    },
    {
      title: "Sürekli Gelişim",
      description: [
        "Düzenli eğitimler ve workshop'lar ile kendinizi geliştirin",
      ],
      icon: "/collab.png",
    },
    {
      title: "Sağlık Sigortası",
      description: ["Özel sağlık sigortası ile siz ve aileniz güvende"],
      icon: "/activeuser.png",
    },
    {
      title: "Sosyal Aktiviteler",
      description: ["Düzenli ekip aktiviteleri ve sosyal etkinlikler"],
      icon: "/activeuser.png",
    },
    {
      title: "Teknoloji Desteği",
      description: ["İhtiyacınız olan tüm teknolojik ekipman desteği"],
      icon: "/activeuser.png",
    },
  ];

  return (
    <MainLayout>
      <div>
        <section className="bg-white h-auto ">
          <HeroTitle
            title="Geleceğin Finansal\nLiderlerini Yetiştiriyoruz"
            description=", finansal teknolojiler ve inovasyon alanında bilgi ve becerilerinizi geliştirmeniz için tasarlanmış bir eğitim platformudur. Amacımız, katılımcılarımıza en güncel bilgilere odaklanarak, geleceğin finans dünyasında başarılı olmalarını sağlamaktır."
            highlightedWord="FinAcademy"
          />
        </section>
        <section className="bg-white h-auto mt-16">
          <div
            className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 h-full
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
        <section className="relative overflow-hidden h-auto ">
          <CallToAction />
        </section>
      </div>
    </MainLayout>
  );
};

export default InnovationManagementPage;
