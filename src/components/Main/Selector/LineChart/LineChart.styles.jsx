import { styled } from "styled-components";
import { appblack, appgrey, apporange, appwhite } from "../../../../utils/colors.styles.jsx";

export const $LineChartComponent = styled.div`
  padding: 10px;
  min-width: 200px;  
  background: ${appwhite};
  box-shadow: 1px 2px 10px ${appgrey};
  font-size: 10px;

  & .recharts-legend-item {
    font-size: 12px;
    margin: 10px 0px 0px 0px;
  }
`;

export const $Head = styled.div`
  display: flex;
  direction: row-direction;
  justify-content: space-between;
  gap: 20px;
`;

export const $Icon = styled.div`
  color: ${({ $style }) => $style === "carbon" ? appgrey : $style === "total_carbon" ? appblack : apporange};
  font-size: ${({$style}) => $style === "total_carbon" ? "32px" : "26px"};
  text-align: left;

  & > * {
    margin-right: 10px;
  }
`;

export const $Title = styled.div`
  color: ${({ $style }) => $style === "carbon" ? appgrey : $style === "total_carbon" ? appblack : apporange};
  font-size: ${({$style}) => $style === "total_carbon" ? "18px" : "16px"};
  text-align: right;
`;

export const $Spinner = styled.div`
  display: flex;
  height: 100%;
  direction: row-direction;
  justify-content: center;
  align-items: center;
`