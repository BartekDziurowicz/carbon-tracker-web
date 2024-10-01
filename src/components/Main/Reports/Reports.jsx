import { useContext, useEffect, Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { BeatLoader } from "react-spinners";
import { $Reports, $Fallback, $Children, $Message } from "./Reports.styles.jsx";
import ReportsForm from "./ReportsForm/ReportsForm.jsx";
import Countries from "./Countries/Countries.jsx";
import Documents from "./Documents/Documents.jsx";
import InfoLabel from "../InfoLabel/InfoLabel.jsx";
import {
  apiCallToGetIndicatorValues,
  apiCallToGetFilterValues,
} from "../../../api/Api";
import { ReportsContext } from "../../../store/reports-context";
import { appgreen } from "../../../utils/colors.styles.jsx";

export default function Reports() {
  const { indicators, countries } = useLoaderData();

  const { setIndicators, setCountries, isOpen, calculatedIndicator } =
    useContext(ReportsContext);

  useEffect(() => {
    async function resolveIndicators() {
      await indicators.then((resolved) => setIndicators(resolved));
    }

    resolveIndicators();
  }, [indicators]);

  useEffect(() => {
    async function resolveCountries() {
      await countries.then((resolved) => setCountries(resolved));
    }

    resolveCountries();
  }, [countries]);

  return (
    <$Reports>
      <Suspense
        fallback={
          <$Fallback>
            <BeatLoader
              color={appgreen}
              loading={true}
              size={35}
              speedMultiplier={0.75}
              aria-label="Loading Spinner"
            />
          </$Fallback>
        }
      >
        <Await resolve={indicators}>
          {() => {
            return <ReportsForm />;
          }}
        </Await>
      </Suspense>
      <Suspense
        fallback={
          <$Fallback>
            <BeatLoader
              color={appgreen}
              loading={true}
              size={35}
              speedMultiplier={0.75}
              aria-label="Loading Spinner"
            />
          </$Fallback>
        }
      >
        <Await resolve={countries}>
          {() => {
            return (
              <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="dropdown"
                unmountOnExit
              >
                <$Children className="dropdown">
                  <Countries />
                </$Children>
              </CSSTransition>
            );
          }}
        </Await>
      </Suspense>
      {calculatedIndicator.length === 0 ? <InfoLabel /> : <Documents />}  
    </$Reports>
  );
}

async function indicatorsLoader() {
  const resData = await apiCallToGetIndicatorValues();

  return resData;
}

async function countriesLoader() {
  const resData = await apiCallToGetFilterValues("country");

  return resData;
}

export function reportsLoader() {
  return defer({
    indicators: indicatorsLoader(),
    countries: countriesLoader(),
  });
}
