import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  word-wrap: break-word;
  margin-top: 2px;
  width: 300px;
  height: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const CardTitle = styled.h3`
  margin-left: 4px;
  margin-top: 0px;
  font-family: "Roboto";
`;

const CardDescription = styled.p`
  font-family: "Roboto";
  margin-left: 4px;
  margin-top: 0px;
  font-size: 15px;
  color: gray;
`;

const Card = ({ title, description }) => {
  return (
    <CardBox>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardBox>
  );
};

export default Card;
