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
