import { styled } from "styled-components";
import {
  appgreylight,
  appgrey,
} from "../../../../../../../utils/colors.styles";

export const $Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  & th {
    color: ${appgrey};
    font-size: 12px;
    background-color: ${appgreylight};
    padding: 5px 0px;
    min-width: 100px;
  }

  & td {
    font-size: 11px;
    padding: 10px 0;
    text-align: center;
  }

  & tbody tr {
    border-bottom: 1px solid ${appgreylight};
    color: ${appgrey};
  }

  & tfoot td {
    color: ${appgrey};
    font-weight: bold;
    font-size: 11px;
  }

  & a {
    cursor: help;

    & :first-child {
      font-size: 10px;
      font-weight: normal;
    }
  }
`;
