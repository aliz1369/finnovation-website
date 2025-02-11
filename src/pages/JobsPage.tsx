import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";

const JobsPage: React.FC = () => {
  const values = [
    {
      title: "Mentorluk Desteği",
      description: [
        "Deneyimli ekip üyelerimiz tarafından birebir rehberlik sağlanır.",
      ],
      icon: "/public/customer-service.png",
    },
    {
      title: "Proje Deneyimi",
      description: [
        "Aktif projelerde sorumluluk alarak sektörün dinamiklerini öğrenme imkânı.",
      ],
      icon: "/public/project.png",
    },
    {
      title: "Eğitim Programları",
      description: [
        "Teknik ve kişisel gelişim alanlarında özel eğitim fırsatları sunulur",
      ],
      icon: "/public/education.png",
    },
    {
      title: "Çalışma Düzeni",
      description: ["Hem uzaktan hem de ofis ortamında çalışma seçenekleri."],
      icon: "/public/work-case.png",
    },
    {
      title: "Kariyer Fırsatları",
      description: [
        "Staj sürecini başarıyla tamamlayan adaylarımıza tam zamanlı pozisyon fırsatları sunulur.",
      ],
      icon: "/public/career.png",
    },
  ];

  const faqData = [
    {
      question: "Finnovation hangi alanlarda hizmet vermektedir?",
      answer:
        "• Finans, Enerji, Tarım, Sağlık, Turizm, Sürdürülebilirlik, Perakende ve Eğitim Teknolojileri başta olmak üzere yazılımın olduğu her alanda son teknoloji ve yapay zeka destekli kurumsal yazılım ürünleri sunar.",
      icon: "/public/checkmark.png",
    },
    {
      question: "Ofislerimiz nerede?",
      answer:
        "• İstanbul Avrupa merkez olmak üzere Anadolu Yakası, Ankara ve İzmir’de ofislerimiz olacak.",
      icon: "/public/checkmark.png",
    },
    {
      question: "Uzaktan çalışma imkanı sunuyor musunuz?",
      answer:
        "• Temel kabul olarak hibrit çalışma modelini destekliyoruz. Ancak tüm pozisyonlarımız uzaktan çalışmaya uyumludur.",
      icon: "/public/checkmark.png",
    },
    {
      question: "Yeni mezunlar için uygun pozisyonlarınız var mı?",
      answer:
        "• Evet, yeni mezunlara yönelik özel programlarımız bulunmaktadır.",
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
      <div className="pt-5">
        {/* SECTION: Kariyer */}
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Kariyer
              </h1>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-10 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:pt-[20px]">
            <div>
              <p className="mt-4 text-2xl text-gray-700 font-bold font-segouie"></p>
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed font-segouie mb-6">
                <span className="font-bold underline">Finnovation</span> ailesine
                katılarak teknolojinin geleceğini birlikte şekillendirme
                fırsatına sahip olun. Müşterilerimize yenilikçi ve etkili
                yazılım çözümleri sunarken, ekip olarak profesyonel bir aile
                anlayışı içerisinde çalışıyoruz. Siz de bu vizyonun bir parçası
                olun.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: Stajyer ve Yeni Mezun Programları */}
        <section className="container mx-auto px-2 py-2 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-[200px]">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight font-segouie">
                Stajyer ve Yeni Mezun Programları
              </h2>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="bg-white py-16">
          {/* Artık container yerine w-full px-4, böylece kenarlardaki boşluk azalacak */}
          <div style={{ padding: "0px 2px 10px" }} className="relative w-full overflow-visible">

            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-swiper-next",
                prevEl: ".custom-swiper-prev",
              }}
              // Mobilde kısmi görünüm için 1.2
              slidesPerView={1.2}
              spaceBetween={5}
              breakpoints={{
                // 640px (sm) üstü için 2
                640: { slidesPerView: 3 },
                // 1024px (lg) üstü için 4
                1024: { slidesPerView: 4 },
              }}
              pagination={{ clickable: true }}
              grabCursor={false}
            >
              {values.map((value, index) => (
                <SwiperSlide key={index}>
                  {/* Card */}
                  <div
                    className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start
                          justify-start h-[350px] w-[270px] border border-gray-200 mx-auto"
                  >
                    <img
                      src={value.icon}
                      alt={value.title}
                      className="w-12 h-12 mb-4"
                    />
                    <h3 className="text-lg font-bold font-segouie mb-3">{value.title}</h3>
                    <ul className="text-gray-600 text-sm font-segouie space-y-2">
                      {value.description.map((text, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <img
                            src="/public/checkmark.png"
                            alt="Checkmark"
                            className="w-4 h-4 mt-1"
                          />
                          <p className="italic font-segouie">{text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            {/* right-4 yaparak okları biraz daha sağa çektik */}
            <div className="absolute bottom-[-60px] right-4 flex space-x-4 z-10">
              <button
                className="custom-swiper-prev w-10 h-10 bg-gray-100
                  rounded-full flex items-center justify-center
                  shadow hover:shadow-lg hover:bg-gray-200
                  transform hover:scale-110 transition-all"
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
                className="custom-swiper-next w-10 h-10 bg-gray-100
                  rounded-full flex items-center justify-center
                  shadow hover:shadow-lg hover:bg-gray-200
                  transform hover:scale-110 transition-all"
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

        {/* Sıkça Sorulan Sorular Bölümü (Accordion) */}
        <section className="container mx-auto px-6 py-16 bg-white">
          <h2 className="text-4xl font-medium text-gray-900 leading-tight font-segouie mt-24">
            Sıkça Sorulan Sorular:
          </h2>
          <div className="mt-16 max-w-6xl mx-auto">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-300 py-6">
                {/* Soru Başlığı */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-bold font-segouie">{item.question}</h3>
                  {/* + ve - butonları için çember stilleri */}
                  <button
                    className="w-10 h-10 flex items-center justify-center border-2
                               border-gray-900 rounded-full text-xl font-bold"
                  >
                    {openFAQs[index] ? "−" : "+"}
                  </button>
                </div>

                {/* Cevap */}
                {openFAQs[index] && (
                  <div className="mt-6 mb-12 ml-10 flex items-start space-x-4 max-w-3xl">
                    <img src={item.icon} alt="icon" className="w-6 h-6 mt-1" />{" "}
                    <p className="text-gray-700 font-segouie">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Ready to start your AI journey? */}
        <section className="px-1 py-16 flex justify-center items-center">
          {/* Parent Container */}
          <div className="relative w-full max-w-6xl px-8 py-24 rounded-2xl shadow-xl overflow-hidden">
            {/* Arka plan (radial gradient) */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
              <div
                className="w-[600px] h-[300px] rounded-full"
                style={{
                  background:
                    "radial-gradient(ellipse at center, #3277BC, #4BA6DD, #44B870, #58595B)",
                  filter: "blur(100px)",
                }}
              />
            </div>

            {/* Text Content */}
            <div className="text-center relative z-10">
              <h2 className="text-5xl font-extrabold text-gray-900 leading-tight font-segouie">
                Ready to start your AI <br /> journey with us?
              </h2>
              <p className="mt-4 text-lg text-gray-700 font-segouie">
                Simple, transparent pricing. No setup fees or contracts. <br />
                Try without a credit card, cancel anytime.
              </p>

              {/* Butonlar (mobilde dikey stack için flex-col) */}
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                {/* Explore Our Solutions Button */}
                <button
                  className="px-8 py-4 bg-[#44B870] text-white font-segouie font-bold rounded-full
                             shadow-lg hover:bg-[#44B870] flex items-center transition-transform
                             transform hover:scale-105"
                >
                  Explore Our Solutions
                  <span className="ml-2 text-xl font-segouie">→</span>
                </button>

                {/* Book a Demo Button */}
                <button
                  className="px-8 py-4 bg-white border-2 border-gray-300 font-segouie text-gray-800
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
      </div>
    </MainLayout>
  );
};

export default JobsPage;
