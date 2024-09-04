import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FiArrowDownCircle, FiArrowRightCircle } from "react-icons/fi";
import {
  $Children,
  $Dropdown,
  $Head,
  $Icon,
  $Title,
} from "../Dropdown/Dropdown.styles.jsx";

export default function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen((_prevIsOpen) => !_prevIsOpen);
  }

  return (
    <$Dropdown $submenu={title}>
      <$Head onClick={toggleDropdown}>
        <$Icon>{isOpen ? <FiArrowDownCircle /> : <FiArrowRightCircle />}</$Icon>
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
