import { styled, keyframes } from "styled-components";
import { appgreenlight, appwhite, appgreen, appgrey, apporange, appred } from "../../utils/colors.styles";

const shake = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(15deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const $Login = styled.div`
  position: fixed; 
  top: 0;
  left: 0; 
  width: 100%; 
  height: 100%; 
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: white;
`;

export const $Logo = styled.img`
  height: 40%;
  max-height: 300px;
  user-select: none;
  animation: ${shake} 3.0s ease-in-out 10s infinite;
`;

export const $Form = styled.form`
  display: flex; 
  flex-direction: column;
  gap: 10px;
`

export const $Input = styled.input`
  font-size: 14px;
  padding: 4px 8px;
  border: 1px solid ${appgreen};
  color: ${appgrey};
  height: 24px;

  &:focus {
    outline: none;
    border: 1px solid ${apporange};
  }
`

export const $Button = styled.button`
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${appwhite};
  background: ${appgreen};
  cursor: pointer;
  border: 1px solid ${appgreen};
  user-select: none;
  padding: 8px 8px;

  &:hover {
    background: ${appgreenlight};
    border: 1px solid ${appgreenlight};
  }

  &:active {
    color: ${appgreen};
    border: 1px solid ${appgreenlight};
  }
`

export const $ErrorMessage = styled.div`
  color: ${appred};
  font-size: 12px;
  text-align: center;
`