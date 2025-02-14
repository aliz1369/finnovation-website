// src/pages/SustainabilityPage.tsx
import React from "react";
import MainLayout from "../layouts/MainLayout";
import CardGrid from "../components/CardGrid";

const SustainabilityPage: React.FC = () => {
  const cardData = [
    {
      icon: "/icons/team.svg", // Replace with actual icon paths
      title: "Yoldaşız",
      description: "Gerek ekip içinde, gerekse paydaşlarımıza bağlıyız...",
      points: [],
    },
    {
      icon: "/icons/honesty.svg",
      title: "Dürüstüz",
      description:
        "Ülkemizin, ailemizin, kendimizin inanmadığı hiçbir işi yapmayız.",
      points: [],
    },
    {
      icon: "/icons/customer-focus.svg",
      title: "Müşteri Odaklıyız",
      description: "Kendi kullanmayacağımız hiçbir ürünü önermeyiz.",
      points: [],
    },
  ];
  const cardData1 = [
    {
      icon: "/icons/team.svg", // Replace with actual icon paths
      title: "Yoldaşız",
      description: "Gerek ekip içinde, gerekse paydaşlarımıza bağlıyız...",
      points: [],
    },
    {
      icon: "/icons/honesty.svg",
      title: "Dürüstüz",
      description:
        "Ülkemizin, ailemizin, kendimizin inanmadığı hiçbir işi yapmayız.",
      points: [],
    },
  ];

  const cardData2 = [
    {
      icon: "/icons/team.svg", // Replace with actual icon paths
      title: "Yoldaşız",
      description: "Gerek ekip içinde, gerekse paydaşlarımıza bağlıyız...",
      points: [],
    },
    {
      icon: "/icons/honesty.svg",
      title: "Dürüstüz",
      description:
        "Ülkemizin, ailemizin, kendimizin inanmadığı hiçbir işi yapmayız.",
      points: [],
    },
    {
      icon: "/icons/customer-focus.svg",
      title: "Müşteri Odaklıyız",
      description: "Kendi kullanmayacağımız hiçbir ürünü önermeyiz.",
      points: [],
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

      <section className="px-1  flex justify-center items-center">
        {/* Parent Container */}
        <div className="relative w-full max-w-6xl px-8 py-24 rounded-2xl shadow-xl overflow-hidden">
          {}
          <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
            <div
              className="w-[600px] h-[300px] rounded-full"
              style={{
                // Radial gradient for an elliptical shape
                background:
                  "radial-gradient(ellipse at center, #3277BC, #4BA6DD, #3AAA9A, #58595B)",
                // Increase or decrease blur to taste
                filter: "blur(100px)",
              }}
            />
          </div>

          {/* Text Content on top (z-10) */}
          <div className="text-center relative z-10">
            {/* Main Heading */}
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Ready to start your AI <br /> journey with us?
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-lg text-gray-700">
              Simple, transparent pricing. No setup fees or contracts. <br />
              Try without a credit card, cancel anytime.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex justify-center space-x-6">
              {/* Explore Our Solutions Button */}
              <button
                className="px-8 py-4 bg-[#3277BC] text-white font-bold rounded-full
                     shadow-lg hover:bg-[#285b8f] flex items-center transition-transform
                     transform hover:scale-105"
              >
                Explore Our Solutions
                <span className="ml-2 text-xl">→</span>
              </button>

              {/* Book a Demo Button */}
              <button
                className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-800
                     font-bold rounded-full shadow-md hover:bg-gray-100
                     hover:border-gray-400 flex items-center transition-transform
                     transform hover:scale-105"
              >
                <img src="/bd.png" alt="Demo Icon" className="h-5 w-5 mr-2" />
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SustainabilityPage;
