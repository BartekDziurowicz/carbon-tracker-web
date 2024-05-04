import { useState } from 'react';
import Banner from './components/Banner/Banner.jsx';
import { NavigationContext } from './store/navigation-context.jsx';

import "./App.css";

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState('Metrics');

  function selectNavItemHandler(selectedItem) {
    setSelectedNavItem(() => selectedItem);
    //temp
    console.log(selectedNavItem, selectedItem);
  }

  const ctxNavigation = {
    selectedNavItem: selectedNavItem,
    selectNavItemHandler: selectNavItemHandler
  };

  return (
    <NavigationContext.Provider value={ctxNavigation}>
      <Banner />
    </NavigationContext.Provider>
  );
}

export default App;
