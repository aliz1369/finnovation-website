import React from "react";

interface CardData {
  icon: string;
  title: string;
  description: string;
  points: string[];
}
const Card: React.FC<CardData> = ({ icon, title, description, points }) => {
  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 flex flex-col items-start text-left w-full h-[420px]">
      <img src={icon} alt={title} className="w-16 h-16 object-contain mt-4" />
      <h3 className="text-2xl font-bold mt-6">{title}</h3>
      <p className="text-gray-700 mt-4 leading-relaxed">{description}</p>
      <ul className="mt-4 space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <img
              src={"/check-icon.png"}
              alt={title}
              className="w-4 h-4 object-contain mr-2"
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
