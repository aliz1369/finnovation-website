import React from "react";
import MainLayout from "../layouts/MainLayout";

//import { Swiper, SwiperSlide } from "swiper/react";
// import finlambLogo from "../../public/finlamb.jpg"; //bu finlamb.png ile değişecek

import "swiper/swiper-bundle.css";

//import { Navigation, Autoplay } from "swiper/modules";

// src/assets klasörü altından import et
// import finlambLogo from "../assets/finlamb.jpg";  // veya .png

const HakkimizdaPage: React.FC = () => {
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
        "İyi niyet esaslı açık iletişim kurarız, net konuşuruz.",
        "Herbirimiz üzerinde çalıştığımız her konuda şirketin temsilcisi ve iş geliştiricisidir.",
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
        "Müşterilerimizin başarısını kendi başarımız olarak görürüz.",
        "Müşterilerimizle uzun vadeli ilişkiler kurarız.",
      ],
      icon: "/customer.png",
    },
    {
      title: "Müşteri Deneyimini Önemseriz",
      description: [
        "Tek iletişim noktasından hareket etmez, mümkünse yüz yüze konuşuruz.",
        "Gerçek ihtiyacı anlamaya özen gösteririz.",
      ],
      icon: "/customer2.png",
    },
  ];



  return (
    <MainLayout>
      { }

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
                src="/finlamb.jpg" // public klasöründen direkt erişim
                alt="finlambLogo" 
                className="h-300 w-300 ml-2" 
              />


            </div>

            <div className="px-5 md:px-[20%] max-w-4xl ml-auto">
              <p className="text-lg text-gray-700 leading-7 md:leading-8 text-justify md:text-right">
                2019 yılında kurulan firmamız, yüksek kalitede ve sürdürülebilir hizmetler sunarak müşterilerine özel çözümler geliştirmektedir. Amacımız, yalnızca bir hizmet sağlayıcı değil, aynı zamanda müşterilerimizin yanında bir yol arkadaşı olmaktır. <br /><br />
                İnsan faktörünün yarattığı farkın bilincinde olarak, sunduğumuz hizmetlerin temelinde çalışanlarımızın özverisi, uzmanlığı ve tutkusu yatmaktadır. Kuruluşumuzdan bu yana inovatif, esnek ve girişimci bir kültür inşa ederek, güvenilir ve etik değerlere sahip bir ekip olarak hareket ediyoruz. <br /><br />
                Müşterilerimizin başarı yolculuğunda güvenilir bir iş ortağı olmayı hedefliyor, her adımda sürdürülebilir ve yenilikçi çözümlerle yanlarında olmayı taahhüt ediyoruz.
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
                Bizi farklı kılan özelliklerimiz, sunduğumuz hizmetlerde kalite ve güvenin teminatıdır. <br /><br />
                • <b>20+ Yıllık Deneyim:</b> Sektördeki uzun yıllara dayanan tecrübemizle güçlü bir bilgi birikimi sunuyoruz.<br />
                •<b>Yenilikçi Bir Ekip:</b> Tutkulu ve yaratıcı ekibimiz, her zaman en güncel ve yenilikçi çözümler üretir.<br />
                •<b>Müşteri Merkezli Hizmet:</b> Müşterilerimizin ihtiyaçlarını ön planda tutarak, özel çözümler geliştiriyoruz.<br />
                • <b>Sonuç Odaklı Bakış Açısı:</b> Hız ve etkinlik önceliğimizdir; en iyi sonuçlara ulaşmayı hedefliyoruz.<br />
                • <b>Esneklik ve Çeviklik:</b> Değişen şartlara hızla adapte olup, en uygun çözümleri sunuyoruz.<br />
                • <b>Yüksek Kaliteli Hizmet:</b> Kaliteyi ön planda tutarak, her zaman en iyiyi sunma misyonuyla hareket ediyoruz.<br /><br />
                Müşterilerimize sadece bir çözüm ortağı değil, güvenilir bir yol arkadaşı olarak hizmet veriyoruz.
              </p>

              {/* Buttons */}
              <div className="flex justify-center md:justify-start space-x-4 w-full mt-6">
                <button
                  className="px-6 py-3 bg-[#3277BC] text-white font-bold rounded-full shadow-lg hover:bg-[#2b66a2] flex items-center transition-colors"
                >
                  Explore Our Solutions
                  <span className="ml-2 text-xl">→</span>
                </button>
                <button
                  className="px-6 py-3 bg-white border-2 border-[#3277BC] text-[#3277BC] font-bold rounded-full shadow-lg hover:bg-[#3277BC] hover:text-white flex items-center transition-colors"
                >
                  Book a Demo
                  <img src="/bd.png" alt="Calendar" className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>



        {/* SECTION: Misyonumuz 
        <section className="container mx-auto px-2 py-2 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-[200px]">
            {/* LEFT COLUMN 
            <div>
              <h2 className="text-8xl font-extrabold text-gray-900 leading-tight">
                Misyonumuz
              </h2>
            </div>
          </div>
        </section>


        <section className="max-w-6xl mx-auto px-10 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:pt-[20px]">

            {/* RIGHT COLUMN 
            <div>

              <p className="mt-4 text-2xl text-gray-700 font-bold ">
                Yenilikçi BT çözümleri ile <br />
                iş sürekliliğinizi sağlıyoruz.
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-700 leading-relaxed ">
                Yoldaşımız olan iş ortaklarımıza yüksek kalitede, uygun fiyatlı, sürdürülebilir ve değer yaratan ürün, hizmet ve çözümler sunmaktır.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: Misyonumuz 
        <section className="container mx-auto px-2 py-2 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-[200px]">
            {/* LEFT COLUMN 
            <div>
              <h2 className="text-8xl font-extrabold text-gray-900 leading-tight">
                Değerlerimiz
              </h2>
            </div>
          </div>
        </section>


        <section className="max-w-6xl mx-auto px-10 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:pt-[20px]">

            {/* RIGHT COLUMN 
            <div>

              <p className="mt-4 text-2xl text-gray-700 font-bold ">
                Yenilikçi BT çözümleri ile <br />
                iş sürekliliğinizi sağlıyoruz.
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-700 leading-relaxed ">
                Yoldaşımız olan iş ortaklarımıza yüksek kalitede, uygun fiyatlı, sürdürülebilir ve değer yaratan ürün, hizmet ve çözümler sunmaktır.
              </p>
            </div>
          </div>
        </section>


        <section className="bg-white py-16">
          <div className="container mx-auto relative pb-10">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".custom-swiper-next",
                prevEl: ".custom-swiper-prev",
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              spaceBetween={20}
              centeredSlides={true}
              centeredSlidesBounds={true}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              grabCursor={true}
            >
              {values.map((value, index) => (
                <SwiperSlide key={index}>
                  {/* Card 
                  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start justify-start h-[350px] w-[270px] border border-gray-200 mx-auto">
                    <img src={value.icon} alt={value.title} className="w-12 h-12 mb-4" />
                    <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                    <ul className="text-gray-600 text-sm space-y-2">
                      {value.description.map((text, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <img
                            src="/checkmark.png"
                            alt="Checkmark"
                            className="w-4 h-4 mt-1"
                          />
                          <p className="italic">{text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}   
            </Swiper>   

            {/* Custom Navigation Buttons 
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
        </section>   */}



        <section className="px-1 py-16 flex justify-center items-center">
          {/* Parent Container */}
          <div className="relative w-full max-w-6xl px-8 py-24 rounded-2xl shadow-xl overflow-hidden">
            { }
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

        {/*  <footer className="bg-[#3277BC] text-white py-8">
          <div className="container mx-auto px-6">
            {/* Navigation Links 
            <nav className="mb-6">
              <ul className="flex flex-wrap justify-center space-x-4 text-lg font-medium">
                <li>
                  <a href="#about" className="hover:underline">
                    Biz Kimiz?
                  </a>
                </li>
                <li>•</li>
                <li>
                  <a href="#expertise" className="hover:underline">
                    Uzmanlık Alanlarımız
                  </a>
                </li>
                <li>•</li>
                <li>
                  <a href="#finacademy" className="hover:underline">
                    FinAcademy
                  </a>
                </li>
                <li>•</li>
                <li>
                  <a href="#resources" className="hover:underline">
                    Resources
                  </a>
                </li>
                <li>•</li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            {/* Logo and Tagline 
            <div className="flex flex-col items-center mb-6">
              <img
                src="/finnovation-white.png"
                alt="Finnovation Logo"
                className="h-24 mb-1"
              />
              <p className="text-center text-lg max-w-xl leading-relaxed">
                Our AI models learn and improve over time,<br />
                delivering increasingly accurate results<br />
                and adapting to changing trends.
              </p>
            </div>

            {/* Email + Button Row with a Single Underline 
            <div className="flex justify-center">
              <div className="flex items-center space-x-32 border-b-2 border-white pb-4 px-2">
                {/* Underlined Email Text 
                <h2 className="text-6xl font-medium">Email Address</h2>

                {/* Button with PNG Icon 
                <button
                  className="flex items-center justify-center
                     w-12 h-12 sm:w-16 sm:h-16
                     rounded-full border-2 border-white
                     transition-all hover:bg-white group"
                >
                  <img
                    src="/myCustomButtonIcon.png"
                    alt="Button Icon"
                    className="w-6 h-6 sm:w-16 sm:h-16
                       transition-transform group-hover:scale-105
                       group-hover:opacity-80"
                  />
                </button>
              </div>
            </div>
          </div>
        </footer> */}









      </div>
    </MainLayout>
  );
};

export default HakkimizdaPage;