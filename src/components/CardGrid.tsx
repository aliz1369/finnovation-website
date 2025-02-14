import React from "react";
import Card from "./Card";

interface CardData {
  icon: string;
  title: string;
  description: string;
  points: string[];
}

interface CardDataDetail {
  cardData: CardData[];
}

const CardGrid: React.FC<CardDataDetail> = ({ cardData }) => {
  return (
    <div
      className={`${
        cardData.length >= 3 ? `max-w-6xl` : `max-w-3xl`
      } mx-auto py-8 px-4`}
    >
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          cardData.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
        } gap-6`}
      >
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            points={card.points}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
