import { styled } from "styled-components";
import { appgrey, appwhite, appgreylight, appgreen } from "../../../../../utils/colors.styles";

export const $Document = styled.div`
  display: block;
  padding: 10px;
  background: ${appwhite};
  box-shadow: 1px 2px 10px ${appgrey};
`

export const $Title = styled.div`
  display: flex;
  align-items: center;
  background-color: ${appgreen};
  color: ${appwhite};
  font-size: 16px;
  width: 100%;
  cursor: default;

  & :first-child {
    font-size: 26px;
    padding: 5px 10px;
  }
`

export const $Line = styled.hr`
  border: 1px dashed ${appgreylight};
`;