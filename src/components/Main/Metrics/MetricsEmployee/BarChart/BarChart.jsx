import { memo, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { FaChartBar } from "react-icons/fa";
import {
  $Content,
  $BarChartComponent,
  $Head,
  $Icon,
  $Title,
} from "./BarChart.styles.jsx";
import {
  appgrey,
  chartgreen,
  chartblue,
} from "../../../../../utils/colors.styles.jsx";

const TITLE = "Current footprint [kgCO₂e]";

const BarChartComponent = memo(function BarChartComponent({ carbonFootprint, carbonLimit }) {
  const [currentFootprint, setCurrentFootprint] = useState([
    { name: "", Limit: 0, RAM: 0, CPU: 0 },
  ]);

  useEffect(() => {
    if (
      carbonFootprint !== undefined &&
      carbonFootprint !== null &&
      carbonLimit !== undefined &&
      carbonLimit !== null
    ) {
      setCurrentFootprint((_prevCarbonFootprint) => {
        return [
          {
            name: "",
            Limit: carbonLimit,
            RAM: carbonFootprint.footprintRamKg,
            CPU: carbonFootprint.footprintCpuKg,
          },
        ];
      });
    }
  }, [carbonFootprint, carbonLimit]);

  return (
    <$BarChartComponent>
      <$Head>
        <$Icon>
          <FaChartBar />
        </$Icon>
        <$Title>{TITLE}</$Title>
      </$Head>
      <$Content>
        <BarChart
          data={currentFootprint}
          width={300}
          height={200}
          margin={{
            top: 20,
            right: 30,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Limit" fill={appgrey} />
          <Bar dataKey="CPU" stackId="a" fill={chartblue} />
          <Bar dataKey="RAM" stackId="a" fill={chartgreen} />
        </BarChart>
      </$Content>
    </$BarChartComponent>
  );
});

export default BarChartComponent;
