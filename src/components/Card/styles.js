import styled from "styled-components";

export const CardBox = styled.div`
  width: 350px;
  min-height: 125px;
  word-wrap: break-word;
  margin-top: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
`;

export const CardTitle = styled.h3`
  padding: 5px 10px;
  margin-bottom: 5px;
  border-bottom: 1px solid #eee;
  font-size: 18px;
  font-weight: 400;
`;

export const CardDescription = styled.p`
  padding: 10px;
  margin-top: 10px;
  font-size: 14px;
  color: #999;
`;

export const CardDate = styled.p`
  padding: 10px;
  margin-top: 10px;
  font-size: 14px;
  color: #999;
  font-style: italic;
`;
