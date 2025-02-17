import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LogoSlider from "../components/LogoSlider";
import MainLayout from "../layouts/MainLayout";

const MainPage: React.FC = () => {
  const { t } = useTranslation();

  const [shouldDisableScroll, setShouldDisableScroll] = useState(true);
  const logosRefrence = [
    {
      logo: "/img1.png",
      link: "https://www.enpara.com/",
    },
    {
      logo: "/img2.png",
      link: "https://www.netcad.com/",
    },
    {
      logo: "/img3.png",
      link: "https://www.qnb.com.tr/",
    },
    {
      logo: "/img4.png",
      link: "https://www.workup.ist/",
    },
    {
      logo: "/img5.png",
      link: "https://www.fibabanka.com.tr/",
    },
    {
      logo: "/img7.png",
      link: "https://www.isbank.com.tr/",
    },
    {
      logo: "/img1.png",
      link: "https://www.enpara.com/",
    },
    {
      logo: "/img2.png",
      link: "https://www.netcad.com/",
    },
    {
      logo: "/img3.png",
      link: "https://www.qnb.com.tr/",
    },
    {
      logo: "/img4.png",
      link: "https://www.workup.ist/",
    },
    {
      logo: "/img5.png",
      link: "https://www.fibabanka.com.tr/",
    },
    {
      logo: "/img7.png",
      link: "https://www.isbank.com.tr/",
    },
    {
      logo: "/img1.png",
      link: "https://www.enpara.com/",
    },
    {
      logo: "/img2.png",
      link: "https://www.netcad.com/",
    },
    {
      logo: "/img3.png",
      link: "https://www.qnb.com.tr/",
    },
    {
      logo: "/img4.png",
      link: "https://www.workup.ist/",
    },
    {
      logo: "/img5.png",
      link: "https://www.fibabanka.com.tr/",
    },
    {
      logo: "/img7.png",
      link: "https://www.isbank.com.tr/",
    },
  ];
  const logosProje = [
    {
      logo: "/makers.jpg",
      link: "https://makersconsulting.co/",
    },
    {
      logo: "/bilim.jpg",
      link: "https://www.bilimp.com/",
    },
    {
      logo: "/azor.png",
      link: "https://www.azor-solutions.com/",
    },
    {
      logo: "/inspire.jpg",
      link: "https://www.inspirit.com.tr/",
    },
    {
      logo: "/techbros.png",
      link: "https://techbros.com.tr/",
    },
    {
      logo: "/makers.jpg",
      link: "https://makersconsulting.co/",
    },
    {
      logo: "/bilim.jpg",
      link: "https://www.bilimp.com/",
    },
    {
      logo: "/azor.png",
      link: "https://www.azor-solutions.com/",
    },
    {
      logo: "/inspire.jpg",
      link: "https://www.inspirit.com.tr/",
    },
    {
      logo: "/techbros.png",
      link: "https://techbros.com.tr/",
    },
    {
      logo: "/makers.jpg",
      link: "https://makersconsulting.co/",
    },
    {
      logo: "/bilim.jpg",
      link: "https://www.bilimp.com/",
    },
    {
      logo: "/azor.png",
      link: "https://www.azor-solutions.com/",
    },
    {
      logo: "/inspire.jpg",
      link: "https://www.inspirit.com.tr/",
    },
    {
      logo: "/techbros.png",
      link: "https://techbros.com.tr/",
    },
    {
      logo: "/makers.jpg",
      link: "https://makersconsulting.co/",
    },
    {
      logo: "/bilim.jpg",
      link: "https://www.bilimp.com/",
    },
    {
      logo: "/azor.png",
      link: "https://www.azor-solutions.com/",
    },
    {
      logo: "/inspire.jpg",
      link: "https://www.inspirit.com.tr/",
    },
    {
      logo: "/techbros.png",
      link: "https://techbros.com.tr/",
    },
  ];

  useEffect(() => {
    const checkOverflow = () => {
      const isOverflowing =
        document.documentElement.scrollHeight > window.innerHeight;
      setShouldDisableScroll(!isOverflowing);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = shouldDisableScroll ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "";
    };
  }, [shouldDisableScroll]);

  return (
    <MainLayout>
      <div className="relative bg-white overflow-hidden">
        {/* Hero Bölümü */}
        <section className="container mx-auto px-8 md:px-12 lg:px-16 pt-10">
          <div className="max-w-[1440px] mx-auto">
            {/* Ana Başlık ve İçerik */}
            <div className="flex flex-col text-center md:text-left md:ml-0">
              {/* Başlık Kısmı */}
              <div className="mb-8 translate-y-5 md:translate-y-9">
                <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-bold leading-[1.1] tracking-tight">
                  {t("404")}
                </h1>
                <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-bold leading-[1.1] tracking-tight mt-0">
                  {t("bulunamadi")}
                </h1>
              </div>

              {/* Alt Başlık ve Butonlar */}
              <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 translate-y-10 md:translate-y-16">
                {/* Türkçe Başlık */}
                <div className="lg:max-w-2xl">
                  <h2 className="text-[24px] sm:text-[28px] md:text-[32px] leading-tight font-medium">
                    {t("dijitaldonusumun")}
                  </h2>
                </div>

                {/* İngilizce Metin ve Butonlar */}
                <div className="lg:max-w-xl flex flex-col items-center lg:items-start gap-8">
                  <p className="text-[16px] sm:text-[18px] text-gray-700">
                    {t("veriodakli")}
                  </p>

                  {/* <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center sm:justify-start">
                    <button className="px-6 py-3 bg-[#3277BC] text-white font-bold rounded-full shadow-lg hover:bg-[#2b66a2] flex items-center justify-center transition-colors">
                      {t("exploreoursolution")}
                      <span className="ml-2 text-xl">→</span>
                    </button>
                    <button className="px-6 py-3 bg-white border-2 border-[#3277BC] text-[#3277BC] font-bold rounded-full shadow-lg hover:bg-[#3277BC] hover:text-white flex items-center justify-center transition-colors">
                      {t("bookademo")}
                      <img
                        src="/bd.png"
                        alt="Calendar"
                        className="h-5 w-5 ml-2"
                      />
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Section'ları */}
        <div className="md:mt-24 mt-10">
          <LogoSlider logos={logosProje} direction={1} />
          <LogoSlider logos={logosRefrence} direction={-1} />
        </div>
      </div>
    </MainLayout>
  );
};

export default MainPage;
