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
    console.log("Menu state toggled:", !isSelected);
  }

  const userData = JSON.parse(sessionStorage.getItem("userData"));

  function checkAuthorization(groups) {
    return groups.includes(userData.group);
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

      {checkAuthorization("Employee,Manager,Admin") && (
        <Link to="/metrics">
          <NavigationItem name="Metrics" position={1} hidden={false}>
            <IoIosStats />
          </NavigationItem>
        </Link>
      )}

      {checkAuthorization("Manager,Admin") && (
        <Link to="/selector">
          <NavigationItem name="Selector" position={2} hidden={!isSelected}>
            <BsBracesAsterisk />
          </NavigationItem>
        </Link>
      )}

      {checkAuthorization("Admin") && (
        <Link to="/company">
          <NavigationItem name="Company" position={3} hidden={!isSelected}>
            <PiTreeStructure />
          </NavigationItem>
        </Link>
      )}

      {checkAuthorization("Manager,Admin") && (
        <Link to="/reports">
          <NavigationItem name="Reports" position={4} hidden={!isSelected}>
            <HiOutlineDocumentReport />
          </NavigationItem>
        </Link>
      )}

      {checkAuthorization("Employee,Manager,Admin") && (
        <Link to="/logout">
          <NavigationItem name="Logout" position={5} hidden={!isSelected}>
            <AiOutlineLogout />
          </NavigationItem>
        </Link>
      )}
    </>
  );
}
