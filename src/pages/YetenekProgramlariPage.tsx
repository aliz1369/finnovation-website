import React from "react";
import CardSlider from "../components/CardSlider";
import HeroTitle from "../components/HeroTitle";
import MainLayout from "../layouts/MainLayout";
import CallToAction from "../components/CallToAction";

const YetenekProgramlariPage: React.FC = () => {
  const benefits = [
    {
      title: "Kariyer Başlangıcı",
      description: ["Profesyonel yolculuğunuzda güçlü bir temel atın."],
      icon: "/collab.png",
    },
    {
      title: "Eğitim ve Mentorluk",
      description: ["Deneyimli mentorlarla birebir çalışma fırsatı yakalayın."],
      icon: "/collab.png",
    },
    {
      title: "Gerçek Projelerde Deneyim",
      description: [
        "Teoriyi pratiğe dönüştürerek iş dünyasına hazır hale gelin.",
      ],
      icon: "/activeuser.png",
    },
    {
      title: "Problem Çözme ve Stratejik Düşünme",
      description: ["Karar alma süreçlerinde etkili olmayı öğrenin."],
      icon: "/activeuser.png",
    },
    {
      title: "Dijital Çağa Uyum",
      description: [
        "Teknoloji ve pazarlama gibi farklı alanlarda kendinizi geliştirin.",
      ],
      icon: "/activeuser.png",
    },
    {
      title: "Liderlik Becerileri",
      description: [
        "Ekip yönetimi ve organizasyon becerilerinizi güçlendirin.",
      ],
      icon: "/activeuser.png",
    },
  ];
  return (
    <MainLayout>
      <div>
        <section className="bg-white h-auto">
          <HeroTitle
            title="Kariyerinizin Başlangıcı, Bizimle Olsun!"
            subtitle="Finnovation yetenek programları, genç yeteneklerin potansiyellerini keşfetmelerini ve profesyonel kariyerlerinde güçlü adımlar atmalarını sağlamak için tasarlanmıştır."
            description=" olarak, genç yetenekleri keşfetmek ve geliştirmek için özel programlar sunuyoruz. Kariyerinizin ilk adımını sağlam atmanız için tasarlanan bu programlar, eğitim, mentorluk ve gerçek iş deneyimini bir araya getirerek sizi profesyonel hayata hazırlıyor.Alanında uzman isimlerle çalışma fırsatı sunan programlarımız, sadece teknik becerilerinizi değil, aynı zamanda liderlik, problem çözme ve stratejik düşünme yeteneklerinizi de geliştirmenize yardımcı olur. Dijital dünyanın hızla değişen dinamiklerine uyum sağlamak ve rekabet avantajı kazanmak isteyen herkes için eşsiz fırsatlar sunuyoruz."
            highlightedWord="Finnovation"
          />
        </section>

        <section className="bg-white">
          <CardSlider
            isScrollable={true}
            cardPerView={3}
            sliderDatas={benefits}
          />
        </section>
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default YetenekProgramlariPage;
