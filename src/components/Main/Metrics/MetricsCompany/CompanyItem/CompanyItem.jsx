import { SiAwsorganizations } from "react-icons/si";
import { $CompanyItem } from "./CompanyItem.styles.jsx";

export default function CompanyItem({ company, currentUsage, index }) {
  let {
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
    const balance = parseFloat(((currentUsage/company.carbon_limit)*100).toFixed(2));
    const threshold = returnedThresholds.findIndex((element) => balance > element);
    return threshold;
  }

  return (
    <$CompanyItem threshold={carbonBalance(id)} index={index}>
      <header>
        <icon>
          <SiAwsorganizations />
        </icon>
        <name>{name} {location.country.name}</name>
      </header>
      <container>
        <areas>{areasCount(id)}</areas>
        <location>
        {street_number} {street} Str. {apartment_number !== null && "Apt. " + apartment_number}
        <br />
        {location.city}, {postal_code}
      </location>
      </container>

      <carbon> 
        <div>{carbon_limit}</div>
        <div>{currentUsage}</div>
        <div>{carbon_limit - currentUsage}</div>
      </carbon>
    </$CompanyItem>
  );
}
