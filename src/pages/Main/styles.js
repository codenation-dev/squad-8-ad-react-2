import styled from "styled-components";
import { CardBox } from "../../components/Card/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  min-height: 100vh;

  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  position: absolute;
  top: 10px;
  display: flex;
  flex-direction: row;
  width: 350px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin-top: 80px;

  ${CardBox} {
    margin: 10px 0;
  }
`;

export const Selector = styled.div`
  position: absolute;
  top: 60px;
  display: flex;
  flex-direction: row;
  width: 350px;
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