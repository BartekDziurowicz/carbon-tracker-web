import { styled } from "styled-components";
import {
  appgreen,
  appgreenlight,
  appgrey,
} from "../../../../../utils/colors.styles.jsx";

export const $Select = styled.select`
  height: 34px;
  border-color: ${({ disabled }) => disabled ? appgrey : appgreen};
  cursor: ${({ disabled }) => disabled ? "" : "pointer"};
  box-shadow: none;
  min-width: 100px;
  color: ${appgrey};

  &:focus {
    border-color: ${appgreenlight};
    outline: none;
  }

  option {
    color: ${appgrey};
  }
`;

export default $Select;
