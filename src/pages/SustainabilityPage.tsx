// src/pages/SustainabilityPage.tsx
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadSpinner";
import { Page } from "../types/globalTypes";
import { fetchsurdurulebilirlikPage } from "../api/pageApi";
import StyledText from "../components/StyledText";

const SustainabilityPage: React.FC = () => {
  const [data, setData] = useState<Page | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      try {
        setLoading(true);
        const response = await fetchsurdurulebilirlikPage();
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
      <div className="flex flex-col relative bg-white">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #3b82f6, #14b8a6)",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 100%)",
          }}
        />

        <main className="relative z-10 flex-grow text-gray-800 py-12 md:py-20 px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data?.sections.map((section) => (
              <div
                key={section.id}
                className={`${
                  section.title === "title"
                    ? "relative max-w-6xl mx-auto mb-12 md:mb-16 col-span-1 md:col-span-2 text-center"
                    : ""
                }`}
              >
                {section.title === "title" ? (
                  <div className="text-center max-w-4xl mx-auto">
                    {section.components.map((component) => (
                      <div key={component.id}>
                        {component.component_type === "title" && (
                          <StyledText
                            content={component.content_value}
                            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
                          />
                        )}
                        {component.component_type === "text" && (
                          <StyledText
                            content={component.content_value}
                            className="text-lg md:text-xl text-gray-700 mb-8"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    {section.components.map((component) => (
                      <div key={component.id} className="mb-6">
                        <StyledText
                          content={component.content_value}
                          className={`${
                            component.component_type === "title"
                              ? "text-xl md:text-2xl font-bold text-gray-900 mb-4"
                              : "prose prose-lg text-gray-800 leading-relaxed"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default SustainabilityPage;
