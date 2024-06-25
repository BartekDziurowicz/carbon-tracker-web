import { memo, useEffect, useState } from "react";
import { PiFolderUserLight } from "react-icons/pi";
import {
  $Content,
  $Employee,
  $Head,
  $Icon,
  $Line,
  $Title,
} from "./Employee.styles.jsx";

const Employee = memo(function Employee({ employee }) {
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    const { corporateKey, email, name, surname, role: urole, location: ulocation } = employee;
    const role = urole ? getRoleData(urole) : "";
    const location = ulocation ? getLocationData(ulocation) : {};
    setEmployeeData((_prevEmployeeData) => ({ corporateKey, email, name, surname, role, ...location }))
  }, [employee])

  function getRoleData(data) {
    const { name } = data;
    return name;
  }

  function getLocationData(data) {
    const { city, country: ucountry } = data;
    const location = { city, country: ucountry && ucountry.name};
    return location;
  }

  return (
    <$Employee>
      <$Head>
        <$Icon>
          <PiFolderUserLight />
        </$Icon>
        <$Title>
          {employeeData.name} {employeeData.surname}
        </$Title>
      </$Head>
      <$Content>
        <div>Corporate key:</div>
        <div>{employeeData.corporateKey}</div>
      </$Content>
      <$Line />
      <$Content>
        <div>eMail:</div>
        <div>{employeeData.email}</div>
      </$Content>
      <$Line />
      <$Content>
        <div>Role:</div>
        <div>{employeeData.role}</div>
      </$Content>
      <$Line />
      <$Content>
        <div>City:</div>
        <div>{employeeData.city}</div>
      </$Content>
      <$Line />
      <$Content>
        <div>Country:</div>
        <div>{employeeData.country}</div>
      </$Content>
    </$Employee>
  );
});

export default Employee;
