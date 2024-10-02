import { styled } from "styled-components";
import { appgreylight, appgrey } from "../../../../../../../utils/colors.styles";

export const $ChartComponent = styled.div`
    font-size: 10px;
`

export const $ChartHeader = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  background-color: ${appgreylight};
  color: ${appgrey};
  padding: 5px;

  & a {
    cursor: help;

    & :first-child {
      font-size: 10px;
      font-weight: normal;
    }
  }
`

