import { FC } from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const TreasuryPage: FC = () => {
  const benefits = [
    {
      title: "Market Analysis",
      description: ["Comprehensive market analysis and forecasting"],
      icon: "/public/market.png",
    },
    {
      title: "Risk Management",
      description: ["Treasury risk assessment and control"],
      icon: "/public/risk.png",
    },
    {
      title: "Portfolio Optimization",
      description: ["Strategic portfolio management solutions"],
      icon: "/public/portfolio.png",
    },
    {
      title: "Liquidity Management",
      description: ["Effective liquidity planning and control"],
      icon: "/public/liquidity.png",
    },
    {
      title: "Digital Solutions",
      description: ["Advanced treasury management systems"],
      icon: "/public/digital.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                Treasury
              </h1>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <CardSlider
            isScrollable={true}
            cardPerView={3}
            sliderDatas={benefits}
          />
        </section>
      </div>
    </MainLayout>
  );
};

export default TreasuryPage;
