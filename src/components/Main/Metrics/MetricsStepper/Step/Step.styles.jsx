import { styled } from "styled-components";

const STATUS_COLORS = {
  active: '#337ab7',
  complete: '#15ae55',
  waiting: 'grey'
};

export const $Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ step, index }) =>
    index < step
      ? STATUS_COLORS.complete
      : index === step
      ? STATUS_COLORS.active
      : STATUS_COLORS.waiting};
  font-size: 12px;
  // cursor: pointer;
  user-select: none;
  position: relative;

  // &:hover {
  //   color: #6de39e;
  // }

  & div {
    font-size: 27px;
    position: relative;
  }
`;
