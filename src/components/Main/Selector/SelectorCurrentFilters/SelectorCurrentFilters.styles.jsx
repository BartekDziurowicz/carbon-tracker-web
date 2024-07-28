import { styled } from "styled-components";
import { appgreen, appgrey, apporange } from "../../../../utils/colors.styles.jsx"

export const $SelectorCurrentFilters = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const $FilterItem = styled.div`
    font-size: 12px;
    color: ${appgrey};
    border: 1px solid ${appgrey};
    border-radius: 5px 5px;
    padding: 2px 4px;
    margin: 0px 3px 3px 0px;
`

export const $DeleteButton = styled.button`
    margin-left: 2px;
    font-size: 11px;
    border: 0px;
    background-color: inherit;
    color: ${appgreen};

    &:hover {
        color: ${apporange};
    }

    &:active {
        color: ${apporange};
    }

`