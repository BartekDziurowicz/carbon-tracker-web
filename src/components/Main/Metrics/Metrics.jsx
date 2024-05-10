import { useState } from "react";
import MetricsStepper from "./MetricsStepper/MetricsStepper.jsx";
import MetricsCompany from "./MetricsCompany/MetricsCompany.jsx";
import $Metrics from "./Metrics.styles.jsx";
import { MetricsContext, STEPS } from "../../../store/metrics-context.jsx";

export default function Metrics() {
  const [currentStep, setCurrentStep] = useState(0);

  function stepHandler() {
    setCurrentStep((prevStep) =>
      prevStep === STEPS.length ? prevStep : prevStep + 1
    );
  }

  const ctxMetrics = {
    currentStep: currentStep,
    stepHandler: stepHandler,
  };

  return (
    <MetricsContext.Provider value={ctxMetrics}>
      <$Metrics>
        <MetricsStepper />
        <MetricsCompany />
      </$Metrics>
    </MetricsContext.Provider>
  );
}
