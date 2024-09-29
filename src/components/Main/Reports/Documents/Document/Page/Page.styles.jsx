import { styled } from "styled-components";

export const $Page = styled.div`
    display: block;
`

export const $Charts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 15px 15px;
    grid-template-areas:
        "car_sum_t car_avg_um"
        "car_avg_th usa_avg_th";

    & :first-child {
        grid-area: car_sum_t;
    }

    & :nth-child(2) {
        grid-area: car_avg_um;
    }

    & :nth-child(3) {
        grid-area: car_avg_th;
    }

    & :nth-child(4) {
        grid-area: usa_avg_th;
    }
`;

export const $PieCharts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 15px 15px;
    grid-template-areas:
        "car_sum_t car_avg_th usa_avg_th car_avg_um";

    & :first-child {
        grid-area: car_sum_t;
    }

    & :nth-child(2) {
        grid-area: car_avg_th;
    }

    & :nth-child(3) {
        grid-area: usa_avg_th;
    }

    & :nth-child(4) {
        grid-area: car_avg_um;
    }
`;



export default $Page;