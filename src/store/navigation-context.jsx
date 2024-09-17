import { createContext } from "react";

export const NavigationContext = createContext({
  selectedNavItem: "Error",
  selectNavItemHandler: () => {},
});
