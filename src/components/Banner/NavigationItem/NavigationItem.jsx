import { Tooltip } from "react-tooltip";
import { $NavigationItem, $NavigationItemIcon, $NavigationItemTooltip } from "./NavigationItem.styles";

export default function NavigationItem({ name, position, hidden, children }) {

  const TOOLTIP_PLACES= ['', 'left', 'left-end', 'bottom', 'right-end', 'right'];

  function handleClick() {
    console.log("TO DO HANDLER Nav item: " + name);
  }

  return (
    <$NavigationItem key={name} position={position} hidden={hidden} onClick={handleClick}>
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
