import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

interface Program {
  title: string;
  content: string[];
  isOpen?: boolean;
}

const FinAcademyPage: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([
    {
      title: "FinTech Giriş Seviyesi",
      content: [
        "Fintech nedir?",
        "Temel kavramlar ve uygulamalar.",
        "Sektördeki yenilikçi girişimler.",
      ],
      isOpen: true,
    },
    {
      title: "Dijital Ödemeler",
      content: [
        "Dijital ödeme sistemleri nasıl çalışır?",
        "Blockchain ve kripto para teknolojileri.",
        "Mobil cüzdanların yükselişi.",
      ],
      isOpen: true,
    },
    {
      title: "Veri Analitiği ve Yapay Zeka",
      content: [
        "Veri analizi yöntemleri.",
        "Müşteri davranışlarını anlamak için AI kullanımı.",
        "Risk yönetimi ve fraud önleme teknikleri.",
      ],
      isOpen: true,
    },
    {
      title: "Regülasyonlar ve Uyum Süreçleri",
      content: [
        "Fintech regülasyonları nelerdir?",
        "Uyum süreçlerinin önemi.",
        "Global standartlar hakkında bilgilendirme.",
      ],
      isOpen: true,
    },
    {
      title: "Girişimcilik Atölyesi",
      content: [
        "Başarılı bir fintech girişimi nasıl kurulur?",
        "Yatırımcılarla etkili iletişim.",
      ],
      isOpen: true,
    },
  ]);

  const handleToggle = (index: number) => {
    setPrograms((prev) =>
      prev.map((prog, i) =>
        i === index ? { ...prog, isOpen: !prog.isOpen } : prog
      )
    );
  };

  return (
    <MainLayout>
      <div style={{ fontFamily: "Light Small" }}>
        <section className="bg-white h-auto md:h-[calc(100vh-4rem)]">
          <div className="w-full h-full md:grid md:grid-rows-2">
            <div className="flex items-center justify-start text-center px-10 py-8 md:py-0">
              <h1
                className="text-black font-light
                           text-4xl sm:text-7xl md:text-8xl lg:text-9xl
                           leading-tight tracking-tight"
              >
                Geleceğin Finansal
                <br />
                Liderlerini Yetiştiriyoruz
              </h1>
            </div>
            <div className="relative px-9 pb-16 md:pb-0">
              <p
                className="md:absolute md:top-[12%] md:right-[8%]
                           text-base sm:text-lg md:text-3xl text-gray-700 
                           leading-relaxed text-right max-w-2xl"
              >
                <span className="font-bold">FinAcademy</span>, finansal
                teknolojiler ve inovasyon alanında bilgi ve becerilerinizi
                geliştirmeniz için tasarlanmış bir eğitim platformudur.
                Amacımız, katılımcılarımıza en güncel bilgilere odaklanarak,
                geleceğin finans dünyasında başarılı olmalarını sağlamaktır.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white h-auto md:h-[calc(100vh-4rem)]">
          <div
            className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 h-full
                       flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-10">
              Neden FinAcademy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="bg-white shadow-md rounded-xl p-8
                           flex flex-col items-center text-center
                           min-h-[450px]"
              >
                <img
                  src="/activeuser.png"
                  alt="Uzman Eğitmenler"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-2xl font-light mb-4">Uzman Eğitmenler</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <img
                    src="/checkmark.png"
                    alt="Check"
                    className="inline-block w-4 h-4 mr-1"
                  />
                  Alanında deneyimli eğitmenlerimiz size en iyi öğrenme
                  deneyimini sunmak için çalışmaktadır.
                </p>
              </div>
              <div
                className="bg-white shadow-md rounded-xl p-8
                           flex flex-col items-center text-center
                           min-h-[450px]"
              >
                <img
                  src="/practical.png"
                  alt="Pratik Eğitim"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-2xl font-light mb-4">Pratik Eğitim</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <img
                    src="/checkmark.png"
                    alt="Check"
                    className="inline-block w-4 h-4 mr-1"
                  />
                  Teorik bilginin yanı sıra gerçek dünya uygulamalarıyla pratik
                  deneyim kazanmanızı sağlıyoruz.
                </p>
              </div>
              <div
                className="bg-white shadow-md rounded-xl p-8
                           flex flex-col items-center text-center
                           min-h-[450px]"
              >
                <img
                  src="/update.png"
                  alt="Güncel Müfredat"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-2xl font-light mb-4">Güncel Müfredat</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <img
                    src="/checkmark.png"
                    alt="Check"
                    className="inline-block w-4 h-4 mr-1"
                  />
                  Finans teknolojileri hızla değişiyor; biz de müfredatımızı
                  sürekli güncelleyerek sektör trendlerine uygun eğitimler
                  sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-10">
              Eğitim Programlarımız
            </h2>
            <div className="space-y-6">
              {programs.map((program, index) => (
                <div key={index} className="border-b border-gray-300 pb-3">
                  <div
                    className="flex items-center justify-between cursor-pointer py-4"
                    onClick={() => handleToggle(index)}
                  >
                    <h3 className="text-xl font-light">{program.title}</h3>
                    <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                      {program.isOpen ? (
                        <span className="text-xl font-light">-</span>
                      ) : (
                        <span className="text-xl font-light">+</span>
                      )}
                    </div>
                  </div>
                  {program.isOpen && (
                    <ul className="pl-4 space-y-2 text-gray-700">
                      {program.content.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <img
                            src="/checkmark.png"
                            alt="Checkmark"
                            className="w-4 h-4 mt-1"
                          />
                          <p className="font-light">{item}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white h-auto md:h-[calc(100vh-4rem)]">
          <div
            className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 h-full
                       flex flex-col justify-center"
          >
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-12">
              Eğitim Formatları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow rounded-xl p-8 flex flex-col items-center text-center min-h-[500px]">
                <img
                  src="/activeuser.png"
                  alt="Çevrimiçi Kurslar"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-2xl font-light mb-4">Çevrimiçi Kurslar</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Finans teknolojileri hızla değişiyor; bu dinamik ortamda
                  müfredatımızı sürekli güncelleyerek sektör trendlerine uygun
                  eğitimler sunuyoruz.
                </p>
              </div>
              <div className="bg-white shadow rounded-xl p-8 flex flex-col items-center text-center min-h-[400px]">
                <img
                  src="/update.png"
                  alt="Yüz yüze Seminer"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-2xl font-light mb-4">Yüz yüze Seminer</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Canlı etkileşim ile derslerinizi anında öğrenme fırsatı.
                </p>
              </div>
              <div className="bg-white shadow rounded-xl p-8 flex flex-col items-center text-center min-h-[400px]">
                <img
                  src="/update.png"
                  alt="Atölye Çalışmaları"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-2xl font-light mb-4">Atölye Çalışmaları</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Uygulamalı deneyim kazanmak için pratik yapma imkanı.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden h-auto md:h-[calc(100vh-4rem)]">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #e9f2fa 0%, #ffffff 100%)",
            }}
          />
          <div
            className="relative max-w-4xl mx-auto h-full flex flex-col
                       items-center justify-center px-6 text-center z-10"
          >
            <h2 className="text-5xl sm:text-7xl font-light text-gray-900 mb-6">
              Ready to start your AI journey with us?
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-light text-gray-400 max-w-2xl mb-8">
              Simple, transparent pricing. No setup fees or contracts. Try
              without a credit card, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-[#3277BC] text-white px-6 py-3
                           rounded-full hover:bg-[#2b66a2] transition-colors
                           font-light"
              >
                Explore Our Solutions →
              </button>
              <button
                className="border border-gray-300 px-6 py-3
                           rounded-full hover:bg-gray-100 transition-colors
                           font-light flex items-center space-x-2"
              >
                <span>Book a Demo</span>
                <img src="/bd.png" alt="Calendar" className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default FinAcademyPage;
