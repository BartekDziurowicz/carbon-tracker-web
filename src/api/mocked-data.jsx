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

export const Team = {
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
}

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

export const Carbon = {
  footprintKg: 3.5,
  footprintCpuKg: 0.7,
  footprintRamKg: 2.8,
}
