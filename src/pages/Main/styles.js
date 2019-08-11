import styled from "styled-components";
import { CardBox } from "../../components/Card/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  min-height: 100vh;

  /* align-items: center;
  justify-content: center; */
`;

export const Header = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  top: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

export const Selector = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const Span = styled.span`
  display: inline-block;
  background-color: #eee;
  font-size: 16px;
  width: 50px;
  border: 1px solid #eee;
  padding: 10px 15px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin: 4px;
`;
