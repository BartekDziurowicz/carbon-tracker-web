import { useEffect, useState } from "react";
import MetricsItem from "./MetricsItem/MetricsItem.jsx";
import $MetricsContent from "./MetricsContent.styles.jsx";

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

export default function MetricsContent() {
  const [availableMetrics, setAvailableMetrics] = useState([]);
  const [currentUsage, setCurrentUsage] = useState(0);

  useEffect(() => {
    // To DO strzal do bazy po company, w chwili obecnej mock
    const metrics = tempCompany;
    setAvailableMetrics(metrics);
  }, []);

  useEffect(() => {
    // To DO strzal do bazy po current usage dla company/tribe etc
    const usage = 90;
    setCurrentUsage(usage);
  }, []);

  return (
    <$MetricsContent>
      {availableMetrics.map((metric, index) => {
        return (
          <MetricsItem
            key={index}
            object={metric}
            currentUsage={currentUsage}
            index={index}
          />
        );
      })}
    </$MetricsContent>
  );
}
