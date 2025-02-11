import React from "react";
import MainLayout from "../layouts/MainLayout";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import { Navigation, Autoplay} from "swiper/modules";



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
            {/* LEFT COLUMN */}
            <div>
              <h2 className="text-8xl font-extrabold text-gray-900 leading-tight">
                Vizyonumuz
              </h2>
            </div>
           </div> 
        </section>
      

        <section className="max-w-6xl mx-auto px-10 py-4 bg-white">
          <div className="grid grid-cols-1 gap-4 items-center md:pt-[5px]">
            <div>
              <p className="mt-4 text-2xl text-gray-700 font-bold">
                2030 yılında, teknoloji geliştirme, danışmanlık ve eğitim alanlarında inovasyon lideri olarak, Türkiye'den dünyaya yayılan sürdürülebilir ve etkili çözümler sunarak sektörde tanınan bir lider olmak.
              </p> 
            </div>
          </div>
        </section>

        {/* SECTION: Misyonumuz */}
        <section className="container mx-auto px-2 py-2 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-[50px]">
            {/* LEFT COLUMN */}
            <div>
              <h2 className="text-8xl font-extrabold text-gray-900 leading-tight">
                Misyonumuz
              </h2>
            </div>
           </div> 
        </section>
      

        <section className="max-w-6xl mx-auto px-10 py-4 bg-white">
          <div className="grid grid-cols-1 gap-4 items-center md:pt-[5px]">
            <div>
              <p className="mt-4 text-2xl text-gray-700 font-bold">
                Yoldaşımız olan iş ortaklarımıza yüksek kalitede, uygun fiyatlı, sürdürülebilir ve değer yaratan ürün, hizmet ve çözümler sunmaktır.
              </p> 
            </div>
          </div>
        </section>

        {/* SECTION: Değerlerimiz */}
        <section className="container mx-auto px-2 py-2 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-[50px]">
            {/* LEFT COLUMN */}
            <div>
              <h2 className="text-8xl font-extrabold text-gray-900 leading-tight">
                Değerlerimiz
              </h2>
            </div>
           </div> 
        </section>
      

       
        
        <section className="bg-white py-8">
  <div className="container mx-auto relative pb-5">
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={{
        nextEl: ".custom-swiper-next",
        prevEl: ".custom-swiper-prev",
      }}
      autoplay={{ 
        delay: 3000, 
        disableOnInteraction: false
      }}
      loop={true}
      slidesPerView={3}
      spaceBetween={30}
      speed={800}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }}
      className="mySwiper"
      wrapperClass="swiper-wrapper"
    >
      {/* İlk set */}
      {values.map((value, index) => (
        <SwiperSlide key={`first-${index}`} className="swiper-slide">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start justify-start h-[350px] w-[270px] border border-gray-200 mx-auto">
            <img src={value.icon} alt={value.title} className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-bold mb-3">{value.title}</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              {value.description.map((text, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <img src="/checkmark.png" alt="Checkmark" className="w-4 h-4 mt-1" />
                  <p className="italic">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </SwiperSlide>
      ))}
      {/* İkinci set */}
      {values.map((value, index) => (
        <SwiperSlide key={`second-${index}`} className="swiper-slide">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start justify-start h-[350px] w-[270px] border border-gray-200 mx-auto">
            <img src={value.icon} alt={value.title} className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-bold mb-3">{value.title}</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              {value.description.map((text, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <img src="/checkmark.png" alt="Checkmark" className="w-4 h-4 mt-1" />
                  <p className="italic">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Custom Navigation Buttons */}
    <div className="absolute bottom-[-60px] right-16 flex space-x-4 z-10">
      <button
        className="custom-swiper-prev w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow hover:shadow-lg hover:bg-gray-200 transform hover:scale-110 transition-all"
      >
        <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="custom-swiper-next w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow hover:shadow-lg hover:bg-gray-200 transform hover:scale-110 transition-all"
      >
        <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19l7-7-7-7" />
        </svg>
      </button>
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
          background: "radial-gradient(ellipse at center, #3277BC, #4BA6DD, #3AAA9A, #58595B)",
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
