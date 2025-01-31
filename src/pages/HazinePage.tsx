// src/pages/HazinePage.tsx
import React from "react";

const HazinePage: React.FC = () => {
      return (
        <div className="relative bg-white p-8">
            {}
            <div
                className="absolute top-0 left-0 w-full h-[700px]"
                style={{
                    background: "linear-gradient(to right, #3b82f6, #14b8a6)",
                    clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)",
                }}
            ></div>

            {}
            <div className="relative z-10 max-w-8xl mx-auto pt-[50px]">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Hazine Yönetimi</h1>

                <p className="text-1xl text-gray-800 mb-6">
                    Hazine yönetimi, dinamik finansal piyasalarda kurumların finansal sağlığını ve
                    sürdürülebilirliğini sağlamada kritik bir rol oynamaktadır. Hazine yönetimi
                    çözümlerimiz, likidite yönetiminden risk kontrolüne kadar geniş bir hizmet
                    yelpazesi sunarak finansal operasyonlarınızı optimize etmenize yardımcı olur.
                </p>

                <p className="text-gray-800 mb-6">
                    Çözümlerimiz, geleneksel ve yapılandırılmış hazine ürünleri için fiyatlandırma,
                    işlem kaydı ve işlem yaşam döngüsü yönetimi gibi hizmetleri kapsarken,
                    kurumunuzun özel finansal ihtiyaçlarına uyum sağlayacak şekilde tasarlanmıştır.
                    Ayrıca, stratejik bir yaklaşım benimseyerek hazine yönetimi süreçlerinizi daha
                    verimli ve etkili hale getirmenizi destekleriz.
                </p>

                <p className="text-2xl text-gray-800 font-semibold mb-6">
                    Bu kapsamda sunduğumuz hizmetler:
                </p>
                <ul className="list-disc pl-6 text-gray-800 mb-6 space-y-2">
                    <li>
                        <strong>Hazine yönetim stratejisinin oluşturulması:</strong> Kurumunuzun
                        hedefleri doğrultusunda uzun vadeli stratejilerin tasarlanması.
                    </li>
                    <li>
                        <strong>Mevcut durum analizi:</strong> Finansal süreçlerin ve hazine
                        operasyonlarının mevcut performansının değerlendirilmesi.
                    </li>
                    <li>
                        <strong>Süreçlerin iyileştirilmesi veya yeniden kurulması:</strong> Operasyonel
                        verimliliği artırmak için hazine süreçlerinin optimize edilmesi veya yeniden
                        yapılandırılması.
                    </li>
                    <li>
                        <strong>Risk ölçüm yaklaşımlarının geliştirilmesi:</strong> Finansal risklerin
                        daha etkili bir şekilde yönetilmesi için modern ve kapsamlı ölçüm
                        metodolojilerinin uygulanması.
                    </li>
                    <li>
                        <strong>Hazine ve müşteri risk yönetimi sistemlerinin kurulumu:</strong>{" "}
                        Belirlenen stratejilere ve ihtiyaçlara uygun şekilde yeni sistemlerin
                        tasarlanması veya mevcut sistemlerin entegrasyonu.
                    </li>
                </ul>

                <p className="text-gray-800">
                    Hedefimiz, hem finansal performansınızı artırmak hem de riskleri daha iyi
                    yöneterek sürdürülebilir büyümeyi sağlamaktır. Hazine yönetimi çözümlerimiz,
                    kurumunuzun rekabet gücünü artırırken, finansal süreçlerde şeffaflık ve
                    verimlilik sunar.
                </p>
            </div>
        </div>
    );
};

export default HazinePage;
