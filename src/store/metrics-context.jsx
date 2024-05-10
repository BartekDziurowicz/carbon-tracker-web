import { createContext } from "react";
import { CiUser } from "react-icons/ci";
import { GiOrganigram } from "react-icons/gi";
import { SiAwsorganizations } from "react-icons/si";
import { SlOrganization } from "react-icons/sl";
import { VscOrganization } from "react-icons/vsc";

export const STEPS = [
  { id: "Company", icon: <SiAwsorganizations /> },
  { id: "Area", icon: <SlOrganization /> },
  { id: "Tribe", icon: <GiOrganigram /> },
  { id: "Team", icon: <VscOrganization /> },
  { id: "Employee", icon: <CiUser /> },
];

export const MetricsContext = createContext({
  currentStep: 0,
  stepHandler: () => {},
});
