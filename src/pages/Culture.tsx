import React from "react";
import MainLayout from "../layouts/MainLayout";

import "swiper/swiper-bundle.css";

import CallToAction from "../components/CallToAction";
import CardSlider from "../components/CardSlider";
import HeroTitle from "../components/HeroTitle";
import AccordionList from "../components/AccordionList";

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

        <AccordionList 
          title="Sıkça Sorulan Sorular" 
          items={faqData.map(item => ({
            title: item.question,
            content: [item.answer],
            icon: item.icon
          }))}/>
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default Culture;
