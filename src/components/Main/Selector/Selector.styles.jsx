import { styled } from "styled-components";

export const $Selector = styled.div`
  display: block;
  
  & > * {
    margin-bottom: 15px;
  }
`;

export const $Fallback = styled.div`
  display: flex;
  justify-content: center;
  margin: 27px 0 28px 0;
`

export default $Selector;