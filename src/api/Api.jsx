import * as Mock from "./mocked-data.jsx";

export function apiCallToGetEmployeeCarbonFootprint(employeeId) {
  return Mock.Carbon;
}

export async function apiCallToGetCalculatedIndicators(
  group,
  startDate,
  endDate,
  countries
) {
  const response = await fetch(
    "http://localhost:8080/indicator/get?group=" +
      group +
      "&start=" +
      startDate +
      "&end=" +
      endDate,
    {
      method: "POST",
      body: JSON.stringify(countries),
      headers: {
        "Content-Type": "application/json",
        "X-HTTP-Method-Override": "GET",
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to get calculated indicators. Error " + response.status
    );
  }

  if (response.status === 204) {
    throw {
      status: response.status,
      message: "Indicator records match given criteria were not found",
    };
  }

  const resData = await response.json();

  return resData;
}

export async function apiCallToGetCalculatedMetrics(
  group,
  startDate,
  endDate,
  period,
  criteria
) {
  const response = await fetch(
    "http://localhost:8080/metrics/get?group=" +
      group +
      "&start=" +
      startDate +
      "&end=" +
      endDate +
      "&period=" +
      period,
    {
      method: "POST",
      body: JSON.stringify(criteria),
      headers: {
        "Content-Type": "application/json",
        "X-HTTP-Method-Override": "GET",
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to get calculated metrics. Error " + response.status
    );
  }

  if (response.status === 204) {
    throw {
      status: response.status,
      message: "Metric records match given criteria were not found",
    };
  }

  const resData = await response.json();

  return resData;
}

export async function apiCallToGetIndicatorValues() {
  const response = await fetch("http://localhost:8080/indicator/indicators");

  if (!response.ok) {
    throw new Error("Failed to get filters. Error " + response.status);
  }

  const resData = await response.json();

  return resData;
}

export async function apiCallToGetFilterValues(filter) {
  if (!filter) {
    return [];
  }

  const extractedFilter = filter.split(" ");
  const response = await fetch(
    "http://localhost:8080/" + extractedFilter.pop().toLowerCase() + "/filters"
  );

  if (!response.ok) {
    throw new Error("Failed to get filters. Error " + response.status);
  }

  const resData = await response.json();

  return resData;
}

export async function apiCallToGetCarbonThresholds() {
  let response = await fetch("http://localhost:8080/threshold/thresholds");

  if (!response.ok) {
    throw new Error(
      "Failed to get alerts thresholds. Error " + response.status
    );
  }

  const resData = await response.json();

  return resData;
}

export async function apiCallToGetEntityTemplate(entity) {
  const response = await fetch("http://localhost:8080/" + entity + "/template");

  if (!response.ok) {
    throw new Error("Failed to get entity template. Error " + response.status);
  }

  const resData = await response.json();

  return resData;
}

export async function apiCallToGetSingleEntity(id, name, entity) {
  let endpoint;

  switch (entity) {
    case "country":
      endpoint = "/country?id=" + id + "&name=" + name;
      break;
    case "location":
      endpoint = "/location?id=" + id + "&city=" + name;
      break;
    case "office":
      endpoint = "/office?id=" + id + "&name=" + name;
      break;
    case "company":
      endpoint = "/company?id=" + id + "&name=" + name;
      break;
    case "area":
      endpoint = "/area?id=" + id + "&name=" + name;
      break;
    case "tribe":
      endpoint = "/tribe?id=" + id + "&name=" + name;
      break;
    case "team":
      endpoint = "/team?id=" + id + "&name=" + name;
      break;
    case "employee":
      endpoint = "/employee?id=" + id + "&ck=" + name;
      break;
    case "role":
      endpoint = "/role?id=" + id + "&name=" + name;
      break;

    case "threshold":
      endpoint = "/threshold?id=" + id + "&name=" + name;
      break;
    case "filter":
      endpoint = "/filter?id=" + id + "&name=" + name;
      break;
    case "indicator":
      endpoint = "/indicator?id=" + id + "&name=" + name;
      break;

    case "workstation":
      endpoint = "/workstation?id=" + id + "&name=" + name;
      break;
    case "producer":
      endpoint = "/producer?id=" + id + "&name=" + name;
      break;
    case "system":
      endpoint = "/system?id=" + id + "&name=" + name;
      break;
    case "vendor":
      endpoint = "/vendor?id=" + id + "&name=" + name;
      break;
    case "processor":
      endpoint = "/processor?id=" + id + "&name=" + name;
      break;
    case "memory":
      endpoint = "/memory?id=" + id + "&number=" + name;
      break;
    case "manufacturer":
      endpoint = "/manufacturer?id=" + id + "&name=" + name;
      break;
  }

  const response = await fetch("http://localhost:8080/" + entity + endpoint);

  if (!response.ok) {
    throw new Error("Failed to get entity details. Error " + response.status);
  }

  const resData = await response.json();
  return resData;
}

export async function apiCallToGetListOfEntities(entity, id, name, isSimple) {
  let endpoint;

  switch (entity) {
    case "country":
      endpoint = "/countries";
      break;
    case "location":
      endpoint =
        "/locations?id=" + id + "&country=" + name + "&isSimple=" + isSimple;
      break;
    case "office":
      endpoint =
        "/offices?id=" + id + "&city=" + name + "&isSimple=" + isSimple;
      break;
    case "company":
      endpoint =
        "/companies?id=" + id + "&city=" + name + "&isSimple=" + isSimple;
      break;
    case "area":
      endpoint =
        "/areas?id=" + id + "&company=" + name + "&isSimple=" + isSimple;
      break;
    case "tribe":
      endpoint = "/tribes?id=" + id + "&area=" + name + "&isSimple=" + isSimple;
      break;
    case "team":
      endpoint = "/teams?id=" + id + "&tribe=" + name + "&isSimple=" + isSimple;
      break;
    case "employee":
      endpoint =
        "/allByTeam?id=" + id + "&team=" + name + "&isSimple=" + isSimple;
      break;
    case "role":
      endpoint = "/roles";
      break;

    case "filter":
      endpoint = "/filters";
      break;
    case "threshold":
      endpoint = "/thresholds";
      break;
    case "indicator":
      endpoint = "/indicators";
      break;

    case "workstation":
      endpoint =
        "/workstations?id=" +
        id +
        "&producer=" +
        name +
        "&isSimple=" +
        isSimple;
      break;
    case "producer":
      endpoint = "/producers";
      break;
    case "system":
      endpoint =
        "/systems?id=" + id + "&vendor=" + name + "&isSimple=" + isSimple;
      break;
    case "vendor":
      endpoint = "/vendors";
      break;
    case "processor":
      endpoint =
        "/processors?id=" +
        id +
        "&manufacturer=" +
        name +
        "&isSimple=" +
        isSimple;
      break;
    case "memory":
      endpoint =
        "/memories?id=" +
        id +
        "&manufacturer=" +
        name +
        "&isSimple=" +
        isSimple;
      break;
    case "manufacturer":
      endpoint = "/manufacturers";
      break;
  }

  const response = await fetch("http://localhost:8080/" + entity + endpoint);

  if (!response.ok) {
    throw new Error("Failed to get list of entities. Error " + response.status);
  }

  const resData = await response.json();

  return resData;
}

export async function apiCallToGetTotalCarbonSum(entity, id) {
  const response = await fetch("http://localhost:8080/metrics/carbonSum?entity=" + entity + "&id=" + id);

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      errorResponse.message !== undefined
        ? "Failed to get total carbon sum. Error " + response.status
        : errorResponse.error + ". Error " + errorResponse.status
    );
  }

  const resData = await response.text();

  return resData;
}

