import { styled } from "styled-components";
import {
  appwhite,
  appgrey,
  appgreen,
  apporange,
  appgreylight,
} from "../../../../utils/colors.styles.jsx";

export const $TableContainer = styled.div`
  display: block;
`

export const $TableBox = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  background: ${appwhite};
  box-shadow: 1px 2px 10px ${appgrey};
`;

export const $Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  & th {
    color: ${appwhite};
    background-color: ${appgrey};
    padding: 8px 20px;
    font-size: 14px;
  }

  & td {
    font-size: 12px;
    padding: 10px 10px;
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
  color: ${appgreen};
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 10px;

  & :first-child {
    &:hover {
      color: ${apporange};
    }
  }
`

// export const $THead = styled.thead`

// `;

// export const $TBody = styled.tbody`

// `

// export const $TRow = styled.tr`
// `

// export const $TData = styled.td`
// `
