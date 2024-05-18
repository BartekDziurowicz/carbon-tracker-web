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
