import { styled } from "styled-components";
import {
  appblack,
  appgrey,
  appgreylight,
  appwhite,
} from "../../../../../utils/colors.styles.jsx";

export const $Carbon = styled.div`
  padding: 10px;
  min-width: 200px;
  max-width: 400px;
  padding: 10px;
  background: ${appwhite};
  box-shadow: 1px 2px 10px ${appgrey};
`;

export const $Line = styled.hr`
  border: 1px dashed ${appgreylight};
`;

export const $Head = styled.div`
  display: flex;
  direction: row-direction;
  justify-content: space-between;
  gap: 20px;
`;

export const $Icon = styled.div`
  color: ${appblack};
  font-size: 34px;
  text-align: left;
`;

export const $Title = styled.div`
  color: ${appblack};
  font-size: 20px;
  text-align: right;
`;

export const $Content = styled.div`
  display: flex;
  direction: row-direction;
  justify-content: space-between;
  gap: 20px;
  margin: 10px 0;
  font-size: 14px;

  & :first-child {
    color: ${appgrey};
    text-align: left;
  }

  & :nth-child(2) {
    color: ${appblack};
    text-align: right;
  }
`;
