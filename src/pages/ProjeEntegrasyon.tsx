// src/pages/ProjeEntegrasyon.tsx
import React, { useEffect, useState } from "react";
import { Page } from "../types/globalTypes";
import { fetchProjeBazliPage } from "../api/pageApi";
import LoadingSpinner from "../components/LoadSpinner";
import StyledText from "../components/StyledText";

const ProjeEntegrasyon: React.FC = () => {
  const [data, setData] = useState<Page | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      try {
        setLoading(true);
        const response = await fetchProjeBazliPage();
        console.log(response);
        setData(response);
      } catch (err) {
        setLoading(false);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    data();
  }, []);
  return (
    <>
      <LoadingSpinner visible={loading} />
      <div className="relative min-h-screen bg-white p-4 md:p-8">
        {/* Üst Degrade */}
        <div
          className="absolute top-0 left-0 w-full h-[300px] md:h-[500px]"
          style={{
            background: "linear-gradient(to right, #3b82f6, #14b8a6)",
            clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
          }}
        />

        {/* Sol Kısım */}
        {/* <div className="w-full md:w-2/3">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Proje Bazlı Teknoloji ve Sistem Entegrasyonu
            </h1>
            <p className="text-sm md:text-base text-gray-800 mb-6">
              Günümüzün hızlı değişen iş dünyasında, teknolojinin doğru şekilde
              uygulanması ve sistemlerin etkin bir şekilde entegre edilmesi,
              kurumların başarısı için kritik öneme sahiptir. Teknoloji ve
              Sistem Entegrasyonu hizmetlerimizle, kurumların sistem
              altyapılarına en güncel teknolojileri entegre ederek iş
              süreçlerinin verimliliğini artırıyor ve operasyonel başarılarını
              destekliyoruz.
            </p>

            <div className="mb-6">
              <h2 className="text-base md:text-xl font-semibold text-gray-800 mb-3">
                Hizmet Alanlarımız:
              </h2>
              <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base space-y-2 text-gray-800">
                <li>
                  <strong>Dış Kaynak Desteği:</strong> İhtiyaç duyduğunuz
                  alanlarda dış kaynak desteği sağlayarak iş süreçlerinizi
                  hızlandırıyoruz.
                </li>
                <li>
                  <strong>Analiz:</strong> İş süreçleri ve mevcut sistem
                  altyapılarınız detaylı bir şekilde analiz edilerek,
                  gereksinimlerinize en uygun teknoloji ve entegrasyon çözümleri
                  belirlenir.
                </li>
                <li>
                  <strong>Yazılım Geliştirme:</strong> Kurumunuza özel yazılım
                  çözümleri geliştirerek, operasyonel süreçlerinizi iyileştiren,
                  güvenilir ve ölçeklenebilir sistemler sunuyoruz.
                </li>
                <li>
                  <strong>Test Yönetimi:</strong> Geliştirilen sistemlerin ve
                  yazılımların kapsamlı test süreçlerini yönetiyoruz. Bu adım,
                  uygulamaların hatasız bir şekilde çalışmasını ve verimli bir
                  kullanıcı deneyimi sunmasını sağlar.
                </li>
                <li>
                  <strong>Proje Yönetimi:</strong> Teknoloji entegrasyonu
                  süreçlerinin uçtan uca yönetimini üstleniyor, projelerinizi
                  zamanında ve bütçe dahilinde başarıyla tamamlıyoruz.
                </li>
              </ul>
            </div>

            <p className="text-sm md:text-base text-gray-800">
              Teknoloji ve Sistem Entegrasyonu çözümlerimiz, sadece teknik
              uygulamalar değil, aynı zamanda stratejik hedeflerinize uygun bir
              teknoloji altyapısı oluşturmayı hedefler. Güncel teknolojileri
              kurumunuzun ihtiyaçlarına göre optimize ederek, iş süreçlerinizin
              daha verimli, güvenilir ve uyumlu hale gelmesini sağlıyoruz.
            </p>
          </div> */}
        <div className="relative z-10 flex flex-col md:flex-row max-w-7xl mx-auto pt-8 md:pt-[20px] space-y-6 md:space-y-0 md:space-x-6">
          {data?.sections.map((section) => (
            <>
              {section.position === 0 ? (
                <div className="w-full md:w-2/3">
                  {section.components.map((component) => (
                    <StyledText
                      content={component.content_value}
                      className={`${
                        component.component_type === "title"
                          ? "text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10"
                          : "text-base md:text-lg text-gray-800 mb-6 md:mb-10"
                      }`}
                    />
                  ))}
                </div>
              ) : (
                <div className="w-full md:w-1/3 flex justify-center items-center">
                  //Todo Add img
                  <img
                    src="/entegrasyon.png"
                    alt="Sistem Entegrasyonu"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              )}
            </>
          ))}
        </div>
        {/* Sağ Kısım */}
        {/* <div className="w-full md:w-1/3 flex justify-center items-center">
            <img
              src="/entegrasyon.png"
              alt="Sistem Entegrasyonu"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div> */}
      </div>
    </>
  );
};

export default ProjeEntegrasyon;
