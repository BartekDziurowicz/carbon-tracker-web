import { useContext } from "react";
import { Tooltip } from "react-tooltip";
import { SiAwsorganizations } from "react-icons/si";
import { $Areas, $Carbon, $CompanyItem, $Content, $Head, $Icon, $Location, $Title } from "./CompanyItem.styles.jsx";
import { MetricsContext } from "../../../../../store/metrics-context.jsx";

const TOOLTIPS = {
  areas: "Number of Areas",
  carbon: "Limit, current usage and balance of Carbon in kg",
};

export default function CompanyItem({ company, currentUsage, index }) {
  const { stepHandler } = useContext(MetricsContext);

  const {
    id,
    name,
    postal_code,
    street,
    street_number,
    apartment_number,
    carbon_limit,
    location,
  } = company;

  function areasCount(id) {
    // TODO api call to get numebr of areas where company.id = id
    // na razei mock, powinno byc jako useEffect
    return 12;
  }

  function carbonBalance(id) {
    // TODO api call to get thresholds by id
    // meanwhile mock
    const returnedThresholds = [200, 100, 90, 0];
    const balance = parseFloat(
      ((currentUsage / company.carbon_limit) * 100).toFixed(2)
    );
    const threshold = returnedThresholds.findIndex(
      (element) => balance > element
    );
    return threshold;
  }

  return (
    <$CompanyItem
      $threshold={carbonBalance(id)}
      $index={index}
      onClick={stepHandler}
    >
      <$Head >
        <$Icon $threshold={carbonBalance(id)}>
          <SiAwsorganizations />
        </$Icon>
        <$Title>
          {name} {location.country.name}
        </$Title>
      </$Head>
      <$Content>
        <$Areas
          $threshold={carbonBalance(id)}
          data-tooltip-id={"descendant_tooltip_" + index}
          data-tooltip-content={TOOLTIPS.areas}
          data-tooltip-delay-show={1000}
          data-tooltip-place={"left"}
        >
          <p>{areasCount(id)}</p>
          <Tooltip id={"descendant_tooltip_" + index} />
        </$Areas>
        <$Location>
          {street_number} {street} Str.{" "}
          {apartment_number !== null && "Apt. " + apartment_number}
          <br />
          {location.city}, {postal_code}
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
    </$CompanyItem>
  );
}
