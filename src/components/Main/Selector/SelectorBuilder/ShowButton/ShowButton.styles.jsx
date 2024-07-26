import { styled } from "styled-components";
import {
  appgreen,
  appgreenlight,
  appgrey,
  appwhite,
} from "../../../../../utils/colors.styles.jsx";

export const $ShowButton = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  color: ${({ $showCriteria }) => $showCriteria !== "" ? appwhite : appgrey};
  background: ${({ $showCriteria }) => $showCriteria !== "" ? appgreen : ""};
  cursor: ${({ $showCriteria }) => $showCriteria !== "" ? 'pointer' : ''};
  border: ${({ $showCriteria }) => $showCriteria !== "" ? `1px solid ${appgreen}` : `1px solid ${appgrey}`};
  user-select: none;
  padding: 5px 8px;
  transition: 0.5s;

  &:hover {
    background: ${({ $showCriteria }) => $showCriteria !== "" ? appgreenlight : ""};
    border: ${({ $showCriteria }) => $showCriteria !== "" ? `1px solid ${appgreenlight}` : `1px solid ${appgrey}`};
  }

  &:active {
    color: ${({ $showCriteria }) => $showCriteria !== "" ? appgreen : appgrey};
    border: ${({ $showCriteria }) => $showCriteria !== "" ? `1px solid ${appgreenlight}` : `1px solid ${appgrey}`};
  }

  & div {
    display: flex;
    align-self: center;
    font-size: 27px;
    position: relative;
  }
`;
