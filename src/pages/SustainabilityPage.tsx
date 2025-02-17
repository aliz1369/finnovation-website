// src/pages/SustainabilityPage.tsx
import React from "react";
import MainLayout from "../layouts/MainLayout";
import CardGrid from "../components/CardGrid";
import CallToAction from "../components/CallToAction";

const SustainabilityPage: React.FC = () => {
  const cardData = [
    {
      icon: "/icon10.png",
      title: "Dijital Dönüşüm",
      description: "",
      points: [
        "Yazılım çözümlerimiz, işletmelerin daha verimli çalışmasını sağlayarak kağıt ve enerji kullanımını en aza indirir.",
      ],
    },
    {
      icon: "/icon11.png",
      title: "Yeşil Enerji",
      description: "",
      points: [
        "Sunucularımız ve veri merkezlerimizde yenilenebilir enerji kaynaklarını tercih ediyoruz.",
      ],
    },
    {
      icon: "/icon12.png",
      title: "Atık Yönetimi",
      description: "",
      points: [
        "Elektronik atıkların geri dönüşümüne katkıda  bulunuyor ve teknoloji ekipmanlarının ömrünü uzatacak çözümler sunuyoruz.",
      ],
    },
  ];
  const cardData1 = [
    {
      icon: "/icon13.png",
      title: "Vadeli Çözümler",
      description: "",
      points: [
        "Müşterilerimize sağladığımız yazılım çözümleri, onların işlerini sürdürülebilir bir şekilde büyütmelerine yardımcı olur.",
      ],
    },
    {
      icon: "/icon14.png",
      title: "Ekonomiye Katkı",
      description: "",
      points: [
        " Yerel istihdamı destekliyor ve teknoloji ekosisteminin gelişmesine katkı sağlıyoruz.",
      ],
    },
  ];

  const cardData2 = [
    {
      icon: "/icon15.png",
      title: "Eğitim ve Gelişim",
      description: "",
      points: [
        "Çalışanlarımızın sürekli gelişimini destekliyor, teknoloji alanında yeni yetenekleri sektöre kazandırıyoruz.",
      ],
    },
    {
      icon: "/icon16.png",
      title: "Dijital Erişilebilirlik",
      description: "",
      points: [
        "Herkes için erişilebilir çözümler tasarlıyor, dijital dünyada kimseyi geride bırakmıyoruz.",
      ],
    },
    {
      icon: "/icon17.png",
      title: "Katkı Projeleri",
      description: "",
      points: [
        "Teknolojiyi kullanarak sosyal sorunlara çözüm bulmayı hedefleyen projelere destek veriyoruz.",
      ],
    },
  ];

  return (
    <MainLayout>
      <section className="container mx-auto px-2 py-2 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-1 items-center pt-10">
          <div>
            <h2 className="md:text-8xl text-5xl font-extrabold text-gray-900 leading-tight">
              Sürdürülebilirlik Yaklaşımımız
            </h2>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 bg-white text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center ml-auto">
          <div></div>
          <div className="max-w-4xl">
            <p className="text-lg text-gray-700 leading-7 md:leading-8 text-justify md:text-left">
              Teknolojiyi sadece bugünün ihtiyaçları için değil, geleceği
              şekillendirmek için kullanıyoruz. Finnovation Yazılım Çözümleri
              olarak, çevresel, ekonomik ve toplumsal sürdürülebilirlik
              hedefleri doğrultusunda hareket ediyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-2 py-2 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-10">
          <div>
            <h2 className="md:text-5xl text-3xl font-extrabold text-gray-900 leading-tight">
              Çevresel Sürdürülebilirlik
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <CardGrid cardData={cardData} />
      </section>

      <section className="container mx-auto px-2 py-2 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-10">
          <div>
            <h2 className="md:text-5xl text-3xl font-extrabold text-gray-900 leading-tight">
              Ekonomik Sürdürülebilirlik
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <CardGrid cardData={cardData1} />
      </section>

      <section className="container mx-auto px-2 py-2 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-10">
          <div>
            <h2 className="md:text-5xl text-3xl font-extrabold text-gray-900 leading-tight">
              Sosyal Sürdürülebilirlik
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <CardGrid cardData={cardData2} />
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold">Hedeflerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div></div>
          <div>
            <p className="text-gray-700 text-lg mb-4">
              Sürdürülebilirlik vizyonumuz doğrultusunda;
            </p>
            <ul className="text-lg space-y-3">
              <li className="font-semibold">
                <strong>
                  2030 yılına kadar operasyonlarımızın karbon nötr hale
                  getirilmesi,
                </strong>
              </li>
              <li className="font-semibold">
                <strong>
                  Yerel topluluklarla işbirliklerinin artırılması,
                </strong>
              </li>
              <li className="font-semibold">
                <strong>
                  Çevre dostu teknoloji çözümlerinin geliştirilmesi hedeflerimiz
                  arasında yer alıyor.
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </section>
    <CallToAction />
    </MainLayout>
  );
};

export default SustainabilityPage;
