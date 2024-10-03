import { styled } from "styled-components";
import { appred } from "../../../../utils/colors.styles.jsx";

export const $MetricsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  row-gap: 20px;
  column-gap: 20px;
`;

export const $ErrorLabel = styled.div`
  color: ${appred};
  text-align: center;
  font-size: 14px;
  margin: 35px;
`

export default $MetricsContent;
