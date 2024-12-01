import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner/Banner.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login/Login.jsx";
import { NavigationContext } from "./store/navigation-context.jsx";
import { EmployeeContext } from "./store/employee-context.jsx";

export default function Root() {
  const { authenticated } = useContext(EmployeeContext);
  const [selectedNavItem, setSelectedNavItem] = useState(() => {
    const storedNavItem = JSON.parse(sessionStorage.getItem("selectedNavItem"));
    if (storedNavItem === undefined || storedNavItem === null) {
      return "Home";
    } else {
      return storedNavItem;
    }
  });

  function selectNavItemHandler(selectedItem) {
    sessionStorage.setItem("selectedNavItem", JSON.stringify(selectedItem))
    setSelectedNavItem(() => selectedItem);
  }

  function checkCurrentSession() {
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    if (userData !== null && userData.authenticated === true) {
      return true;
    }
    return false;
  }

  const ctxNavigation = {
    selectedNavItem: selectedNavItem,
    selectNavItemHandler: selectNavItemHandler,
  };

  return (
    <>
      {(authenticated === false && checkCurrentSession() === false) ?
        <Login />
        :
        <NavigationContext.Provider value={ctxNavigation}>
          <Banner />
          <Main>
            <Outlet />
          </Main>
          <Footer />
        </NavigationContext.Provider>
      }
    </>
  );
}
