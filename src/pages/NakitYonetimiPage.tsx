// src/pages/NakitYonetimiPage.tsx
import React from "react";

const NakitYonetimiPage: React.FC = () => {
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
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                    Nakit Yönetimi
                </h1>

                <p className="text-base md:text-lg text-gray-800 mb-4 md:mb-6">
                    Nakit yönetimi, kurumların finansal istikrarını koruması ve operasyonel
                    verimliliğini artırması için önemli bir rol oynar. Çözümlerimiz, nakit
                    akışlarınızı optimize ederek finansal süreçlerinizi daha etkili bir şekilde
                    yönetmenizi sağlar.
                </p>

                <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base text-gray-800 mb-4 md:mb-6 space-y-2">
                    <li>
                        <strong>Nakit pozisyonunun optimizasyonu:</strong> Kurumunuzun nakit
                        kaynaklarını en verimli şekilde kullanarak finansal esneklik sağlar.
                    </li>
                    <li>
                        <strong>Nakit pozisyonu kompozisyonu önerileri:</strong> Uygun maliyetli
                        süreçler kullanılarak, nakit kaynaklarınızın daha etkin yönetilmesi için
                        stratejik önerilerde bulunulur.
                    </li>
                    <li>
                        <strong>Banka iletişim yönetimi:</strong> Bankalarla olan iletişim
                        süreçlerinin ve anlaşmaların incelenmesi, değerlendirilmesi ve
                        geliştirilmesi konularında destek sunulur.
                    </li>
                    <li>
                        <strong>Nakit akış analizleri ve tahminleri:</strong> Geçmiş nakit
                        akışlarınızı analiz ederek gelecekteki nakit ihtiyaçlarınızı öngörmek ve
                        yönetmek için kapsamlı destek sağlanır.
                    </li>
                    <li>
                        <strong>İşletme sermayesi yönetimi:</strong> İşletme sermayenizin daha etkin
                        kullanılabilmesi için stratejiler geliştirilir ve uygulama desteği sağlanır.
                    </li>
                    <li>
                        <strong>Yeni nakit yönetimi modelinin tasarımı:</strong> Kurumunuza özel nakit
                        yönetimi modelleri geliştirilir ve bu modellerin uygulama planları oluşturulur.
                    </li>
                </ul>

                <p className="text-base md:text-lg text-gray-800">
                    Nakit yönetimi çözümlerimiz, finansal süreçlerinizi daha şeffaf, öngörülebilir ve
                    verimli bir şekilde yapılandırmanıza olanak tanır. Hedefimiz, nakit akışınızı
                    optimize ederek işletme sermayenizi daha etkili kullanmanızı sağlamak ve finansal
                    hedeflerinize ulaşmanızda destek olmaktır.
                </p>
            </div>
        </div>
    );
};

export default NakitYonetimiPage;
