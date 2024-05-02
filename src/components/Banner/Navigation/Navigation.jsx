import { useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { BsBracesAsterisk } from 'react-icons/bs';
import { FaCubes } from 'react-icons/fa';
import { IoIosStats } from 'react-icons/io';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { PiTreeStructure } from 'react-icons/pi';
import { $Navigation, $NavigationIcon } from './Navigation.styles.jsx';
import NavigationItem from '../NavigationItem/NavigationItem.jsx';
// import "./Navigation.css";

export default function Navigation() {
  const [isSelected, setIsSelected] = useState(false);

  function selectionHandler() {
    setIsSelected((selection) => !selection);
  }

  return (
    <>
      <$Navigation onClick={selectionHandler}>
        <$NavigationIcon><FaCubes /></$NavigationIcon>
      </$Navigation>

      <NavigationItem name="Metrics" position={1} hidden={!isSelected}>
        <IoIosStats />
      </NavigationItem>

      <NavigationItem name="Selector" position={2} hidden={!isSelected}>
        <BsBracesAsterisk />
      </NavigationItem>

      <NavigationItem name="Company" position={3} hidden={!isSelected}>
        <PiTreeStructure />
      </NavigationItem>

      <NavigationItem name="User" position={4} hidden={!isSelected}>
        <MdOutlineManageAccounts />
      </NavigationItem>

      <NavigationItem name="Logout" position={5} hidden={!isSelected}>
        <AiOutlineLogout />
      </NavigationItem>
    </>
  );
}
