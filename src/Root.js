import { useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner/Banner.jsx";
import Main from "./components/Main/Main.jsx";
import { NavigationContext } from "./store/navigation-context.jsx";

export default function Root() {
  const [selectedNavItem, setSelectedNavItem] = useState("Metrics");

  function selectNavItemHandler(selectedItem) {
    setSelectedNavItem(() => selectedItem);
  }

  const ctxNavigation = {
    selectedNavItem: selectedNavItem,
    selectNavItemHandler: selectNavItemHandler,
  };

  return (
    <>
      <NavigationContext.Provider value={ctxNavigation}>
        <Banner />
        <Main>
          <Outlet />
        </Main>
      </NavigationContext.Provider>
    </>
  );
}
