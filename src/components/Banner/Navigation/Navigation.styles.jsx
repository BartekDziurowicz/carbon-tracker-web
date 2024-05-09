import { styled } from "styled-components";
import {
  appblack,
  appgreen,
  appgreenlight,
  appgrey,
  appgreydark,
  appwhite,
} from "../../../utils/colors.styles.jsx";

export const $Navigation = styled.div`
  position: absolute;
  transform: rotate(45deg);
  width: 100px;
  height: 100px;
  right: 120px;
  top: 40px;
  z-index: 100;
  background: linear-gradient(
    90deg,
    ${appgreen},
    ${appgreenlight},
    ${appgreen}
  );
  background-size: 400% 400%;
  animation: gradient 5s infinite;
  margin: 10px;
  cursor: pointer;
  box-shadow: 1px 2px 10px ${appgrey};
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    box-shadow: 0px 1px 2.5px ${appgreydark};
    transition: 0.1s;
  }

  &:hover {
    background: ${appgreenlight};
  }

  @keyframes gradient {
    50% {
      background-position: 100% 0;
    }
  }
`;

export const $NavigationIcon = styled.div`
  transform: rotate(-45deg);
  color: ${appwhite};
  font-size: 70px;
`;

export const $NavigationSelectedItem = styled.p`
  width: 50px;
  transform: rotate(-45deg);
  position: absolute;
  top: 45px;
  right: 217px;
  color: ${appblack};
  font-size: 17px;
  font-weight: bold;
  user-select: none;
`;
