import { styled } from "styled-components";
import {
  appgrey
} from "../../../../../utils/colors.styles.jsx";

export const $BuilderLabel = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  color: ${appgrey};  
  user-select: none;
  padding: 5px 8px;
  border: 1px solid ${appgrey};

  & div {
    display: flex;
    align-self: center;
    font-size: 22px;
    position: relative;
  }
`;