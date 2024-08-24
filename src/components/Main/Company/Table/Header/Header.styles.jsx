import { styled } from "styled-components";
import { colorHandler } from "../Table.utils.jsx";
import {
  appwhite,
  apporange,
} from "../../../../../utils/colors.styles.jsx";

export const $HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;

export const $HeaderIcon = styled.a`
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
  background-color: ${({$color}) => colorHandler($color)};
  padding: 8px 20px;
  font-size: 14px;
  width: ${(width) => width};
  colspan: ${($colSpan) => $colSpan};
`;
