// src/pages/UzmanlikAlanlarimizPage.tsx
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadSpinner";
import { Page } from "../types/globalTypes";
import { fetchUzmanlikAlanlarimizPage } from "../api/pageApi";
import StyledText from "../components/StyledText";

const UzmanlikAlanlarimizPage: React.FC = () => {
  const [data, setData] = useState<Page | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      try {
        setLoading(true);
        const response = await fetchUzmanlikAlanlarimizPage();
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
      <div className="relative bg-white p-4 md:p-8">
        {/* Üst Degrade Arkaplan */}
        <div
          className="absolute top-0 left-0 w-full h-[300px] md:h-[500px]"
          style={{
            background: "linear-gradient(to right, #3b82f6, #14b8a6)",
            clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto pt-8 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-12 md:gap-y-20 mb-12 md:mb-16 items-start">
            {data?.sections.map((section) => (
              <div
                key={section.id}
                className={`${
                  section.title === "title"
                    ? "col-span-1 md:col-span-2 text-center max-w-4xl mx-auto"
                    : ""
                }`}
              >
                {section.title === "title" ? (
                  <div
                    className="text-center max-w-4xl mx-auto"
                    key={section.id}
                  >
                    {section.components.map((component) => (
                      <div>
                        {component.component_type === "title" && (
                          <StyledText
                            content={component.content_value}
                            className="text-2xl md:text-4xl text-center font-bold text-gray-800 mb-8 md:mb-12"
                          />
                        )}
                        {component.component_type === "text" && (
                          <StyledText
                            content={component.content_value}
                            className="text-lg md:text-xl text-gray-700 mb-8"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center" key={section.id}>
                    {section.components.map((component) => (
                      <StyledText
                        content={component.content_value}
                        className={`${
                          component.component_type === "title"
                            ? "text-xl md:text-2xl font-bold text-gray-900 mb-4"
                            : "prose prose-lg text-gray-800 leading-relaxed"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 2.satır */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-12 md:gap-y-20 mb-12 md:mb-16 items-start">
            <div className="text-center">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-6">
                Veri Yönetimi
              </h2>
              <p className="text-sm md:text-base text-black max-w-md mx-auto">
                Verilerinizi organize ederek anlamlı bilgilere dönüştürmek ve iş
                süreçlerinizi optimize etmek için çalışıyoruz.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-6">
                Proje Bazlı Teknoloji ve Sistem Entegrasyonu
              </h2>
              <p className="text-sm md:text-base text-gray-800 max-w-md mx-auto">
                İhtiyaçlarınıza uygun sistem entegrasyonları ile projelerinizi
                başarıyla hayata geçiriyoruz.
              </p>
            </div>
          </div> */}

          {/* 3.satır */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-12 md:gap-y-20 mb-12 md:mb-16 items-start">
            <div className="text-center">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-6">
                Süreç İzleme ve Geliştirme
              </h2>
              <p className="text-sm md:text-base text-gray-800 max-w-md mx-auto">
                İş süreçlerinizin performansını ölçüp geliştirilmesi için veriye
                dayalı çözümler üretiyoruz.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-6">
                Dijital Dönüşüm
              </h2>
              <p className="text-sm md:text-base text-gray-800 max-w-md mx-auto">
                İşletmenizi yeni teknolojilerle güçlendirerek dijital çağın
                gerekliliklerine hazırlıyoruz.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default UzmanlikAlanlarimizPage;
