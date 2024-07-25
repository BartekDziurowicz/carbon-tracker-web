import { styled } from "styled-components";
import {
  appgreen,
  appgreenlight,
  appwhite,
} from "../../../../../utils/colors.styles.jsx";

export const $BuilderButton = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  color: ${appwhite};
  background: ${appgreen};
  cursor: pointer;
  user-select: none;
  padding: 7px 8px;
  transition: 0.5s;

  &:hover {
    background: ${appgreenlight};
  }

  &:active {
    color: ${appgreen};
  }

  & div {
    display: flex;
    align-self: center;
    font-size: 27px;
    position: relative;
  }
`;
