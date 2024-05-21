import { styled } from "styled-components";
import { appblack, appblue } from "../../../../../utils/colors.styles.jsx";

export const $Dropdown = styled.div`
  display: block;
  color: ${({ $details }) => $details ? appblack : appblue};
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
`;

export const $Icon = styled.div`
  // color: ${appblue};
  font-size: 26px;
  text-align: left;
`;

export const $Title = styled.div`
  // color: ${appblue};
  font-size: 16px;
  text-align: right;
`;
