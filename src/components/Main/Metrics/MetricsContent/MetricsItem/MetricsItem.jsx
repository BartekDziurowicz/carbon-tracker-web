import { useContext } from "react";
import { Tooltip } from "react-tooltip";
import { SiAwsorganizations } from "react-icons/si";
import {
  $Carbon,
  $Content,
  $Descendants,
  $Head,
  $Icon,
  $Location,
  $MetricsItem,
  $Title,
} from "./MetricsItem.styles.jsx";
import { MetricsContext } from "../../../../../store/metrics-context.jsx";

const TOOLTIPS = {
  descendants: "Number of Descendants", //descendant zalezny od rodzaju potomka, zmienna
  carbon: "Limit, current usage and balance of Carbon in kg",
};

export default function MetricsItem({ object, currentUsage, index }) {
  const { stepHandler } = useContext(MetricsContext);

  //zależne od typu obiektu. moze props: type ? i useReducer w zaleznosci co ma zwrócic -> dla comany co innego niz area/tribe/team/employee

  const {
    id,
    name,
    postal_code,
    street,
    street_number,
    apartment_number,
    carbon_limit,
    location,
  } = object;

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
        <$Icon $threshold={carbonBalance(id)}>
          <SiAwsorganizations />
        </$Icon>
        <$Title $threshold={carbonBalance(id)}>
          {name} {location.country.name}
        </$Title>
      </$Head>
      <$Content>
        <$Descendants
          $threshold={carbonBalance(id)}
          data-tooltip-id={"descendant_tooltip_" + index}
          data-tooltip-content={TOOLTIPS.descendants}
          data-tooltip-delay-show={1000}
          data-tooltip-place={"left"}
        >
          <p>{descendantsCount(id)}</p>7
          <Tooltip id={"descendant_tooltip_" + index} />
        </$Descendants>
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
    </$MetricsItem>
  );
}
