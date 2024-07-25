import { styled } from "styled-components";
import {
  appgreen,
  appgreenlight,
  appgrey
} from "../../../../../utils/colors.styles.jsx";

export const $BuilderValues = styled.form`
  select {
    height: 34px;
    border-color: ${appgreen};
    cursor: pointer;
    box-shadow: none;
    color: ${appgrey};

    &:focus {
      border-color: ${appgreenlight};
      outline: none;
    }

    option {
      color: ${appgrey};
    }
  }
`;

export default $BuilderValues;
