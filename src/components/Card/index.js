import React from "react";

import { CardBox, CardTitle, CardDescription } from "./styles";

const Card = ({ title, description }) => {
  return (
    <CardBox>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardBox>
  );
};

export default Card;
