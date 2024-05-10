import { useEffect, useState } from "react";
import CompanyItem from "./CompanyItem/CompanyItem.jsx";
import $MetricsCompany from "./MetricsCompany.styles.jsx";

const tempCompany = [
  {
    id: 1,
    name: "ING Hubs",
    postal_code: "12-123",
    street: "Zabrska",
    street_number: 17,
    apartment_number: 1,
    carbon_limit: 100.0,
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
    id: 5,
    name: "ING Hubs",
    postal_code: "12-123",
    street: "Zabrska",
    street_number: 17,
    apartment_number: 1,
    carbon_limit: 100.0,
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
    name: "ING Hubs",
    postal_code: "12-124",
    street: "Kultury",
    street_number: 232,
    apartment_number: 32,
    carbon_limit: 95.0,
    location: {
      id: 3,
      city: "Warszawa",
      country: {
        id: 4,
        name: "Romania",
      },
    },
  },
  {
    id: 3,
    name: "ING Hubs",
    postal_code: "12-124",
    street: "Zeusa",
    street_number: 232,
    apartment_number: 32,
    carbon_limit: 50.0,
    location: {
      id: 3,
      city: "Roma",
      country: {
        id: 4,
        name: "Italy",
      },
    },
  },
  {
    id: 6,
    name: "ING Hubs",
    postal_code: "12-123",
    street: "Zabrska",
    street_number: 17,
    apartment_number: 1,
    carbon_limit: 100.0,
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
    id: 7,
    name: "ING Hubs",
    postal_code: "12-123",
    street: "Zabrska",
    street_number: 17,
    apartment_number: 1,
    carbon_limit: 1.0,
    location: {
      id: 1,
      city: "Katowice",
      country: {
        id: 3,
        name: "Polska",
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

  function currentUsage(id) {
    // TODO api call to get numebr of areas where company.id = id
    // na razei mock, powinno byc jako useEffect
    return 90;
  }

  return (
    <$MetricsCompany>
      {availableCompanies.map((company, index) => {
        return <CompanyItem key={index} company={company} currentUsage={currentUsage(company.id)} index={index}/>;
      })}
    </$MetricsCompany>
  );
}
