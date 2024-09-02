import * as Mock from "./mocked-data.jsx";

export function apiCallToGetEmployeeCarbonFootprint(employeeId) {
  return Mock.Carbon;
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
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get calculated metrics");
  }

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
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get " + filter + " filters.");
  }

  return resData;
}

export async function apiCallToGetCarbonThresholds() {
  const response = await fetch("http://localhost:8080/threshold/thresholds");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get carbon thresholds.");
  }

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

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get companies.");
  }

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

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get companies.");
  }

  return resData;
}

export async function apiCallToGetEntityChilds(entity, id, name) {
  let endpoint;

  switch (entity) {
    case "country":
      endpoint = "location/cities?id=" + id + "&country=" + name;
  }

  const response = await fetch("http://localhost:8080/" + endpoint);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message !== undefined ? resData.message : "Failed to get childs."
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
    throw new Error(resData.message !== undefined ? resData.message : "Failed to update entity.");
  }

  return resData;
}

export async function apiCallToDeleteEntity(entity, id, name) {
  const response = await fetch(
    "http://localhost:8080/" + entity + "/delete?id=" + id + "&name=" + name,
    {
      method: "DELETE",
    }
  );
  const resData = await response.text();

  if (!response.ok) {
    throw new Error(resData);
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
