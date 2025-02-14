import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string[];
  isOpen?: boolean;
}

interface AccordionListProps {
  title: string;
  items: AccordionItem[];
}

const AccordionList: React.FC<AccordionListProps> = ({ title, items }) => {
  const [accordionItems, setAccordionItems] = useState<AccordionItem[]>(items);

  const handleToggle = (index: number) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : item.isOpen,
      }))
    );
  };

  return (
    <div className="w-full h-full mx-auto px-6 md:px-8 lg:px-10 py-16">
      <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-10">
        {title}
      </h2>
      <div className="space-y-6">
        {accordionItems.map((item, index) => (
          <div key={index} className="border-b border-gray-300 pb-3">
            <div
              className="flex items-center justify-between cursor-pointer py-4"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-xl font-light">{item.title}</h3>
              <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                <span className="text-xl font-light">
                  {item.isOpen ? "-" : "+"}
                </span>
              </div>
            </div>
            {item.isOpen && (
              <ul className="pl-4 space-y-2 text-gray-700">
                {item.content.map((contentItem, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <img
                      src="/checkmark.png"
                      alt="Checkmark"
                      className="w-4 h-4 mt-1"
                    />
                    <p className="font-light">{contentItem}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionList;
