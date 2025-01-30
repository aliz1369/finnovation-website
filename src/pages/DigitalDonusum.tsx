import React from "react";

const DigitalDonusum: React.FC = () => {
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
      <div className="relative z-10 w-full pl-8 pr-8 pt-[20px]">
        {}
        <h1 className="text-3xl font-bold text-gray-800 mb-10">Dijital Dönüşüm</h1>

        {}
        <p className="text-gray-800 text-base mb-10">
          Teknolojilerin sektörel ihtiyaçlarla entegrasyonu sayesinde değer yaratılması
          sağlanır. Dijital dönüşüm sürecinde, strateji oluşturma, satış döngüsü analizi
          ve müşteri deneyimi gibi birçok konuda destek verilir. Bu süreç, işlerinizi
          otomatize ederek ürün ve hizmet kalitesini artırır ve sürdürülebilir altyapılar
          oluşturur.
        </p>

        {}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Dijital Kültür</h2>
          <p className="text-gray-800 text-base">
            Çalışanların dijitalleşme süreçlerini benimsemeleri ve iş süreçlerinde etkin
            bir şekilde kullanılabilecekleri dijital araçlar sağlanır. Dijital kültürle,
            iş gücünüzü geleceğe hazırlıyoruz.
          </p>
        </div>

        {}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Dijital Strateji</h2>
          <p className="text-gray-800 text-base">
            İş süreçlerinizi analiz ederek, ihtiyaçlarınıza uygun bir dijital yol haritası
            oluşturuyoruz. Rekabet avantajı sağlamak ve operasyonel verimliliği artırmak
            için teknolojik çözümler sunuyoruz.
          </p>
        </div>

        {}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">İnovasyon ve Değişim Yönetimi</h2>
          <p className="text-gray-800 text-base">
            Dijitalleşme süreci, yenilikçi fikirleri hayata geçirirken değişimi yönetmeyi
            gerektirir. İnovasyonu teşvik eden bir ekosistem oluşturuyor ve değişim
            süreçlerini başarılı bir şekilde yönetmek için gerekli olan adımları atmanıza
            yardımcı oluyoruz.
          </p>
        </div>

        {}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Müşteri Deneyimi</h2>
          <p className="text-gray-800 text-base">
            Müşterileri analiz ederek, teknolojiyle entegre bir müşteri yaklaşımı
            benimseyerek sadakati artırıyoruz.
          </p>
        </div>

        {}
        <p className="text-gray-800 text-base mt-10">
          Dijital dönüşüm ile işinizi geleceğin standartlarına taşıyan uzman çözümler
          sunuyoruz.
        </p>
      </div>
    </div>
  );
};

export default DigitalDonusum;
