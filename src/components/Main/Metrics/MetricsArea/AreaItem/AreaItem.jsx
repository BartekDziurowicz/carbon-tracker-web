import { useContext } from "react";
import { Tooltip } from "react-tooltip";
import { SlOrganization } from "react-icons/sl";
import {
  $Carbon,
  $AreaItem,
  $Content,
  $Head,
  $Icon,
  $Location,
  $Title,
  $Tribes,
} from "./AreaItem.styles.jsx";
import { MetricsContext } from "../../../../../store/metrics-context.jsx";

const TOOLTIPS = {
  areas: "Number of Tribes",
  carbon: "Limit, current usage and balance of Carbon in kg",
};

export default function AreaItem({ area, currentUsage, index }) {
  const { stepHandler } = useContext(MetricsContext);

  const { id, name, carbon_limit, company } = area;

  function tribesCount(id) {
    // TODO api call to get numebr of areas where company.id = id
    // na razei mock, powinno byc jako useEffect
    return 11;
  }

  function carbonBalance(id) {
    // TODO api call to getthresholds by id and
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
    <$AreaItem
      $threshold={carbonBalance(id)}
      $index={index}
      onClick={stepHandler}
    >
      <$Head>
        <$Icon $threshold={carbonBalance(id)}>
          <SlOrganization />
        </$Icon>
        <$Title $threshold={carbonBalance(id)}>{name}</$Title>
      </$Head>

      <$Content>
        <$Tribes
          $threshold={carbonBalance(id)}
          data-tooltip-id={"descendant_tooltip_" + index}
          data-tooltip-content={TOOLTIPS.areas}
          data-tooltip-delay-show={1000}
          data-tooltip-place={"left"}
        >
          <p>{tribesCount(id)}</p>
          <Tooltip id={"descendant_tooltip_" + index} />
        </$Tribes>
        <$Location>
          {company.name}<br />
          {company.location.country.name}
        </$Location>
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
    </$AreaItem>
  );
}
