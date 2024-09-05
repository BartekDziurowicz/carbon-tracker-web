import { styled } from "styled-components";
import { colorHandler } from "./Table.utils.js";
import {
  appwhite,
  appgrey,
  apporange,
  appgreylight,
} from "../../../../utils/colors.styles.jsx";

export const $TableContainer = styled.div`
  display: block;
`

export const $TableBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 2px;
  padding: 10px;
  background: ${appwhite};
  box-shadow: 1px 2px 10px ${appgrey};
`;

export const $Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  & td {
    font-size: 12px;
    padding: 10px 0;
    text-align: center;
  }

  & tbody tr {
    border-bottom: 1px solid ${appgreylight};
  }
`

export const $IconHeader = styled.div`
  color: ${appwhite};
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: end;
`

export const $IconCell = styled.div`
  color: ${({$color}) => colorHandler($color)};
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 20px;

  & :first-child {
    &:hover {
      color: ${apporange};
      cursor: pointer;
    }
  }
`