export async function apiCallToGetEntityChildsCapacity(entity, id, name) {
  let child;
  switch (entity) {
    case "company": child = "area"; break;
    case "area": child = "tribe"; break;
    case "tribe": child = "team"; break;
    case "team": child = "employee"; break;
    default: return;
  }

  const response = await fetch("http://localhost:8080/" + child + "/capacity?id=" + id + "&" + entity + "=" + name);

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      errorResponse.message !== undefined
        ? "Failed to get entity child. Error " + response.status
        : errorResponse.error + ". Error " + errorResponse.status
    );
  }

  const resData = await response.text();

  return resData;
}

export async function apiCallToGetEntityChilds(
  entity,
  id,
  name,
  childEntities,
  call
) {
  let endpoints = [];

  switch (entity) {
    case "country":
      endpoints.push(
        childEntities[0].toLowerCase() + "/cities?id=" + id + "&country=" + name
      );
      break;
    case "location":
      endpoints.push(
        childEntities[0].toLowerCase() + "/names?id=" + id + "&location=" + name
      );
      endpoints.push(
        childEntities[1].toLowerCase() + "/names?id=" + id + "&location=" + name
      );
      endpoints.push(
        childEntities[2].toLowerCase() +
          "/ckByLocation?id=" +
          id +
          "&location=" +
          name
      );
      break;
    case "office":
      endpoints.push(
        childEntities[0].toLowerCase() +
          "/ckByOffice?id=" +
          id +
          "&office=" +
          name
      );
      break;
    case "company":
      endpoints.push(
        childEntities[0].toLowerCase() + "/names?id=" + id + "&company=" + name
      );
      break;
    case "area":
      endpoints.push(
        childEntities[0].toLowerCase() + "/names?id=" + id + "&area=" + name
      );
      break;
    case "tribe":
      endpoints.push(
        childEntities[0].toLowerCase() + "/names?id=" + id + "&tribe=" + name
      );
      break;
    case "team":
      endpoints.push(
        childEntities[0].toLowerCase() + "/ckByTeam?id=" + id + "&team=" + name
      );
      break;
    case "employee":
      break;
    case "role":
      endpoints.push(
        childEntities[0].toLowerCase() + "/ckByRole?id=" + id + "&team=" + name
      );
      break;
    case "workstation":
      endpoints.push(
        childEntities[0].toLowerCase() +
          "/ckByWorkstation?id=" +
          id +
          "&workstation=" +
          name
      );
      break;
    case "producer":
      endpoints.push(
        childEntities[0].toLowerCase() +
          "/namesByProducer?id=" +
          id +
          "&producer=" +
          name
      );
      break;
    case "system":
      endpoints.push(
        childEntities[0].toLowerCase() +
          "/namesBySystem?id=" +
          id +
          "&system=" +
          name
      );
      break;
    case "vendor":
      endpoints.push(
        childEntities[0].toLowerCase() +
          "/specifications?id=" +
          id +
          "&vendor=" +
          name
      );
      break;
    case "processor":
      endpoints.push(
        childEntities[0].toLowerCase() +
          "/namesByProcessor?id=" +
          id +
          "&processor=" +
          name
      );
      break;
    case "memory":
      endpoints.push(
        childEntities[0].toLowerCase() +
          "/namesByMemory?id=" +
          id +
          "&memory=" +
          name
      );
      break;
    case "manufacturer":
      endpoints.push(
        childEntities[0].toLowerCase() +
          "/names?id=" +
          id +
          "&manufacturer=" +
          name
      );
      endpoints.push(
        childEntities[1].toLowerCase() +
          "/partNumbers?id=" +
          id +
          "&manufacturer=" +
          name
      );
      break;
  }

  const response = await fetch("http://localhost:8080/" + endpoints[call]);

  let resData;

  if (response.ok) {
    resData = await response.json();
  } else if (response.status === 404) {
    resData = [];
  } else {
    throw new Error(
      resData.message !== undefined
        ? "Failed to get childs. Error " + response.status
        : resData
    );
  }

  return resData;
}

