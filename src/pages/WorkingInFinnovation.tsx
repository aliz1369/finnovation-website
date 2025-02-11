import React, { useState } from "react" 
import MainLayout from "../layouts/MainLayout";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import { Navigation} from "swiper/modules";



const WorkingInFinnovation: React.FC = () => {
    const benefits = [
        {
          title: "Esnek Çalışma",
          description: [
            "Hibrit çalışma modeli ile iş-yaşam dengenizi koruyun"],
          icon: "/public/collab.png",
        },
        {
          title: "Sürekli Gelişim",
          description: [
            "Düzenli eğitimler ve workshop'lar ile kendinizi geliştirin"],
          icon: "/public/collab.png",
        },
        {
          title: "Sağlık Sigortası",
          description: [
            "Özel sağlık sigortası ile siz ve aileniz güvende"],
          icon: "/public/activeuser.png",
        },
        {
          title: "Sosyal Aktiviteler",
          description: [
            "Düzenli ekip aktiviteleri ve sosyal etkinlikler"],
          icon: "/public/activeuser.png",
        },
        {
          title: "Teknoloji Desteği",
          description: [
            "İhtiyacınız olan tüm teknolojik ekipman desteği"],
          icon: "/public/activeuser.png",
        },
      ];
  
      const faqData = [
        {
          question: "Finnovation'da çalışma kültürü nasıl?",
          answer: "• Yenilikçi, dinamik ve işbirlikçi bir çalışma ortamı sunuyoruz. Ekip ruhu ve sürekli öğrenme kültürümüzün temelini oluşturur.",
          icon: "/public/checkmark.png" 
        },
        {
          question: "Kariyer gelişimi için ne gibi fırsatlar sunuyorsunuz?",
          answer: "• Sürekli eğitim programları, mentorluk desteği ve yurt içi/yurt dışı konferanslara katılım imkanları sağlıyoruz.",
          icon: "/public/checkmark.png"
        },
        {
          question: "Yan haklar ve sosyal imkanlar nelerdir?",
          answer: "• Özel sağlık sigortası, yemek kartı, ulaşım desteği ve yıllık izin gibi standart hakların yanında, esnek çalışma saatleri ve uzaktan çalışma imkanı sunuyoruz.",
          icon: "/public/checkmark.png"
        },
        {
          question: "İş başvuru süreci nasıl işliyor?",
          answer: "• Başvurunuzun ardından, teknik değerlendirme ve kültür uyumu görüşmeleri yapılır. Süreç ortalama 2-3 hafta içinde tamamlanır.",
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
      <div className="pt-5">
        {/* Hero Section - Updated padding and responsive classes */}
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Finnovation'da Çalışmak
              </h1>
            </div>
          </div>
        </section>

        {/* Description Section - Updated max-width and padding */}
        <section className="max-w-6xl mx-auto px-10 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:pt-[20px]">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed font-segouie mb-6">
                <span className="font-bold underline">Finnovation</span>'da yenilikçi fikirlere ve sürekli gelişime değer veriyoruz...
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section - Updated carousel structure */}
        <section className="bg-white py-16">
          <div style={{ padding: "0px 2px 10px" }} className="relative w-full overflow-visible">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-swiper-next",
                prevEl: ".custom-swiper-prev",
              }}
              slidesPerView={1.2}
              spaceBetween={5}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              pagination={{ clickable: true }}
              grabCursor={false}
            >
              {benefits.map((benefit, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start
                                justify-start h-[350px] w-[270px] border border-gray-200 mx-auto">
                    <img
                      src={benefit.icon}
                      alt={benefit.title}
                      className="w-12 h-12 mb-4"
                    />
                    <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                    <ul className="text-gray-600 text-sm space-y-2">
                      {benefit.description.map((text, i) => (
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

            {/* Updated navigation buttons position */}
            <div className="absolute bottom-[-60px] right-4 flex space-x-4 z-10">
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

        {/* FAQ Section - Updated accordion structure */}
        <section className="container mx-auto px-6 py-16 bg-white">
          <h2 className="text-4xl font-medium text-gray-900 leading-tight font-segouie mt-24">
            Sıkça Sorulan Sorular:
          </h2>
          <div className="mt-16 max-w-6xl mx-auto">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-300 py-6">
                <div className="flex justify-between items-center cursor-pointer"
                     onClick={() => toggleFAQ(index)}>
                  <h3 className="text-xl font-bold font-segouie">{item.question}</h3>
                  <button className="w-10 h-10 flex items-center justify-center border-2
                                   border-gray-900 rounded-full text-xl font-bold">
                    {openFAQs[index] ? "−" : "+"}
                  </button>
                </div>
                {openFAQs[index] && (
                  <div className="mt-6 mb-12 ml-10 flex items-start space-x-4 max-w-3xl">
                    <img src={item.icon} alt="icon" className="w-6 h-6 mt-1" />
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section - Updated responsive design */}
        <section className="px-1 py-16 flex justify-center items-center">
          <div className="relative w-full max-w-6xl px-8 py-24 rounded-2xl shadow-xl overflow-hidden">
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

            <div className="text-center relative z-10">
              <h2 className="text-5xl font-extrabold text-gray-900 leading-tight font-segouie">
                Ready to start your AI <br /> journey with us?
              </h2>
              <p className="mt-4 text-lg text-gray-700 font-segouie">
                Simple, transparent pricing. No setup fees or contracts. <br />
                Try without a credit card, cancel anytime.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="px-8 py-4 bg-[#44B870] text-white font-segouie font-bold rounded-full
                                 shadow-lg hover:bg-[#44B870] flex items-center transition-transform
                                 transform hover:scale-105">
                  Explore Our Solutions
                  <span className="ml-2 text-xl font-segouie">→</span>
                </button>
                <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-800
                                 font-bold rounded-full shadow-md hover:bg-gray-100
                                 hover:border-gray-400 flex items-center transition-transform
                                 transform hover:scale-105">
                  <img src="/public/bd.png" alt="Demo Icon" className="h-5 w-5 mr-2" />
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

export default WorkingInFinnovation;
