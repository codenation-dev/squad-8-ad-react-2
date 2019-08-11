import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: stretch;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  top: 10px;

  div {
    display: flex;
  }

  @media screen and (max-width: 570px) {
    div {
      min-width: 570px;
      align-content: center;
      justify-content: center;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;
