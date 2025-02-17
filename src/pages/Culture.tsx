import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

import "swiper/swiper-bundle.css";

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
      icon: "/public/checkmark.png",
    },
    {
      question: "Şirket kültürünüzü nasıl tanımlarsınız?",
      answer:
        "• Yenilikçi, dinamik ve işbirlikçi bir kültür. Herkesin fikirlerini özgürce paylaşabildiği açık bir iletişim ortamı.",
      icon: "/public/checkmark.png",
    },
    {
      question: "Ekip içi iletişimi nasıl sağlıyorsunuz?",
      answer:
        "• Düzenli toplantılar, sosyal etkinlikler ve açık iletişim kanalları ile ekip içi bağları güçlendiriyoruz.",
      icon: "/public/checkmark.png",
    },
    {
      question: "Sosyal sorumluluk projeleriniz var mı?",
      answer:
        "• Evet, sürdürülebilirlik ve toplumsal fayda odaklı çeşitli projelerde yer alıyoruz.",
      icon: "/public/checkmark.png",
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
        <section className="bg-white">
          <CardSlider
            isScrollable={true}
            cardPerView={3}
            sliderDatas={values}
          />
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

        {/* CTA Section - Updated responsive design */}
        <section className="px-1 py-16 flex justify-center items-center">
          <div className="relative w-full max-w-6xl px-8 py-24 rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
              <div
                className="w-[600px] h-[300px] rounded-full"
                style={{
                  background:
                    "radial-gradient(ellipse at center, #3277BC, #4BA6DD, #3AAA9A, #58595B)",
                  filter: "blur(100px)",
                }}
              />
            </div>

            <div className="text-center relative z-10">
              <h2 className="text-5xl font-extrabold text-gray-900 leading-tight font-segouie">
                Ready to start your AI <br /> journey with us?
              </h2>

              <p className="mt-4 text-lg text-gray-700 font-segouie">
                Simple, transparent pricing. No setup fees or contracts. <br />
                Try without a credit card, cancel anytime.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  className="px-8 py-4 bg-[#44B870] text-white font-segouie font-bold rounded-full
                                 shadow-lg hover:bg-[#44B870] flex items-center transition-transform
                                 transform hover:scale-105"
                >
                  Explore Our Solutions
                  <span className="ml-2 text-xl font-segouie">→</span>
                </button>

                <button
                  className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-800
                                 font-bold rounded-full shadow-md hover:bg-gray-100 hover:border-gray-400 
                                 flex items-center justify-center transition-transform transform hover:scale-105"
                >
                  <img
                    src="/public/bd.png"
                    alt="Demo Icon"
                    className="h-5 w-5 mr-2"
                  />
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Culture;
