import "swiper/swiper-bundle.css";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const ValuesPage: React.FC = () => {
  const values = [
    {
      title: "Yoldaşız",
      description: [
        "Gerek ekip içinde, gerekse paydaşlarımıza bağlıyız ve tüm ekosisteme bu gözle bakarız.",
      ],
      icon: "icon1.png",
    },
    {
      title: "Dürüstüz",
      description: [
        "Ülkemizin, ailemizin, kendimizin inanmadığı hiçbir işi yapmayız. Projelerimizin ve çalışmalarımızın takibiyle ilgili sizi anında ve net bir şekilde bilgilendiririz.",
      ],
      icon: "icon4.png",
    },
    {
      title: "Ortağız",
      description: [
        "Sadece iş ortamında değil, istersek hayatın içinde de beraberiz. Kıymet biliriz, alma-verme dengesini önemseriz. Her birimiz üzerinde çalıştığımız her konuda şirketin temsilcisi ve iş geliştiricisidir. Herkes şirkette farklı oran ve tiplerde ortaktır. Kendi işimiz olduğu bilinci ile kişisel değil ailesel düşünürüz.",
      ],
      icon: "icon2.png",
    },
    {
      title: "Müşteri Odaklıyız",
      description: [
        "Ülkemizin, ailemizin, kendimizin inanmadığı hiçbir işi yapmayız.",
      ],
      icon: "icon5.png",
    },
    {
      title: "Samimiyiz",
      description: [
        "İyi niyet esaslı açık iletişim kurarız, net konuşuruz. Tek iletişim noktasından hareket etmez, birebir mümkünse yüzyüze konuşuruz.",
      ],
      icon: "icon3.png",
    },
    {
      title: "Müşteri Deneyimini Önemseriz",
      description: ["Basit, kullanışlı, uygun fiyatlı ürünler sunarız."],
      icon: "icon6.png",
    },
  ];

  return (
    <MainLayout>
      {}
      {/* SECTION: Vizyonumuz */}
      <section className="container mx-auto px-2 py-2 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-[200px]">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-8xl font-extrabold text-gray-900 leading-tight">
              Vizyonumuz
            </h2>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-10 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:pt-[20px]">
          {/* RIGHT COLUMN */}
          <div>
            <p className="mt-4 text-2xl text-gray-700 font-bold ">
              Yenilikçi BT çözümleri ile <br />
              iş sürekliliğinizi sağlıyoruz.
            </p>
          </div>

          <div>
            <p className="text-lg text-gray-700 leading-relaxed ">
              Biz, farkı insan faktörünün yarattığına ve sunduğumuz hizmetlerin
              mükemmelliğinin temelinde çalışanlarımızın özverisi, uzmanlığı ve
              tutkusunun olduğuna inanıyoruz. Kuruluşumuzdan bu yana inovatif,
              esnek, uzman, tutkulu ve girişimci bir yaklaşımla kültürümüzü inşa
              ediyoruz. Bu kültür etrafında, birbirine zincir gibi bağlı,
              samimi, dürüst ve iş etiğine sahip bir ekip olarak geleceği
              şekillendirme vizyonuyla hareket ediyoruz. Müşterilerimizin başarı
              yolculuğunda güvenilir bir iş ortağı olmayı hedefliyor, her adımda
              sürdürülebilir ve yenilikçi çözümlerle yanlarında olmayı taahhüt
              ediyoruz. 2030 yılında, teknoloji geliştirme, danışmanlık ve
              eğitim alanlarında inovasyon lideri olarak,Türkiye’den dünyaya
              yayılan sürdürülebilir ve etkili çözümler sunarak sektörde tanınan
              bir lider olmak.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: Misyonumuz */}
      <section className="container mx-auto px-2 py-2 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-[200px]">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-8xl font-extrabold text-gray-900 leading-tight">
              Misyonumuz
            </h2>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-10 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:pt-[20px]">
          {/* RIGHT COLUMN */}
          <div>
            <p className="mt-4 text-2xl text-gray-700 font-bold ">
              Yenilikçi BT çözümleri ile <br />
              iş sürekliliğinizi sağlıyoruz.
            </p>
          </div>

          <div>
            <p className="text-lg text-gray-700 leading-relaxed ">
              Yoldaşımız olan iş ortaklarımıza yüksek kalitede, uygun fiyatlı,
              sürdürülebilir ve değer yaratan ürün, hizmet ve çözümler
              sunmaktır.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: Misyonumuz */}
      <section className="container mx-auto px-2 py-2 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-1 items-center md:pt-[200px]">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-8xl font-extrabold text-gray-900 leading-tight">
              Değerlerimiz
            </h2>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-10 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:pt-[20px]">
          {/* RIGHT COLUMN */}
          <div>
            <p className="mt-4 text-2xl text-gray-700 font-bold ">
              Yenilikçi BT çözümleri ile <br />
              iş sürekliliğinizi sağlıyoruz.
            </p>
          </div>

          <div>
            <p className="text-lg text-gray-700 leading-relaxed ">
              Yoldaşımız olan iş ortaklarımıza yüksek kalitede, uygun fiyatlı,
              sürdürülebilir ve değer yaratan ürün, hizmet ve çözümler
              sunmaktır.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <CardSlider isScrollable={true} cardPerView={3} sliderDatas={values} />

        {/* Custom Navigation Buttons */}
        <div className="absolute bottom-[-60px] right-16 flex space-x-4 z-10">
          <button className="custom-swiper-prev w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow hover:shadow-lg hover:bg-gray-200 transform hover:scale-110 transition-all">
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http:www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="custom-swiper-next w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow hover:shadow-lg hover:bg-gray-200 transform hover:scale-110 transition-all">
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http:www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19l7-7-7-7"
              />
            </svg>
          </button>
        </div>
      </section>
    </MainLayout>
  );
};

export default ValuesPage;
