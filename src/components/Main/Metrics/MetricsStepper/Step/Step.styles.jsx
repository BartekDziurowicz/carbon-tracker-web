import { styled } from "styled-components";
import { appblue, appgreen, appgrey, appblack } from '../../../../../utils/colors.styles.jsx';

export const $Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ step, index }) =>
    index < step
      ? appblack
      : index === step
      ? appgreen
      : appgrey};
  font-size: 12px;
  // cursor: pointer;
  user-select: none;
  position: relative;
  border-radius: 50%;
  min-width: 50px;

  // &:hover {
  //   color: #6de39e;
  // }

  & div {
    font-size: 27px;
    position: relative;
  }

`;
