import { useState } from "react";
import MetricsArea from "./MetricsArea/MetricsArea.jsx";
import MetricsContent from "./MetricsContent/MetricsContent.jsx";
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

  function contentDispatcher() {
    switch (currentStep) {
      case 0:
        return <MetricsContent />;
      case 1:
        return <MetricsArea />;
      case 2:
        return <div>2 Tribes</div>;
      case 3:
        return <div>3 Teams</div>;
      case 4:
        return <div>4 Employees</div>;
      default:
        return <div>Something went wrong...</div>
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
