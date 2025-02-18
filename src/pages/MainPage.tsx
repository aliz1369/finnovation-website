import React, { useEffect, useState } from "react";
import { fetchHomePage } from "../api/pageApi";
import LoadingSpinner from "../components/LoadSpinner";
import LogoSlider from "../components/LogoSlider";
import StyledText from "../components/StyledText";
import MainLayout from "../layouts/MainLayout";
import { Page } from "../types/globalTypes";

const MainPage: React.FC = () => {
  const [shouldDisableScroll, setShouldDisableScroll] = useState(true);
  // const logosRefrence = [
  //   {
  //     logo: "/img1.png",
  //     link: "https://www.enpara.com/",
  //   },
  //   {
  //     logo: "/img2.png",
  //     link: "https://www.netcad.com/",
  //   },
  //   {
  //     logo: "/img3.png",
  //     link: "https://www.qnb.com.tr/",
  //   },
  //   {
  //     logo: "/img4.png",
  //     link: "https://www.workup.ist/",
  //   },
  //   {
  //     logo: "/img5.png",
  //     link: "https://www.fibabanka.com.tr/",
  //   },
  //   {
  //     logo: "/img7.png",
  //     link: "https://www.isbank.com.tr/",
  //   },
  //   {
  //     logo: "/img1.png",
  //     link: "https://www.enpara.com/",
  //   },
  //   {
  //     logo: "/img2.png",
  //     link: "https://www.netcad.com/",
  //   },
  //   {
  //     logo: "/img3.png",
  //     link: "https://www.qnb.com.tr/",
  //   },
  //   {
  //     logo: "/img4.png",
  //     link: "https://www.workup.ist/",
  //   },
  //   {
  //     logo: "/img5.png",
  //     link: "https://www.fibabanka.com.tr/",
  //   },
  //   {
  //     logo: "/img7.png",
  //     link: "https://www.isbank.com.tr/",
  //   },
  //   {
  //     logo: "/img1.png",
  //     link: "https://www.enpara.com/",
  //   },
  //   {
  //     logo: "/img2.png",
  //     link: "https://www.netcad.com/",
  //   },
  //   {
  //     logo: "/img3.png",
  //     link: "https://www.qnb.com.tr/",
  //   },
  //   {
  //     logo: "/img4.png",
  //     link: "https://www.workup.ist/",
  //   },
  //   {
  //     logo: "/img5.png",
  //     link: "https://www.fibabanka.com.tr/",
  //   },
  //   {
  //     logo: "/img7.png",
  //     link: "https://www.isbank.com.tr/",
  //   },
  // ];
  // const logosProje = [
  //   {
  //     logo: "/makers.jpg",
  //     link: "https://makersconsulting.co/",
  //   },
  //   {
  //     logo: "/bilim.jpg",
  //     link: "https://www.bilimp.com/",
  //   },
  //   {
  //     logo: "/azor.png",
  //     link: "https://www.azor-solutions.com/",
  //   },
  //   {
  //     logo: "/inspire.jpg",
  //     link: "https://www.inspirit.com.tr/",
  //   },
  //   {
  //     logo: "/techbros.png",
  //     link: "https://techbros.com.tr/",
  //   },
  //   {
  //     logo: "/makers.jpg",
  //     link: "https://makersconsulting.co/",
  //   },
  //   {
  //     logo: "/bilim.jpg",
  //     link: "https://www.bilimp.com/",
  //   },
  //   {
  //     logo: "/azor.png",
  //     link: "https://www.azor-solutions.com/",
  //   },
  //   {
  //     logo: "/inspire.jpg",
  //     link: "https://www.inspirit.com.tr/",
  //   },
  //   {
  //     logo: "/techbros.png",
  //     link: "https://techbros.com.tr/",
  //   },
  //   {
  //     logo: "/makers.jpg",
  //     link: "https://makersconsulting.co/",
  //   },
  //   {
  //     logo: "/bilim.jpg",
  //     link: "https://www.bilimp.com/",
  //   },
  //   {
  //     logo: "/azor.png",
  //     link: "https://www.azor-solutions.com/",
  //   },
  //   {
  //     logo: "/inspire.jpg",
  //     link: "https://www.inspirit.com.tr/",
  //   },
  //   {
  //     logo: "/techbros.png",
  //     link: "https://techbros.com.tr/",
  //   },
  //   {
  //     logo: "/makers.jpg",
  //     link: "https://makersconsulting.co/",
  //   },
  //   {
  //     logo: "/bilim.jpg",
  //     link: "https://www.bilimp.com/",
  //   },
  //   {
  //     logo: "/azor.png",
  //     link: "https://www.azor-solutions.com/",
  //   },
  //   {
  //     logo: "/inspire.jpg",
  //     link: "https://www.inspirit.com.tr/",
  //   },
  //   {
  //     logo: "/techbros.png",
  //     link: "https://techbros.com.tr/",
  //   },
  // ];

  const [data, setData] = useState<Page | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      try {
        setLoading(true);
        const response = await fetchHomePage();
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
    <>
      <LoadingSpinner visible={loading} />
      <MainLayout>
        <div className="relative bg-white overflow-hidden">
          {data?.sections.map((section) => (
            <div key={section.id}>
              {section.position === 1 ? (
                <section className="container mx-auto px-8 md:px-12 lg:px-16 pt-0 md:pt-10">
                  <div className="max-w-[1440px] mx-auto">
                    {section.components.map((component) =>
                      component.component_type === "title" ? (
                        <div
                          key={component.id}
                          className="flex flex-col text-center md:text-left md:ml-0"
                        >
                          <div className="mb-8 translate-y-5 md:translate-y-9">
                            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-bold leading-[1.1] tracking-tight">
                              <StyledText
                                content={component.content_value_tr}
                              />
                            </h1>
                          </div>
                        </div>
                      ) : null
                    )}

                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 translate-y-10 md:translate-y-16">
                      {(() => {
                        const subtitleComponent = section.components.find(
                          (comp) => comp.component_type === "sub-title"
                        );
                        const textComponent = section.components.find(
                          (comp) => comp.component_type === "text"
                        );

                        return subtitleComponent || textComponent ? (
                          <div className="flex flex-col lg:flex-row w-full gap-8">
                            {subtitleComponent && (
                              <div className="flex-1 lg:max-w-2xl">
                                <StyledText
                                  content={subtitleComponent.content_value_tr}
                                  className="text-[24px] sm:text-[28px] md:text-[32px] leading-tight font-medium"
                                />
                              </div>
                            )}
                            {textComponent && (
                              <div className="flex-1 lg:max-w-xl flex flex-col items-start gap-8">
                                <StyledText
                                  content={textComponent.content_value_tr}
                                  className="text-[16px] sm:text-[18px] text-gray-700"
                                />
                              </div>
                            )}
                          </div>
                        ) : null;
                      })()}
                    </div>
                  </div>
                </section>
              ) : null}
            </div>
          ))}

          <div className="md:mt-24 mt-10">
            {data?.sections.map((section) =>
              section.position === 2 ? (
                <>
                  {section.components.map((component) => (
                    <>
                      {component.images && (
                        <LogoSlider logos={component.images} direction={-1} />
                      )}
                    </>
                  ))}
                </>
              ) : null
            )}
            {data?.sections.map((section) =>
              section.position === 3 ? (
                <>
                  {section.components.map((component) => (
                    <>
                      {component.images && (
                        <LogoSlider logos={component.images} direction={-1} />
                      )}
                    </>
                  ))}
                </>
              ) : null
            )}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default MainPage;
