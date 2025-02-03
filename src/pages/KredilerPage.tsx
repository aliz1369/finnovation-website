// src/pages/KredilerPage.tsx
import React from "react";

const KredilerPage: React.FC = () => {
    return (
        <div className="relative bg-white p-4 md:p-8">
            {/* Üst Degrade */}
            <div
                className="absolute top-0 left-0 w-full h-[300px] md:h-[700px]"
                style={{
                    background: "linear-gradient(to right, #3b82f6, #14b8a6)",
                    clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)",
                }}
            />

            <div className="relative z-10 max-w-6xl lg:max-w-7xl mx-auto pt-12 md:pt-[50px]">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">Krediler</h1>

                <p className="text-base md:text-lg text-gray-800 mb-4 md:mb-6">
                    Kredi yönetimi, kurumların finansal yapısını güçlendirmesi ve stratejik
                    hedeflerine ulaşması için kritik bir rol oynar. Çözümlerimiz, kredi
                    süreçlerinizi optimize ederek risklerinizi en aza indirirken, finansal
                    kaynaklarınızı en etkili şekilde kullanmanıza olanak tanır.
                </p>

                <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base text-gray-800 mb-4 md:mb-6 space-y-2">
                    <li>
                        <strong>Kredi stratejisinin oluşturulması:</strong> Kurumunuzun hedeflerine
                        uygun kredi yönetim stratejileri geliştirilir ve uygulanır.
                    </li>
                    <li>
                        <strong>Kredi portföyü analizi:</strong> Mevcut kredi portföyünüz detaylı bir
                        şekilde analiz edilerek, risk ve fırsatların değerlendirilmesi sağlanır.
                    </li>
                    <li>
                        <strong>Kredi başvuru ve onay süreçlerinin geliştirilmesi:</strong> Kredi
                        süreçlerinizin hızlandırılması ve verimliliğinin artırılması için optimize
                        edilmiş modeller sunulur.
                    </li>
                    <li>
                        <strong>Kredi risk yönetimi:</strong> Kredilere ilişkin potansiyel risklerin
                        ölçülmesi, izlenmesi ve kontrol edilmesi için kapsamlı çözümler sağlanır.
                    </li>
                    <li>
                        <strong>Kredi maliyet analizi:</strong> Kredi kaynaklarının maliyet yapısı
                        analiz edilerek, daha uygun maliyetli finansman seçenekleri önerilir.
                    </li>
                    <li>
                        <strong>Yeni kredi modellerinin tasarımı:</strong> Kurumunuzun ihtiyaçlarına
                        uygun yeni kredi modelleri geliştirilir ve uygulama planları oluşturulur.
                    </li>
                </ul>

                <p className="text-base md:text-lg text-gray-800 mb-4 md:mb-6">
                    Kredi yönetimi çözümlerimiz, kurumunuzun finansal yapısını daha sağlam bir temele
                    oturtarak, riskleri azaltır ve büyüme fırsatlarını en iyi şekilde
                    değerlendirmenizi sağlar. Hedefimiz, kredi süreçlerinizi şeffaf, hızlı ve etkili
                    bir hale getirerek finansal hedeflerinize ulaşmanızı desteklemektir.
                </p>

                <p className="text-base md:text-lg text-gray-800">
                    Kurumunuza özel tasarlanan kredi stratejileri ve yenilikçi yaklaşımlarımız,
                    finansal operasyonlarınızı iyileştirirken sürdürülebilir bir büyüme için güçlü
                    bir zemin hazırlar.
                </p>
            </div>
        </div>
    );
};

export default KredilerPage;
