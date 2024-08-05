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
      group + "&start=" + startDate + "&end=" + endDate + "&period="+period,
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
    "http://localhost:8080/" + extractedFilter.pop() + "/filters"
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
