import { styled } from "styled-components";

export const $Reports = styled.div`
  display: block;

  & > * {
    margin-bottom: 15px;
  }
`;

export const $Fallback = styled.div`
  display: flex;
  justify-content: center;
  margin: 27px 0 28px 0;
`;

export const $Children = styled.div`
  &.dropdown-enter {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }

  &.dropdown-enter-active {
    opacity: 1;
    max-height: 400px;
    transition: opacity 300ms, max-height 500ms;
  }

  &.dropdown-exit {
    opacity: 1;
    max-height: 400px;
  }

  &.dropdown-exit-active {
    opacity: 0;
    max-height: 0;
    transition: opacity 300ms, max-height 500ms;
  }
`;
