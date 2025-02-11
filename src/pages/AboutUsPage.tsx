import React from "react";
import MainLayout from "../layouts/MainLayout";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import { Navigation } from "swiper/modules";

import finlambLogo from "../../public/finlamb.jpg"; //bu finlamb.png ile değişecek

const AboutPage: React.FC = () => {
    const values = [
        {
          title: "Yoldaşız",
          description: [
            "Gerek ekip içinde, gerekse paydaşlarımıza bağlıyız ve tüm ekosisteme bu gözle bakarız."],
          icon: "/friends.png",
        },
        {
          title: "Ortağız",
          description: [
            "Sadece iş ortamında değil, istersek hayatın içinde de beraberiz.",
            "Kıymet biliriz, alma-verme dengesini önemseriz.",
            "Herbirimiz üzerinde çalıştığımız her konuda şirketin temsilcisi ve iş geliştiricisidir.",],
          icon: "/collab.png",
        },
        {
          title: "Samimiyiz",
          description: [
            "İyi niyet esaslı açık iletişim kurarız.",
            "Net konuşuruz.",
            "Tek iletişim noktasından hareket etmez, birebir mümkünse yüzyüze konuşuruz.",
          ],
          icon: "/activeuser.png",
        },
        {
          title: "Dürüstüz",
          description: [
            "Ülkemizin, ailemizin, kendimizin inanmadığı hiçbir işi yapmayız.",
          ],
          icon: "/trust.png",
        },
        {
          title: "Müşteri Odaklıyız",
          description: [
            "Kendi kullanmayacağımız hiçbir ürünü önermeyiz, sunmayız.",  
          ],
          icon: "/customer.png",
        },
        {
          title: "Müşteri Deneyimini Önemseriz",
          description: [
            "Basit, kullanışlı, uygun fiyatlı ürünler sunarız.",
          ],
          icon: "/customer2.png",
        },
      ];
  
  
  
    return (
    <MainLayout>
      <div className="pt-5">   

        {/* SECTION: Vizyonumuz */}
        <section className="container mx-auto px-2 py-2 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-[50px]">
            <div>
              <h2 className="text-4xl md:text-[80px] font-semibol text-gray-900 leading-tight font-segoe-ui">
                Vizyonumuz
              </h2>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-10 py-4 bg-white">
          <div className="grid grid-cols-1 gap-4 items-center md:pt-[5px]">
            <div>
              <p className="mt-4 text-base md:text-[32px] font-semibol text-gray-900 leading-tight font-segoe-ui">
                2030 yılında, teknoloji geliştirme, danışmanlık ve eğitim alanlarında inovasyon lideri olarak, Türkiye'den dünyaya yayılan sürdürülebilir ve etkili çözümler sunarak sektörde tanınan bir lider olmak.
              </p> 
            </div>
          </div>
        </section>

        {/* SECTION: Misyonumuz */}
        <section className="container mx-auto px-2 py-2 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-[50px]">
            <div>
              <h2 className="text-4xl md:text-[80px] font-semibold text-gray-900 leading-tight font-segoe-ui">
                Misyonumuz
              </h2>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-10 py-4 bg-white">
          <div className="grid grid-cols-1 gap-4 items-center md:pt-[5px]">
            <div>
              <p className="mt-4 text-base md:text-[32px] font-semibol text-gray-900 leading-tight font-segoe-ui">
                Yoldaşımız olan iş ortaklarımıza yüksek kalitede, uygun fiyatlı, sürdürülebilir ve değer yaratan ürün, hizmet ve çözümler sunmaktır.
              </p> 
            </div>
          </div>
        </section>

        {/* SECTION: Değerlerimiz */}
        <section className="container mx-auto px-2 py-2 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-[50px]">
            <div>
              <h2 className="text-4xl md:text-[80px] font-semibol text-gray-900 leading-tight font-segoe-ui">
                Değerlerimiz
              </h2>
            </div>
          </div>
        </section>

        {/* SECTION: Değerlerimiz Cards */}
        <section className="bg-white py-8">
          <div className="container mx-auto relative pb-5">
            {/* Desktop View - Grid Layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 px-4">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-start h-[500px] border border-gray-200">
                  <img src={value.icon} alt={value.title} className="w-16 h-16 mb-8" />
                  <h3 className="text-2xl font-bold mb-8">{value.title}</h3>
                  <ul className="text-gray-600 space-y-5 w-full">
                    {value.description.map((text, i) => (
                      <li key={i} className="flex items-start space-x-4">
                        <img src="/checkmark.png" alt="Checkmark" className="w-5 h-5 mt-1 flex-shrink-0" />
                        <p className="text-lg leading-relaxed">{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile View - Swiper */}
            <div className="md:hidden">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".custom-swiper-next",
                  prevEl: ".custom-swiper-prev",
                }}
                autoplay={{ 
                  delay: 3000, 
                  disableOnInteraction: false
                }}
                loop={true}
                slidesPerView={2}
                spaceBetween={10}
                className="mySwiper"
              >
                {values.map((value, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start h-[400px] border border-gray-200">
                      <img src={value.icon} alt={value.title} className="w-12 h-12 mb-6" />
                      <h3 className="text-xl font-bold mb-6">{value.title}</h3>
                      <ul className="text-gray-600 space-y-4 w-full">
                        {value.description.map((text, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <img src="/checkmark.png" alt="Checkmark" className="w-4 h-4 mt-1 flex-shrink-0" />
                            <p className="text-sm leading-relaxed">{text}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SwiperSlide>
                ))}

                {/* Mobile Navigation Buttons */}
                <div className="absolute bottom-[-40px] right-4 flex space-x-4 z-10">
                  <button className="custom-swiper-prev w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shadow">
                    <svg className="w-5 h-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="custom-swiper-next w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shadow">
                    <svg className="w-5 h-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19l7-7-7-7" />
                    </svg>
                  </button>
                </div>
              </Swiper>
            </div>
          </div>
        </section>

        <section className="px-1 py-16 flex justify-center items-center">
          <div className="relative w-full max-w-6xl px-8 py-24 rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
              <div
                className="w-[600px] h-[300px] rounded-full"
                style={{
                  background: "radial-gradient(ellipse at center, #3277BC, #4BA6DD, #3AAA9A, #58595B)",
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
                  <img
                    src="/bd.png"
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

export default AboutPage;
