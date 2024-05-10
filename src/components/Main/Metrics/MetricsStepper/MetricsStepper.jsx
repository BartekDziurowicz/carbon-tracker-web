import { useContext } from "react";
import Step from "./Step/Step.jsx";
import { $MetricsStepper } from "./MetricsStepper.styles.jsx";
import { MetricsContext, STEPS } from "../../../../store/metrics-context.jsx";

export default function MetricsStepper() {
  const { currentStep } = useContext(MetricsContext);

  return (
    <$MetricsStepper>
      {STEPS.map((step, index) => (
        <Step key={index} stepName={step.id} step={currentStep} index={index}>
          {step.icon}
        </Step>
      ))}
    </$MetricsStepper>
  );
}
