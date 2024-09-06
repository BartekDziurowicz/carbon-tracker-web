import { createContext, useReducer } from "react";

export const CompanyContext = createContext({
  selected: "",
  setSelected: () => {},
  parents: [],
  setParents: () => {},
});

function selectorReducer(state, action) {

  if (action.type === "SET_PARENTS") {
    return {
      ...state,
      parents: action.payload,
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
    selected: "Country",
    parents: [],
  });

  function setSelectedHandler(selected) {
    selectorDispatch({
      type: "SET_SELECTED",
      payload: selected,
    });
  }

  function setParentsHandler(parents) {
    selectorDispatch({
      type: "SET_PARENTS",
      payload: parents,
    })
  }

  const ctxCompany = {
    selected: companyState.selected,
    setSelected: setSelectedHandler,
    parents: companyState.parents,
    setParents: setParentsHandler,
  };

  return (
    <CompanyContext.Provider value={ctxCompany}>
      {children}
    </CompanyContext.Provider>
  );
}
