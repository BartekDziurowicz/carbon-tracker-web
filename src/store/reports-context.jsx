import { createContext, useReducer } from "react";

export const ReportsContext = createContext({
    currentIndicator: "",
    setCurrentIndicator: () => {},
    calculatedIndicator: [],
    setCalculatedIndicator: () => {},
    indicators: [],
    setIndicators: () => {},
    countries: [],
    setCountries: () => {},
    period: {},
    setPeriod: () => {},
    isOpen: false,
    setIsOpen: () => {},
  });

function reportsReducer(state, action) {
    if (action.type === "SET_CURRENT_INDICATOR") {
      return {
        ...state,
        currentIndicator: action.payload,
      };
    }

    if (action.type === "SET_INDICATORS") {
      return {
        ...state,
        indicators: action.payload,
      };
    }

    if (action.type === "SET_CALCULATED_INDICATOR") {
      return {
        ...state,
        calculatedIndicator: action.payload,
      };
    }

    if (action.type === "SET_COUNTRIES") {
      return {
        ...state,
        countries: action.payload,
      };
    }

    if (action.type === "SET_PERIOD") {
      return {
        ...state,
        period: action.payload,
      };
    }

    if (action.type === "SET_IS_OPEN") {
      return {
        ...state,
        isOpen: action.payload,
      };
    }

    return state;
}

export default function ReportsContextProvider({ children }) {

  const [reportsState, reportsDispatch] = useReducer(reportsReducer, {
    currentIndicator: "",
    indicators: [],
    calculatedIndicator: [],
    countries: [],
    period: {},
    isOpen: false,
  });

  function setCurrentIndicatorHandler(indicator) {
    reportsDispatch({
      type: "SET_CURRENT_INDICATOR",
      payload: indicator,
    });
  }

  function setIndicatorsHandler(indicators) {
    reportsDispatch({
      type: "SET_INDICATORS",
      payload: indicators,
    });
  }

  function setCalculatedIndicatorHandler(calculatedIndicator) {
    reportsDispatch({
      type: "SET_CALCULATED_INDICATOR",
      payload: calculatedIndicator,
    });
  }

  function setCountriesHandler(countries) {
    reportsDispatch({
      type: "SET_COUNTRIES",
      payload: countries,
    });
  }

  function setPeriodHandler(period) {
    reportsDispatch({
      type: "SET_PERIOD",
      payload: period,
    });
  }

  function setIsOpenHandler(isOpen) {
    reportsDispatch({
      type: "SET_IS_OPEN",
      payload: isOpen,
    });
  }

  const ctxReports = {
    currentIndicator: reportsState.currentIndicator,
    setCurrentIndicator: setCurrentIndicatorHandler,
    indicators: reportsState.indicators,
    setIndicators: setIndicatorsHandler,
    calculatedIndicator: reportsState.calculatedIndicator,
    setCalculatedIndicator: setCalculatedIndicatorHandler,
    countries: reportsState.countries,
    setCountries: setCountriesHandler,
    period: reportsState.period,
    setPeriod: setPeriodHandler,
    isOpen: reportsState.isOpen,
    setIsOpen: setIsOpenHandler,
  };

  return (
    <ReportsContext.Provider value={ctxReports}>
      {children}
    </ReportsContext.Provider>
  );
}

