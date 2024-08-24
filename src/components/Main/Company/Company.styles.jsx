import { styled } from "styled-components";

export const $Company = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 64px auto auto;
    gap: 15px 15px;
    grid-template-areas:
        "Title Content"
        "VMenu Content";

    & :first-child {
        grid-area: Title;
    }

    & :nth-child(3) {
        grid-area: VMenu;
    }

    & :nth-child(4) {
        grid-area: Content;
    }
`;
