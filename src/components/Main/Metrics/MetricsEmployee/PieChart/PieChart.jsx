import { useEffect, useState } from "react";
import { Cell, PieChart, Pie, Legend, Tooltip } from "recharts";
import { FaChartPie } from "react-icons/fa";
import {
  $Content,
  $Head,
  $Icon,
  $PieChartComponent,
  $Title,
} from "./PieChart.styles.jsx";
import { appwhite, chartgreen, chartblue } from "../../../../../utils/colors.styles.jsx";

const TITLE = "Footprint by Component [%]";
const COLORS = [chartgreen, chartblue];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={appwhite}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartComponent({ carbonFootprint }) {
  console.log("<PieChart />");
  const [currentFootprint, setCurrentFootprint] = useState([
    { name: "CPU", value: 0 },
    { name: "RAM", value: 0 },
  ]);

  useEffect(() => {
    console.log("<PieChart useEffect/>");
    if (carbonFootprint !== undefined && carbonFootprint !== null) {
      setCurrentFootprint((_prevCarbonFootprint) => {
        return [
          {
            name: "CPU",
            value: carbonFootprint.footprintCpuKg,
          },
          {
            name: "RAM",
            value: carbonFootprint.footprintRamKg,
          },
        ];
      });
    }
  }, [carbonFootprint]);

  return (
    <$PieChartComponent>
      <$Head>
        <$Icon>
          <FaChartPie />
        </$Icon>
        <$Title>{TITLE}</$Title>
      </$Head>
      <$Content>
        <PieChart width={200} height={200}>
          <Tooltip />
          <Legend />
          <Pie
            data={currentFootprint}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={75}
            fill={appwhite}
            dataKey="value"
          >
            {currentFootprint.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </$Content>
    </$PieChartComponent>
  );
}
