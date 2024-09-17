import { styled } from "styled-components";
import { appred, appgrey } from "../../utils/colors.styles";

export const $RouteError = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 28px;
`

export const $Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 64px;
    color: ${appred};
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

export default $RouteError;