import Step from "./Step/Step.jsx";
import { $MetricsStepper } from "./MetricsStepper.styles.jsx";
import { STEPS } from "../../../../store/metrics-context.jsx";

export default function MetricsStepper({ currentStep }) {
  return (
      <$MetricsStepper>
        {STEPS.map((step, index) => (
          <Step
            key={index}
            stepName={step.id}
            step={currentStep}
            index={index}
          >
            {step.icon}
          </Step>
        ))}
      </$MetricsStepper>
  );
}
