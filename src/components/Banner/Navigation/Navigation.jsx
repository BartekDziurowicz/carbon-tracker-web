import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { BsBracesAsterisk } from "react-icons/bs";
import { FaCubes } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { PiTreeStructure } from "react-icons/pi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import {
  $Navigation,
  $NavigationIcon,
  $NavigationSelectedItem,
} from "./Navigation.styles.jsx";
import NavigationItem from "../NavigationItem/NavigationItem.jsx";
import { NavigationContext } from "../../../store/navigation-context.jsx";

export default function Navigation() {
  const [isSelected, setIsSelected] = useState(false);
  const { selectedNavItem } = useContext(NavigationContext);

  function selectionHandler() {
    setIsSelected((selection) => !selection);
  }

  return (
    <>
      <$NavigationSelectedItem>
        {selectedNavItem && selectedNavItem.toUpperCase()}
      </$NavigationSelectedItem>

      <$Navigation onClick={selectionHandler}>
        <$NavigationIcon>
          <FaCubes />
        </$NavigationIcon>
      </$Navigation>

      <Link to="/metrics">
        <NavigationItem name="Metrics" position={1} hidden={!isSelected}>
          <IoIosStats />
        </NavigationItem>
      </Link>

      <Link to="/selector">
        <NavigationItem name="Selector" position={2} hidden={!isSelected}>
          <BsBracesAsterisk />
        </NavigationItem>
      </Link>

      <Link to="/company">
        <NavigationItem name="Company" position={3} hidden={!isSelected}>
          <PiTreeStructure />
        </NavigationItem>
      </Link>

      <Link to="/reports">
        <NavigationItem name="Reports" position={4} hidden={!isSelected}>
          <HiOutlineDocumentReport />
        </NavigationItem>
      </Link>

      <Link to="/logout">
        <NavigationItem name="Logout" position={5} hidden={!isSelected}>
          <AiOutlineLogout />
        </NavigationItem>
      </Link>
    </>
  );
}
