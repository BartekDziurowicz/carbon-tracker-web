import { styled } from "styled-components";
import { colorHandler } from "../../../Table.utils.jsx";
import { appgrey, apporange } from "../../../../../../../utils/colors.styles";

export const $Select = styled.select`
  height: 20px;
  font-size: 11px;
  border-color: ${({$color}) => colorHandler($color)};
  cursor: pointer;
  box-shadow: none;
  min-width: 100px;
  max-width: 200px;
  color: ${appgrey};

  &:focus {
    border-color: ${apporange};
    outline: none;
  }

  option {
    font-size: 11px;
    color: ${appgrey};
  }
`;