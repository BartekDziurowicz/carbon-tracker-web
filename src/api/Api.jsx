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
