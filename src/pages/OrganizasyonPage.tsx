import React from "react";
import MainLayout from "../layouts/MainLayout";
import OrganizationChart from "../components/OrganizationChart";
import CallToAction from "../components/CallToAction";

const OrganizasyonPage: React.FC = () => {
  return (
    <MainLayout>
      <section className="container mx-auto px-2 py-2 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-1 items-center pt-10">
          <div>
            <h2 className="md:text-8xl text-5xl font-extrabold text-gray-900 leading-tight">
              Organizasyon Şeması
            </h2>
          </div>
        </div>
      </section>
      <section className="pt-10 flex justify-center">
        <div className="mx-auto">
          <OrganizationChart />
        </div>
      </section>
      <CallToAction />
    </MainLayout>
  );
};

export default OrganizasyonPage;
