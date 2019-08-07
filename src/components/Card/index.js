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
      <CardTitle>
        <div>
          <span>{title.slice(0, 1)}</span>
          <div>
            <h3>{title}</h3>
            <strong>{date}</strong>
          </div>
        </div>
      </CardTitle>
      <CardDescription>{description}</CardDescription>
      <DetailsContainer>
        <Details>{`Linguaguem: ${language}`}</Details>
      </DetailsContainer>
    </CardBox>
  );
};

export default Card;
