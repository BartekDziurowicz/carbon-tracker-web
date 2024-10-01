import { useContext, useEffect, Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import SelectorForm from "./SelectorForm/SelectorForm.jsx";
import InfoLabel from "../InfoLabel/InfoLabel.jsx";
import SelectorCurrentFilters from "./SelectorCurrentFilters/SelectorCurrentFilters.jsx";
import LineChartComponent from "./LineChart/LineChart.jsx";
import { GiFootprint } from "react-icons/gi";
import { FaMemory, FaChartBar } from "react-icons/fa";
import { PiCpuFill } from "react-icons/pi";
import { MdCo2 } from "react-icons/md";
import { CgMathPercent } from "react-icons/cg";
import { TbSum } from "react-icons/tb";
import { SelectorContext } from "../../../store/selector-context.jsx";
import $Selector, { $Fallback } from "./Selector.styles.jsx";
import { apiCallToGetFilterValues } from "../../../api/Api.jsx";
import { appgreen } from "../../../utils/colors.styles.jsx";

const TITLE = {
  cpuCarbon: "CPU carbon footprint [kgCO₂e/h]",
  cpuUsage: "CPU usage [%]",
  memCarbon: "RAM carbon footprint [kgCO₂e/h]",
  memUsage: "RAM usage [%]",
  totalCarbon: "Total carbon footprint [kgCO₂e]",
};

export default function Selector() {
  const { filters } = useLoaderData();

  const { setSelectorFilters, calculatedMetrics } = useContext(SelectorContext);

  useEffect(() => {
    async function resolveFilters() {
      await filters.then((resolved) => setSelectorFilters(resolved));
    }

    resolveFilters();
  }, [filters]);

  return (
    <$Selector>
      <Suspense
        fallback={
          <$Fallback>
            <BeatLoader
              color={appgreen}
              loading={true}
              size={35}
              speedMultiplier={0.75}
              aria-label="Loading Spinner"
            />
          </$Fallback>
        }
      >
        <Await resolve={filters}>
          {() => {
            return (
              <>
                <SelectorForm />
                <SelectorCurrentFilters />
              </>
            );
          }}
        </Await>
      </Suspense>
      {calculatedMetrics.length === 0 ? (
        <InfoLabel margin='41px'/>
      ) : (
        <>
          <LineChartComponent
            title={TITLE.totalCarbon}
            type="total_carbon_avg"
            style="total_carbon"
          >
            <GiFootprint />
            <TbSum />
            <MdCo2 />
          </LineChartComponent>
          <LineChartComponent
            title={TITLE.cpuCarbon}
            type="proc_carbon_avg"
            style="carbon"
          >
            <GiFootprint />
            <PiCpuFill />
            <MdCo2 />
          </LineChartComponent>
          <LineChartComponent
            title={TITLE.cpuUsage}
            type="proc_usage_avg"
            style="usage"
          >
            <FaChartBar />
            <PiCpuFill />
            <CgMathPercent />
          </LineChartComponent>
          <LineChartComponent
            title={TITLE.memCarbon}
            type="mem_carbon_avg"
            style="carbon"
          >
            <GiFootprint />
            <FaMemory />
            <MdCo2 />
          </LineChartComponent>
          <LineChartComponent
            title={TITLE.memUsage}
            type="mem_usage_avg"
            style="usage"
          >
            <FaChartBar />
            <FaMemory />
            <CgMathPercent />
          </LineChartComponent>
        </>
      )}
    </$Selector>
  );
}

async function loader() {
  const resData = await apiCallToGetFilterValues("filter");

  return resData;
}

export function filtersLoader() {
  return defer({
    filters: loader(),
  });
}
