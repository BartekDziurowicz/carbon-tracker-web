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

export default function Carbon({ employeId, carbonLimit }) {
  const [carbonUsage, setCarbonUsage] = useState({});

  useEffect(() => {
    if (carbonLimit !== undefined && carbonLimit !== null) {
      // To DO strzal do bazy po current usage dla uzytkonika
      let usage = apiCallToGetEmployeeCarbonFootprint(employeId);
      const { usageKg, usageCpuKg, usageRamKg } = usage;
      const usagePercent = ((usageKg / carbonLimit) * 100).toFixed(4);
      const usageCpuPercent = ((usageCpuKg / usageKg) * 100).toFixed(4);
      const usageRamPercent = ((usageRamKg / usageKg) * 100).toFixed(4);
      const balance = carbonLimit - usageKg;

      usage = {
        ...usage,
        usagePercent,
        usageCpuPercent,
        usageRamPercent,
        balance,
      };

      setCarbonUsage(usage);
    }
  }, [carbonLimit]);

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
        <div>{carbonUsage.usagePercent}</div>
      </$Content>
      <Dropdown details={true} title={"Details"}>
        <$Content>
          <div>Processor [%]</div>
          <div>{carbonUsage.usageCpuPercent}</div>
        </$Content>
        <$Content>
          <div>RAM memory [%]</div>
          <div>{carbonUsage.usageRamPercent}</div>
        </$Content>
      </Dropdown>

      <$Line />
      <$Content>
        <div>Current usage [kg]</div>
        <div>{carbonUsage.usageKg}</div>
      </$Content>
      <Dropdown details={true} title={"Details"}>
        <$Content>
          <div>Processor [kg]</div>
          <div>{carbonUsage.usageCpuKg}</div>
        </$Content>
        <$Content>
          <div>RAM memory [kg]</div>
          <div>{carbonUsage.usageRamKg}</div>
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
        <div>{carbonUsage.balance}</div>
      </$Content>
    </$Carbon>
  );
}
