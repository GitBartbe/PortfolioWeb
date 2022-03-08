import React from "react";
import './card.styles.css'

import { CardItem } from "./card-item";
import CardData from "./tech-card-data.js";

export const Card = () => {

  const cardContent = CardData;
return (
    <div className='cards-container'>
      {cardContent.map(({ id, ...otherProps}) => (
        <CardItem key={id}{...otherProps}  />
      ))}
    </div>
  );
};
