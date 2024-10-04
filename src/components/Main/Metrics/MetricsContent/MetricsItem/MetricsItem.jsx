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
  $ErrorLabel,
} from "./MetricsItem.styles.jsx";
import {
  MetricsContext,
  STEPS,
} from "../../../../../store/metrics-context.jsx";
import { apiCallToGetEntityChildsCapacity } from "../../../../../api/Api.jsx";

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
      return role ? role.name : "";
  }
}

export default function MetricsItem({ metric, index, stepInfoHandler }) {
  const { currentStep, stepHandler, thresholds } = useContext(MetricsContext);
  const [currentUsage, setCurrentUsage] = useState(0);
  const [childsCapacityAndCarbon, setChildsCapacityAndCarbon] = useState({childsCapacity: 0, carbonFootprint: 0});
  const [error, setError] = useState(null);

  const { id, name, carbonLimit, corporateKey } = metric;
  const usage = ((currentUsage / carbonLimit) * 100).toFixed(2) + " %";
  const threshold = carbonBalance();

  useEffect(() => {
    setError(null);

    async function fetchData() {
      try {
        const childsCapacity = await apiCallToGetEntityChildsCapacity(
          STEPS[currentStep].stepName.toLowerCase(),
          metric.id,
          metric.name
        ).catch(error => {
          setChildsCapacityAndCarbon({...childsCapacityAndCarbon, childsCapacity: "err"});
          throw error;
        });
        setChildsCapacityAndCarbon({childsCapacity: childsCapacity})
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, [metric]);

  useEffect(() => {
    // TO DO strzal do bazy po current usage dla company/tribe etc
    const usage = 90;
    setCurrentUsage(usage);
  }, []);

  function roleAsDescendant() {
    return metric.role && metric.role.name.charAt(0);
  }

  function carbonBalance() {
    const balance = parseFloat(usage);

    const threshold = thresholds.findIndex((element) => balance > element);

    return threshold;
  }

  function stepValueAndStepInfoHandler() {
    stepInfoHandler(id, corporateKey ? corporateKey : name);
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
          <p>{currentStep < 4 ? childsCapacityAndCarbon.childsCapacity : roleAsDescendant()}</p>
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
        <div>{carbonLimit}</div>
        <div>{currentUsage}</div>
        <div>{carbonLimit - currentUsage}</div>
        <Tooltip id={"carbon_tooltip_" + index} />
      </$Carbon>
      {error !== null ? <$ErrorLabel>{error.message}</$ErrorLabel> : null}
    </$MetricsItem>
  );
}
