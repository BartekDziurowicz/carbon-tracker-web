import { styled } from "styled-components";


const STATUS_COLORS = {
    active: '#15ae55',
    inactive: '#2b2a29',
}

export const $Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ status }) => STATUS_COLORS[status]};
  font-size: 12px;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #6de39e;
  }
`;
