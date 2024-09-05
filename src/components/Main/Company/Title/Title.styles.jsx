import { styled } from "styled-components";
import { colorHandler } from "../Table/Table.utils.js";

export const $Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px 0px 0px;
  color: ${({$color}) => colorHandler($color)};
`

export const $Icon = styled.div`
  margin-right: 10px;
  font-size: 34px;
`