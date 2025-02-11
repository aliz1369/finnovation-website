import React from "react";
import MainLayout from "../layouts/MainLayout";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";

const ProjeYonetimi: React.FC = () => {
  const values = [
    {
      title: "Kapsam Oluşturma",
      description: [
        "Sadece iş ortamında değil, istersek hayatın içinde de beraberiz. Kıymet biliriz, alma-verme dengesini önemseriz. ",
        "Herbirimiz üzerinde çalıştığımız her konuda şirketin temsilcisi ve iş geliştiricisidir.",
      ],
      icon: "/square.png",
    },
    {
      title: "Analizin Yapılması",
      description: [
        "Sadece iş ortamında değil, istersek hayatın içinde de beraberiz. Kıymet biliriz, alma-verme dengesini önemseriz. ",
        "Herbirimiz üzerinde çalıştığımız her konuda şirketin temsilcisi ve iş geliştiricisidir.",
      ],
      icon: "/analyze.png",
    },

    {
      title: "Yazılım Geliştirme",
      description: [
        "Özel yazılım çözümleri geliştirerek veya mevcut sistemlerle entegrasyon sağlayarak, projenin teknolojik altyapısını inşa ediyoruz. Bu süreç, iş süreçlerinizin verimliliğini artırmayı hedefler.",
      ],
      icon: "/software.png",
    },
    {
      title: "Test Süreci",
      description: [
        "Yazılım ve sistemler kapsamlı testlerden geçirilir. Bu adım, hataları en aza indirmek ve çözümlerinizin kesintisiz çalışmasını sağlamak için kritik öneme sahiptir.",
      ],
      icon: "/process.png",
    },
    {
      title: "Çözüm Geçişleri",
      description: [
        "Geliştirilen çözümler, canlı ortama geçiş sırasında uzman ekibimiz tarafından desteklenir. Ayrıca, geçiş sonrası süreçlerde de yanınızda olarak, çözümün sorunsuz bir şekilde çalışmasını garanti altına alırız.",
      ],
      icon: "/lightbulb.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        {/* SECTION: Kariyer */}
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Proje Yönetimi
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
                Proje Yönetimi, kurumların hedeflerine ulaşmalarını sağlamak
                için stratejik bir yaklaşımla planlama, yürütme ve kontrol
                süreçlerini içerir. Uçtan Uca Proje Yönetimi anlayışımızla,
                proje hayat döngüsünün tüm aşamalarında yanınızdayız ve
                projelerinizi başarıyla hayata geçirmeniz için kapsamlı çözümler
                sunuyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: Stajyer ve Yeni Mezun Programları */}
        <section className="container mx-auto px-2 py-2 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-[200px]">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight font-segouie">
                Proje Yönetimi Süreçlerimiz:
              </h2>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="bg-white py-16">
          {/* Artık container yerine w-full px-4, böylece kenarlardaki boşluk azalacak */}
          <div
            style={{ padding: "0px 2px 10px" }}
            className="relative w-full overflow-visible"
          >
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
                    <h3 className="text-lg font-bold font-segouie mb-3">
                      {value.title}
                    </h3>
                    <ul className="text-gray-600 text-sm font-segouie space-y-2">
                      {value.description.map((text, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <img
                            src="/checkmark.png"
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

        <section className="container mx-auto px-2 py-2 bg-white">
          <div className="mt-16 items-center md:pt-[200px]">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed font-segouie mb-6">
                Proje Yönetimi yaklaşımımız, sadece teknik çözümleri değil, aynı
                zamanda stratejik hedeflerinizi de göz önünde bulundurarak
                süreçleri optimize etmeyi amaçlar. Her adımda sağladığımız
                profesyonel destek, projelerinizin zamanında ve bütçe dahilinde
                tamamlanmasını sağlar.
              </p>
            </div>
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

export default ProjeYonetimi;
