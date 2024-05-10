import { styled } from 'styled-components';
import { appgreydark, appgreen, appgreenlight, appgrey, appwhite } from '../../../utils/colors.styles.jsx';

const TOP_VALUES = ["66px", "103px", "139px", "175px", "139px", "103px"];
const RIGHT_VALUES = ["147px", "220px", "183px", "146px", "109px", "73px"];
const Z_INDEX = [0, 50, 51, 52, 49, 48];

export const $NavigationItem = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  transform: rotate(45deg);
  background: ${appgreen};
  margin: 10px;
  cursor: pointer;
  box-shadow: 1px 2px 10px ${appgrey};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  z-index: ${({ hidden, position }) => hidden ? Z_INDEX[0] : Z_INDEX[position]};
  top: ${({ hidden, position }) =>
    hidden ? TOP_VALUES[0] : TOP_VALUES[position]};
  right: ${({ hidden, position }) =>
    hidden ? RIGHT_VALUES[0] : RIGHT_VALUES[position]};

  &:active {
    box-shadow: 0px 1px 2.5px ${appgreydark};
    transition: 0.1s;
  }

  &:hover {
    background: ${appgreenlight};
  }
`;

export const $NavigationItemIcon = styled.div`
  color: ${appwhite};
  font-size: 35px;
`;

export const $NavigationItemTooltip = styled.a`
  transform: rotate(-45deg);
`;
