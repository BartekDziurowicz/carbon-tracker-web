import { createContext, useReducer } from "react";

export const SelectorContext = createContext({
  showCriteria: "",
  setShowCriteria: () => {},
  whereCriteria: [],
  setWhereCriteria: () => {},
  clearWhereCriteria: () => {},
  deleteWhereCriteria: () => {},
  tempWhereCriteria: { key: "", value: "", id: "" },
  setTempWhereCriteria: () => {},
  selectorFilters: [],
  setSelectorFilters: () => {},
  calculatedMetrics: [],
  setCalculatedMetrics: () => {},
  period: {start: null, end: null, interval: null},
  setPeriod: () => {},
});

function selectorReducer(state, action) {
  if (action.type === "SET_SHOW_CRITERIA") {
    return {
      ...state,
      showCriteria: action.payload,
    };
  }

  if (action.type === "CLEAR_WHERE_CRITERIA") {
    let updatedWhereCriteria = [...state.whereCriteria];
    updatedWhereCriteria.length = 0;

    return {
      ...state,
      whereCriteria: [...updatedWhereCriteria],
    };
  }

  if (action.type === "DELETE_WHERE_CRITERIA") {
    const updatedWhereCriteria = [...state.whereCriteria];
    updatedWhereCriteria.splice(action.payload, 1);

    return {
      ...state,
      whereCriteria: [...updatedWhereCriteria],
    };
  }

  if (action.type === "SET_WHERE_CRITERIA") {
    const updatedWhereCriteria = [...state.whereCriteria];
    const existingWhereCriteriaIndex = updatedWhereCriteria.findIndex(
      (criteria) => criteria.key === action.payload.key
    );
    if (existingWhereCriteriaIndex !== -1) {
      updatedWhereCriteria[existingWhereCriteriaIndex] = action.payload;
    } else {
      updatedWhereCriteria.push(action.payload);
    }

    return {
      ...state,
      whereCriteria: [...updatedWhereCriteria],
    };
  }

  if (action.type === "SET_TEMP_WHERE_CRITERIA") {
    return {
      ...state,
      tempWhereCriteria: action.payload,
    };
  }

  if (action.type === "SET_SELECTOR_FILTERS") {
    return {
      ...state,
      selectorFilters: action.payload,
    };
  }

  if (action.type === "SET_CALCULATED_METRICS") {
    return {
      ...state,
      calculatedMetrics: action.payload,
    }
  }

  if (action.type === "SET_PERIOD") {
    const updatedPeriod = {...state.period, ...action.payload};
    return {
      ...state,
      period: updatedPeriod,
    }
  }

  return state;
}

export default function SelectorContextProvider({ children }) {

  const [selectorState, selectorDispatch] = useReducer(selectorReducer, {
    showCriteria: "",
    whereCriteria: [],
    tempWhereCriteria: { key: "", value: "" },
    selectorFilters: [],
    calculatedMetrics: [],
    period: {start: null, end: null, interval: null},
  });

  function setShowCriteriaHandler(showCriteria) {
    selectorDispatch({
      type: "SET_SHOW_CRITERIA",
      payload: showCriteria,
    });
  }

  function clearWhereCriteriaHandler() {
    selectorDispatch({
      type: "CLEAR_WHERE_CRITERIA",
    });
  }

  function deleteWhereCriteriaHandler(criteriaIndex) {
    selectorDispatch({
      type: "DELETE_WHERE_CRITERIA",
      payload: criteriaIndex,
    });
  }

  function setWhereCriteriaHandler(whereCriteria) {
    selectorDispatch({
      type: "SET_WHERE_CRITERIA",
      payload: whereCriteria,
    });
  }

  function setTempWhereCriteriaHandler(tempWhereCriteria) {
    selectorDispatch({
      type: "SET_TEMP_WHERE_CRITERIA",
      payload: tempWhereCriteria,
    });
  }

  function setSelectorFiltersHandler(selectorFilters) {
    selectorDispatch({
      type: "SET_SELECTOR_FILTERS",
      payload: selectorFilters,
    });
  }

  function setCalculatedMetricsHandler(calculatedMetrics) {
    selectorDispatch({
      type: "SET_CALCULATED_METRICS",
      payload: calculatedMetrics,
    })
  }

  function setPeriodHandler(period) {
    selectorDispatch({
      type: "SET_PERIOD",
      payload: period
    })
  }

  const ctxSelector = {
    showCriteria: selectorState.showCriteria,
    setShowCriteria: setShowCriteriaHandler,
    whereCriteria: selectorState.whereCriteria,
    setWhereCriteria: setWhereCriteriaHandler,
    clearWhereCriteria: clearWhereCriteriaHandler,
    deleteWhereCriteria: deleteWhereCriteriaHandler,
    tempWhereCriteria: selectorState.tempWhereCriteria,
    setTempWhereCriteria: setTempWhereCriteriaHandler,
    selectorFilters: selectorState.selectorFilters,
    setSelectorFilters: setSelectorFiltersHandler,
    calculatedMetrics: selectorState.calculatedMetrics,
    setCalculatedMetrics: setCalculatedMetricsHandler,
    period: selectorState.period,
    setPeriod: setPeriodHandler,
  };

  return (
    <SelectorContext.Provider value={ctxSelector}>
      {children}
    </SelectorContext.Provider>
  );
}
