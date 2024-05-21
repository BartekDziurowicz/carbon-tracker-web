import { useContext } from "react";
import { MetricsContext } from "../../../../../store/metrics-context.jsx";
import { $Step } from "./Step.styles.jsx";

export default function Step({ index, step, stepName, children }) {
  const { stepHandler } = useContext(MetricsContext);

  let stepItemInfo = JSON.parse(sessionStorage.getItem("stepItemInfo"));

  function sessionStorageStepHandler() {
    if (stepItemInfo !== undefined && stepItemInfo !== null) {
      stepItemInfo.splice(index);
      sessionStorage.setItem("stepItemInfo", JSON.stringify(stepItemInfo));
    }
  }

  function getItemName() {
    if (stepItemInfo !== undefined && stepItemInfo !== null) {
      if (stepItemInfo[index] !== undefined && stepItemInfo[index] !== null) {
        return stepItemInfo[index].itemName;
      }
    }
  }

  function stepValueAndStepInfoHandler(itemIndex) {
    sessionStorageStepHandler();
    stepHandler(itemIndex);
  }

  return (
    <$Step $index={index} step={step} onClick={index < step ? () => stepValueAndStepInfoHandler(index) : () => {}}>
      <div>{children}</div>
      {stepName}<br /> {getItemName()}
    </$Step>
  );
}
