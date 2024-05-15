export const Companies = [
  {
    id: 1,
    name: "ING Hubs Polska",
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
    name: "ING Hubs Polska",
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
    name: "ING Hubs Romania",
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
    name: "ING Hubs Italy",
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
    name: "ING Hubs Polska",
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
    name: "ING Hubs Philipines",
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
        name: "Philipines",
      },
    },
  },
];

export const Areas = [
  {
    id: 1,
    name: "Content and processing",
    carbon_limit: 60,
    company: {
      id: 1,
      name: "ING Hubs Polska",
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
      name: "ING Hubs Netherlands",
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
      name: "ING Hubs Philipines",
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
      name: "ING Hubs Sydney",
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

export const Tribes = [
  {
    id: 1,
    name: "Lorem",
    carbon_limit: 60,
    area: {
      id: 1,
      name: "Content and processing",
      carbon_limit: 60,
      company: {
        id: 1,
        name: "ING Hubs Philipines",
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
  },
  {
    id: 2,
    name: "Ipsum",
    carbon_limit: 60,
    area: {
      id: 2,
      name: "Content",
      carbon_limit: 42,
      company: {
        id: 5,
        name: "ING Hubs Polska",
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
  },
  {
    id: 3,
    name: "Dolor",
    carbon_limit: 60,
    area: {
      id: 3,
      name: "Processing",
      carbon_limit: 33.0,
      company: {
        id: 2,
        name: "ING Hubs Polska",
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
  },
  {
    id: 4,
    name: "Sit Amet",
    carbon_limit: 60,
    area: {
      id: 4,
      name: "Interaction",
      carbon_limit: 10,
      company: {
        id: 3,
        name: "ING Hubs Sydney",
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
  },
];

export const Teams = [
  {
    id: 1,
    name: "LoremTeam",
    carbon_limit: 15,
    tribe: {
      id: 1,
      name: "Lorem",
      carbon_limit: 60,
      area: {
        id: 1,
        name: "Content and processing",
        carbon_limit: 60,
        company: {
          id: 1,
          name: "ING Hubs Philipines",
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
    },
  },
  {
    id: 1,
    name: "IpsumTeam",
    carbon_limit: 15,
    tribe: {
      id: 2,
      name: "Ipsum",
      carbon_limit: 60,
      area: {
        id: 2,
        name: "Content",
        carbon_limit: 42,
        company: {
          id: 5,
          name: "ING Hubs Polska",
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
    },
  },
  {
    id: 1,
    name: "DolorTeam",
    carbon_limit: 15,
    tribe: {
      id: 3,
      name: "Dolor",
      carbon_limit: 60,
      area: {
        id: 3,
        name: "Processing",
        carbon_limit: 33.0,
        company: {
          id: 2,
          name: "ING Hubs Polska",
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
    },
  },
  {
    id: 1,
    name: "SitAmet Team",
    carbon_limit: 15,
    tribe: {
      id: 4,
      name: "Sit Amet",
      carbon_limit: 60,
      area: {
        id: 4,
        name: "Interaction",
        carbon_limit: 10,
        company: {
          id: 3,
          name: "ING Hubs Sydney",
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
    },
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
              name: "Poland"
          }
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
                              name: "Poland"
                          }
                      }
                  }
              }
          }
      },
      office: {
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
                  name: "Poland"
              }
          }
      },
      workstation: {
          id: 1,
          model: "workstation5",
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
                  name: "Intel"
              }
          },
          producer: {
              id: 1,
              name: "HP"
          },
          system: {
              id: 1,
              bitness: 64,
              family: "Windows",
              version: "10",
              vendor: {
                  id: 1,
                  name: "Microsoft"
              }
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
                      name: "GoodRam"
                  }
              }
          ]
      }
  }
]
