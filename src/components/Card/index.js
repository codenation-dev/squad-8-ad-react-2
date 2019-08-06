import React from "react";

import {
  CardBox,
  CardTitle,
  CardDescription,
  Details,
  DetailsContainer
} from "./styles";

const Card = ({ title, description, date, language }) => {
  return (
    <CardBox>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <DetailsContainer>
        <Details>{`Criado em: ${date}`}</Details>
        <Details>{`Linguaguem: ${language}`}</Details>
      </DetailsContainer>
    </CardBox>
  );
};

export default Card;
