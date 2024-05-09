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

  const areasCount = (id) => {
    // TODO api call to get numebr of areas where company.id = id
    // na razei mock, powinno byc jako useEffect
    return 12;
  }

  return (
    <$CompanyItem carbonLimit={carbon_limit} currentUsage={currentUsage} index={index}>
      <header>
        <icon>
          <SiAwsorganizations />
        </icon>
        <name>{name} </name>
      </header>

      {/* <country>{location.country.name} </country>
      <location>
        {street_number} {street} Str. {apartment_number !== null && <br />}
        {apartment_number !== null && "Apt. " + apartment_number}
        <br />
        {location.city}, {postal_code}
      </location>
      <areas>{getAreasCount(1)}</areas>*/}
      <carbon> 
        <div>{carbon_limit}</div>
        <div>{currentUsage}</div>
        <div>{carbon_limit - currentUsage}</div>
      </carbon>
    </$CompanyItem>
  );
}
