import { useState } from "react";
import MetricsContent from "./MetricsContent/MetricsContent.jsx";
import MetricsEmployee from "./MetricsEmployee/MetricsEmployee.jsx";
import MetricsStepper from "./MetricsStepper/MetricsStepper.jsx";
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

  function contentDispatcher() {
    switch (currentStep) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        return <MetricsContent />;
      case 5:
        return <MetricsEmployee />
      default:
        return <>Index out of range</>
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
