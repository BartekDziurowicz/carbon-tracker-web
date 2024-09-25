import { CiUser, CiLocationOn } from "react-icons/ci";
import { GiOrganigram } from "react-icons/gi";
import { SiAwsorganizations } from "react-icons/si";
import { VscOrganization } from "react-icons/vsc";
import { SlGlobeAlt, SlOrganization } from "react-icons/sl";
import { RiBuilding2Line } from "react-icons/ri";
import { PiMaskHappy, PiShieldWarning, PiCpuFill, PiWindowsLogoLight, PiFactory } from "react-icons/pi";
import { IoFilterCircleOutline, IoConstructOutline, IoPieChartOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { GrSystem } from "react-icons/gr";
import { FaMemory } from "react-icons/fa";

export function iconHandler(selected) {
  switch (selected) {
    case "Country":
      return <SlGlobeAlt />;
    case "Location":
      return <CiLocationOn />;
    case "Office":
      return <RiBuilding2Line />;
    case "Area":
      return <SlOrganization />;
    case "Company":
      return <SiAwsorganizations />;
    case "Tribe":
      return <GiOrganigram />;
    case "Team":
      return <VscOrganization />;
    case "Employee":
      return <CiUser />;
    case "Role":
      return <PiMaskHappy />;
    case "Threshold":
      return <PiShieldWarning />;
    case "Filter":
      return <IoFilterCircleOutline />;
    case "Indicator":
      return <IoPieChartOutline />;
    case "Workstation":
      return <HiOutlineComputerDesktop />;
    case "Producer":
      return <IoConstructOutline />;
    case "System":
      return <GrSystem />;
    case "Vendor":
      return <PiWindowsLogoLight />;
    case "Processor":
      return <PiCpuFill />;
    case "Memory":
      return <FaMemory />;
    case "Manufacturer":
      return <PiFactory />;
  }
}
