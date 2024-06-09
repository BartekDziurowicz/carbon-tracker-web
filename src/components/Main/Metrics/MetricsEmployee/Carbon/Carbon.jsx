import { memo, useEffect, useState } from "react";
import { GiFootprint } from "react-icons/gi";
import Dropdown from "../Dropdown/Dropdown.jsx";
import {
  $Carbon,
  $Content,
  $Head,
  $Icon,
  $Line,
  $Title,
} from "./Carbon.styles.jsx";

const TITLE = "Carbon footprint";

const Carbon = memo(function Carbon({ carbonFootprint, carbonLimit }) {
  const [currentFootprint, setCurrentFootprint] = useState({});

  useEffect(() => {
    if (carbonFootprint !== undefined && carbonFootprint !== null && carbonLimit !== undefined && carbonLimit !== null) {
      const { footprintKg, footprintCpuKg, footprintRamKg } = carbonFootprint;
      const footprintPercent = ((footprintKg / carbonLimit) * 100).toFixed(4);
      const footprintCpuPercent = ((footprintCpuKg / footprintKg) * 100).toFixed(2);
      const footprintRamPercent = ((footprintRamKg / footprintKg) * 100).toFixed(2);
      const balance = carbonLimit - footprintKg;

      const footprint = {
        ...carbonFootprint,
        footprintPercent,
        footprintCpuPercent,
        footprintRamPercent,
        balance,
      };
      
      setCurrentFootprint(footprint);
    }
  }, [carbonFootprint, carbonLimit]);

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
        <div>{currentFootprint.footprintPercent}</div>
      </$Content>
      <Dropdown details={true} title={"Details"}>
        <$Content>
          <div>Processor [%]</div>
          <div>{currentFootprint.footprintCpuPercent}</div>
        </$Content>
        <$Content>
          <div>RAM memory [%]</div>
          <div>{currentFootprint.footprintRamPercent}</div>
        </$Content>
      </Dropdown>

      <$Line />
      <$Content>
        <div>Current usage [kg]</div>
        <div>{currentFootprint.footprintKg}</div>
      </$Content>
      <Dropdown details={true} title={"Details"}>
        <$Content>
          <div>Processor [kg]</div>
          <div>{currentFootprint.footprintCpuKg}</div>
        </$Content>
        <$Content>
          <div>RAM memory [kg]</div>
          <div>{currentFootprint.footprintRamKg}</div>
        </$Content>
      </Dropdown>

      <$Line />
      <$Content>
        <div>Limit [kg]</div>
        <div>{carbonLimit}</div>
      </$Content>

      <$Line />
      <$Content>
        <div>Bilance [kg]</div>
        <div>{currentFootprint.balance}</div>
      </$Content>
    </$Carbon>
  );
});

export default Carbon;
