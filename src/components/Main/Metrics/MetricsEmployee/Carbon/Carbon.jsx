import { useEffect, useState } from "react";
import { GiFootprint } from "react-icons/gi";
import Dropdown from "../Dropdown/Dropdown.jsx";
import { apiCallToGetEmployeeCarbonFootprint } from "../../../../../api/Api.jsx";
import {
  $Carbon,
  $Content,
  $Head,
  $Icon,
  $Line,
  $Title,
} from "./Carbon.styles.jsx";

const TITLE = "Carbon footprint";

export default function Carbon({ employeId, carbon_limit }) {

  const [carbonUsage, setCarbonUsage] = useState();

  useEffect(() => {
    // To DO strzal do bazy po current usage dla uzytkonika
    const usage = apiCallToGetEmployeeCarbonFootprint(employeId);
    setCarbonUsage(usage);
  }, []);

  // function to calculate usage

  return (
    <$Carbon>
      <$Head>
        <$Icon>
          <GiFootprint />
        </$Icon>
        <$Title>{TITLE}</$Title>
      </$Head>

      <$Content>
        <div>Current usage [%]</div>
        <div>90</div>
      </$Content>
      <Dropdown details={true} title={"Details"}>
        <$Content>
          <div>Processor [%]</div>
          <div>65</div>
        </$Content>
        <$Content>
          <div>RAM memory [%]</div>
          <div>35</div>
        </$Content>
      </Dropdown>

      <$Line />
      <$Content>
        <div>Current usage [kg]</div>
        <div>50</div>
      </$Content>
      <Dropdown details={true} title={"Details"}>
        <$Content>
          <div>Processor [kg]</div>
          <div>32.5</div>
        </$Content>
        <$Content>
          <div>RAM memory [kg]</div>
          <div>17.5</div>
        </$Content>
      </Dropdown>

      <$Line />
      <$Content>
        <div>Limit [kg]</div>
        <div>100</div>
      </$Content>

      <$Line />
      <$Content>
        <div>Bilance [kg]</div>
        <div>50</div>
      </$Content>

    </$Carbon>
  );
}
