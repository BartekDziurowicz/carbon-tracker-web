import { styled } from "styled-components";
import {
  appwhite,
  appgrey,
  apporange,
} from "../../../../../utils/colors.styles.jsx";

export const $HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;

export const $HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & :first-child {
    &:hover {
      cursor: pointer;
      color: ${apporange};
    }
  }
`;

export const $Header = styled.th`
  color: ${appwhite};
  background-color: ${appgrey};
  padding: 8px 20px;
  font-size: 14px;
  width: ${(width) => width};
  colspan: ${($colSpan) => $colSpan};
`;
