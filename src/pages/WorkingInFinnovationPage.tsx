import React from "react";
import "swiper/swiper-bundle.css";
import CallToAction from "../components/CallToAction";
import CardSlider from "../components/CardSlider";
import HeroTitle from "../components/HeroTitle";
import MainLayout from "../layouts/MainLayout";
import AccordionList from "../components/AccordionList";

const WorkingInFinnovationPage: React.FC = () => {
  const benefits = [
    {
      title: "Dijital Dünyanın Öncüsü",
      description: [
        "Finnovation, yenilikçi ve dinamik yapısıyla hızla ilerliyor.",
      ],
      icon: "/collab.png",
    },
    {
      title: "Kariyeriniz İçin Büyük Bir Fırsat",
      description: ["Yaratıcı ve çözüm odaklı bir ekiple çalışma imkânı."],
      icon: "/collab.png",
    },
    {
      title: "AI Destekli SaaS Projeleri",
      description: ["Dijital dönüşüm süreçlerine katkı sağlama şansı."],
      icon: "/activeuser.png",
    },
    {
      title: "Sürekli Öğrenme ve Gelişim",
      description: ["İşbirliği ve gelişim fırsatlarıyla dolu bir ortam."],
      icon: "/activeuser.png",
    },
    {
      title: "Geleceğe Yön Verin",
      description: [
        "Finnovation ailesine katılın, teknolojinin sınırlarını birlikte genişletelim!",
      ],
      icon: "/activeuser.png",
    },
  ];

  const faqData = [
    {
      question: "Finnovation'da çalışma kültürü nasıl?",
      answer:
        "• Yenilikçi, dinamik ve işbirlikçi bir çalışma ortamı sunuyoruz. Ekip ruhu ve sürekli öğrenme kültürümüzün temelini oluşturur.",
      icon: "/checkmark.png",
    },
    {
      question: "Kariyer gelişimi için ne gibi fırsatlar sunuyorsunuz?",
      answer:
        "• Sürekli eğitim programları, mentorluk desteği ve yurt içi/yurt dışı konferanslara katılım imkanları sağlıyoruz.",
      icon: "/checkmark.png",
    },
    {
      question: "Yan haklar ve sosyal imkanlar nelerdir?",
      answer:
        "• Özel sağlık sigortası, yemek kartı, ulaşım desteği ve yıllık izin gibi standart hakların yanında, esnek çalışma saatleri ve uzaktan çalışma imkanı sunuyoruz.",
      icon: "/checkmark.png",
    },
    {
      question: "İş başvuru süreci nasıl işliyor?",
      answer:
        "• Başvurunuzun ardından, teknik değerlendirme ve kültür uyumu görüşmeleri yapılır. Süreç ortalama 2-3 hafta içinde tamamlanır.",
      icon: "/checkmark.png",
    },
  ];



  return (
    <MainLayout>
      <div className="pt-5">
        <section className="bg-white h-auto ">
          <HeroTitle
            title="Finnovation’da Sınır Tanımayan Bir Gelecek!"
            description="'da çalışarak yenilikçi projelerde yer alabilir, kariyerinizi teknoloji ve yaratıcılıkla şekillendirebilirsiniz!"
            highlightedWord="Finnovation"
          />
        </section>

        {/* Benefits Section - Updated carousel structure */}
        <section className="bg-white h-auto mt-16">
          <div
            className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 h-full
                       flex flex-col justify-center"
          >
            <CardSlider
              isScrollable={true}
              cardPerView={3}
              sliderDatas={benefits}
            />
          </div>
        </section>
        <AccordionList 
          title="Sıkça Sorulan Sorular" 
          items={faqData.map(item => ({
            title: item.question,
            content: [item.answer],
            icon: item.icon
          }))}
        />
      </div>
      <CallToAction />
    </MainLayout>
  );
};

export default WorkingInFinnovationPage;
