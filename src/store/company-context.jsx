import { createContext, useReducer } from "react";

export const CompanyContext = createContext({
  selected: "",
  setSelected: () => {},
});

function selectorReducer(state, action) {
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
    selected: "Company",
  });

  function setSelectedHandler(selected) {
    selectorDispatch({
      type: "SET_SELECTED",
      payload: selected,
    });
  }

  const ctxCompany = {
    selected: companyState.selected,
    setSelected: setSelectedHandler,
  };

  return (
    <CompanyContext.Provider value={ctxCompany}>
      {children}
    </CompanyContext.Provider>
  );
}
