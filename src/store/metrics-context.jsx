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

export async function apiCallForMetrics(step) {
  const { itemId, itemName } = determineIdAndName(step);
  switch (step) {
    case 0:
      return await Api.apiCallToGetCompanies();
    case 1:
      return await Api.apiCallToGetAreas(itemId, itemName);
    case 2:
      return Api.apiCallToGetTribes(0);
    case 3:
      return Api.apiCallToGetTeams(0);
    case 4:
      return Api.apiCallToGetEmployees(0);
    default:
      console.log("Index out of range.");
  }
}

function determineIdAndName(step) {
  const stepItemInfo = JSON.parse(sessionStorage.getItem("stepItemInfo"));
  return step !== 0 ? stepItemInfo[step-1] : {};
}

export const MetricsContext = createContext({
  currentStep: 0,
  stepHandler: () => {},
  thresholds: [0, 0, 0, 0],
});
