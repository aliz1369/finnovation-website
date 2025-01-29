import React from "react";

const ProjeYonetimi: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white p-8">
      {}
      <div
        className="absolute top-0 left-0 w-full h-[500px]"
        style={{
          background: "linear-gradient(to right, #3b82f6, #14b8a6)",
          clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
        }}
      ></div>

      {}
      <div className="relative z-10 max-w-full pl-8 pr-8 pt-[20px]">
        {}
        <h1 className="text-3xl font-bold text-gray-800 mb-10">Proje Yönetimi</h1>

        {}
        <p className="text-gray-800 text-base mb-10">
          Proje Yönetimi, kurumların hedeflerine ulaşmalarını sağlamak için stratejik bir
          yaklaşımla planlama, yürütme ve kontrol süreçlerini içerir. Uçtan Uca Proje
          Yönetimi anlayışımızla, proje hayat döngüsünün tüm aşamalarında yanınızdayız ve
          projelerinizi başarıyla hayata geçirmeniz için kapsamlı çözümler sunuyoruz.
        </p>

        {}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Proje Yönetimi Süreçlerimiz:
          </h2>
          <ul className="list-disc pl-6 text-gray-800 text-base space-y-2">
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
              <strong>Ürün ve Çözümlerin Geçişi ve Geçiş Sonrası Destek:</strong>
              Geliştirilen çözümler, canlı ortama geçiş sırasında uzman ekibimiz tarafından
              desteklenir. Ayrıca, geçiş sonrası süreçlerde de yanınızda olarak, çözümün
              sorunsuz bir şekilde çalışmasını garanti altına alırız.
            </li>
          </ul>
        </div>

        {}
        <p className="text-gray-800 text-base mt-10">
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
