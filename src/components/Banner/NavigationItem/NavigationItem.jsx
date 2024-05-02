import { $NavigationItem, $NavigationItemIcon } from "./NavigationItem.styles";

export default function NavigationItem({ name, position, hidden, children }) {
  return (
      <$NavigationItem position={position} hidden={hidden}>
        <$NavigationItemIcon>{children}</$NavigationItemIcon>
      </$NavigationItem>
  );
}
