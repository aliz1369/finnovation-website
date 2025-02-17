import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "swiper/swiper-bundle.css";
import CardSlider from "../components/CardSlider";
import HeroTitle from "../components/HeroTitle";
import CallToAction from "../components/CallToAction";

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

  const [openFAQs, setOpenFAQs] = useState<boolean[]>(
    new Array(faqData.length).fill(false)
  );

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index]; // Sadece tıklanan sorunun açık olup olmadığını değiştir
      return newState;
    });
  };

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="bg-white h-auto md:h-[calc(100vh-4rem)]">
          <HeroTitle
            title="Finnovation’da Sınır Tanımayan Bir Gelecek!"
            description="'da çalışarak yenilikçi projelerde yer alabilir, kariyerinizi teknoloji ve yaratıcılıkla şekillendirebilirsiniz!"
            highlightedWord="Finnovation"
          />
        </section>

        {/* Benefits Section - Updated carousel structure */}
        <section className="bg-white py-16">
          <CardSlider
            isScrollable={true}
            cardPerView={3}
            sliderDatas={benefits}
          />
        </section>

        {/* FAQ Section - Updated accordion structure */}
        <section className="container mx-auto px-6 py-16 bg-white">
          <h2 className="text-4xl font-medium text-gray-900 leading-tight font-segouie">
            Sıkça Sorulan Sorular:
          </h2>
          <div className="mt-16 max-w-6xl mx-auto">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-300 py-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-bold font-segouie">
                    {item.question}
                  </h3>
                  <button
                    className="w-10 h-10 flex items-center justify-center border-2
                                   border-gray-900 rounded-full text-xl font-bold"
                  >
                    {openFAQs[index] ? "−" : "+"}
                  </button>
                </div>
                {openFAQs[index] && (
                  <div className="mt-6 mb-12 ml-10 flex items-start space-x-4 max-w-3xl">
                    <img src={item.icon} alt="icon" className="w-6 h-6 mt-1" />
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <CallToAction />
    </MainLayout>
  );
};

export default WorkingInFinnovationPage;
