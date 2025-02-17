import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

import "swiper/swiper-bundle.css";

import CallToAction from "../components/CallToAction";
import CardSlider from "../components/CardSlider";
import HeroTitle from "../components/HeroTitle";

const Culture: React.FC = () => {
  const values = [
    {
      title: "Yenilikçilik, İşbirliği ve Sürekli Öğrenme",
      description: ["Her birey bu kültürü benimser."],
      icon: "/collab.png",
    },
    {
      title: "Başarı Anlayışımız",
      description: [
        "Teknik becerilerin yanı sıra takım çalışması, yaratıcı düşünme ve sürekli gelişimle ölçülür.",
      ],
      icon: "/collab.png",
    },
    {
      title: "Farklı Bakış Açılarına Değer Veririz",
      description: ["Her görüş bizim için önemlidir."],
      icon: "/activeuser.png",
    },
    {
      title: "Müşterilerimiz İçin En İyisi",
      description: [
        "Hedeflerimize ulaşırken birlikte çalışır, birbirimizi destekleriz.",
      ],
      icon: "/activeuser.png",
    },
    {
      title: "Kariyer Gelişimi",
      description: ["Esnek çalışma ortamı ve güçlü destek ağı sunuyoruz."],
      icon: "/activeuser.png",
    },
    {
      title: "Geleceği Şekillendiren Kültür",
      description: ["İlham verici ve etkileşimli bir iş ortamı yaratıyoruz."],
      icon: "/activeuser.png",
    },
  ];

  const faqData = [
    {
      question: "Finnovation'ın temel değerleri nelerdir?",
      answer:
        "• İnovasyon, takım ruhu, şeffaflık ve sürdürülebilirlik temel değerlerimizi oluşturur.",
      icon: "/checkmark.png",
    },
    {
      question: "Şirket kültürünüzü nasıl tanımlarsınız?",
      answer:
        "• Yenilikçi, dinamik ve işbirlikçi bir kültür. Herkesin fikirlerini özgürce paylaşabildiği açık bir iletişim ortamı.",
      icon: "/checkmark.png",
    },
    {
      question: "Ekip içi iletişimi nasıl sağlıyorsunuz?",
      answer:
        "• Düzenli toplantılar, sosyal etkinlikler ve açık iletişim kanalları ile ekip içi bağları güçlendiriyoruz.",
      icon: "/checkmark.png",
    },
    {
      question: "Sosyal sorumluluk projeleriniz var mı?",
      answer:
        "• Evet, sürdürülebilirlik ve toplumsal fayda odaklı çeşitli projelerde yer alıyoruz.",
      icon: "/checkmark.png",
    },
  ];

  const [openFAQs, setOpenFAQs] = useState<boolean[]>(
    new Array(faqData.length).fill(false)
  );

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <MainLayout>
      <div>
        <section className="bg-white h-auto ">
          <HeroTitle
            title="Çeşitlilikten Güç Alır, Başarıyı Birlikte Yaratırız"
            description=" kültürü, yenilikçi düşünceyi, işbirliğini ve çeşitliliği bir araya getirerek her bireyin potansiyelini en üst seviyeye çıkarmayı hedefler."
            highlightedWord="Finnovation"
          />
        </section>

        {/* Values Section - Updated carousel */}
        <section className="bg-white h-auto mt-16">
          <div
            className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 h-full
                       flex flex-col justify-center"
          >
            <CardSlider
              isScrollable={true}
              cardPerView={3}
              sliderDatas={values}
            />
          </div>
        </section>

        {/* FAQ Section - Updated accordion */}
        <section className="container mx-auto px-6 py-16 bg-white">
          <h2 className="text-4xl font-medium text-gray-900 leading-tight font-segouie mt-24">
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
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default Culture;
