import { styled } from "styled-components";
import { appgrey, appgreylight } from "../../../../../../utils/colors.styles.jsx";
import { colorHandler } from "../../Table.utils.jsx";

export const $Childs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 2px 0 0 0;
`

export const $Child = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${appgrey};
    border: 1px solid ${appgrey};
    border-radius: 5px 5px;
    padding: 1px 4px 2px 4px;
    text-align: center;
`

export const $Line = styled.hr`
  border: 1px dashed ${appgreylight};
`;

export const $Title = styled.div`
    display: flex;
    item-align: center;
    justify-content: center;
    gap: 4px;
    color: ${({$color}) => colorHandler($color)};
    padding-right: 8px;

    & :first-child {
        font-size: 16px;
    }
`