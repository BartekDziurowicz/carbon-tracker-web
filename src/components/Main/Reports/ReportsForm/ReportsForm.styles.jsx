import { styled } from "styled-components";
import { appred, appgreen, appgreenlight } from "../../../../utils/colors.styles";

export const $ReportsForm = styled.form`
  margin: 25px 100px 15px 0;
  display: flex;
  justify-content: flex-start;
  column-gap: 10px;
  align-items: center;
`

export const $ErrorLabel = styled.div`
  color: ${appred};
  text-align: center;
  font-size: 14px;
`

export const $Icon = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${appgreen};
  font-size: 23px;

  & :hover {
    cursor: pointer;
    color: ${appgreenlight};
    transition: 0.5s;
  }

  & :nth-child(2) {
    font-size: 12px;
  }
`

export default $ReportsForm;