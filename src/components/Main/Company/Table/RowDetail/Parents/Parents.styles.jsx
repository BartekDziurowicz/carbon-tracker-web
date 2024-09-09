import { styled } from "styled-components";
import { colorHandler } from "../../Table.utils.js";
import { appgrey, apporange } from "../../../../../../utils/colors.styles";

export const $Parents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 2px 0 0 0;
    font-size: 11px;
`

export const $Message = styled.label`
    display: flex;
    item-align: center;
    justify-content: center;
    font-size: 11px;
    color: ${appgrey};
`

export const $Title = styled.label`
    display: flex;
    item-align: center;
    justify-content: center;
    gap: 4px;
    font-size: 11px;
    color: ${({$color}) => colorHandler($color)};
    padding: 0 5px 0 15px;

    & :first-child {
        font-size: 16px;
    }
`

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