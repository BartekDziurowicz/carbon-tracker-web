import { createContext, useReducer } from "react";

export const ReportsContext = createContext({
    indicator: "",
    setIndicator: () => {},
    countries: [],
    setCountries: () => {},
    period: "",
    setPeriod: () => {},
  });

function reportsReducer(state, action) {
    if (action.type === "SET_INDICATOR") {
      return {
        ...state,
        indicator: action.payload,
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
    indicator: "",
    countries: [],
    period: "",
  });

  function setIndicatorHandler(indicator) {
    reportsDispatch({
      type: "SET_INDICATOR",
      payload: indicator,
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
    indicator: reportsState.indicator,
    setIndicator: setIndicatorHandler,
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

