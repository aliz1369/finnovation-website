// src/pages/HakkimizdaPage.tsx
// import React, { useEffect, useState } from "react";
// import { fetchAboutPage } from "../api/pageApi";
// import { Page } from "../types/globalTypes";
// import ChatBubble from "../components/ChatBubble";

const HakkimizdaPage: React.FC = () => {
  // const [data, setData] = useState<Page | null>(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const data = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetchAboutPage();
  //       setData(response);
  //     } catch (err) {
  //       setLoading(false);
  //       console.log(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   data();
  // }, []);

  return (
    // <>
    //   <LoadingSpinner visible={loading} />
    //   <div className="relative min-h-screen bg-white p-4 md:p-8">
    //     <div
    //       className="absolute top-0 left-0 w-full h-[300px] md:h-[500px]"
    //       style={{
    //         background: "linear-gradient(to right, #3b82f6, #14b8a6)",
    //         clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
    //       }}
    //     />

    //     <div className="relative z-10">
    //       {data?.sections.map((section, index) => {
    //         const textComponents = section.components.filter(
    //           (component) =>
    //             component.component_type === "title" ||
    //             component.component_type === "text"
    //         );
    //         const imageComponents = section.components.filter(
    //           (component) => component.component_type === "image"
    //         );
    //         return (
    //           <div
    //             key={section.id}
    //             className={`${
    //               section.title === "hakkimizda-3"
    //                 ? "mt-8"
    //                 : `grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-center ${
    //                     index % 2 === 0 ? "" : "flex-row-reverse"
    //                   }`
    //             }`}
    //           >
    //             {index % 2 === 0 ? (
    //               <>
    //                 {textComponents.length > 0 && (
    //                   <div>
    //                     {textComponents.map((component) => (
    //                       <div key={component.id}>
    //                         {component.component_type === "title" && (
    //                           <StyledText
    //                             content={component.content_value}
    //                             className="text-xl md:text-2xl font-bold mb-4 text-gray-800 border-b border-black pb-2"
    //                           />
    //                         )}
    //                         {component.component_type === "text" && (
    //                           <StyledText
    //                             content={component.content_value}
    //                             className="text-gray-800 mb-2 text-sm md:text-base"
    //                           />
    //                         )}
    //                       </div>
    //                     ))}
    //                   </div>
    //                 )}
    //                 {imageComponents.length > 0 && (
    //                   <div>
    //                     {imageComponents.map((component) => (
    //                       <div key={component.id}>
    //                         <img
    //                           src={component.image_large ?? undefined}
    //                           alt="Component Image"
    //                           className="w-full h-auto rounded shadow"
    //                         />
    //                       </div>
    //                     ))}
    //                   </div>
    //                 )}
    //               </>
    //             ) : (
    //               <>
    //                 {imageComponents.length > 0 && (
    //                   <div>
    //                     {imageComponents.map((component) => (
    //                       <div key={component.id}>
    //                         <img
    //                           src={component.image_large ?? undefined}
    //                           alt="Component Image"
    //                           className="w-full h-auto rounded shadow"
    //                         />
    //                       </div>
    //                     ))}
    //                   </div>
    //                 )}
    //                 {textComponents.length > 0 && (
    //                   <div>
    //                     {textComponents.map((component) => (
    //                       <div key={component.id}>
    //                         {component.component_type === "title" && (
    //                           <StyledText
    //                             content={component.content_value}
    //                             className="text-xl md:text-2xl font-bold mb-4 text-gray-800 border-b border-black pb-2"
    //                           />
    //                         )}
    //                         {component.component_type === "text" && (
    //                           <StyledText
    //                             content={component.content_value}
    //                             className="text-gray-800 mb-2 text-sm md:text-base"
    //                           />
    //                         )}
    //                       </div>
    //                     ))}
    //                   </div>
    //                 )}
    //               </>
    //             )}
    //           </div>
    //         );
    //       })}
    //     </div>

    //     <CallToAction />
    //   </div>
    // </>
    <div></div>
  );
};

export default HakkimizdaPage;
