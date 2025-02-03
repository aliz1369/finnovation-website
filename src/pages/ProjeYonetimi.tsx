// src/pages/ProjeYonetimi.tsx
import React from "react";

const ProjeYonetimi: React.FC = () => {
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

        <div className="relative z-10 max-w-7xl mx-auto pt-8 md:pt-[20px]">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Proje Yönetimi
          </h1>

          <p className="text-sm md:text-base text-gray-800 mb-6">
            Proje Yönetimi, kurumların hedeflerine ulaşmalarını sağlamak için stratejik bir
            yaklaşımla planlama, yürütme ve kontrol süreçlerini içerir. Uçtan Uca Proje
            Yönetimi anlayışımızla, proje hayat döngüsünün tüm aşamalarında yanınızdayız ve
            projelerinizi başarıyla hayata geçirmeniz için kapsamlı çözümler sunuyoruz.
          </p>

          <div className="mb-6">
            <h2 className="text-base md:text-xl font-semibold text-gray-800 mb-3">
              Proje Yönetimi Süreçlerimiz:
            </h2>
            <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base space-y-2 text-gray-800">
              <li>
                <strong>Kapsamın Oluşturulması:</strong> Projenin hedeflerini ve kapsamını net
                bir şekilde tanımlayarak, ihtiyaçlarınıza özel bir yol haritası oluşturuyoruz.
                Bu aşama, projenin başarıya ulaşması için temel bir adımdır.
              </li>
              <li>
                <strong>Analizin Yapılması:</strong> İş süreçleri, ihtiyaçlar ve mevcut
                sistemler detaylı bir şekilde analiz edilir. Analiz süreci, projenin doğru
                temeller üzerinde ilerlemesini sağlamak için hayati önem taşır.
              </li>
              <li>
                <strong>Yazılımın Geliştirilmesi ve Sistem Entegrasyonu:</strong> Özel yazılım
                çözümleri geliştirerek veya mevcut sistemlerle entegrasyon sağlayarak,
                projenin teknolojik altyapısını inşa ediyoruz. Bu süreç, iş süreçlerinizin
                verimliliğini artırmayı hedefler.
              </li>
              <li>
                <strong>Test Süreçlerinin Yürütülmesi:</strong> Yazılım ve sistemler kapsamlı
                testlerden geçirilir. Bu adım, hataları en aza indirmek ve çözümlerinizin
                kesintisiz çalışmasını sağlamak için kritik öneme sahiptir.
              </li>
              <li>
                <strong>Ürün ve Çözümlerin Geçişi ve Geçiş Sonrası Destek:</strong> Geliştirilen
                çözümler, canlı ortama geçiş sırasında uzman ekibimiz tarafından
                desteklenir. Ayrıca, geçiş sonrası süreçlerde de yanınızda olarak, çözümün
                sorunsuz bir şekilde çalışmasını garanti altına alırız.
              </li>
            </ul>
          </div>

          <p className="text-sm md:text-base text-gray-800 mt-6">
            Proje Yönetimi yaklaşımımız, sadece teknik çözümleri değil, aynı zamanda stratejik
            hedeflerinizi de göz önünde bulundurarak süreçleri optimize etmeyi amaçlar. Her
            adımda sağladığımız profesyonel destek, projelerinizin zamanında ve bütçe
            dahilinde tamamlanmasını sağlar.
          </p>
        </div>
      </div>
  );
};

export default ProjeYonetimi;
