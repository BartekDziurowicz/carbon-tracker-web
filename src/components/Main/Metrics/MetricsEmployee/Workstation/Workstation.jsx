import { memo, useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown.jsx";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import {
  $Content,
  $Head,
  $Icon,
  $Line,
  $Title,
  $Workstation,
} from "./Workstation.styles.jsx";

const Workstation = memo(function Workstation({ workstation }) {
  const [employeeWorkstation, setEmployeeWorkstation] = useState({processor: {}, system: {}, memories: []});

  useEffect(() => {
    const { name, model } = workstation;
    const { producer: uproducer, processor: uprocessor, system: usystem, memories: umemories } = workstation;
    const producer = uproducer ? getProducerData(uproducer) : '';
    const processor = uprocessor ? getProcessorData(uprocessor) : {};
    const system = usystem ? getSystemData(usystem) : {};
    const memories = umemories ? getMemoriesData(umemories) : [];
    setEmployeeWorkstation((_prevWorkstation) => ({ name, model, producer, processor, system, memories }));
  }, [workstation]);

  function getProducerData(data) {
      const { name } = data;
      return name;
  }

  function getProcessorData(data) {
      const {name, cores, threads, tdp, clock, identifier, manufacturer: umanufacturer} = data;
      const processor = {name, cores, threads, tdp, clock, identifier, manufacturer: umanufacturer && umanufacturer.name};
      return processor;
  }

  function getSystemData(data) {
      const {bitness, family, version, vendor: uvendor} = data;
      const system = {bitness, family, version, vendor: uvendor && uvendor.name};
      return system;
  }

  function getMemoriesData(data) {
    let memories = [];
    data.forEach((element) => {
      const {capacity, clock, type, partNumber, voltage, manufacturer: umanufacturer} = element;
      const memory = {capacity, clock, type, partNumber, voltage, manufacturer: umanufacturer && umanufacturer.name};
      memories = [...memories, memory];
    })
    return memories;
  }

  return (
    <$Workstation>
      <$Head>
        <$Icon>
          <HiOutlineComputerDesktop />
        </$Icon>
        <$Title>{employeeWorkstation.name}</$Title>
      </$Head>
      <$Content>
        <div>Producer</div>
        <div>{employeeWorkstation.producer}</div>
      </$Content>
      <$Content>
        <div>Model</div>
        <div>{employeeWorkstation.model}</div>
      </$Content>
      <$Line />

      <Dropdown title={"System"}>
        <$Content>
          <div>Vendor</div>
          <div>{employeeWorkstation.system.vendor}</div>
        </$Content>
        <$Content>
          <div>Family</div>
          <div>{employeeWorkstation.system.family}</div>
        </$Content>
        <$Content>
          <div>Version</div>
          <div>{employeeWorkstation.system.version}</div>
        </$Content>
        <$Content>
          <div>Bitness</div>
          <div>{employeeWorkstation.system.bitness}</div>
        </$Content>
      </Dropdown>

      <$Line />
      <Dropdown title={"Processor"}>
        <$Content>
          <div>Manufacturer</div>
          <div>{employeeWorkstation.processor.manufacturer}</div>
        </$Content>
        <$Content>
          <div>Name</div>
          <div>{employeeWorkstation.processor.name}</div>
        </$Content>
        <$Content>
          <div>Identifier</div>
          <div>{employeeWorkstation.processor.identifier}</div>
        </$Content>
        <$Content>
          <div>Clock [GHz]</div>
          <div>{employeeWorkstation.processor.clock}</div>
        </$Content>
        <$Content>
          <div>Cores</div>
          <div>{employeeWorkstation.processor.cores}</div>
        </$Content>
        <$Content>
          <div>Threads</div>
          <div>{employeeWorkstation.processor.threads}</div>
        </$Content>
        <$Content>
          <div>Thermal Design Power [W]:</div>
          <div>{employeeWorkstation.processor.tdp}</div>
        </$Content>
      </Dropdown>

      <$Line />
      <Dropdown title={"RAM"}>
        {employeeWorkstation.memories.map((memory, index) => {
          return (
            <div key={index}>
              <$Content>
                <div>Slot</div>
                <div>{index}</div>
              </$Content>
              <$Content>
                <div>Manufacturer</div>
                <div>{memory.manufacturer}</div>
              </$Content>
              <$Content>
                <div>Model</div>
                <div>{memory.partNumber}</div>
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
});

export default Workstation;
