import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import {
  $Carbon,
  $Content,
  $Descendants,
  $Head,
  $Icon,
  $MetricsItem,
  $Summary,
  $Title,
} from "./MetricsItem.styles.jsx";
import {
  MetricsContext,
  STEPS,
} from "../../../../../store/metrics-context.jsx";

const TOOLTIPS = {
  carbon: "Limit, current usage and balance of Carbon in kg",
  summary: "Carbon usage in %",
};

function descendantTooltipHandler(currentStep, role) {
  switch (currentStep) {
    case 0:
    case 1:
    case 2:
    case 3:
      return STEPS[currentStep + 1].stepName + "s";
    case 4:
      return role;
  }
}

export default function MetricsItem({ metric, index, stepInfoHandler }) {
  const { currentStep, stepHandler } = useContext(MetricsContext);
  const [currentUsage, setCurrentUsage] = useState(0);

  const { id, name, carbon_limit } = metric;
  const usage = ((currentUsage / carbon_limit) * 100).toFixed(2) + " %";
  const threshold = carbonBalance(id);

  useEffect(() => {
    // To DO strzal do bazy po current usage dla company/tribe etc
    const usage = 90;
    setCurrentUsage(usage);
  }, []);

  function descendantsCount(id) {
    // w zaleznosci co ma zwrocic czy areas, tribes... inne dla employee
    // TODO api call to get numebr of areas where company.id = id
    // na razei mock, powinno byc jako useEffect
    return 12;
  }

  function carbonBalance(id) {
    // TODO api call to get thresholds by id
    // meanwhile mock
    // threshold powinienb byc gdzies wyzej i moze w kontekscie albo storage
    const returnedThresholds = [200, 100, 90, 0];
    
    const balance = parseFloat(usage);
    const threshold = returnedThresholds.findIndex(
      (element) => balance > element
    );
    return threshold;
  }

  function stepValueAndStepInfoHandler() {
    stepInfoHandler(id, name);
    stepHandler();
  }

  return (
    <$MetricsItem
      $threshold={threshold}
      $index={index}
      onClick={stepValueAndStepInfoHandler}
    >
      <$Head>
        <$Icon $threshold={threshold}>{STEPS[currentStep].icon}</$Icon>
        <$Title $threshold={threshold}>
          {name} {metric.surname && metric.surname}
        </$Title>
      </$Head>
      <$Content>
        <$Descendants
          $threshold={threshold}
          data-tooltip-id={"descendant_tooltip_" + index}
          data-tooltip-content={descendantTooltipHandler(
            currentStep,
            metric.role && metric.role
          )}
          data-tooltip-delay-show={1000}
          data-tooltip-place={"left"}
        >
          <p>
            {currentStep < 4
              ? descendantsCount(id)
              : metric.role && metric.role.charAt(0)}
          </p>
          <Tooltip id={"descendant_tooltip_" + index} />
        </$Descendants>
        <$Summary
          $threshold={threshold}
          data-tooltip-id={"summary_tooltip_" + index}
          data-tooltip-content={TOOLTIPS.summary}
          data-tooltip-delay-show={1000}
          data-tooltip-place={"right"}
        >
          <p>{usage}</p>
          <Tooltip id={"summary_tooltip_" + index} />
        </$Summary>
      </$Content>

      <$Carbon
        $threshold={threshold}
        data-tooltip-id={"carbon_tooltip_" + index}
        data-tooltip-content={TOOLTIPS.carbon}
        data-tooltip-delay-show={1000}
        data-tooltip-place={"bottom"}
      >
        <div>{carbon_limit}</div>
        <div>{currentUsage}</div>
        <div>{carbon_limit - currentUsage}</div>
        <Tooltip id={"carbon_tooltip_" + index} />
      </$Carbon>
    </$MetricsItem>
  );
}
