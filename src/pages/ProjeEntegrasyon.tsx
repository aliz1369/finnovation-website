import React from "react";

const ProjeEntegrasyon: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white p-8 flex items-start">
      {}
      <div
        className="absolute top-0 left-0 w-full h-[500px]"
        style={{
          background: "linear-gradient(to right, #3b82f6, #14b8a6)",
          clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
        }}
      ></div>

      {}
      <div className="relative z-10 flex max-w-full pl-8 pr-8 pt-[20px]">
        {}
        <div className="w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-10">
            Proje Bazlı Teknoloji ve Sistem Entegrasyonu
          </h1>

          <p className="text-gray-800 text-base mb-10">
            Günümüzün hızlı değişen iş dünyasında, teknolojinin doğru şekilde uygulanması ve
            sistemlerin etkin bir şekilde entegre edilmesi, kurumların başarısı için kritik
            öneme sahiptir. Teknoloji ve Sistem Entegrasyonu hizmetlerimizle, kurumların
            sistem altyapılarına en güncel teknolojileri entegre ederek iş süreçlerinin
            verimliliğini artırıyor ve operasyonel başarılarını destekliyoruz.
          </p>

          {}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Hizmet Alanlarımız:</h2>
            <ul className="list-disc pl-6 text-gray-800 text-base space-y-2">
              <li>
                <strong>Dış Kaynak Desteği:</strong> İhtiyaç duyduğunuz alanlarda dış kaynak
                desteği sağlayarak iş süreçlerinizi hızlandırıyoruz.
              </li>
              <li>
                <strong>Analiz:</strong> İş süreçleri ve mevcut sistem altyapılarınız detaylı
                bir şekilde analiz edilerek, gereksinimlerinize en uygun teknoloji ve
                entegrasyon çözümleri belirlenir.
              </li>
              <li>
                <strong>Yazılım Geliştirme:</strong> Kurumunuza özel yazılım çözümleri
                geliştirerek, operasyonel süreçlerinizi iyileştiren, güvenilir ve
                ölçeklenebilir sistemler sunuyoruz.
              </li>
              <li>
                <strong>Test Yönetimi:</strong> Geliştirilen sistemlerin ve yazılımların
                kapsamlı test süreçlerini yönetiyoruz. Bu adım, uygulamaların hatasız bir
                şekilde çalışmasını ve verimli bir kullanıcı deneyimi sunmasını sağlar.
              </li>
              <li>
                <strong>Proje Yönetimi:</strong> Teknoloji entegrasyonu süreçlerinin uçtan uca
                yönetimini üstleniyor, projelerinizi zamanında ve bütçe dahilinde başarıyla
                tamamlıyoruz.
              </li>
            </ul>
          </div>

          {}
          <p className="text-gray-800 text-base mt-10">
            Teknoloji ve Sistem Entegrasyonu çözümlerimiz, sadece teknik uygulamalar değil,
            aynı zamanda stratejik hedeflerinize uygun bir teknoloji altyapısı oluşturmayı
            hedefler. Güncel teknolojileri kurumunuzun ihtiyaçlarına göre optimize ederek,
            iş süreçlerinizin daha verimli, güvenilir ve uyumlu hale gelmesini sağlıyoruz.
          </p>
        </div>

        {}
        <div className="w-1/3 flex justify-center items-center">
          <img src="/entegrasyon.png" alt="Sistem Entegrasyonu" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProjeEntegrasyon;
