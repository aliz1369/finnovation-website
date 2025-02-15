import React from "react";
import MainLayout from "../layouts/MainLayout";
import CardSlider from "../components/CardSlider";  
import HeroTitle from "../components/HeroTitle";

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
      <div>
        <section className="bg-white h-auto md:h-[calc(100vh-4rem)]">
          <HeroTitle
            title="Kariyerinizin Başlangıcı, Bizimle Olsun!"
            subtitle="Finnovation yetenek programları, genç yeteneklerin potansiyellerini keşfetmelerini ve profesyonel kariyerlerinde güçlü adımlar atmalarını sağlamak için tasarlanmıştır."
            description=" olarak, genç yetenekleri keşfetmek ve geliştirmek için özel programlar sunuyoruz. Kariyerinizin ilk adımını sağlam atmanız için tasarlanan bu programlar, eğitim, mentorluk ve gerçek iş deneyimini bir araya getirerek sizi profesyonel hayata hazırlıyor.Alanında uzman isimlerle çalışma fırsatı sunan programlarımız, sadece teknik becerilerinizi değil, aynı zamanda liderlik, problem çözme ve stratejik düşünme yeteneklerinizi de geliştirmenize yardımcı olur. Dijital dünyanın hızla değişen dinamiklerine uyum sağlamak ve rekabet avantajı kazanmak isteyen herkes için eşsiz fırsatlar sunuyoruz."
            highlightedWord="Finnovation"
          />
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
