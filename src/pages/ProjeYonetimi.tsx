import React from "react";
import MainLayout from "../layouts/MainLayout";
import "swiper/swiper-bundle.css";
import CardSlider from "../components/CardSlider";
import CallToAction from "../components/CallToAction";
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
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default ProjeYonetimi;
