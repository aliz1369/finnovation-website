import React from "react";
import MainLayout from "../layouts/MainLayout";
import CTASection from "../components/Footer/CTASection"; 
import "swiper/swiper-bundle.css";

// import finlambLogo from "/public/finlamb.jpg"; //bu finlamb.png ile değişecek

const AboutPage: React.FC = () => {
  // const faqData = [
  //   {
  //     question: "Finnovation'ın temel değerleri nelerdir?",
  //     answer:
  //       "• İnovasyon, takım ruhu, şeffaflık ve sürdürülebilirlik temel değerlerimizi oluşturur.",
  //     icon: "/public/checkmark.png",
  //   },
  //   {
  //     question: "Şirket kültürünüzü nasıl tanımlarsınız?",
  //     answer:
  //       "• Yenilikçi, dinamik ve işbirlikçi bir kültür. Herkesin fikirlerini özgürce paylaşabildiği açık bir iletişim ortamı.",
  //     icon: "/public/checkmark.png",
  //   },
  //   {
  //     question: "Ekip içi iletişimi nasıl sağlıyorsunuz?",
  //     answer:
  //       "• Düzenli toplantılar, sosyal etkinlikler ve açık iletişim kanalları ile ekip içi bağları güçlendiriyoruz.",
  //     icon: "/public/checkmark.png",
  //   },
  //   {
  //     question: "Sosyal sorumluluk projeleriniz var mı?",
  //     answer:
  //       "• Evet, sürdürülebilirlik ve toplumsal fayda odaklı çeşitli projelerde yer alıyoruz.",
  //     icon: "/public/checkmark.png",
  //   },
  // ];

  // const [openFAQs, setOpenFAQs] = useState<boolean[]>(
  //   new Array(faqData.length).fill(false)
  // );

  // const toggleFAQ = (index: number) => {
  //   setOpenFAQs((prev) => {
  //     const newState = [...prev];
  //     newState[index] = !newState[index];
  //     return newState;
  //   });
  // };
  return (
    <MainLayout>
      {}

      <div className="pt-5">
        {/* SECTION: Hakkımızda */}
        <section className="container mx-auto px-6 py-16 bg-white text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* LEFT COLUMN */}
            <div>
              <h1 className="text-7xl font-extrabold text-gray-900 leading-tight ">
                Hakkımızda
              </h1>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 bg-white text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:pt">
            {/* RIGHT COLUMN */}
            <div>
              <img
                src={"/finlamb.jpg"}
                alt="finlambLogo"
                className="h-500 w-500 ml-2"
              />
            </div>

            <div className="max-w-4xl ml-auto">
              <p className="text-lg text-gray-700 leading-7 md:leading-8 text-justify md:text-left">
                2019 yılında kurulan firmamız, yüksek kalitede ve sürdürülebilir
                hizmetler sunarak müşterilerine özel çözümler geliştirmektedir.
                Amacımız, yalnızca bir hizmet sağlayıcı değil, aynı zamanda
                müşterilerimizin yanında bir yol arkadaşı olmaktır. <br />
                <br />
                İnsan faktörünün yarattığı farkın bilincinde olarak, sunduğumuz
                hizmetlerin temelinde çalışanlarımızın özverisi, uzmanlığı ve
                tutkusu yatmaktadır. Kuruluşumuzdan bu yana inovatif, esnek ve
                girişimci bir kültür inşa ederek, güvenilir ve etik değerlere
                sahip bir ekip olarak hareket ediyoruz. <br />
                <br />
                Müşterilerimizin başarı yolculuğunda güvenilir bir iş ortağı
                olmayı hedefliyor, her adımda sürdürülebilir ve yenilikçi
                çözümlerle yanlarında olmayı taahhüt ediyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: Farkımız */}
        <section className="container mx-auto px-6 py-16 bg-white text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* LEFT COLUMN */}
            <div>
              <h2 className="text-7xl font-extrabold text-gray-900 leading-tight">
                Farkımız
              </h2>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-16 bg-white px-6 md:px-0">
          <div className="flex flex-col items-center md:items-start">
            {/* RIGHT COLUMN */}
            <div className="max-w-4xl mx-auto md:mx-0">
              <p className="text-lg text-gray-700 leading-7 md:leading-8 text-justify">
                Bizi farklı kılan özelliklerimiz, sunduğumuz hizmetlerde kalite
                ve güvenin teminatıdır. <br />
                <br />• <b>20+ Yıllık Deneyim:</b> Sektördeki uzun yıllara
                dayanan tecrübemizle güçlü bir bilgi birikimi sunuyoruz.
                <br />•<b>Yenilikçi Bir Ekip:</b> Tutkulu ve yaratıcı ekibimiz,
                her zaman en güncel ve yenilikçi çözümler üretir.
                <br />•<b>Müşteri Merkezli Hizmet:</b> Müşterilerimizin
                ihtiyaçlarını ön planda tutarak, özel çözümler geliştiriyoruz.
                <br />• <b>Sonuç Odaklı Bakış Açısı:</b> Hız ve etkinlik
                önceliğimizdir; en iyi sonuçlara ulaşmayı hedefliyoruz.
                <br />• <b>Esneklik ve Çeviklik:</b> Değişen şartlara hızla
                adapte olup, en uygun çözümleri sunuyoruz.
                <br />• <b>Yüksek Kaliteli Hizmet:</b> Kaliteyi ön planda
                tutarak, her zaman en iyiyi sunma misyonuyla hareket ediyoruz.
                <br />
                <br />
                Müşterilerimize sadece bir çözüm ortağı değil, güvenilir bir yol
                arkadaşı olarak hizmet veriyoruz.
              </p>

              {/* Buttons */}
              <div className="flex justify-center md:justify-start space-x-4 w-full mt-6">
                <button className="px-6 py-3 bg-[#3277BC] text-white font-bold rounded-full shadow-lg hover:bg-[#2b66a2] flex items-center transition-colors">
                  Explore Our Solutions
                  <span className="ml-2 text-xl">→</span>
                </button>
                <button className="px-6 py-3 bg-white border-2 border-[#3277BC] text-[#3277BC] font-bold rounded-full shadow-lg hover:bg-[#3277BC] hover:text-white flex items-center transition-colors">
                  Book a Demo
                  <img src="/bd.png" alt="Calendar" className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <CTASection />
      </div>
    </MainLayout>
  );
};

export default AboutPage;
