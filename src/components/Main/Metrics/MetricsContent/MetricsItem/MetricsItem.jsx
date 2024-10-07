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
import {
  apiCallToGetEntityChildsCapacity,
  apiCallToGetTotalCarbonSum,
} from "../../../../../api/Api.jsx";

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
  const [childsCapacityAndCarbon, setChildsCapacityAndCarbon] = useState({
    childsCapacity: 0,
    currentFootprint: 0,
  });
  const [error, setError] = useState(null);

  const { id, name, carbonLimit, corporateKey } = metric;
  const usage =
    ((childsCapacityAndCarbon.currentFootprint / carbonLimit) * 100).toFixed(
      2
    ) + " %";
  const threshold = carbonBalance();

  useEffect(() => {
    setError(null);

    async function fetchData() {
      try {
        const childsCapacity = await apiCallToGetEntityChildsCapacity(
          STEPS[currentStep].stepName.toLowerCase(),
          metric.id,
          metric.name
        ).catch((error) => {
          setChildsCapacityAndCarbon({
            ...childsCapacityAndCarbon,
            childsCapacity: "err",
          });
          throw error;
        });

        const carbonFootprint = await apiCallToGetTotalCarbonSum(
          STEPS[currentStep].stepName.toLowerCase(),
          metric.id
        ).catch((error) => {
          setChildsCapacityAndCarbon({
            ...childsCapacityAndCarbon,
            currentFootprint: -1,
          });
          throw error;
        });

        setChildsCapacityAndCarbon({
          childsCapacity: childsCapacity,
          currentFootprint: carbonFootprint[0],
        });
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, [metric]);

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
          <p>
            {currentStep < 4
              ? childsCapacityAndCarbon.childsCapacity
              : roleAsDescendant()}
          </p>
          <Tooltip id={"descendant_tooltip_" + index} />
        </$Descendants>
        <$Summary
          $threshold={threshold}
          data-tooltip-id={"summary_tooltip_" + index}
          data-tooltip-content={"Carbon usage in %"}
          data-tooltip-delay-show={1000}
          data-tooltip-place={"right"}
        >
          <p>{usage}</p>
          <Tooltip id={"summary_tooltip_" + index} />
        </$Summary>
      </$Content>

      <$Carbon $threshold={threshold}>
        <a
          data-tooltip-id={"carbon_tooltip_limit" + index}
          data-tooltip-content={"Carbon limit [kg]"}
          data-tooltip-delay-show={1000}
          data-tooltip-place={"bottom"}
        >
          {carbonLimit}
          <Tooltip id={"carbon_tooltip_limit" + index} />
        </a>
        <a
          data-tooltip-id={"carbon_tooltip_current" + index}
          data-tooltip-content={
            "Current carbon footprint [" +
            childsCapacityAndCarbon.currentFootprint +
            " kg]"
          }
          data-tooltip-delay-show={1000}
          data-tooltip-place={"bottom"}
        >
          {Number(childsCapacityAndCarbon.currentFootprint).toFixed(3)}
          <Tooltip id={"carbon_tooltip_current" + index} />
        </a>
        <a
          data-tooltip-id={"carbon_tooltip_bilance" + index}
          data-tooltip-content={
            "Carbon footprint bilance [" +
            (carbonLimit - childsCapacityAndCarbon.currentFootprint) +
            " kg]"
          }
          data-tooltip-delay-show={1000}
          data-tooltip-place={"bottom"}
        >
          {(carbonLimit - childsCapacityAndCarbon.currentFootprint).toFixed(3)}
          <Tooltip id={"carbon_tooltip_bilance" + index} />
        </a>
      </$Carbon>
      {error !== null ? <$ErrorLabel>{error.message}</$ErrorLabel> : null}
    </$MetricsItem>
  );
}
