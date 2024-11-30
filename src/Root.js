import { useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner/Banner.jsx";
import Main from "./components/Main/Main.jsx";
import Login from "./components/Login/Login.jsx";
import { NavigationContext } from "./store/navigation-context.jsx";

export default function Root() {
  const [authenticated, setAuthenticated] = useState(201);
  const [selectedNavItem, setSelectedNavItem] = useState(() => {
    const storedNavItem = JSON.parse(sessionStorage.getItem("selectedNavItem"));
    if (storedNavItem === undefined || storedNavItem === null) {
      return "Metrics";
    } else {
      return storedNavItem;
    }
  });

  function selectNavItemHandler(selectedItem) {
    sessionStorage.setItem("selectedNavItem", JSON.stringify(selectedItem))
    setSelectedNavItem(() => selectedItem);
  }

  const ctxNavigation = {
    selectedNavItem: selectedNavItem,
    selectNavItemHandler: selectNavItemHandler,
  };

  return (
    <>
      {authenticated !== 200 ?
        <Login />
        :
        <NavigationContext.Provider value={ctxNavigation}>
          <Banner />
          <Main>
            <Outlet />
          </Main>
        </NavigationContext.Provider>
      }
    </>
  );
}
