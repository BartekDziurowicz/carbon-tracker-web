import { createContext, useReducer } from "react";

export const CompanyContext = createContext({
  catalogInventory: [],
  setCatalogInventory: () => {},
  selected: "",
  setSelected: () => {},
});

function selectorReducer(state, action) {
  if (action.type === "SET_CATALOG_INVENTORY") {
    return {
      ...state,
      catalogInventory: action.payload,
    }
  }

  if (action.type === "SET_SELECTED") {
    return {
      ...state,
      selected: action.payload,
    };
  }

  return state;
}

export default function CompanyContextProvider({ children }) {
  const [companyState, selectorDispatch] = useReducer(selectorReducer, {
    catalogInventory: [],
    selected: "Country",
  });

  function setCatalogInventoryHandler(catalogInventory) {
    selectorDispatch({
      type: "SET_CATALOG_INVENTORY",
      payload: catalogInventory,
    })
  }

  function setSelectedHandler(selected) {
    selectorDispatch({
      type: "SET_SELECTED",
      payload: selected,
    });
  }

  const ctxCompany = {
    catalogInventory: companyState.catalogInventory,
    setCatalogInventory: setCatalogInventoryHandler,
    selected: companyState.selected,
    setSelected: setSelectedHandler,
  };

  return (
    <CompanyContext.Provider value={ctxCompany}>
      {children}
    </CompanyContext.Provider>
  );
}
