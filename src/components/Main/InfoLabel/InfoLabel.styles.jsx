import { styled } from "styled-components";
import { appgreen, appgrey } from "../../../utils/colors.styles";

export const $InfoLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 54px;
`

export const $Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 64px;
    color: ${appgreen};
    margin-right: 10px;
`

export const $Message = styled.div`
    display: block;

    font-size: 18px;

    & :first-child {
        color: ${appgrey};
        font-size: 13px;
    }
`