import { createContext } from "react";
import { CiUser } from "react-icons/ci";
import { GiOrganigram } from "react-icons/gi";
import { SiAwsorganizations } from "react-icons/si";
import { SlOrganization } from "react-icons/sl";
import { VscOrganization } from "react-icons/vsc";
import * as Api from "../api/Api.jsx";

export const STEPS = [
  { stepName: "Company", icon: <SiAwsorganizations /> },
  { stepName: "Area", icon: <SlOrganization /> },
  { stepName: "Tribe", icon: <GiOrganigram /> },
  { stepName: "Team", icon: <VscOrganization /> },
  { stepName: "Employee", icon: <CiUser /> },
];

export async function apiCallForMetrics(step, id) {
  switch (step) {
    case 0:
      return await Api.apiCallToGetCompanies();
    case 1:
      return Api.apiCallToGetAreas(id);
    case 2:
      return Api.apiCallToGetTribes(id);
    case 3:
      return Api.apiCallToGetTeams(id);
    case 4:
      return Api.apiCallToGetEmployees(id);
    default:
      console.log("Index out of range.");
  }
}

export const MetricsContext = createContext({
  currentStep: 0,
  stepHandler: () => {},
  thresholds: [0, 0, 0, 0],
});
