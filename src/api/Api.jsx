import * as Mock from "./mocked-data.jsx";

export function apiCallToGetTribes(areaId) {
  return Mock.Tribes;
}

export function apiCallToGetTeams(tribeId) {
  return Mock.Teams;
}

export function apiCallToGetEmployees(teamId) {
  return Mock.Employees;
}

export function apiCallToGetEmployeeMetric(employeeId) {
  return Mock.Employees[0];
}

export function apiCallToGetEmployeeOffice(officeId) {
  return Mock.Office;
}

export function apiCallToGetEmployeeWorkstation(workstationId) {
  return Mock.Workstation;
}

export function apiCallToGetEmployeeCarbonFootprint(employeeId) {
  return Mock.Carbon;
}

export async function apiCallToGetCarbonThresholds() {
  const response = await fetch('http://localhost:8080/threshold/thresholds');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get carbon thresholds.");
  }

  return resData;
}

export async function apiCallToGetCompanies() {
  const response = await fetch('http://localhost:8080/company/companies');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get companies.");
  }

  return resData;
}

export async function apiCallToGetAreas(companyId, companyName) {
  const response = await fetch('http://localhost:8080/area/areas?id='+companyId+'&company='+companyName);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get areas.");
  }

  return resData;
}
