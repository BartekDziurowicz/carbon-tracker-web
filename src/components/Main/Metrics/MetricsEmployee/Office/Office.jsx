import { memo, useEffect, useState } from "react";
import { RiBuilding2Line } from "react-icons/ri";
import {
  $Content,
  $Head,
  $Icon,
  $Line,
  $Office,
  $Title,
} from "./Office.styles.jsx";

const Office = memo(function Office({ office }) {
  const [employeeOffice, setEmployeeOffice] = useState({});

  useEffect(() => {
    const { name, street, streetNumber, apartmentNumber, postalCode, location: ulocation } = office;
    const location = ulocation ? getLocationData(ulocation) : '';
    setEmployeeOffice((_prevOffice) => ({name, street, streetNumber, apartmentNumber, postalCode, ...location}));
  }, [office]);

  function getLocationData(data) {
    const { city, country: ucountry } = data;
    const location = { city, country: ucountry && ucountry.name};
    return location;
  }

  return (
    <$Office>
      <$Head>
        <$Icon>
          <RiBuilding2Line />
        </$Icon>
        <$Title>{employeeOffice.name}</$Title>
      </$Head>
      <$Content>
        <div>Street:</div>
        <div>{employeeOffice.street}</div>
      </$Content>
      <$Line />
      <$Content>
        <div>Street number:</div>
        <div>{employeeOffice.streetNumber}</div>
      </$Content>
      <$Line />
      <$Content>
        <div>Apartment number:</div>
        <div>{employeeOffice.apartmentNumber !== 0 ? employeeOffice.apartmentNumber : "n/a"}</div>
      </$Content>
      <$Line />
      <$Content>
        <div>Postal code:</div>
        <div>{employeeOffice.postalCode}</div>
      </$Content>
      <$Line />
      <$Content>
        <div>City:</div>
        <div>{employeeOffice.city}</div>
      </$Content>
      <$Line />
      <$Content>
        <div>Country:</div>
        <div>{employeeOffice.country}</div>
      </$Content>
    </$Office>
  );
});

export default Office;
