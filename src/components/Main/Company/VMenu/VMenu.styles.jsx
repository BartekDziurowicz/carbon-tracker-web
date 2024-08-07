import { styled } from "styled-components";
import {
  appblue,
  appwhite,
  appgrey,
  appgreenlight,
  appgreylight,
  apporange,
} from "../../../../utils/colors.styles.jsx";

export const $VMenu = styled.div`
  display: block;
  padding: 10px;
  background: ${appwhite};
  box-shadow: 1px 2px 10px ${appgrey};
`;

export const $Line = styled.hr`
  border: 1px dashed ${appgreylight};
`;

export const $MenuItem = styled.div`
  margin: 2px 10px;

  &:hover {
    color: ${apporange};
    cursor: pointer;
  }

  &:active {
    color: ${appgreylight};
  }
`;
