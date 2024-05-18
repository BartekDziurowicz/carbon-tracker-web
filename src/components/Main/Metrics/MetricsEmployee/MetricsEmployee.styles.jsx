import { styled } from "styled-components";

export const $MetricsEmployee = styled.div`
  padding: 0 20px;
  display: grid;
  grid-auto-flow: column dense;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px 20px;
  grid-template-areas:
    "Employee Workstation Carbon"
    "Office Workstation Carbon";

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
`;
