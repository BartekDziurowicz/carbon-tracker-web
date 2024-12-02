import { styled } from "styled-components";
import { appgreen, appgrey } from "../../../utils/colors.styles";

export const $UserInfo = styled.div`
  position: absolute;
  width: 400px;
  height: 60px;
  right: 290px;
  top: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
`

export const $Label = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const $Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: ${appgreen};
    margin-right: 10px;
`

export const $Info = styled.div`
    display: block;
    font-size: 16px;
    color: ${appgreen};

    & :first-child {
        color: ${appgrey};
        font-size: 12px;
    }
`