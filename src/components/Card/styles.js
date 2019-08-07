import styled from "styled-components";

export const CardBox = styled.div`
  width: 350px;
  min-height: 125px;
  word-wrap: break-word;
  margin-top: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
`;

export const CardTitle = styled.div`
  padding: 10px 15px;

  margin-bottom: 5px;
  border-bottom: 1px solid #eee;

  div {
    display: flex;
    align-items: center;
    justify-items: center;

    span {
      display: flex;
      justify-content: center;
      background-color: #085191;
      color: #fff;
      text-transform: uppercase;
      padding: 10px;
      width: 40px;
      height: 40px;
      font-size: 16px;
      border-radius: 50%;
    }

    div {
      display: block;
      margin-left: 8px;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.43;

      h3 {
        width: 270px;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
        overflow: hidden

        font-weight: 400;
        color: rgba(0, 0, 0, 0.87);
      }

      strong {
        font-size: 14px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.54);
      }
    }
  }
`;

export const CardDescription = styled.p`
  padding: 15px;
  margin-top: 10px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
`;

export const Details = styled.span`
  margin-top: 10px;
  font-size: 14px;
  color: #999;
  font-style: italic;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;
