import { styled } from "styled-components";

export const $Home = styled.div`
    padding: 14px 13% 0px 13%;
`
export const $SliderContainer = styled.div`
    width: 75%;
    height: auto;
`

export const $ImgContainer = styled.div`    
    & img { 
        width: 100%; 
        height: auto; 
        max-height: 650px; 
        object-fit: cover; 
    }
`