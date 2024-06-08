import * as Mock from "./mocked-data.jsx";

export function apiCallToGetCompanies() {
  return Mock.Companies;
}

export function apiCallToGetAreas(companyId) {
  return Mock.Areas;
}

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

  console.log(resData);
  return resData;
}
