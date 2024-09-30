import { styled } from "styled-components";
import {
  appblack,
  appgrey,
  appblue
} from "../../../../../../utils/colors.styles.jsx";

export const $Dropdown = styled.div`
  display: block;
  color: ${appblue};
`;

export const $Children = styled.div`
  &.dropdown-enter {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }

  &.dropdown-enter-active {
    opacity: 1;
    max-height: 400px;
    transition: opacity 300ms, max-height 500ms;
  }

  &.dropdown-exit {
    opacity: 1;
    max-height: 400px;
  }

  &.dropdown-exit-active {
    opacity: 0;
    max-height: 0;
    transition: opacity 300ms, max-height 500ms;
  }
`;

export const $Head = styled.div`
  display: flex;
  direction: row-direction;
  justify-content: space-between;
  gap: 20px;
  cursor: pointer;
  margin-bottom: 5px;
`;

export const $Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  text-align: left;
`;

export const $Title = styled.div`
  font-size: 14px;
  text-align: right;
  font-weight: bold;
`;
