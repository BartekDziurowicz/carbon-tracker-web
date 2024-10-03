import { styled } from "styled-components";
import { appred } from "../../../../utils/colors.styles.jsx";

export const $MetricsEmployee = styled.div`
  display: grid;
  grid-auto-flow: column dense;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px 15px;
  grid-template-areas:
    "Employee Workstation Carbon PieChart"
    "Office Workstation Carbon BarChart";

  & :first-child {
    grid-area: Employee;
  }

  & :nth-child(2) {
    grid-area: Office;
  }

  & :nth-child(3) {
    grid-area: Workstation;
  }

  & :nth-child(4) {
    grid-area: Carbon;
  }

  & :nth-child(5) {
    grid-area: PieChart;
  }

  & :nth-child(6) {
    grid-area: BarChart;
  }
`;

export const $ErrorLabel = styled.div`
  color: ${appred};
  text-align: center;
  font-size: 14px;
  margin: 35px;
`
