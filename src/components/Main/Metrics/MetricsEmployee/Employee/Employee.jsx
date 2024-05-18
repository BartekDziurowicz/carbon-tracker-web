import { PiFolderUserLight } from "react-icons/pi";
import {
  $Content,
  $Employee,
  $Head,
  $Icon,
  $Line,
  $Title,
} from "./Employee.styles.jsx";

export default function Employee({ employee }) {
  const {
    id,
    corporate_key,
    email,
    name,
    surname,
    role,
    carbon_limit,
    location,
  } = employee;
  let ecity;
  let ecountry;

  if (location) {
    const { city, country } = location;
    ecity = city;
    if (country) {
      ecountry = country.name;
    }
  }

  return (
    <$Employee>
      <$Head>
        <$Icon>
          <PiFolderUserLight />
        </$Icon>
        <$Title>
          {name} {surname}
        </$Title>
      </$Head>
      <$Content>
        <div>Corporate key:</div>
        <div>{corporate_key}</div>
      </$Content>
      <$Line />
      <$Content>
        <div>eMail:</div>
        <div>{email}</div>
      </$Content>
      <$Line />
      <$Content>
        <div>Role:</div>
        <div>{role}</div>
      </$Content>
      <$Line />
      <$Content>
        <div>City:</div>
        <div>{ecity}</div>
      </$Content>
      <$Line />
      <$Content>
        <div>Country:</div>
        <div>{ecountry}</div>
      </$Content>
    </$Employee>
  );
}
