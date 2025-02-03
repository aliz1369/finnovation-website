// src/pages/HakkimizdaPage.tsx
import React from "react";
import ChatBubble from "../components/ChatBubble";

const HakkimizdaPage: React.FC = () => {
  return (
      <div className="relative min-h-screen bg-white p-4 md:p-8">
        {/* Üst Degrade Arkaplan */}
        <div
            className="absolute top-0 left-0 w-full h-[300px] md:h-[500px]"
            style={{
              background: "linear-gradient(to right, #3b82f6, #14b8a6)",
              clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
            }}
        />

        {/* İçerik */}
        <div className="relative z-10">
          {/* İlk Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-center">
            <div>
              <h1 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 border-b border-black pb-2">
                Hakkımızda
              </h1>
              <p className="text-gray-800 mb-2 text-sm md:text-base">
                2019 yılında kurulan firmamız, yüksek kalitede, sürdürülebilir ve kurumlara
                özel nitelikli hizmetler sunma misyonuyla yola çıktı. Amacımız, yalnızca bir
                hizmet sağlayıcı değil, müşterilerimizin yanında bir yol arkadaşı olarak
                inovatif, yaratıcı ve sürdürülebilir çözümler sunmaktır.
                <br />
                <br />
                Biz, farkı insan faktörünün yarattığına ve sunduğumuz hizmetlerin
                mükemmelliğinin temelinde çalışanlarımızın özverisi, uzmanlığı ve tutkusunun
                olduğuna inanıyoruz.
                <br />
                <br />
                Kuruluşumuzdan bu yana inovatif, esnek, uzman, tutkulu ve girişimci bir
                yaklaşımla kültürümüzü inşa ediyoruz. Bu kültür etrafında, birbirine zincir
                gibi bağlı, samimi, dürüst ve iş etiğine sahip bir ekip olarak geleceği
                şekillendirme vizyonuyla hareket ediyoruz.
                <br />
                <br />
                Müşterilerimizin başarı yolculuğunda güvenilir bir iş ortağı olmayı
                hedefliyor, her adımda sürdürülebilir ve yenilikçi çözümlerle yanlarında
                olmayı taahhüt ediyoruz.
              </p>
            </div>

            <div>
              <img
                  src="/lamp.png"
                  alt="Hakkımızda Görsel 1"
                  className="w-full h-auto rounded shadow"
              />
            </div>
          </div>

          {/* İkinci Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-center">
            <div>
              <img
                  src="/raised_hands.png"
                  alt="Hakkımızda Görsel 2"
                  className="w-full h-auto rounded shadow"
              />
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-800 border-b border-black pb-2">
                Farkımız
              </h2>
              <p className="text-gray-800 mb-4 text-sm md:text-base">
                Bizi ayıran özelliklerimiz, müşterilerimize sunduğumuz hizmetlerde kalite ve
                güvenin teminatıdır.
              </p>
              <ul className="list-disc pl-4 md:pl-6 text-gray-800 space-y-2 text-sm md:text-base">
                <li>
                  <strong>20+ Yıllık Deneyim:</strong> Sektördeki uzun yıllara dayanan
                  tecrübemizle müşterilerimize güçlü bir bilgi birikimi ve profesyonel
                  hizmet sunuyoruz.
                </li>
                <li>
                  <strong>Yenilikçi Bir Ekip:</strong> Tutkulu ve yaratıcı ekibimiz, her zaman
                  en güncel ve yenilikçi çözümlerle fark yaratır.
                </li>
                <li>
                  <strong>Müşteri Merkezli Hizmet Anlayışı:</strong> Her adımda
                  müşterilerimizi odağımıza alıyor, onların ihtiyaçlarına özel çözümler
                  geliştiriyoruz.
                </li>
                <li>
                  <strong>Sonuç Odaklı Bakış Açısı:</strong> Çözüm üretirken hız ve etkinlik
                  önceliğimizdir; her zaman en iyi sonuçlara ulaşmayı hedefliyoruz.
                </li>
                <li>
                  <strong>Esneklik ve Çeviklik:</strong> Değişen şartlara hızla adapte
                  olabilen yapımızla, ihtiyaçlarınıza uygun çözümleri anında hayata
                  geçiriyoruz.
                </li>
                <li>
                  <strong>Yüksek Kaliteli Hizmet Anlayışı:</strong> Kaliteyi her zaman ön
                  planda tutarak, en iyiyi sunma misyonuyla hareket ediyoruz.
                </li>
              </ul>
              <p className="text-gray-800 mt-4 text-sm md:text-base">
                Müşterilerimiz için sadece bir çözüm ortağı değil, aynı zamanda güvenilir bir
                yol arkadaşıyız.
              </p>
            </div>
          </div>

          {/* Vizyon - Misyon */}
          <div className="mt-8">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-800 border-b border-black pb-2">
              Vizyonumuz ve Misyonumuz
            </h2>
            <p className="text-gray-800 mb-2 text-sm md:text-base">
              2030 yılında, teknoloji geliştirme, danışmanlık ve eğitim alanlarında inovasyon
              lideri olarak, Türkiye’den dünyaya yayılan sürdürülebilir ve etkili çözümler
              sunarak sektörde tanınan bir lider olmak ve yoldaşımız olan iş ortaklarımıza
              yüksek kalitede, uygun fiyatlı, sürdürülebilir ve değer yaratan ürün, hizmet
              ve çözümler sunmaktır.
            </p>
          </div>
        </div>

        <ChatBubble />
      </div>
  );
};

export default HakkimizdaPage;
