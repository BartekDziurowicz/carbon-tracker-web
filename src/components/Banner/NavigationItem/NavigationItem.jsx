import { useContext } from 'react';
import { Tooltip } from "react-tooltip";
import { NavigationContext } from '../../../store/navigation-context.jsx';
import { $NavigationItem, $NavigationItemIcon, $NavigationItemTooltip } from "./NavigationItem.styles";

const TOOLTIP_PLACES= ['', 'left', 'left-end', 'bottom', 'right-end', 'right'];

export default function NavigationItem({ auth, name, position, hidden, children }) {
  const { selectNavItemHandler } = useContext(NavigationContext);

  return (
    <$NavigationItem key={name} $position={position} hidden={hidden} onClick={() => selectNavItemHandler(name)}>
      <$NavigationItemTooltip
        data-tooltip-id={"nav_item_tooltip_" + name}
        data-tooltip-content={name}
        data-tooltip-delay-show={1000}
        data-tooltip-place={TOOLTIP_PLACES[position]}
      >
        <$NavigationItemIcon>{children}</$NavigationItemIcon>
        <Tooltip id={"nav_item_tooltip_" + name} />
      </$NavigationItemTooltip>
    </$NavigationItem>
  );
}
