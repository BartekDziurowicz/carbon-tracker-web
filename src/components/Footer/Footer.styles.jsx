import { styled } from "styled-components";
import { appblack, appwhite } from "../../utils/colors.styles";

export const $Footer = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding: 10px; 
    font-size: 12px; 
    color: ${appwhite}; 
    background-color: ${appblack}; 
    position: fixed;
    bottom: 0; 
    width: 100%;
`