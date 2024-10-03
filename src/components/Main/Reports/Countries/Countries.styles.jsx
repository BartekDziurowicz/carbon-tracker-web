import { styled } from "styled-components";
import { appgrey } from "../../../../utils/colors.styles.jsx";

export const $Countries = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    margin-top: -10px;
`

export const $Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: ${appgrey};
`