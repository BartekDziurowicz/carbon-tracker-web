import { useEffect, useState } from "react";
import { RiBuilding2Line } from "react-icons/ri";
import { apiCallToGetEmployeeOffice } from "../../../../../api/Api.jsx";
import {
  $Content,
  $Head,
  $Icon,
  $Line,
  $Office,
  $Title,
} from "./Office.styles.jsx";

export default function Office({ office_id }) {
  const [employeeOffice, setEmployeeOffice] = useState({});

  useEffect(() => {
    const office = apiCallToGetEmployeeOffice(office_id);
    setEmployeeOffice((_prevOffice) => office);
  }, [employeeOffice]);

  const { apartment_number, name, street, street_number, location } = employeeOffice;
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
    <$Office>
      <$Head>
        <$Icon>
          <RiBuilding2Line />
        </$Icon>
        <$Title>{name}</$Title>
      </$Head>
      <$Content>
        <div>Street:</div>
        <div>{street}</div>
      </$Content>
      <$Line />
      <$Content>
        <div>Street number:</div>
        <div>{street_number}</div>
      </$Content>
      <$Line />
      <$Content>
        <div>Apartment number:</div>
        <div>{apartment_number}</div>
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
    </$Office>
  );
}
