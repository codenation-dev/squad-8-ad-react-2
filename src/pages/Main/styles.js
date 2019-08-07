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
