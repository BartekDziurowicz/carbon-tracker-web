import { styled } from "styled-components";
import { appblack, appgrey, appgreydark, apporange, appwhite } from "../../../../utils/colors.styles.jsx";

export const $LineChartComponent = styled.div`
  padding: 10px;
  min-width: 200px;
  background: ${appwhite};
  box-shadow: 1px 2px 10px ${appgrey};
`;

export const $Head = styled.div`
  display: flex;
  direction: row-direction;
  justify-content: space-between;
  gap: 20px;
`;

export const $Icon = styled.div`
  color: ${({ $style }) => $style === "carbon" ? appgrey : apporange};
  font-size: 26px;
  text-align: left;

  & > * {
    margin-right: 10px;
  }
`;

export const $Title = styled.div`
  color: ${({ $style }) => $style === "carbon" ? appgrey : apporange};
  font-size: 16px;
  text-align: right;
`;