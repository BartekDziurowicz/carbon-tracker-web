import { styled } from "styled-components";
import { appgreen, appgrey, apporange } from "../../../../utils/colors.styles.jsx"

export const $SelectorCurrentFilters = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export const $FilterItem = styled.div`
    font-size: ${({ $type }) => $type === "remove_all" ? "14px" : "12px"};
    color: ${appgrey};
    border: ${({ $type }) => $type === "remove_all" ? "" : `1px solid ${appgrey}`};
    border-radius: 5px 5px;
    padding: 2px 4px;
    margin: 0px 3px 3px 0px;
`

export const $DeleteButton = styled.button`
    margin-left: 2px;
    font-size: ${({ $type }) => $type === "remove_all" ? "12px" : "11px"};
    border: 0px;
    background-color: inherit;
    color: ${appgreen};

    &:hover {
        cursor: pointer;
        color: ${apporange};
    }

    &:active {
        color: ${apporange};
    }

`