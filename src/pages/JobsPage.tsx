import React, { useState } from "react" 
import MainLayout from "../layouts/MainLayout";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import { Navigation} from "swiper/modules";



const JobsPage: React.FC = () => {
    const values = [
        {
          title: "Mentorluk Desteği",
          description: [
            "Deneyimli ekip üyelerimiz tarafından birebir rehberlik sağlanır."],
          icon: "/public/collab.png",
        },
        {
          title: "Proje Deneyimi",
          description: [
            "Aktif projelerde sorumluluk alarak sektörün dinamiklerini öğrenmeimkânı.",],
          icon: "/public/collab.png",
        },
        {
          title: "Eğitim Prgramları",
          description: [
            "Teknik ve kişisel gelişim alanlarında özel eğitim fırsatları sunulur",],
          icon: "/public/activeuser.png",
        },
        {
          title: "Çalışma Düzeni",
          description: [
            "Hem uzaktan hem de ofis ortamında çalışma seçenekleri.",],
          icon: "/public/activeuser.png",
        },
        {
          title: "Kariyer Fırsatları",
          description: [
            "Staj sürecini başarıyla tamamlayan adaylarımıza tam zamanlı pozisyon fırsatları sunulur."],
          icon: "/public/activeuser.png",
        },
      ];
  
      const faqData = [
        {
          question: " Finnovation hangi alanlarda hizmet vermektedir?",
          answer: "• Finans, Enerji, Tarım, Sağlık, Turizm, Sürdürülebilirlik, Perakende ve Eğitim Teknolojileri başta olmak üzere yazılımın olduğu her alanda son teknoloji ve yapay zeka destekli kurumsal yazılım ürünleri sunar.",
          icon: "/public/checkmark.png" 
        },
        {
          question: "Ofislerimiz nerede?",
          answer: "• İstanbul Avrupa merkez olmak üzere Anadolu Yakası, Ankara ve İzmir’de ofislerimiz olacak.",
          icon: "/public/checkmark.png"
        },
        {
          question: "Uzaktan çalışma imkanı sunuyor musunuz?",
          answer: "• Temel kabul olarak hibrit çalışma modelini destekliyoruz. Ancak tüm pozisyonlarımız uzaktan çalışmaya uyumludur.",
          icon: "/public/checkmark.png"
        },
        {
          question: "Yeni mezunlar için uygun pozisyonlarınız var mı?",
          answer: "• Evet, yeni mezunlara yönelik özel programlarımız bulunmaktadır.",
          icon: "/public/checkmark.png"
        },
      ];
      

      const [openFAQs, setOpenFAQs] = useState<boolean[]>(new Array(faqData.length).fill(false));

      const toggleFAQ = (index: number) => {
        setOpenFAQs((prev) => {
          const newState = [...prev];
          newState[index] = !newState[index]; // Sadece tıklanan sorunun açık olup olmadığını değiştir
          return newState;
        });
      };

    return (
    <MainLayout>
      {}
      <div className="pt-5">
        {/* SECTION: Biz Kimiz? */}
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* LEFT COLUMN */}
            <div>
              {/* "Biz" on one line, "Kimiz?" on another, as you requested */}
              <h1 className="text-8xl font-extrabold text-gray-900 leading-tight">
                Kariyer
              </h1>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-10 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:pt-[20px]">

            {/* RIGHT COLUMN */}
            <div>
                
             <p className="mt-4 text-2xl text-gray-700 font-bold ">
                
              </p> 
             </div>

             <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className = "font-bold underline">Finnovation</span> ailesine katılarak teknolojinin geleceğini birlikte şekillendirme fırsatına sahip olun.
              Müşterilerimize yenilikçi ve etkili yazılım çözümleri sunarken, ekip olarak profesyonel bir aile anlayışı 
              içerisinde çalışıyoruz. Siz de bu vizyonun bir parçası olun.
              </p>
            </div>
          </div>
        </section>
        
        {/* SECTION: Misyonumuz */}
        <section className="container mx-auto px-2 py-2 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-[200px]">
            {/* LEFT COLUMN */}
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                Stajyer ve Yeni Mezun Programları
              </h2>
            </div>
           </div> 
        </section>
      

        
<section className="bg-white py-16">
  <div className="container mx-auto relative pb-10">
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: ".custom-swiper-next",
        prevEl: ".custom-swiper-prev",
      }}
      // Remove autoplay entirely
      // Remove centeredSlides so slides don't auto-center
      centeredSlides={false}
      centeredSlidesBounds={false}
      pagination={{ clickable: true }}
      // Reduce the space between slides from 20px to 10px
      spaceBetween={10}
      // Show 1 slide by default
      slidesPerView={1}
      breakpoints={{
        // On small screens (≥640px), show 2 slides
        640: { slidesPerView: 2 },
        // On large screens (≥1024px), show 3 slides
        1024: { slidesPerView: 4 },
      }}
      // Optional: set grabCursor to false or true to your preference
      grabCursor={false}
    >
      {values.map((value, index) => (
        <SwiperSlide key={index}>
          {/* Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start 
                         justify-start h-[350px] w-[270px] border border-gray-200 mx-auto">
            <img
              src={value.icon}
              alt={value.title}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-lg font-bold mb-3">{value.title}</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              {value.description.map((text, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <img
                    src="/public/checkmark.png"
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

    {/* Custom Navigation Buttons */}
    <div className="absolute bottom-[-60px] right-16 flex space-x-4 z-10">
      <button
        className="
          custom-swiper-prev
          w-10 h-10 bg-gray-100
          rounded-full flex items-center justify-center
          shadow hover:shadow-lg hover:bg-gray-200
          transform hover:scale-110 transition-all
        "
      >
        <svg
          className="w-6 h-6 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className="
          custom-swiper-next
          w-10 h-10 bg-gray-100
          rounded-full flex items-center justify-center
          shadow hover:shadow-lg hover:bg-gray-200
          transform hover:scale-110 transition-all
        "
      >
        <svg
          className="w-6 h-6 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19l7-7-7-7"
          />
        </svg>
      </button>
    </div>
  </div>
</section>

{/* ✅ Sıkça Sorulan Sorular Bölümü (Accordion) */}
<section className="container mx-auto px-6 py-16 bg-white">
          <h2 className="text-4xl font-medium text-gray-900 leading-tight mt-24">Sıkça Sorulan Sorular:</h2>
          <div className="mt-16 max-w-6xl mx-auto">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-300 py-6">
                {/* Soru Başlığı */}
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                  <h3 className="text-xl font-semibold">{item.question}</h3>
                  <button className="w-12 h-12 flex items-center justify-center border border-gray-500 rounded-full text-xl font-bold">
                    {openFAQs[index] ? "−" : "+"}
                  </button>
                </div>

                {/* Cevap */}
                {openFAQs[index] && (
                  <div className="mt-6 mb-12 ml-10 flex items-start space-x-4 max-w-3xl">
                    <img src={item.icon} alt="icon" className="w-6 h-6 mt-1" /> {/* Icon cevabın başında */}
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
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

<footer className="bg-[#3277BC] text-white py-8">
  <div className="container mx-auto px-6">
    {/* Navigation Links */}
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

    {/* Logo and Tagline */}
    <div className="flex flex-col items-center mb-6">
      <img
        src="/public/finnovation-white.png"
        alt="Finnovation Logo"
        className="h-24 mb-1"
      />
      <p className="text-center text-lg max-w-xl leading-relaxed">
        Our AI models learn and improve over time,<br />
        delivering increasingly accurate results<br />
        and adapting to changing trends.
      </p>
    </div>

    {/* Email + Button Row with a Single Underline */}
    <div className="flex justify-center">
      <div className="flex items-center space-x-32 border-b-2 border-white pb-4 px-2">
        {/* Underlined Email Text */}
        <h2 className="text-6xl font-medium">Email Address</h2>

        {/* Button with PNG Icon */}
        <button
          className="flex items-center justify-center
                     w-12 h-12 sm:w-16 sm:h-16
                     rounded-full border-2 border-white
                     transition-all hover:bg-white group"
        >
          <img
            src="/public/myCustomButtonIcon.png" 
            alt="Button Ion"
            className="w-6 h-6 sm:w-16 sm:h-16
                       transition-transform group-hover:scale-105
                       group-hover:opacity-80"
          />
        </button>
      </div>
    </div>
  </div>
</footer>







   

      </div>
    </MainLayout>
  );
};

export default JobsPage;
