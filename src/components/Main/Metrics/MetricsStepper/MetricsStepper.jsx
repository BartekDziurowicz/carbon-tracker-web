import { useState } from "react";
import Step from "./Step/Step.jsx";
import { CiUser } from "react-icons/ci";
import { GiOrganigram } from "react-icons/gi";
import { SiAwsorganizations } from "react-icons/si";
import { SlOrganization } from "react-icons/sl";
import { VscOrganization } from "react-icons/vsc";
import { $MetricsStepper } from "./MetricsStepper.styles.jsx";

const STEPS = [
  { id: "Company", icon: <SiAwsorganizations /> },
  { id: "Area", icon: <SlOrganization /> },
  { id: "Tribe", icon: <GiOrganigram /> },
  { id: "Team", icon: <VscOrganization /> },
  { id: "Employee", icon: <CiUser /> },
];

export default function MetricsStepper() {
  const [currentStep, setCurrentStep] = useState(0);

  function stepHandler() {
    setCurrentStep(prevStep => prevStep === STEPS.length ? prevStep : prevStep + 1);
  }

  return (
    <>
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
      <button onClick={stepHandler}>next</button>
    </>
  );
}
