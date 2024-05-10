import { styled } from "styled-components";
import {
  appblack,
  appblue,
  appgreen,
  appgrey,
  apporange,
  appred,
  appwhite,
} from "../../../../../utils/colors.styles.jsx";

export const $CompanyItem = styled.div`
  min-width: 200px;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ threshold }) =>
    threshold === 0 ? appblack : appwhite};
  box-shadow: 1px 2px 10px ${appgrey};

  & header {
    display: flex;
    direction: row-direction;
    justify-content: space-between;
    gap: 20px;
  }

  & icon {
    color: ${({ threshold }) => {
      switch (threshold) {
        case 0:
        case 1:
          return appred;
        case 2:
          return apporange;
        case 3:
          return appgreen;
        default:
          return appblue;
      }
    }};
    font-size: 34px;
    text-align: left;
  }

  & name {
    color: ${({ threshold }) => (threshold !== 0 ? appblack : appwhite)};
    font-size: 18px;
    text-align: right;
  }

  & container {
    display: flex;
    direction: row-direction;
    justify-content: space-between;
    gap: 20px;
    margin: 10px 0;
  }

  & areas {
      border: 1px solid ${({ threshold }) => {
        switch (threshold) {
          case 0:
          case 1:
            return appred;
          case 2:
            return apporange;
          case 3:
            return appgreen;
          default:
            return appblue;
        }
      }};
      border-radius: 50%;
      height: 34px;
      width: 34px;
      line-height: 33px;
      text-align: center;
      color: ${({ threshold }) => {
        switch (threshold) {
          case 0:
          case 1:
            return appred;
          case 2:
            return apporange;
          case 3:
            return appgreen;
          default:
            return appblue;
        }
      }};
  }

  & location {
    color: ${appgrey};
    font-size: 12px;    
    text-align: right;
  }

  & carbon {
    display: flex;
    direction: row-direction;
    justify-content: space-around;
  }

  & carbon :first-child {
    color: ${({ threshold }) => (threshold !== 0 ? appblack : appwhite)};
    font-size: 18px;
  }

  & carbon :nth-child(2) {
    color: ${appgrey};
  }

  & carbon :nth-child(3) {
    color: ${({ threshold }) => {
      switch (threshold) {
        case 0:
        case 1:
          return appred;
        case 2:
          return apporange;
        case 3:
          return appgreen;
        default:
          return appblue;
      }
    }};
  }

  &:hover {
    box-shadow: 1px 2px 10px ${({ threshold }) => {
      switch (threshold) {
        case 0:
          return appblack;
        case 1:
          return appred;
        case 2:
          return apporange;
        case 3:
          return appgreen;
        default:
          return appblue;
      }
    }};
    transform: rotate(${({ index }) => (index % 2 === 0 ? "-1deg" : "1deg")});

  &:active {
    box-shadow: 0px 1px 2.5px ${({ threshold }) => {
      switch (threshold) {
        case 0:
          return appblack;
        case 1:
          return appred;
        case 2:
          return apporange;
        case 3:
          return appgreen;
        default:
          return appblue;
      }
    }};
  }

  // &:active icon {
  //   color: ${apporange};
  // }
`;
