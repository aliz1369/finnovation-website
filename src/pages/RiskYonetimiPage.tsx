// src/pages/RiskYonetimiPage.tsx
import React from "react";

const RiskYonetimiPage: React.FC = () => {
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
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Risk Yönetimi</h1>

                <p className="text-1xl text-gray-800 mb-6">
                    Kurumsal hayatta risk yönetimi, belirsizliklerin ve potansiyel tehditlerin etkin
                    bir şekilde ele alınmasını sağlayarak, kurumların sürdürülebilirliğini ve
                    başarısını güvence altına alır. Etkin bir risk yönetimi için aşağıdaki unsurlar
                    kritik öneme sahiptir:
                </p>

                <ul className="list-disc pl-6 text-gray-800 mb-6 space-y-2">
                    <li>
                        <strong>Uygun seviyede risk kararları alabilmek:</strong> Kurumlar, aldıkları
                        kararların potansiyel başarı ve başarısızlıklarını, maliyet ve getirilerini,
                        risk gerçekleştiğinde kuruma vereceği zararı öngörmeli ve değerlendirmelidir.
                        Bu analizler, doğru kararların alınmasının ve uygun seviyede risk
                        üstlenilmesinin temelini oluşturur.
                    </li>
                    <li>
                        <strong>Kurumsal risk yönetimi çerçevesinin oluşturulması:</strong> Şirketin
                        değerlerine ve stratejilerine uygun bir risk yönetimi çerçevesi oluşturmak, tüm
                        organizasyonda ortak bir risk algısı yaratır ve bilinçli risk alma
                        yetkinliğini artırır. Bu sayede, şirketin riske karşı dayanıklılığı ve
                        belirsizlikleri fırsata dönüştürme kapasitesi gelişir.
                    </li>
                    <li>
                        <strong>Risk yönetimi sistem ve süreçlerinin oluşturulması:</strong> Yönetim
                        kurulu, risk yönetimi sistem ve süreçlerini hayata geçirme sorumluluğuna
                        sahiptir. Bu süreçlerin etkinliği, şirketin risk, büyüme ve getiri dengesini
                        ideal seviyede tutmasına yardımcı olur.
                    </li>
                    <li>
                        <strong>Risk yönetimi faaliyetlerinin özümsenebilir ve sürdürülebilir olması:</strong>{" "}
                        Kurumsal risk yönetimi çerçevesinin uygulanabilirliği, risk yönetimi
                        faaliyetlerinin benimsenmesi ve sürdürülebilirliği açısından önemli
                        faktörlerden biridir. Bu, şirketin riske karşı dayanıklılığını artırır ve
                        belirsizlikleri fırsata dönüştürme kapasitesini güçlendirir.
                    </li>
                </ul>

                <p className="text-gray-800">
                    Bu unsurların entegrasyonu, kurumların risklere karşı daha dirençli olmasını ve
                    stratejik hedeflerine ulaşmasını destekler. Şirketinizin risklere karşı daha
                    dayanıklı ve sürdürülebilir bir yapıya kavuşması için ekibimizle kapsamlı risk
                    yönetimi çözümleri sunuyoruz.
                </p>
            </div>
        </div>
    );
};

export default RiskYonetimiPage;
