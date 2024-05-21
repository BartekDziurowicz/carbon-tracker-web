import { styled } from "styled-components";
import {
  appgreen,
  appgreenlight,
  appgrey,
  appblack,
} from "../../../../../utils/colors.styles.jsx";

export const $Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ step, $index }) =>
    $index < step ? appgreen : $index === step ? appblack : appgrey};
  font-size: 12px;
  cursor: ${({ step, $index }) => ($index < step ? "pointer" : "")};
  user-select: none;
  position: relative;
  border-radius: 50%;
  min-width: 50px;

  &:hover {
    color: ${({ step, $index }) => ($index < step ? appgreenlight : "")};
  }

  & div {
    font-size: 27px;
    position: relative;
  }
`;
