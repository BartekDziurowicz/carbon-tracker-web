import { $Step } from "./Step.styles.jsx";

export default function Step({ index, step, stepName, children }) {

  return (
    <$Step $index={index} step={step}>
      <div>{children}</div>
      {stepName}
    </$Step>
  );
}
