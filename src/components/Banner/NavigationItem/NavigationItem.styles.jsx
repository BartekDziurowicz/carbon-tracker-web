import { styled } from "styled-components";

const topValues = ["66px", "103px", "139px", "175px", "139px", "103px"];
const rightValues = ["127px", "200px", "163px", "126px", "89px", "53px"];

export const $NavigationItem = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  transform: rotate(45deg);
  background: #15ae55;
  margin: 10px;
  cursor: pointer;
  box-shadow: 1px 2px 10px #808080;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  top: ${({ hidden, position }) =>
    hidden ? topValues[0] : topValues[position]};
  right: ${({ hidden, position }) =>
    hidden ? rightValues[0] : rightValues[position]};

  &:active {
    box-shadow: 0px 1px 2.5px #292929;
    transition: 0.1s;
  }

  &:hover {
    background: #6de39e;
  }
`;

export const $NavigationItemIcon = styled.div`
  transform: rotate(-45deg);
  color: rgb(255, 255, 255);
  font-size: 35px;
`;
