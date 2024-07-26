import { styled } from "styled-components";
import {
  appgreen,
  appgreenlight,
  appgrey,
  appwhite,
} from "../../../../../utils/colors.styles.jsx";

export const $AddButton = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  color: ${({ $enabled }) => $enabled ? appwhite : appgrey};
  background: ${({ $enabled }) => $enabled ? appgreen : ""};
  cursor: ${({ $enabled }) => $enabled ? 'pointer' : ''};
  border: ${({ $enabled }) => $enabled ? `1px solid ${appgreen}` : `1px solid ${appgrey}`};
  user-select: none;
  padding: 5px 8px;
  transition: 0.5s;

  &:hover {
    background: ${({ $enabled }) => $enabled === true ? appgreenlight : ""};
    border: ${({ $enabled }) => $enabled === true ? `1px solid ${appgreenlight}` : `1px solid ${appgrey}`};
  }

  &:active {
    color: ${({ $enabled }) => $enabled === true ? appgreen : appgrey};
    border: ${({ $enabled }) => $enabled === true ? `1px solid ${appgreenlight}` : `1px solid ${appgrey}`};
  }

  & div {
    display: flex;
    align-self: center;
    font-size: 23px;
    position: relative;
  }
`;
