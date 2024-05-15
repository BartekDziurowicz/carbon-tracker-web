import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import {
  $Carbon,
  $Content,
  $Descendants,
  $Head,
  $Icon,
  $Info,
  $MetricsItem,
  $Title,
} from "./MetricsItem.styles.jsx";
import { MetricsContext, STEPS } from "../../../../../store/metrics-context.jsx";

const TOOLTIPS = {
  carbon: "Limit, current usage and balance of Carbon in kg",
};

function descendantTooltipHandler(currentStep, role) {
  switch (currentStep) {
    case 0:
    case 1:
    case 2:
    case 3:
      return STEPS[currentStep+1].stepName + "s";
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

  function infoHandler() {
    switch (currentStep) {
      case 0:
        const {
          postal_code,
          street,
          street_number,
          apartment_number,
          location,
        } = metric;
        return (
          <$Info>
            {location.country.name}
            <br />
            {street_number} {street} Str.{" "}
            {apartment_number !== null && "Apt. " + apartment_number}
            <br />
            {location.city}, {postal_code}
          </$Info>
        );
      case 1:
        return (
          <$Info>
            {metric.company ? (
              <>
                {metric.company.name} <br />
              </>
            ) : (
              "NOT FOUND"
            )}
          </$Info>
        );
      case 2:
        return (
          <$Info>
            {metric.area ? (
              <>
                {metric.area.company.name} - {metric.area.name}
              </>
            ) : (
              "NOT FOUND"
            )}
          </$Info>
        );
      case 3:
        return (
          <$Info>
            {metric.tribe ? (
              <>
                {metric.tribe.area.company.name} - {metric.tribe.area.name} - {metric.tribe.name}                
              </>
            ) : (
              "NOT FOUND"
            )}
          </$Info>
        );
      case 4:
        return (
          <$Info>
            {metric.team ? (
              <>
                {metric.team.tribe.area.company.name} - {metric.team.tribe.area.name} - {metric.team.tribe.name} - {metric.team.name}                
              </>
            ) : (
              "NOT FOUND"
            )}
          </$Info>
        );
    }
  }

  return (
    <$MetricsItem
      $threshold={carbonBalance(id)}
      $index={index}
      onClick={stepHandler}
    >
      <$Head>
        <$Icon $threshold={carbonBalance(id)}>{STEPS[currentStep].icon}</$Icon>
        <$Title $threshold={carbonBalance(id)}>{name} {metric.surname && metric.surname}</$Title>
      </$Head>
      <$Content>
        <$Descendants
          $threshold={carbonBalance(id)}
          data-tooltip-id={"descendant_tooltip_" + index}
          data-tooltip-content={descendantTooltipHandler(currentStep, metric.role && metric.role)}
          data-tooltip-delay-show={1000}
          data-tooltip-place={"left"}
        >
          <p>{currentStep < 4 ? descendantsCount(id) : metric.role && metric.role.charAt(0)}</p>
          <Tooltip id={"descendant_tooltip_" + index} />
        </$Descendants>
        {infoHandler()}
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
