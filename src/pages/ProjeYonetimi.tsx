import React from "react";
import MainLayout from "../layouts/MainLayout";
import "swiper/swiper-bundle.css";
import CardSlider from "../components/CardSlider";

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
          <CardSlider
            isScrollable={true}
            cardPerView={3}
            sliderDatas={values}
          />
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
