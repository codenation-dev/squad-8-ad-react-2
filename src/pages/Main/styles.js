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
  display: flex;
  flex-direction: row;
  width: 350px;
`;

export const Content = styled.div`
  ${CardBox} {
    margin: 10px 0;
  }
`;
