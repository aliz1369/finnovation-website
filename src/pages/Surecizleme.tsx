// src/pages/Surecizleme.tsx
import React from "react";

const Surecizleme: React.FC = () => {
  return (
      <div className="relative min-h-screen bg-white p-4 md:p-8">
        {/* Üst Degrade */}
        <div
            className="absolute top-0 left-0 w-full h-[300px] md:h-[500px]"
            style={{
              background: "linear-gradient(to right, #3b82f6, #14b8a6)",
              clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
            }}
        />

        <div className="relative z-10 max-w-5xl mx-auto pt-8 md:pt-20">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10">
            Süreç İzleme ve Geliştirme
          </h1>

          <p className="text-base md:text-lg text-gray-800 mb-6 md:mb-10">
            Günümüzün rekabetçi iş dünyasında, işletmelerin sürdürülebilir başarısı,
            süreçlerinin ne kadar verimli ve etkili olduğuna bağlıdır. Süreç izleme ve
            geliştirme, operasyonel verimliliği artırmak, maliyetleri azaltmak ve müşteri
            memnuniyetini yükseltmek için stratejik bir yaklaşımdır.
          </p>

          <div className="mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              Süreç İzleme Nedir?
            </h2>
            <p className="text-base md:text-lg text-gray-800">
              Süreç izleme, işletme süreçlerinin gerçek zamanlı olarak takip edilmesi ve
              performanslarının değerlendirilmesidir. Bu sayede, süreçlerin güçlü yönleri
              ve geliştirilmesi gereken noktaları tespit edilir. Hedeflenen çıktılara
              ulaşmak için süreçlerin izlenmesi, sorunların kaynağını hızlı bir şekilde
              belirleyerek aksiyon alınmasına olanak tanır.
            </p>
          </div>

          <div className="mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              Süreç Geliştirme Nedir?
            </h2>
            <p className="text-base md:text-lg text-gray-800">
              Süreç geliştirme, mevcut iş süreçlerinin daha verimli, hızlı ve etkili bir
              hale getirilmesi için yapılan çalışmaları kapsar. Bu süreçte, mevcut iş
              akışları analiz edilir, darboğazlar tespit edilir ve gerekli iyileştirmeler
              uygulanır. Süreç geliştirme, yenilikçi yaklaşımlar ve dijital çözümlerle
              desteklenerek işletmelerin daha esnek ve dinamik bir yapıya kavuşmasını
              sağlar.
            </p>
          </div>

          <div className="mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              Süreç İzleme ve Geliştirmenin Avantajları:
            </h2>
            <ul className="list-disc pl-4 md:pl-6 text-base md:text-lg text-gray-800 space-y-2">
              <li>
                <strong>Operasyonel Verimlilik:</strong> İş süreçlerindeki gereksiz adımların
                ortadan kaldırılmasıyla zamandan ve maliyetten tasarruf sağlanır.
              </li>
              <li>
                <strong>Müşteri Memnuniyeti:</strong> Daha hızlı ve kaliteli hizmet sunarak
                müşteri deneyimini iyileştirir.
              </li>
              <li>
                <strong>Stratejik Esneklik:</strong> Süreçlerin güncel koşullara kolayca uyum
                sağlayacak şekilde tasarlanması, rekabet avantajı yaratır.
              </li>
              <li>
                <strong>Hataların Azaltılması:</strong> Süreçlerin düzenli izlenmesi, hataların
                erken tespit edilerek önlenmesini sağlar.
              </li>
              <li>
                <strong>Şeffaflık ve Kontrol:</strong> Süreç performansının ölçülmesi ve
                raporlanması, daha iyi kararlar alınmasına yardımcı olur.
              </li>
            </ul>
          </div>

          <p className="text-base md:text-lg text-gray-800 mt-6">
            Ekibimiz, iş süreçlerinizi analiz ederek mevcut durumu değerlendirir ve size özel
            çözümler sunar. İşletmenizin hedeflerine uygun süreç iyileştirme planları
            tasarlayarak, uzun vadeli bir başarı sağlamanıza destek oluruz.
          </p>
        </div>
      </div>
  );
};

export default Surecizleme;
