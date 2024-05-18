import { styled } from "styled-components";
import { appwhite } from '../../utils/colors.styles.jsx';

export const $Banner = styled.header`
  position: relative;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: ${appwhite};
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.5);
`;

export default $Banner;