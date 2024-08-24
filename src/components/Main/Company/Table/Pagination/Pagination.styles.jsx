import { styled } from "styled-components";
import { colorHandler } from "../Table.utils.jsx";
import { appgrey, apporange } from "../../../../../utils/colors.styles.jsx";

export const $Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const $Icon = styled.a`
    margin: 10px 0 0 0;
    color: ${({$color}) => colorHandler($color)};

    &:hover {
        cursor: pointer;
        color: ${apporange};
    }
`

export const $Text = styled.div`
    color: ${appgrey};
    text-align: center;
    font-size: 14px;
    margin: 5px 0 0 0;
`