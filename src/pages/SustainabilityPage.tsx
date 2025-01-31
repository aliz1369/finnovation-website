// src/pages/SustainabilityPage.tsx
import React from "react";
// import HeaderMenu from "../components/HeaderMenu";
// import Footer from "../components/Footer/Footer";
// import ChatBubble from "../components/ChatBubble";

const SustainabilityPage: React.FC = () => {
  return (
    <div className="flex flex-col ">
      {/* <HeaderMenu /> */}
      <main className="flex-grow relative text-gray-800 py-16 px-8">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #3b82f6, #14b8a6)",
            clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 100%)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-center mb-8">
            Sürdürülebilirlik Yaklaşımımız
          </h1>
          <p className="text-center mb-12 max-w-4xl mx-auto">
            Teknolojiyi sadece bugünün ihtiyaçları için değil, geleceği
            şekillendirmek için kullanıyoruz. Finnovation Yazılım Çözümleri
            olarak, çevresel, ekonomik ve toplumsal sürdürülebilirlik hedefleri
            doğrultusunda hareket ediyoruz.
          </p>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Çevresel Sürdürülebilirlik */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Çevresel Sürdürülebilirlik
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  <strong>
                    Dijital Dönüşüm ile Karbon Ayak İzini Azaltma:
                  </strong>{" "}
                  Yazılım çözümlerimiz, işletmelerin daha verimli çalışmasını
                  sağlayarak kağıt ve enerji kullanımını en aza indirir.
                </li>
                <li>
                  <strong>Yeşil Enerjiye Destek:</strong> Sunucularımız ve veri
                  merkezlerimizde yenilenebilir enerji kaynaklarını tercih
                  ediyoruz.
                </li>
                <li>
                  <strong>Atık Yönetimi:</strong> Elektronik atıkların geri
                  dönüşümüne katkıda bulunuyor ve teknoloji ekipmanlarının
                  ömrünü uzatacak çözümler sunuyoruz.
                </li>
              </ul>
            </div>

            {/* Sosyal Sürdürülebilirlik */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Sosyal Sürdürülebilirlik
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Eğitim ve Gelişim:</strong> Çalışanlarımızın sürekli
                  gelişimini destekliyor, teknoloji alanında yeni yetenekleri
                  sektöre kazandırıyoruz.
                </li>
                <li>
                  <strong>Dijital Erişilebilirlik:</strong> Herkes için
                  erişilebilir çözümler tasarlıyor, dijital dünyada kimseyi
                  geride bırakmıyoruz.
                </li>
                <li>
                  <strong>Toplumsal Katkı Projeleri:</strong> Teknolojiyi
                  kullanarak sosyal sorunlara çözüm bulmayı hedefleyen projelere
                  destek veriyoruz.
                </li>
              </ul>
            </div>

            {/* Ekonomik Sürdürülebilirlik */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Ekonomik Sürdürülebilirlik
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Uzun Vadeli Çözümler:</strong> Müşterilerimize
                  sağladığımız yazılım çözümleri, onların işlerini
                  sürdürülebilir bir şekilde büyütmelerine yardımcı olur.
                </li>
                <li>
                  <strong>Yerel Ekonomiye Katkı:</strong> Yerel istihdamı
                  destekliyor ve teknoloji ekosisteminin gelişmesine katkı
                  sağlıyoruz.
                </li>
              </ul>
            </div>

            {/* Hedeflerimiz */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Hedeflerimiz</h2>
              <ul className="list-disc pl-6">
                <ul>Sürdürülebilirlik vizyonumuz doğrultusunda;</ul>
                <li>
                  2030 yılına kadar operasyonlarımızın karbon nötr hale
                  getirilmesi,
                </li>
                <li>Yerel topluluklarla işbirliklerinin artırılması,</li>
                <li>Çevre dostu teknoloji çözümlerinin geliştirilmesi.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      {/* <ChatBubble position="sustainability" />
            <Footer /> */}
    </div>
  );
};

export default SustainabilityPage;
