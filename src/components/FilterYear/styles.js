import styled from 'styled-components'
import { darken } from "polished";

export const Selector = styled.select`
  display: inline-block;
  font-size: 16px;
  width: 90px;
  border: 1px solid #eee;
  background-color: #fff;
  padding: 10px 15px;
  border-radius: 4px;
  margin: 4px;
  &:hover {
    border-color: ${darken(0.1, "#eee")};
  }

  &.::selection {
    box-shadow: 0 0 1px 1px $main;
  }
        option {
            color: black;
            font-size: 16px;
            background: white;
        }
`;