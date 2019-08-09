import styled from "styled-components";
import { darken } from "polished";
const Input = styled.input.attrs({ type: "text" })`
  border: 1px solid #eee;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  margin: 4px;
  &:hover {
    border-color: ${darken(0.1, "#eee")};
  }

  ::placeholder {
    color: #999;
    font-size: 14px;
  }
`;

export default Input;
