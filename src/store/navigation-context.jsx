import { createContext } from "react";

export const NavigationContext = createContext({
  selectedNavItem: 0,
  selectNavItemHandler: () => {},
});
