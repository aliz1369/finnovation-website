import React from "react";
import MainLayout from "../layouts/MainLayout";
import HeroTitle from "../components/HeroTitle";
import CallToAction from "../components/CallToAction";

const CesitlilikAndKapsayicilikPage: React.FC = () => {
  return (
    <MainLayout>
      <div>
        <section className="bg-white h-auto md:h-[calc(100vh-4rem)]">
          <HeroTitle
            title="Her Ses, Her Renk, Birlikte Daha Güçlüyüz!"
            description=", çeşitliliği ve kapsayıcılığı temel değerleri arasında kabul eder. Farklı geçmişlerden, kültürlerden ve deneyimlerden gelen bireylerin bir araya geldiği dinamik bir çalışma ortamı yaratmak, inovasyonun en güçlü kaynağına inanıyoruz. Her bireyin eşit fırsatlara sahip olduğu, fikirlerin özgürce paylaşılabildiği ve tüm çalışanların kendilerini değerli hissettikleri bir ortam sağlamak için sürekli çaba gösteriyoruz. Çeşitli bakış açıları, yeni çözümler geliştirmemize yardımcı olur ve birlikte daha güçlü bir takım olmamızı sağlar. Finnovation'da herkes, kimliği ne olursa olsun, kendisini güvenli ve saygı gören bir ortamda bulur. Bu yaklaşımımız, sadece şirket içindeki ilişkilerimizi değil, aynı zamanda müşterilerimize sunduğumuz hizmetleri de iyileştirir."
            highlightedWord="Finnovation"
            subtitle="Finnovation, farklılıkları kucaklayarak her bireyin eşit fırsatlara sahip olduğu, saygı ve anlayış çerçevesiyle şekillenen bir çalışma ortamı yaratmayı hedefler."
          />
        </section>
        <CallToAction />
      </div>
    </MainLayout>
  );
};

    export default CesitlilikAndKapsayicilikPage;