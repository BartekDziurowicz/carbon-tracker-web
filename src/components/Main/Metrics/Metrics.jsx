import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MetricsContent from "./MetricsContent/MetricsContent.jsx";
import MetricsEmployee from "./MetricsEmployee/MetricsEmployee.jsx";
import MetricsStepper from "./MetricsStepper/MetricsStepper.jsx";
import $Metrics from "./Metrics.styles.jsx";
import { MetricsContext, STEPS } from "../../../store/metrics-context.jsx";
import { apiCallToGetCarbonThresholds } from "../../../api/Api.jsx";

export default function Metrics() {
  const thresholds = useLoaderData();
  
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

  const ctxMetrics = {
    currentStep,
    stepHandler,
    thresholds,
  };

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
    <MetricsContext.Provider value={ctxMetrics}>
      <$Metrics>
        <MetricsStepper />
        {contentDispatcher()}
      </$Metrics>
    </MetricsContext.Provider>
  );
}

export async function thresholdsLoader() {
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
