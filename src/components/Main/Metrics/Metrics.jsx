import { useState, Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import MetricsContent from "./MetricsContent/MetricsContent.jsx";
import MetricsEmployee from "./MetricsEmployee/MetricsEmployee.jsx";
import MetricsStepper from "./MetricsStepper/MetricsStepper.jsx";
import $Metrics, { $Fallback } from "./Metrics.styles.jsx";
import { MetricsContext, STEPS } from "../../../store/metrics-context.jsx";
import { apiCallToGetCarbonThresholds } from "../../../api/Api.jsx";
import { appgreen } from "../../../utils/colors.styles.jsx";

export default function Metrics() {
  const { thresholds } = useLoaderData();

  const [currentStep, setCurrentStep] = useState(() => {
    let stepItemInfo = JSON.parse(sessionStorage.getItem("stepItemInfo"));
    if (stepItemInfo === undefined || stepItemInfo === null) {
      return 0;
    } else {
      return stepItemInfo.length;
    }
  });

  function stepHandler(stepIndex) {
    if (stepIndex >= 0) {
      setCurrentStep((_prevStep) => stepIndex);
    } else {
      setCurrentStep((_prevStep) =>
        _prevStep === STEPS.length ? _prevStep : _prevStep + 1
      );
    }
  }

  function contentDispatcher() {
    switch (currentStep) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        return <MetricsContent />;
      case 5:
        return <MetricsEmployee />;
      default:
        console.log("Index out of range.");
    }
  }

  return (
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
      <Await resolve={thresholds}>
        {(resolvedThresholds) => {
          const ctxMetrics = {
            currentStep,
            stepHandler,
            thresholds: resolvedThresholds,
          };

          return (
            <MetricsContext.Provider value={ctxMetrics}>
              <$Metrics>
                <MetricsStepper />
                {contentDispatcher()}
              </$Metrics>
            </MetricsContext.Provider>
          );
        }}
      </Await>
    </Suspense>
  );
}

async function loader() {
  try {
    const thresholdsObjects = await apiCallToGetCarbonThresholds();
    const thresholdsValues = await thresholdsObjects
      .sort((a, b) => b.threshold - a.threshold)
      .map((object) => object.threshold);
    return thresholdsValues;
  } catch (error) {
    console.log(error);
    //TODO
  }
}

export function thresholdsLoader() {
  return defer({
    thresholds: loader(),
  });
}
