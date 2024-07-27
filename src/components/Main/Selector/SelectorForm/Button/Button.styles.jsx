import { styled } from "styled-components";
import {
    appgreen,
    appgreenlight,
    appgrey,
    appwhite,
  } from "../../../../../utils/colors.styles.jsx";

export const $Button = styled.button`
  font-size: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  color: ${({ $enabled }) => $enabled === true ? appwhite : appgrey};
  background: ${({ $enabled}) => $enabled === true ? appgreen : ""};
  cursor: ${({ $enabled }) => $enabled === true ? 'pointer' : ''};
  border: ${({ $enabled }) => $enabled === true ? `1px solid ${appgreen}` : `1px solid ${appgrey}`};
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
    font-size: 27px;
    position: relative;
  }
`;