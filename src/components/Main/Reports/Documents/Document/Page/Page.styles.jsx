import { styled } from "styled-components";

export const $Page = styled.div`
    display: block;
`

export const $BasicCharts = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr;
    gap: 15px 15px;
    grid-template-areas:
        "car_sum_t_bar car_sum_t_pie";

    & :first-child {
        grid-area: car_sum_t_bar;
    }

    & :nth-child(2) {
        grid-area: car_sum_t_pie;
    }

    margin-bottom: 15px;
`;

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

    margin-bottom: 15px;
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