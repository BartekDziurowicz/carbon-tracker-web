import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { FaMemory } from "react-icons/fa";
import { PiCpuFill } from "react-icons/pi";
import {
  $Children,
  $Dropdown,
  $Head,
  $Icon,
  $Title,
} from "./Dropdown.styles.jsx";

export default function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen((_prevIsOpen) => !_prevIsOpen);
  }

  return (
    <$Dropdown $title={title}>
      <$Head onClick={toggleDropdown}>
        <$Icon>
          <TbReportAnalytics />
          {title === "Processor details" ? <PiCpuFill /> : <FaMemory />}
          {isOpen ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowRight />
          )}
        </$Icon>
        <$Title>{title}</$Title>
      </$Head>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
      >
        <$Children className="dropdown">{isOpen && children}</$Children>
      </CSSTransition>
    </$Dropdown>
  );
}
