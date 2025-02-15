import React from "react";
import MainLayout from "../layouts/MainLayout";
import HeroTitle from "../components/HeroTitle";

const CesitlilikAndKapsayicilikPage: React.FC = () => {
  return (
    <MainLayout>
      <div>
        <section className="bg-white h-auto md:h-[calc(100vh-4rem)]">
          <HeroTitle
            title="Her Ses, Her Renk, Birlikte Daha Güçlüyüz!"
            description=", çeşitliliği ve kapsayıcılığı temel değerleri arasında kabul eder. Farklı geçmişlerden, kültürlerden ve deneyimlerden gelen bireylerin bir araya geldiği dinamik bir çalışma ortamı yaratmak, inovasyonun en güçlü kaynağına inanıyoruz. Her bireyin eşit fırsatlara sahip olduğu, fikirlerin özgürce paylaşılabildiği ve tüm çalışanların kendilerini değerli hissettikleri bir ortam sağlamak için sürekli çaba gösteriyoruz. Çeşitli bakış açıları, yeni çözümler geliştirmemize yardımcı olur ve birlikte daha güçlü bir takım olmamızı sağlar. Finnovation'da herkes, kimliği ne olursa olsun, kendisini güvenli ve saygı gören bir ortamda bulur. Bu yaklaşımımız, sadece şirket içindeki ilişkilerimizi değil, aynı zamanda müşterilerimize sunduğumuz hizmetleri de iyileştirir."
            highlightedWord="Finnovation"
            subtitle="Finnovation, farklılıkları kucaklayarak her bireyin eşit fırsatlara sahip olduğu, saygı ve anlayış çerçevesiyle şekillenen bir çalışma ortamı yaratmayı hedefler."
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

    export default CesitlilikAndKapsayicilikPage;