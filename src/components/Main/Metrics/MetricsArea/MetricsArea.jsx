import { useEffect, useState } from "react";
import AreaItem from "./AreaItem/AreaItem.jsx";
import { $MetricsArea } from "./MetricsArea.styles.jsx";

const tempArea = [
  {
    id: 1,
    name: "Content and processing",
    carbon_limit: 60,
    company: {
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
  },
  {
    id: 2,
    name: "Content",
    carbon_limit: 42,
    company: {
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
  },
  {
    id: 3,
    name: "Processing",
    carbon_limit: 33.0,
    company: {
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
  },
  {
    id: 4,
    name: "Interaction",
    carbon_limit: 10,
    company: {
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
  },
];

export default function MetricsArea() {
  const [availableAreas, setAvailableAreas] = useState([]);

  useEffect(() => {
    // To DO strzal do bazy po area, w chwili obecnej mock
    const areas = tempArea;
    setAvailableAreas(areas);
  }, []);

  function currentUsage(id) {
    // TODO api call to get numebr of areas where company.id = id
    // na razei mock, powinno byc jako useEffect
    return 40;
  }

  return (
    <$MetricsArea>
      {availableAreas.map((area, index) => {
        return (
          <AreaItem
            key={index}
            area={area}
            currentUsage={currentUsage(area.id)}
            index={index}
          />
        );
      })}
    </$MetricsArea>
  );
}
