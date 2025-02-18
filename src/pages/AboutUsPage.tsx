import React, { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
import { fetchAboutPage } from "../api/pageApi";
import CallToAction from "../components/CallToAction";
import LoadingSpinner from "../components/LoadSpinner";
import StyledText from "../components/StyledText";
import MainLayout from "../layouts/MainLayout";
import { Page } from "../types/globalTypes";

const AboutPage: React.FC = () => {
  const [data, setData] = useState<Page | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      try {
        setLoading(true);
        const response = await fetchAboutPage();
        setData(response);
      } catch (err) {
        setLoading(false);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    data();
  }, []);
  return (
    <>
      <LoadingSpinner visible={loading} />
      <MainLayout>
        {data?.sections.map((section) => (
          <div className="pt-5">
            {section.position === 1 ? (
              <section className="container mx-auto px-6 py-16 bg-white text-center md:text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {section.components.map((component) =>
                    component.component_type === "title" ? (
                      <div>
                        <StyledText
                          content={component.content_value_tr}
                          className="text-7xl font-extrabold text-gray-900 leading-tight "
                        />
                      </div>
                    ) : null
                  )}
                </div>
                <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 bg-white text-center md:text-left">
                  {(() => {
                    const imageComponent = section.components.find(
                      (comp) => comp.component_type === "image"
                    );
                    const textComponent = section.components.find(
                      (comp) => comp.component_type === "text"
                    );

                    return imageComponent || textComponent ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:pt">
                        {imageComponent && (
                          <div>
                            <img
                              src={"/finlamb.jpg"}
                              alt="finlambLogo"
                              className="h-500 w-500 ml-2"
                            />
                          </div>
                        )}
                        {textComponent && (
                          <div className="max-w-4xl ml-auto">
                            <StyledText
                              content={textComponent.content_value_tr}
                              className="text-lg text-gray-700 leading-7 md:leading-8 text-justify md:text-left"
                            />
                          </div>
                        )}
                      </div>
                    ) : null;
                  })()}
                </section>
              </section>
            ) : null}

            {section.position === 2 ? (
              <>
                <section className="container mx-auto px-6 py-16 bg-white text-center md:text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    {section.components.map((component) =>
                      component.component_type === "title" ? (
                        <div>
                          <StyledText
                            content={component.content_value_tr}
                            className="text-7xl font-extrabold text-gray-900 leading-tight "
                          />
                        </div>
                      ) : null
                    )}
                  </div>
                </section>
                <section className="max-w-6xl mx-auto py-16 bg-white px-6 md:px-0">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="max-w-4xl mx-auto md:mx-0">
                      {section.components.map((component) =>
                        component.component_type === "text" ? (
                          <StyledText
                            content={component.content_value_tr}
                            className="text-lg text-gray-700 leading-7 md:leading-8 text-justify"
                          />
                        ) : null
                      )}
                    </div>
                  </div>
                </section>
              </>
            ) : null}
          </div>
        ))}
        <CallToAction />
      </MainLayout>
    </>
  );
};

export default AboutPage;
