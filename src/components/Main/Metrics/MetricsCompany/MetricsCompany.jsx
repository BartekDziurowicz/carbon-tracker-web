import { useEffect, useState } from "react";
import CompanyItem from "./CompanyItem/CompanyItem.jsx";
import $MetricsCompany from "./MetricsCompany.styles.jsx";

const tempCompany = [
  {
    id: 1,
    name: "ING Hubs Polska",
    postal_code: "12-123",
    street: "Zabrska",
    street_number: 17,
    apartment_number: 1,
    carbon_limit: 700.0,
    location: {
      id: 1,
      city: "Katowice",
      country: {
        id: 3,
        name: "Polska",
      },
    },
  },
  {
    id: 2,
    name: "ING Hubs Romania",
    postal_code: "12-124",
    street: "Kultury",
    street_number: 232,
    apartment_number: 32,
    carbon_limit: 750.0,
    location: {
      id: 3,
      city: "Warszawa",
      country: {
        id: 4,
        name: "Polska",
      },
    },
  },
  {
    id: 4,
    name: "ING Hubs Philipines",
    postal_code: "12-124",
    street: "Zeusa",
    street_number: 232,
    apartment_number: 32,
    carbon_limit: 100.0,
    location: {
      id: 3,
      city: "Roma",
      country: {
        id: 4,
        name: "Italy",
      },
    },
  },
];

export default function MetricsCompany() {
  const [availableCompanies, setAvailableCompanies] = useState([]);

  useEffect(() => {
    // To DO strzal do bazy po company, w chwili obecnej mock
    const companies = tempCompany;
    setAvailableCompanies(companies);
  }, []);

  const currentUsage = (id) => {
    // TODO api call to get numebr of areas where company.id = id
    // na razei mock, powinno byc jako useEffect
    // chyba jakis useEffect
    return 550;
  }

  return (
    <$MetricsCompany>
      {availableCompanies.map((company, index) => {
        return <CompanyItem key={index} company={company} currentUsage={550} index={index}/>;
      })}
    </$MetricsCompany>
  );
}
