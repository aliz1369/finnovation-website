// src/pages/EgitimDanismanligiPage.tsx

import React from "react";

const EgitimDanismanligiPage: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-white">
            {/* Üstte degrade arka plan */}
            <div
                className="absolute w-full h-[400px] top-0 left-0"
                style={{
                    background: "linear-gradient(to right, #3b82f6, #14b8a6)",
                    clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 100%)",
                }}
            ></div>

            <div className="relative z-10 max-w-6xl mx-auto pt-8 pb-16 px-4 md:px-6">
                {/* Başlık */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-8 mb-2">
                    Eğitim Danışmanlığı Hizmetlerimiz
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                    İleri Düzey Teknoloji Eğitimlerinden Stratejik İş Süreçleri Geliştirmeye Kadar, Ekiplerinizi Güçlendirecek Eğitim Programlarıyla Kurumsal Başarıyı Bir Adım Öteye Taşıyın
                </p>

                {/* İlk görsel + metin */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {/* Sol Görsel */}
                    <div className="w-full">
                        <img
                            src="/egitim_danismanligi1.png"
                            alt="Eğitim Danışmanlığı Görsel 1"
                            className="w-full h-auto rounded shadow"
                        />
                    </div>

                    {/* Sağ Metin */}
                    <div className="flex flex-col justify-center">
                        <p className="text-gray-800">
                            Finnovation Yazılım Çözümleri olarak, sektördeki en güncel teknolojileri ve en etkili eğitim metodolojilerini kullanarak, kurumlara ve bireylere özel eğitim danışmanlığı hizmetleri sunuyoruz. Eğitim programı, teknolojik becerilerinizi geliştirmek ve iş süreçlerinizin verimliliğini artırmak amacıyla tasarlanmıştır.
                        </p>
                        <ul className="list-disc pl-5 mt-4 text-gray-800 space-y-2">
                            <li>İleri düzey yazılım geliştirme teknikleri</li>
                            <li>Veritabanı yönetimi ve analiz</li>
                            <li>Dijital dönüşüm ve strateji</li>
                        </ul>
                        <p className="mt-4 text-gray-800">
                            gibi geniş bir yelpazede çözümler sunuyoruz.
                        </p>
                    </div>
                </div>

                {/* İkinci görsel + metin */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <div className="order-2 md:order-1 flex flex-col justify-center">
                        <p className="text-gray-800">
                            Finnovation, eğitim süreçlerini yalnızca teorik bilgilerle sınırlı tutmaz, aynı zamanda pratiğe dayalı, gerçek iş dünyası senaryolarıyla zenginleştirir. Eğitim metodolojimiz aşağıdaki adımlarla ilerler:
                        </p>
                        <ul className="list-disc pl-5 mt-4 text-gray-800 space-y-2">
                            <li>
                                <strong>İhtiyaç Analizi:</strong> Eğitim ihtiyaçlarınızı anlamak için danışmanlarımız kapsamlı bir ön görüşme yapar.
                            </li>
                            <li>
                                <strong>Özel Eğitim Programı Hazırlama:</strong> Kurumunuza özel, sektöre uygun eğitim programlarını hazırlarız.
                            </li>
                            <li>
                                <strong>Eğitim Süreci:</strong> Eğitim sürecinde, katılımcılar hem online hem de sınıf içi uygulamalı teknikler öğrenir.
                            </li>
                            <li>
                                <strong>Değerlendirme ve Geri Bildirim:</strong> Eğitim sonunda katılımcılara değerlendirmeler yapılır, gelişim alanları tespit edilir.
                            </li>
                            <li>
                                <strong>Sürekli Destek:</strong> Eğitim sonrası destek ve kaynaklar sunarak, öğrenilenleri iş süreçlerine entegre etmenize yardımcı oluyoruz.
                            </li>
                        </ul>
                    </div>

                    <div className="order-1 md:order-2">
                        <img
                            src="/egitim_danismanligi2.png"
                            alt="Eğitim Danışmanlığı Görsel 2"
                            className="w-full h-auto rounded shadow"
                        />
                    </div>
                </div>

                {/* Ara başlık */}
                <div className="bg-[#1c6071] mt-12 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-4 white">
                        Yazılım Geliştirme Eğitimleri
                    </h2>
                    <p className="text-white">
                        Modern yazılım geliştirme süreçleri ve teknolojilerinde eğitimler sunarak, ekiplerinizin yazılım projelerine katma değer katmasını hedefliyoruz. Programlarımız arasında öne çıkan konular: Frontend ve Backend Geliştirme, API Entegrasyon, Mobil Uygulama Geliştirme, Yapay Zeka ve Makine Öğrenimi, Blockchain Teknolojileri.
                    </p>
                </div>

                {/* Alt kısım: Neden Bizimle vs. */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {/* Sol blok */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">
                            Neden Bizimle Çalışmalısınız?
                        </h3>
                        <ul className="list-disc pl-5 text-gray-800 space-y-2">
                            <li>
                                <strong>Tecrübeli Eğitimci Kadrosu:</strong> Alanında uzman, tecrübeli eğitmenlerle çalışıyoruz.
                            </li>
                            <li>
                                <strong>Özelleştirilmiş Eğitim Programları:</strong> Sizin ihtiyaçlarınıza göre özelleştirilmiş eğitim çözümleri sunuyoruz.
                            </li>
                            <li>
                                <strong>Esnek Eğitim Seçenekleri:</strong> Online, yüz yüze ve hibrit eğitim seçenekleriyle geniş bir esneklik sağlıyoruz.
                            </li>
                            <li>
                                <strong>İleri Düzey Teknoloji Kullanımı:</strong> Eğitimlerde en güncel yazılım ve araçları kullanarak pratik deneyim kazandırıyoruz.
                            </li>
                        </ul>
                    </div>

                    {/* Sağ blok */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">
                            Eğitim Danışmanlık Süreci
                        </h3>
                        <p className="text-gray-800 mb-4">
                            Eğitim danışmanlığı hizmetlerimize başlamak çok kolay:
                        </p>
                        <ul className="list-disc pl-5 text-gray-800 space-y-2">
                            <li>
                                <strong>İhtiyaç Analizi:</strong> Eğitim ihtiyaçlarınızı belirlemek için danışmanlarımızla görüşme yapıyoruz.
                            </li>
                            <li>
                                <strong>Özel Eğitim Programı:</strong> İhtiyaçlarınıza göre kişiselleştirilmiş eğitim programınızı sunuyoruz.
                            </li>
                            <li>
                                <strong>Eğitim Uygulaması:</strong> Eğitim sürecine başlıyor, katılımcılarınıza en verimli içerikleri ve teknikleri sağlıyoruz.
                            </li>
                            <li>
                                <strong>Değerlendirme ve Geri Bildirim:</strong> Eğitim sonrasında geri bildirim alıyor ve gelişim için yönlendirme sağlıyoruz.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Başvuru Yapın */}
                <div className="bg-[#1c6071] text-white text-center p-6 mt-12 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">BAŞVURU YAPIN</h2>
                    <p className="mb-4">
                        Eğitim Danışmanlığına Başvurun. Eğitim danışmanlığı hizmetlerimiz hakkında daha fazla bilgi almak veya programımıza başvurmak için bizimle iletişime geçin.
                    </p>
                    <button className="bg-white text-gray-900 px-6 py-2 rounded hover:bg-gray-200 transition">
                        İletişim Formu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EgitimDanismanligiPage;

