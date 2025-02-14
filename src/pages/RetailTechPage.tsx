import React from "react";
import CardSlider from "../components/CardSlider";
import MainLayout from "../layouts/MainLayout";

const RetailTechPage: React.FC = () => {
  const benefits = [
    {
      title: "E-Commerce",
      description: ["Digital retail solutions"],
      icon: "/public/ecommerce.png",
    },
    {
      title: "Inventory Management",
      description: ["Smart inventory tracking systems"],
      icon: "/public/inventory.png",
    },
    {
      title: "Customer Analytics",
      description: ["Retail customer behavior analysis"],
      icon: "/public/retail-analytics.png",
    },
    {
      title: "POS Systems",
      description: ["Modern point of sale solutions"],
      icon: "/public/pos.png",
    },
    {
      title: "Supply Chain",
      description: ["Retail supply chain optimization"],
      icon: "/public/retail-supply.png",
    },
  ];

  return (
    <MainLayout>
      <div className="pt-5">
        <section className="container mx-auto px-6 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-8xl font-extrabold text-gray-900 font-segouie">
                RetailTech
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

export default RetailTechPage;
