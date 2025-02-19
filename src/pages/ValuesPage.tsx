import "swiper/swiper-bundle.css";
import MainLayout from "../layouts/MainLayout";
import CardGrid from "../components/CardGrid";
import CallToAction from "../components/CallToAction";

const ValuesPage: React.FC = () => {
  const cardData = [
    {
      icon: "/icon1-new.png",
      title: "Yoldaşız",
      description: "",
      points: [
        "Gerek ekip içinde, gerekse paydaşlarımıza bağlıyız ve tüm ekosisteme bu gözle bakarız.",
      ],
    },
    {
      icon: "/icon2-new.png",
      title: "Dürüstüz",
      description: "",
      points: [
        "Ülkemizin, ailemizin, kendimizin inanmadığı hiçbir işi yapmayız.",
      ],
    },
    {
      icon: "/icon3-new.png",
      title: "Müşteri Odaklıyız",
      description: "",
      points: ["Kendi kullanmayacağımız hiçbir ürünü önermeyiz, sunmayız."],
    },
    {
      icon: "/icon4-new.png",
      title: "Ortağız",
      description: "",
      points: [
        "Sadece iş ortamında değil, istersek hayatın içinde de beraberiz.",
        "Kıymet biliriz, alma-verme dengesini önemseriz.",
        "Her birimiz şirketin temsilcisiyiz.",
      ],
    },
    {
      icon: "/icon2-new.png",
      title: "Samimiyiz",
      description: "",
      points: [
        "İyi niyet esaslı açık iletişim kurarız.",
        "Net konuşuruz.",
        "Yüz yüze iletişimi tercih ederiz.",
      ],
    },
    {
      icon: "/icon3-new.png",
      title: "Müşteri Deneyimini Önemseriz",
      description: "",
      points: ["Basit, kullanışlı, uygun fiyatlı ürünler sunarız."],
    },
  ];

  return (
    <MainLayout>
      {}
      {/* SECTION: Vizyonumuz */}
      <section className="container mx-auto px-2 py-2 bg-white ">
        <div className="grid grid-cols-2 md:grid-cols-1 items-center pt-10">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="md:text-8xl text-5xl font-extrabold text-gray-900 leading-tight">
              Vizyonumuz
            </h2>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-10 py-10 bg-white">
        <div>
          <p className="text-lg text-gray-700 leading-relaxed ">
            2030 yılında, teknoloji geliştirme, danışmanlık ve eğitim
            alanlarında inovasyon lideri olarak,Türkiye'den dünyaya yayılan
            sürdürülebilir ve etkili çözümler sunarak sektörde tanınan bir lider
            olmak.
          </p>
        </div>
      </section>

      {/* SECTION: Misyonumuz */}
      <section className="container mx-auto px-2 py-2 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-10">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="md:text-8xl text-5xl font-extrabold text-gray-900 leading-tight">
              Misyonumuz
            </h2>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-10 py-16 bg-white">
        <div>
          <p className="text-lg text-gray-700 leading-relaxed ">
            Yoldaşımız olan iş ortaklarımıza yüksek kalitede, uygun fiyatlı,
            sürdürülebilir ve değer yaratan ürün, hizmet ve çözümler sunmaktır.
          </p>
        </div>
      </section>

      {/* SECTION: Misyonumuz */}
      <section className="container mx-auto px-2 py-2 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-10">
          <div>
            <h2 className="md:text-8xl text-5xl font-extrabold text-gray-900 leading-tight">
              Değerlerimiz
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <CardGrid cardData={cardData} />
      </section>
      <CallToAction />
    </MainLayout>
  );
};

export default ValuesPage;