export async function apiCallToUpdateEntity(entity, updatedEntity) {
  const response = await fetch("http://localhost:8080/" + entity + "/update", {
    method: "PUT",
    body: JSON.stringify(updatedEntity),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.text();

  if (!response.ok) {
    throw new Error(
      resData.message !== undefined
        ? "Failed to update entity. Error " + response.status
        : resData
    );
  }

  return resData;
}

export async function apiCallToCreateEntity(entity, createdEntity) {
  const response = await fetch("http://localhost:8080/" + entity + "/create", {
    method: "POST",
    body: JSON.stringify(createdEntity),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      errorResponse.message !== undefined
        ? "Failed to create entity. Error " + response.status
        : errorResponse.error + ". Error " + errorResponse.status
    );
  }

  const resData = await response.text();

  return resData;
}

export async function apiCallToDeleteEntity(entity, deletedEntity) {
  const response = await fetch("http://localhost:8080/" + entity + "/delete", {
    method: "DELETE",
    body: JSON.stringify(deletedEntity),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.text();

  if (!response.ok) {
    throw new Error(
      resData.message !== undefined
        ? "Failed to delete entity. Error " + response.status
        : resData
    );
  }

  return resData;
}

export async function apiCallToGetCompanies() {
  const response = await fetch(
    "http://localhost:8080/company/companies?isSimple=true"
  );
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get companies.");
  }

  return resData;
}

export async function apiCallToGetAreas(companyId, companyName) {
  const response = await fetch(
    "http://localhost:8080/area/areas?id=" +
      companyId +
      "&company=" +
      companyName +
      "&isSimple=true"
  );
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get areas.");
  }

  return resData;
}

export async function apiCallToGetTribes(areaId, areaName) {
  const response = await fetch(
    "http://localhost:8080/tribe/tribes?id=" +
      areaId +
      "&area=" +
      areaName +
      "&isSimple=true"
  );
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get tribes.");
  }

  return resData;
}

export async function apiCallToGetTeams(tribeId, tribeName) {
  const response = await fetch(
    "http://localhost:8080/team/teams?id=" +
      tribeId +
      "&tribe=" +
      tribeName +
      "&isSimple=true"
  );
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get teams.");
  }

  return resData;
}

export async function apiCallToGetEmployees(teamId, teamName) {
  const response = await fetch(
    "http://localhost:8080/employee/allByTeam?id=" +
      teamId +
      "&team=" +
      teamName +
      "&isSimple=true"
  );
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get employees.");
  }

  return resData;
}

export async function apiCallToGetEmployeeMetric(employeeId, corporateKey) {
  const response = await fetch(
    "http://localhost:8080/employee/employee?id=" +
      employeeId +
      "&ck=" +
      corporateKey
  );
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get employee.");
  }

  return resData;
}
