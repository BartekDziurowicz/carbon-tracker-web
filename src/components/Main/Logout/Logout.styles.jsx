import { styled } from "styled-components";
import { appgreen, appgrey } from "../../../utils/colors.styles";

export const $Logout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`

export const $LogoutLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
    color: ${appgreen};

    & :first-child {
        color: ${appgrey};
        font-size: 13px;
    }
`