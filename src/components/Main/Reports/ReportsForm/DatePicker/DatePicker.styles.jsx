import { styled } from "styled-components";
import {
  appgreen,
  appgrey,
  appgreenlight,
} from "../../../../../utils/colors.styles.jsx";

export const $DatePicker = styled.input`
  height: 34px;
  border: 1px solid ${appgreen};
  cursor: pointer;
  color: ${appgrey};

  &:focus {
    border-color: ${appgreenlight};
    outline: none;
  }
`;
