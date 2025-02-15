import { styled } from "styled-components";
import { colorHandler } from "../Table.utils.js";
import { appgrey, apporange } from "../../../../../utils/colors.styles.jsx";

export const $Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  padding: 17px 0px 26px 0px;

  & a {
    font-size: 12px;
  }
`;

export const $Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: ${({ $color }) => colorHandler($color)};

  &:hover {
    cursor: ${({ $action }) => $action && "pointer"};
    color: ${({ $action }) => $action && apporange};
  }
`;

export const $Input = styled.input`
  padding: 5px 5px 5px 5px;
  width: 300px;
  font-size: 14px;
  border: 1px solid ${({ $color }) => colorHandler($color)};
  color: ${appgrey};
  height: 24px;

  &:focus {
    outline: none;
    border: 1px solid ${apporange};
  }
`;
