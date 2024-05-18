export const Companies = [
  {
    id: 1,
    name: "ING Hubs Polska",
    carbon_limit: 100.0,
  },
  {
    id: 5,
    name: "ING Hubs Polska",
    carbon_limit: 100.0,
  },
  {
    id: 2,
    name: "ING Hubs Romania",
    carbon_limit: 95.0,
  },
  {
    id: 3,
    name: "ING Hubs Italy",
    carbon_limit: 50.0,
  },
  {
    id: 6,
    name: "ING Hubs Polska",
    carbon_limit: 100.0,
  },
  {
    id: 7,
    name: "ING Hubs Philipines",
    carbon_limit: 1.0,
  },
];

export const Areas = [
  {
    id: 1,
    name: "Content and processing",
    carbon_limit: 60,
  },
  {
    id: 2,
    name: "Content",
    carbon_limit: 42,
  },
  {
    id: 3,
    name: "Processing",
    carbon_limit: 33.0,
  },
  {
    id: 4,
    name: "Interaction",
    carbon_limit: 10,
  },
];

export const Tribes = [
  {
    id: 1,
    name: "Lorem",
    carbon_limit: 60,
  },
  {
    id: 2,
    name: "Ipsum",
    carbon_limit: 60,
  },
  {
    id: 3,
    name: "Dolor",
    carbon_limit: 60,
  },
  {
    id: 4,
    name: "Sit Amet",
    carbon_limit: 60,
  },
];

export const Teams = [
  {
    id: 1,
    name: "LoremTeam",
    carbon_limit: 15,
  },
  {
    id: 1,
    name: "IpsumTeam",
    carbon_limit: 15,
  },
  {
    id: 1,
    name: "DolorTeam",
    carbon_limit: 15,
  },
  {
    id: 1,
    name: "SitAmet Team",
    carbon_limit: 15,
  },
];

export const Employees = [
  {
    id: 3,
    corporate_key: "Bartek",
    email: "email@mail.com",
    name: "Bartosz",
    surname: "Dziurowicz",
    role: "Developer",
    carbon_limit: 0.4,
    location: {
      id: 1,
      city: "Katowice",
      country: {
        id: 1,
        name: "Poland",
      },
    },
    team: {
      id: 1,
      name: "GDMSSync",
      carbon_limit: 1.4,
      tribe: {
        id: 1,
        name: "Content",
        carbon_limit: 2.4,
        area: {
          id: 1,
          name: "Interaction",
          carbon_limit: 3.4,
          company: {
            id: 1,
            name: "ING Hubs",
            postal_code: "12-345",
            street: "streetName",
            street_number: 1,
            apartment_number: 2,
            carbon_limit: 5.4,
            location: {
              id: 1,
              city: "Katowice",
              country: {
                id: 1,
                name: "Poland",
              },
            },
          },
        },
      },
    },
    office_id: 1,
    workstation_id: 2,
  },
];

export const Office = {
  id: 1,
  name: "KatowiceOffice",
  postal_code: "23-456",
  street: "Zabrska",
  street_number: 2,
  apartment_number: 3,
  location: {
    id: 1,
    city: "Katowice",
    country: {
      id: 1,
      name: "Poland",
    },
  },
};

export const Workstation = {
  id: 1,
  model: "workstation5",
  name: "ING model1",
  processor: {
    id: 1,
    name: "AMD Ryzen 7 3750H with Radeon Vega Mobile Gfx",
    cores: 4,
    threads: 8,
    tdp: 35,
    clock: 2.3,
    identifier: "178BFBFF00810F81",
    manufacturer: {
      id: 1,
      name: "Intel",
    },
  },
  producer: {
    id: 1,
    name: "HP",
  },
  system: {
    id: 1,
    bitness: 64,
    family: "Windows",
    version: "10",
    vendor: {
      id: 1,
      name: "Microsoft",
    },
  },
  memories: [
    {
      id: 1,
      capacity: 16,
      clock: 2.7,
      type: "DDR4",
      part_number: "IR3200S464L16A/32G",
      voltage: 1.2,
      manufacturer: {
        id: 1,
        name: "GoodRam",
      },
    },
    {
      id: 2,
      capacity: 8,
      clock: 1.6,
      type: "DDR3",
      part_number: "IR3200S464L16A/8G",
      voltage: 1.0,
      manufacturer: {
        id: 1,
        name: "Kingstone",
      },
    },
  ],
}
