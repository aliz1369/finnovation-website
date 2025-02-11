import React from "react";
import MainLayout from "../layouts/MainLayout";

import finlambLogo from "../../public/finlamb.jpg"; //bu finlamb.png ile değişecek

import "swiper/swiper-bundle.css";

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      {}

      <div className="pt-5">
        {/* SECTION: Hakkımızda */}
        <section className="container mx-auto px-6 py-16 bg-white text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* LEFT COLUMN */}
            <div>
              <h1 className="text-7xl font-extrabold text-gray-900 leading-tight ">
                Hakkımızda
              </h1>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 bg-white text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:pt-[50px]">
            {/* RIGHT COLUMN */}
            <div>
              <img
                src={finlambLogo}
                alt="finlambLogo"
                className="h-300 w-300 ml-2"
              />
            </div>

            <div className="px-5 md:px-[20%] max-w-4xl ml-auto">
              <p className="text-lg text-gray-700 leading-7 md:leading-8 text-justify md:text-right">
                2019 yılında kurulan firmamız, yüksek kalitede ve sürdürülebilir
                hizmetler sunarak müşterilerine özel çözümler geliştirmektedir.
                Amacımız, yalnızca bir hizmet sağlayıcı değil, aynı zamanda
                müşterilerimizin yanında bir yol arkadaşı olmaktır. <br />
                <br />
                İnsan faktörünün yarattığı farkın bilincinde olarak, sunduğumuz
                hizmetlerin temelinde çalışanlarımızın özverisi, uzmanlığı ve
                tutkusu yatmaktadır. Kuruluşumuzdan bu yana inovatif, esnek ve
                girişimci bir kültür inşa ederek, güvenilir ve etik değerlere
                sahip bir ekip olarak hareket ediyoruz. <br />
                <br />
                Müşterilerimizin başarı yolculuğunda güvenilir bir iş ortağı
                olmayı hedefliyor, her adımda sürdürülebilir ve yenilikçi
                çözümlerle yanlarında olmayı taahhüt ediyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: Farkımız */}
        <section className="container mx-auto px-6 py-16 bg-white text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* LEFT COLUMN */}
            <div>
              <h2 className="text-7xl font-extrabold text-gray-900 leading-tight">
                Farkımız
              </h2>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 bg-white">
          <div className="flex flex-col items-center md:items-start">
            {/* RIGHT COLUMN */}
            <div className="pl-10 max-w-4xl mx-auto md:mx-0">
              <p className="text-lg text-gray-700 leading-7 md:leading-8 text-justify">
                Bizi farklı kılan özelliklerimiz, sunduğumuz hizmetlerde kalite
                ve güvenin teminatıdır. <br />
                <br />• <b>20+ Yıllık Deneyim:</b> Sektördeki uzun yıllara
                dayanan tecrübemizle güçlü bir bilgi birikimi sunuyoruz.
                <br />•<b>Yenilikçi Bir Ekip:</b> Tutkulu ve yaratıcı ekibimiz,
                her zaman en güncel ve yenilikçi çözümler üretir.
                <br />•<b>Müşteri Merkezli Hizmet:</b> Müşterilerimizin
                ihtiyaçlarını ön planda tutarak, özel çözümler geliştiriyoruz.
                <br />• <b>Sonuç Odaklı Bakış Açısı:</b> Hız ve etkinlik
                önceliğimizdir; en iyi sonuçlara ulaşmayı hedefliyoruz.
                <br />• <b>Esneklik ve Çeviklik:</b> Değişen şartlara hızla
                adapte olup, en uygun çözümleri sunuyoruz.
                <br />• <b>Yüksek Kaliteli Hizmet:</b> Kaliteyi ön planda
                tutarak, her zaman en iyiyi sunma misyonuyla hareket ediyoruz.
                <br />
                <br />
                Müşterilerimize sadece bir çözüm ortağı değil, güvenilir bir yol
                arkadaşı olarak hizmet veriyoruz.
              </p>

              {/* Buttons */}
              <div className="flex justify-center md:justify-start space-x-4 w-full mt-6">
                <button className="px-6 py-3 bg-[#3277BC] text-white font-bold rounded-full shadow-lg hover:bg-[#2b66a2] flex items-center transition-colors">
                  Explore Our Solutions
                  <span className="ml-2 text-xl">→</span>
                </button>
                <button className="px-6 py-3 bg-white border-2 border-[#3277BC] text-[#3277BC] font-bold rounded-full shadow-lg hover:bg-[#3277BC] hover:text-white flex items-center transition-colors">
                  Book a Demo
                  <img src="/bd.png" alt="Calendar" className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-1 py-16 flex justify-center items-center">
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
      </div>
    </MainLayout>
  );
};

export default AboutPage;
