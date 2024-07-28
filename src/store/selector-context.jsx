import { createContext, useReducer } from "react";

export const SelectorContext = createContext({
  showCriteria: "",
  setShowCriteria: () => {},
  whereCriteria: [],
  setWhereCriteria: () => {},
  tempWhereCriteria: {key: "", value: ""},
  setTempWhereCriteria: () => {},
  selectorFilters: [],
  setSelectorFilters: () => {}
});

function selectorReducer(state, action) {
  if (action.type === 'SET_SHOW_CRITERIA') {
    return {
      ...state,
      showCriteria: action.payload
    }
  }

  if (action.type === 'DELETE_WHERE_CRITERIA') {
    const updatedWhereCriteria = [...state.whereCriteria];
    // const existingWhereCriteriaIndex = updatedWhereCriteria.findIndex(criteria => criteria.key === action.payload);
    // if (existingWhereCriteriaIndex !== -1) {
      updatedWhereCriteria.splice(action.payload, 1);
    // }

    return {
      ...state,
      whereCriteria: [...updatedWhereCriteria]
    }
  }

  if (action.type === 'SET_WHERE_CRITERIA') {
    const updatedWhereCriteria = [...state.whereCriteria];
    const existingWhereCriteriaIndex = updatedWhereCriteria.findIndex(criteria => criteria.key === action.payload.key);
    if (existingWhereCriteriaIndex !== -1) {
      updatedWhereCriteria[existingWhereCriteriaIndex] = action.payload;
    } else {
      updatedWhereCriteria.push(action.payload);
    }

    return {
      ...state,
      whereCriteria: [...updatedWhereCriteria]
    }
  }

  if (action.type === 'SET_TEMP_WHERE_CRITERIA') {
    return {
      ...state,
      tempWhereCriteria: action.payload
    }
  }

  if (action.type === 'SET_SELECTOR_FILTERS') {
    return {
      ...state,
      selectorFilters: action.payload
    }
  }

  return state;
}

export default function SelectorContextProvider({ children }) {
  const [selectorState, selectorDispatch] = useReducer(
    selectorReducer,
    {
      showCriteria: "",
      whereCriteria: [],
      tempWhereCriteria: {key: "", value: ""},
      selectorFilters: []
    }
  )

  function setShowCriteriaHandler(showCriteria) {
    selectorDispatch({
      type: 'SET_SHOW_CRITERIA',
      payload: showCriteria
    })
  }

  function deleteWhereCriteriaHandler(criteriaIndex) {
    selectorDispatch({
      type: 'DELETE_WHERE_CRITERIA',
      payload: criteriaIndex
    })
  }

  function setWhereCriteriaHandler(whereCriteria) {
    selectorDispatch({
      type: 'SET_WHERE_CRITERIA',
      payload: whereCriteria
    })
  }

  function setTempWhereCriteriaHandler(tempWhereCriteria) {
    selectorDispatch({
      type: 'SET_TEMP_WHERE_CRITERIA',
      payload: tempWhereCriteria
    })
  }

  function setSelectorFiltersHandler(selectorFilters) {
    selectorDispatch({
      type: 'SET_SELECTOR_FILTERS',
      payload: selectorFilters
    })
  }

  const ctxSelector = {
    showCriteria: selectorState.showCriteria,
    setShowCriteria: setShowCriteriaHandler,
    whereCriteria: selectorState.whereCriteria,
    setWhereCriteria: setWhereCriteriaHandler,
    deleteWhereCriteria: deleteWhereCriteriaHandler,
    tempWhereCriteria: selectorState.tempWhereCriteria,
    setTempWhereCriteria: setTempWhereCriteriaHandler,
    selectorFilters: selectorState.selectorFilters,
    setSelectorFilters: setSelectorFiltersHandler
  }

  return (
    <SelectorContext.Provider value={ctxSelector}>{children}</SelectorContext.Provider>
  );
}


