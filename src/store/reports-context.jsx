import { createContext, useReducer } from "react";

export const ReportsContext = createContext({
    currentIndicator: "",
    setCurrentIndicator: () => {},
    indicators: [],
    setIndicators: () => {},
    countries: [],
    setCountries: () => {},
    period: "",
    setPeriod: () => {},
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

    return state;
}

export default function ReportsContextProvider({ children }) {

  const [reportsState, reportsDispatch] = useReducer(reportsReducer, {
    currentIndicator: "",
    indicators: [],
    countries: [],
    period: "",
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

  const ctxReports = {
    currentIndicator: reportsState.currentIndicator,
    setCurrentIndicator: setCurrentIndicatorHandler,
    indicators: reportsState.indicators,
    setIndicators: setIndicatorsHandler,
    countries: reportsState.countries,
    setCountries: setCountriesHandler,
    period: reportsState.period,
    setPeriod: setPeriodHandler,
  };

  return (
    <ReportsContext.Provider value={ctxReports}>
      {children}
    </ReportsContext.Provider>
  );
}

