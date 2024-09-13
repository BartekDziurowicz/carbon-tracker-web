import { styled } from "styled-components";
import { colorHandler } from "../../Table.utils";
import { appgrey, apporange } from "../../../../../../utils/colors.styles";

export const $RowForm = styled.form`
    display: block;
`

export const $RowDetailsHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const $RowInputRange = styled.input`
    cursor: pointer;
`

export const $RowStatusLabel = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: ${({$color}) => colorHandler($color)};
    padding: 10px 0 0 0;
`

export const $RowInputField = styled.input`
    width: 95%;
    text-align: ${({$align}) => $align};
    font-size: 11px;
    color: ${appgrey};
    border: 1px solid ${({$color}) => colorHandler($color)};
    padding: 2px;

    &:focus {
      outline: none;
      border: 1px solid ${apporange};
    }
`

export const $RowDetailsBox = styled.div`
    display: flex;
    justify-content: ${({$justify}) => $justify};
    align-items: center;
    gap: ${({$gap}) => $gap};
    width: 100%;
`

export const $RowButton = styled.button`
    border: 0px;
    font-size: ${({$size}) => $size};
    background-color: inherit;
    color: ${({$color}) => colorHandler($color)};

    &:hover {
        color: ${apporange};
        cursor: pointer;
    }

    &:active {
        color: ${apporange};
    }

    & :nth-child(2) {
        font-size: 12px;
    }
`
