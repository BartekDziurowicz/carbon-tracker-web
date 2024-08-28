import { styled } from "styled-components";
import { colorHandler } from "../Table.utils.jsx";
import { appgrey, apporange } from "../../../../../utils/colors.styles.jsx";

export const $RowDetail = styled.div`
    display: block;
`

export const $RowDetailsHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const $RowDetailsBox = styled.div`
    display: flex;
    justify-content: ${({$justify}) => $justify};
    align-items: center;
    gap: 10px;
    width: 100%;
`

export const $RowInputLabel = styled.label`
    color: ${appgrey};
    font-size: 12px;
`

export const $RowInputField = styled.input`
    width: ${({$width}) => $width};
    text-align: ${({$align}) => $align};
    font-size: 13px;
    color: ${appgrey};
    border: 1px solid ${({$color}) => colorHandler($color)};

    &:focus {
      outline: none;
      border: 1px solid ${apporange};
    }
`

export const $RowButton = styled.button`
    border: 0px;
    background-color: inherit;
    color: ${({$color}) => colorHandler($color)};

    &:hover {
        color: ${apporange};
        cursor: pointer;
    }

    &:active {
        color: ${apporange};
    }
`