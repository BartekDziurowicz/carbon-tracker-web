import { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown.jsx";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { apiCallToGetEmployeeWorkstation } from "../../../../../api/Api.jsx";
import {
  $Content,
  $Head,
  $Icon,
  $Line,
  $Title,
  $Workstation,
} from "./Workstation.styles.jsx";

export default function Workstation({ workstation_id }) {
  const [employeeWorkstation, setEmployeeWorkstation] = useState({});

  useEffect(() => {
    const workstation = apiCallToGetEmployeeWorkstation(workstation_id);
    setEmployeeWorkstation((_prevWorkstation) => workstation);
  }, [employeeWorkstation]);

  const { model, name, producer, system, processor, memories } = employeeWorkstation;
  let eproducer;
  if (producer) {
    eproducer = producer.name;
  }
  let esystem = { vendor: { name: "", id: 0 } };
  if (system) {
    esystem = system;
  }
  let eprocessor = { manufacturer: { name: "", id: 0 } };
  if (processor) {
    eprocessor = processor;
  }
  let ememories = [];
  let ememory = { manufacturer: { name: "", id: 0 } };
  if (memories) {
    memories.forEach((element) => {
      ememory = element;
      ememories = [...ememories, ememory];
    });
  }

  return (
    <$Workstation>
      <$Head>
        <$Icon>
          <HiOutlineComputerDesktop />
        </$Icon>
        <$Title>{name}</$Title>
      </$Head>
      <$Content>
        <div>Producer</div>
        <div>{eproducer}</div>
      </$Content>
      <$Content>
        <div>Model</div>
        <div>{model}</div>
      </$Content>
      <$Line />

      <Dropdown title={"System"}>
        <$Content>
          <div>Vendor</div>
          <div>{esystem.vendor.name}</div>
        </$Content>
        <$Content>
          <div>Family</div>
          <div>{esystem.family}</div>
        </$Content>
        <$Content>
          <div>Version</div>
          <div>{esystem.version}</div>
        </$Content>
        <$Content>
          <div>Bitness</div>
          <div>{esystem.bitness}</div>
        </$Content>
      </Dropdown>

      <$Line />
      <Dropdown title={"Processor"}>
        <$Content>
          <div>Manufacturer</div>
          <div>{eprocessor.manufacturer.name}</div>
        </$Content>
        <$Content>
          <div>Name</div>
          <div>{eprocessor.name}</div>
        </$Content>
        <$Content>
          <div>Identifier</div>
          <div>{eprocessor.identifier}</div>
        </$Content>
        <$Content>
          <div>Clock [GHz]</div>
          <div>{eprocessor.clock}</div>
        </$Content>
        <$Content>
          <div>Cores</div>
          <div>{eprocessor.cores}</div>
        </$Content>
        <$Content>
          <div>Threads</div>
          <div>{eprocessor.threads}</div>
        </$Content>
        <$Content>
          <div>Thermal Design Power [W]:</div>
          <div>{eprocessor.tdp}</div>
        </$Content>
      </Dropdown>

      <$Line />
      <Dropdown title={"RAM"}>
        {ememories.map((memory, index) => {
          return (
            <div key={index}>
              <$Content>
                <div>Slot</div>
                <div>{index}</div>
              </$Content>
              <$Content>
                <div>Manufacturer</div>
                <div>{memory.manufacturer.name}</div>
              </$Content>
              <$Content>
                <div>Model</div>
                <div>{memory.part_number}</div>
              </$Content>
              <$Content>
                <div>Type</div>
                <div>{memory.type}</div>
              </$Content>
              <$Content>
                <div>Capacity [GB]</div>
                <div>{memory.capacity}</div>
              </$Content>
              <$Content>
                <div>Clock [GHz]</div>
                <div>{memory.clock}</div>
              </$Content>
              <$Content>
                <div>Voltage [V]</div>
                <div>{memory.voltage}</div>
              </$Content>
              <$Line />
            </div>
          );
        })}
      </Dropdown>
    </$Workstation>
  );
}
