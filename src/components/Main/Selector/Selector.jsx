import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import SelectorForm from "./SelectorForm/SelectorForm.jsx";
import SelectorCurrentFilters from "./SelectorCurrentFilters/SelectorCurrentFilters.jsx";
import LineChartComponent from "./LineChart/LineChart.jsx";
import { GiFootprint } from "react-icons/gi";
import { FaMemory, FaChartBar } from "react-icons/fa";
import { PiCpuFill } from "react-icons/pi";
import { MdCo2 } from "react-icons/md";
import { CgMathPercent } from "react-icons/cg";
import { TbSum } from "react-icons/tb";
import { SelectorContext } from "../../../store/selector-context.jsx";
import $Selector from "./Selector.styles.jsx";

const TITLE = {
  cpuCarbon: "CPU carbon footprint [kgCO₂e/h]",
  cpuUsage: "CPU usage [%]",
  memCarbon: "RAM carbon footprint [kgCO₂e/h]",
  memUsage: "RAM usage [%]",
  totalCarbon: "Total carbon footprint [kgCO₂e]"
};

export default function Selector() {
  const selectorFiltersData = useLoaderData();

  const { setSelectorFilters } = useContext(SelectorContext);

  useEffect(() => {
    setSelectorFilters(selectorFiltersData);
  }, []);

  return (
    <>
      <$Selector>
        <SelectorForm />
        <SelectorCurrentFilters />
        <LineChartComponent title={TITLE.totalCarbon} type="total_carbon_avg" style="total_carbon">
          <GiFootprint />
          <TbSum />
          <MdCo2 />
        </LineChartComponent>
        <LineChartComponent title={TITLE.cpuCarbon} type="proc_carbon_avg" style="carbon">
          <GiFootprint />
          <PiCpuFill />
          <MdCo2 />
        </LineChartComponent>
        <LineChartComponent title={TITLE.cpuUsage} type="proc_usage_avg" style="usage">
          <FaChartBar />
          <PiCpuFill />
          <CgMathPercent />
        </LineChartComponent>
        <LineChartComponent title={TITLE.memCarbon} type="mem_carbon_avg" style="carbon">
          <GiFootprint />
          <FaMemory />
          <MdCo2 />
        </LineChartComponent>
        <LineChartComponent title={TITLE.memUsage} type="mem_usage_avg" style="usage">
          <FaChartBar />
          <FaMemory />
          <CgMathPercent />
        </LineChartComponent>
      </$Selector>
    </>
  );
}

export async function filtersLoader() {
  const response = await fetch("http://localhost:8080/filter/filters");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get selector filters.");
  }

  return resData;
}
