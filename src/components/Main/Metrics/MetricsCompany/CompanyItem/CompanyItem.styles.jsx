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

function colorHandler(threshold) {
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
}

function colorHandlerBlackWhite(threshold) {
  return threshold === 0 ? appblack : appwhite;
}

function colorHandlerContent(threshold) {
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
}

export const $CompanyItem = styled.div`
  min-width: 200px;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ threshold }) => colorHandlerBlackWhite(threshold)};
  box-shadow: 1px 2px 10px ${appgrey};

  &:hover {
    box-shadow: 1px 2px 10px ${({ threshold }) => colorHandler(threshold)};
    transform: rotate(${({ index }) => (index % 2 === 0 ? "-1deg" : "1deg")});

  &:active {
    box-shadow: 0px 1px 2.5px ${({ threshold }) => colorHandler(threshold)};
  }
`;

export const $Head = styled.div`
  display: flex;
  direction: row-direction;
  justify-content: space-between;
  gap: 20px;
`;

export const $Icon = styled.div`
  color: ${({ threshold }) => colorHandlerContent(threshold)};
  font-size: 34px;
  text-align: left;
`;

export const $Title = styled.div`
  color: ${({ threshold }) => colorHandlerBlackWhite(threshold)};
  font-size: 18px;
  text-align: right;
`;

export const $Content = styled.div`
  display: flex;
  direction: row-direction;
  justify-content: space-between;
  gap: 20px;
  margin: 10px 0;
`;

export const $Areas = styled.a`
  & p {
    margin: 0;
    border-radius: 50%;
    height: 34px;
    width: 34px;
    line-height: 33px;
    text-align: center;
    border: 1px solid ${({ threshold }) => colorHandlerContent(threshold)};
    color: ${({ threshold }) => colorHandlerContent(threshold)};
  }
`;

export const $Location = styled.div`
  color: ${appgrey};
  font-size: 12px;
  text-align: right;
`;

export const $Carbon = styled.a`
  display: flex;
  direction: row-direction;
  justify-content: space-around;

  & :first-child {
    color: ${({ threshold }) => colorHandlerBlackWhite(threshold)};
    font-size: 18px;
  }

  & :nth-child(2) {
    color: ${appgrey};
  }

  & :nth-child(3) {
    color: ${({ threshold }) => colorHandlerContent(threshold)};
  }
`;
