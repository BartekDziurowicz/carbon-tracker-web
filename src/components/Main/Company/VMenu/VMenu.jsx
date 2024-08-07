import { useContext } from "react";
import { CompanyContext } from "../../../../store/company-context.jsx";
import { $VMenu, $Line, $MenuItem } from "./VMenu.styles.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import { ORGANIZATION, METRICS, EQUIPMENT } from "./VMenu.positions.js";

export default function VMenu() {
  const { selected, setSelected } = useContext(CompanyContext);

  return (
    <$VMenu>
      <Dropdown title="Organization">
        {ORGANIZATION.map((item, index) => (
          <$MenuItem $submenu="Organization" key={index} onClick={() => setSelected(item.name)}>{item.name}</$MenuItem>
        ))}
      </Dropdown>
      <$Line />
      <Dropdown title="Metrics">
        {METRICS.map((item, index) => (
          <$MenuItem $submenu="Metrics" key={index} onClick={() => setSelected(item.name)}>{item.name}</$MenuItem>
        ))}
      </Dropdown>
      <$Line />
      <Dropdown title="Equipment">
        {EQUIPMENT.map((item, index) => (
          <$MenuItem $submenu="Equipment" key={index} onClick={() => setSelected(item.name)}>{item.name}</$MenuItem>
        ))}
      </Dropdown>
    </$VMenu>
  );
}
