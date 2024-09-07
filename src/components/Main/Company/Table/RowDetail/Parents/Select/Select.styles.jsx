import { styled } from "styled-components";
import { colorHandler } from "../../../Table.utils.js";
import { appgrey, apporange } from "../../../../../../../utils/colors.styles";

export const $Select = styled.select`
  height: 18px;
  font-size: 10px;
  border-color: ${({$color}) => colorHandler($color)};
  cursor: pointer;
  box-shadow: none;
  min-width: 100px;
  max-width: 200px;
  size: 10;
  color: ${appgrey};

  &:focus {
    border-color: ${apporange};
    outline: none;
  }

  option {
    font-size: 10px;
    color: ${appgrey};
  }
`;