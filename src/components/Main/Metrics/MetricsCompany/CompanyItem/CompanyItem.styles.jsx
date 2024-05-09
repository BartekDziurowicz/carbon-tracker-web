import { styled } from "styled-components";
import {
  appblack,
  appgreen,
  appgreenlight,
  appgrey,
  appgreydark,
  apporange,
  appred,
  appwhite,
} from '../../../../../utils/colors.styles.jsx';

export const $CompanyItem = styled.div`
  min-width: 200px;
  height: 150px;
  padding: 10px;
  cursor: pointer;
  background-color: ${appwhite};
  box-shadow: 1px 2px 10px #808080;

  & header {
    display: flex;
    direction: row-direction;
    justify-content: space-between;
    gap: 20px;
  }

  & icon {
    color: ${appgreen};
    font-size: 34px;
    text-align: left;
  }

  & name {
    color: ${appblack};
    font-size: 18px;
    text-align: right;
  }

  // & country {
  //   color: grey;
  //   font-size: 16px;
  //   position: absolute;
  //   width: 200px;
  //   text-align: right;
  //   float: right;
  //   margin-top: 40px;
  // }

  // & location {
  //   color: grey;
  //   font-size: 12px;    
  //   text-align: right;
  //   float: right;
  //   position: absolute;
  //   width: 200px;
  //   margin-top: 70px;
  // }

  // & areas {
  //   border: 1px solid #15ae55;
  //   border-radius: 50%;
  //   position: absolute;
  //   height: 34px;
  //   width: 34px;
  //   text-align: center    ;
  //   margin-top: 50px;
  // }

  & carbon {
    display: flex;
    direction: row-direction;
    justify-content: space-around;
  }

  & carbon :first-child {
    color: ${appblack};
    font-size: 18px;
  }

  & carbon :nth-child(2) {
    color: ${appgrey};
  }

  & carbon :nth-child(3) {
    color: ${({ carbonLimit, currentUsage }) => carbonLimit > currentUsage ? appgreen : appred };
  }

  &:hover {
    box-shadow: 1px 2px 10px ${appgreen};
    transform: rotate(${({ index }) => index%2 === 0 ? '-1deg' : '1deg'});

  &:active {
    box-shadow: 0px 1px 2.5px ${apporange};
  }

  &:active icon {
    color: ${apporange};
  }
`;
