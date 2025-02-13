import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const ProjelerPage: React.FC = () => {
  const benefits = [
    {
      title: "Esnek Çalışma",
      description: ["Hibrit çalışma modeli ile iş-yaşam dengenizi koruyun"],
      icon: "/public/collab.png",
    },
    {
      title: "Sürekli Gelişim",
      description: [
        "Düzenli eğitimler ve workshop'lar ile kendinizi geliştirin",
      ],
      icon: "/public/collab.png",
    },
    {
      title: "Sağlık Sigortası",
      description: ["Özel sağlık sigortası ile siz ve aileniz güvende"],
      icon: "/public/activeuser.png",
    },
    {
      title: "Sosyal Aktiviteler",
      description: ["Düzenli ekip aktiviteleri ve sosyal etkinlikler"],
      icon: "/public/activeuser.png",
    },
    {
      title: "Teknoloji Desteği",
      description: ["İhtiyacınız olan tüm teknolojik ekipman desteği"],
      icon: "/public/activeuser.png",
    },
  ];

  return (
    <MainLayout>
      {}

      <CardSlider isScrollable={true} cardPerView={6} sliderDatas={benefits} />
      {/* CTA Section - Updated responsive design */}
      <section className="px-1 py-16 flex justify-center items-center">
        <div className="relative w-full max-w-6xl px-8 py-24 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
            <div
              className="w-[600px] h-[300px] rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse at center, #3277BC, #4BA6DD, #3AAA9A, #58595B)",
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
                                 font-bold rounded-full shadow-md hover:bg-gray-100 hover:border-gray-400 
                                 flex items-center justify-center transition-transform transform hover:scale-105"
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
    </MainLayout>
  );
};

export default ProjelerPage;
