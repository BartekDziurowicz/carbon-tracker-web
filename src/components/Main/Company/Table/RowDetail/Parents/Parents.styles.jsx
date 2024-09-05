import { styled } from "styled-components";
import { colorHandler } from "../../Table.utils.jsx";
import { appgrey } from "../../../../../../utils/colors.styles";

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
    padding-right: 5px;

    & :first-child {
        font-size: 16px;
    }
`