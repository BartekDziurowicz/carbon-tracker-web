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
  const [employeeData, setEmployeeData] = useState(employee);

  useEffect(() => {
    setEmployeeData((_prevEmployeeData) => employee)
  }, [employee])

  return (
    <$Employee>
      <$Head>
        <$Icon>
          <PiFolderUserLight />
        </$Icon>
        <$Title>
          {employee.name} {employee.surname}
        </$Title>
      </$Head>
      <$Content>
        <div>Corporate key:</div>
        <div>{employeeData.corporate_key}</div>
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
