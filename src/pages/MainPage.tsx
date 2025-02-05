// src/pages/MainPage.tsx
import React from "react";
import HeroSection from "../components/HeroSection";
import { fetchHomePage } from "../api/pageApi";
import { Page } from "../types/globalTypes";
import LoadingSpinner from "../components/LoadSpinner";
import ImageSlider from "../components/ImageSlider";
// import ChatBubble from "../components/ChatBubble";

const MainPage: React.FC = () => {
  // const [data, setData] = useState<Page | null>(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      try {
        setLoading(true);
        const response = await fetchHomePage();
        console.log(response);
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
      {/* <LoadingSpinner visible={loading} /> */}
      <div className="flex flex-col min-h-screen">
        {data?.sections.map((section) => (
          <div key={section.id}>
            {section.position === 1 ? (
              <HeroSection content={section.components} />
            ) : null}
          </div>
        ))}

        {/* Group sections with position 2 & 3 inside one div */}
        {data?.sections.some(
          (section) => section.position === 2 || section.position === 3
        ) && (
          <div className="grid grid-cols-2">
            {data?.sections
              .filter(
                (section) => section.position === 2 || section.position === 3
              )
              .map((section) => (
                <ImageSlider
                  key={section.id}
                  images={section.components[0].slider_images}
                  title={
                    section.position === 2
                      ? "Partnerlerimiz"
                      : "Referanslarımız"
                  }
                />
              ))}
          </div>
        )}

        {/* <PartnersReferences /> */}
        {/* <ChatBubble /> */}
      </div>
    </>
  );
};

export default MainPage;
