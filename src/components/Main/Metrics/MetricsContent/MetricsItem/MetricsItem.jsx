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

export default function MetricsItem({ metric, index }) {
  const { currentStep, stepHandler } = useContext(MetricsContext);
  const [currentUsage, setCurrentUsage] = useState(0);

  const { id, name, carbon_limit } = metric;

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
    const returnedThresholds = [200, 100, 90, 0];
    const balance = parseFloat(
      ((currentUsage / carbon_limit) * 100).toFixed(2)
    );
    const threshold = returnedThresholds.findIndex(
      (element) => balance > element
    );
    return threshold;
  }

  return (
    <$MetricsItem
      $threshold={carbonBalance(id)}
      $index={index}
      onClick={stepHandler}
    >
      <$Head>
        <$Icon $threshold={carbonBalance(id)}>{STEPS[currentStep].icon}</$Icon>
        <$Title $threshold={carbonBalance(id)}>
          {name} {metric.surname && metric.surname}
        </$Title>
      </$Head>
      <$Content>
        <$Descendants
          $threshold={carbonBalance(id)}
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
          $threshold={carbonBalance(id)}
          data-tooltip-id={"summary_tooltip_" + index}
          data-tooltip-content={TOOLTIPS.summary}
          data-tooltip-delay-show={1000}
          data-tooltip-place={"right"}
        >
          <p>120%</p>
          <Tooltip id={"summary_tooltip_" + index} />
        </$Summary>
      </$Content>

      <$Carbon
        $threshold={carbonBalance(id)}
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
