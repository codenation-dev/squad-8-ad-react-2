import React from "react";

import { CardBox, CardTitle, CardDescription, CardDate } from "./styles";

const Card = ({ title, description, date }) => {
  return (
    <CardBox>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardDate>{`Criado em: ${date}`}</CardDate>
    </CardBox>
  );
};

export default Card;
