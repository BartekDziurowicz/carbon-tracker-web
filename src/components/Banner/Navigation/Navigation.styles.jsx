import { styled } from "styled-components";

export const $Navigation = styled.div`
  position: absolute;
  transform: rotate(45deg);
  width: 100px;
  height: 100px;
  right: 100px;
  top: 40px;
  z-index: 100;
  background: linear-gradient(90deg, #15ae55, #6de39e, #15ae55);
  background-size: 400% 400%;
  animation: gradient 5s infinite;
  margin: 10px;
  cursor: pointer;
  box-shadow: 1px 2px 10px #808080;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    box-shadow: 0px 1px 2.5px #292929;
    transition: 0.1s;
  }

  &:hover {
    background: #6de39e;
  }

  @keyframes gradient {
    50% {
      background-position: 100% 0;
    }
  }
`;

export const $NavigationIcon = styled.div`
  transform: rotate(-45deg);
  color: rgb(255, 255, 255);
  font-size: 70px;
`;
