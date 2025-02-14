import React from "react";
import MainLayout from "../layouts/MainLayout";
import CardSlider from "../components/CardSlider";  

const YetenekProgramlariPage: React.FC = () => {

  const benefits = [
    {
      title: "Kariyer Başlangıcı",
      description: ["Profesyonel yolculuğunuzda güçlü bir temel atın."],
      icon: "/collab.png",
    },
    {
      title: "Eğitim ve Mentorluk",
      description: ["Deneyimli mentorlarla birebir çalışma fırsatı yakalayın."],
      icon: "/collab.png",
    },
    {
      title: "Gerçek Projelerde Deneyim",
      description: ["Teoriyi pratiğe dönüştürerek iş dünyasına hazır hale gelin."],
      icon: "/activeuser.png",
    },
    {
      title: "Problem Çözme ve Stratejik Düşünme",
      description: ["Karar alma süreçlerinde etkili olmayı öğrenin."],
      icon: "/activeuser.png",
    },
    {
      title: "Dijital Çağa Uyum",
      description: ["Teknoloji ve pazarlama gibi farklı alanlarda kendinizi geliştirin."],
      icon: "/activeuser.png",
    },
    {
      title: "Liderlik Becerileri",
      description: ["Ekip yönetimi ve organizasyon becerilerinizi güçlendirin."],
      icon: "/activeuser.png",
    },
  ];
  return (
    <MainLayout>
      <div className="pt-5">
        {/* Hero Section - Updated padding and responsive classes */}
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col md:-ml-8">
              <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-bold leading-[1.1] tracking-tight">
                Yetenek
              </h1>
              <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-bold leading-[1.1] tracking-tight mt-0">
                Programları
              </h1>
            </div>
          </div>
        </section>
        

        {/* Description Section */}
        <section className="max-w-6xl mx-auto px-10 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:pt-[20px]">
            <div>
              <p className="text-[24px] sm:text-[28px] md:text-[32px] leading-tight font-medium -ml-20">
              Kariyerinizin Başlangıcı, Bizimle Olsun!
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed font-segouie mb-6">
              Finnovation yetenek programları, genç yeteneklerin potansiyellerini keşfetmelerini ve profesyonel kariyerlerinde güçlü adımlar atmalarını sağlamak için tasarlanmıştır.
              </p>
            </div>
          </div>
        </section>


        <section className="bg-white py-16">
          <CardSlider
            isScrollable={true}
            cardPerView={3}
            sliderDatas={benefits}
          />
        </section>

        {/* CTA Section - Updated responsive design */}
        <section className="px-1 py-16 flex justify-center items-center">
          <div className="relative w-full max-w-6xl px-8 py-24 rounded-2xl shadow-xl overflow-hidden">
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

            <div className="text-center relative z-10">
              <h2 className="text-5xl font-extrabold text-gray-900 leading-tight font-segouie">
                Ready to start your AI <br /> journey with us?
              </h2>
              <p className="mt-4 text-lg text-gray-700 font-segouie">
                Simple, transparent pricing. No setup fees or contracts. <br />
                Try without a credit card, cancel anytime.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  className="px-8 py-4 bg-[#44B870] text-white font-segouie font-bold rounded-full
                                 shadow-lg hover:bg-[#44B870] flex items-center transition-transform
                                 transform hover:scale-105"
                >
                  Explore Our Solutions
                  <span className="ml-2 text-xl font-segouie">→</span>
                </button>
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

export default YetenekProgramlariPage ;
