import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { BsBracesAsterisk } from "react-icons/bs";
import { FaCubes } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { MdOutlineManageAccounts } from "react-icons/md";
import { PiTreeStructure } from "react-icons/pi";
import NavigationItem from "../NavigationItem/NavigationItem.jsx";
import "./Navigation.css";

export default function Navigation() {
  const [isSelected, setIsSelected] = useState(false);

  function selectionHandler() {
    setIsSelected((selection) => !selection);
  }

  return (
    <>
      <div id="navigation" className="diamond" onClick={selectionHandler}>
        <div color="white">
          <FaCubes className="navicon" />
        </div>
      </div>
      <NavigationItem
        name="metrics"
        className={
          isSelected
            ? "diamond item item_01"
            : "diamond item item_01 item_hidden"
        }
      >
        <IoIosStats className="item_icon" />
      </NavigationItem>
      <NavigationItem
        name="selector"
        className={
          isSelected
            ? "diamond item item_02"
            : "diamond item item_02 item_hidden"
        }
      >
        <BsBracesAsterisk className="item_icon" />
      </NavigationItem>
      <NavigationItem
        name="company"
        className={
          isSelected
            ? "diamond item item_03"
            : "diamond item item_03 item_hidden"
        }
      >
        <PiTreeStructure className="item_icon" />
      </NavigationItem>
      <NavigationItem
        name="user"
        className={
          isSelected
            ? "diamond item item_04"
            : "diamond item item_04 item_hidden"
        }
      >
        <MdOutlineManageAccounts className="item_icon" />
      </NavigationItem>
      <NavigationItem
        name="login"
        className={
          isSelected
            ? "diamond item item_05"
            : "diamond item item_05 item_hidden"
        }
      >
        <AiOutlineLogin className="item_icon" />
      </NavigationItem>
    </>
  );
}
