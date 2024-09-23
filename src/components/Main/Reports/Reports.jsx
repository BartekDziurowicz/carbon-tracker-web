import { useContext, useEffect, Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { $Reports, $Fallback } from "./Reports.styles.jsx";
import ReportsForm from "./ReportsForm/ReportsForm.jsx";
import { apiCallToGetIndicatorValues } from "../../../api/Api";
import { ReportsContext } from "../../../store/reports-context";
import { appgreen } from "../../../utils/colors.styles.jsx";

export default function Reports() {
  const { indicators } = useLoaderData();

  const { setIndicators } = useContext(ReportsContext);

  useEffect(() => {
    async function resolveIndicators() {
      await indicators.then((resolved) => setIndicators(resolved));
    }

    resolveIndicators();
  }, [indicators]);

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
            return (
              <>
                <ReportsForm>my form</ReportsForm>
              </>
            );
          }}
        </Await>
      </Suspense>
      <h1>REPORTS</h1>
    </$Reports>
  );
}

async function loader() {
  const resData = await apiCallToGetIndicatorValues();

  return resData;
}

export function indicatorsLoader() {
  return defer({
    indicators: loader(),
  });
}
