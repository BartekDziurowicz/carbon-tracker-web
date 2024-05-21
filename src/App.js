import { useState } from "react";
import Banner from "./components/Banner/Banner.jsx";
import Main from './components/Main/Main.jsx';
import { NavigationContext } from "./store/navigation-context.jsx";

import "./App.css";

function App() {
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
        <Main />
      </NavigationContext.Provider>      
    </>
  );
}

export default App;
