import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FiArrowDownCircle, FiArrowRightCircle } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  $Children,
  $Dropdown,
  $Head,
  $Icon,
  $Title,
} from "../Dropdown/Dropdown.styles.jsx";

export default function Dropdown({ title, details, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen((_prevIsOpen) => !isOpen);
  }

  return (
    <$Dropdown $details={details}>
      <$Head onClick={toggleDropdown}>
        {details ? (
          <$Icon>
            {isOpen ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}
          </$Icon>
        ) : (
          <$Icon>
            {isOpen ? <FiArrowDownCircle /> : <FiArrowRightCircle />}
          </$Icon>
        )}
        {/* <$Icon>{isOpen ? <FiArrowDownCircle /> : <FiArrowRightCircle />}</$Icon> */}
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
