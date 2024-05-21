import { styled } from "styled-components";
import { appblack, appgrey, appwhite } from "../../../../../utils/colors.styles.jsx";

export const $PieChartComponent = styled.div`
  padding: 10px;
  min-width: 200px;
  max-width: 400px;
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
  color: ${appblack};
  font-size: 30px;
  text-align: left;
`;

export const $Title = styled.div`
  color: ${appblack};
  font-size: 16px;
  text-align: right;
`;

export const $Content = styled.div`
  display: flex;
  justify-content: center;
`;
