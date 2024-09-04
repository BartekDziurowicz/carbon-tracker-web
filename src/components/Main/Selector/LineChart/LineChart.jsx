import { useContext, useEffect, useState } from "react";
import {
  $Head,
  $Icon,
  $LineChartComponent,
  $Title,
} from "./LineChart.styles.jsx";
import {
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import colors from "./colors.js";
import { chartgreen, chartblue, appgrey} from "../../../../utils/colors.styles.jsx";
import { SelectorContext } from "../../../../store/selector-context.jsx";

const TOTAL_CARBON_AVG_GROUPS = ["Footprint", "CPU", "RAM"];
const TOTAL_CARBON_AVG_COLORS = [appgrey, chartblue, chartgreen];

export default function LineChartComponent({ style, title, type, children }) {
  const [uniqueGroupNames, setUniqueGroupNames] = useState([]);
  const [selectedMetrics, setSelectedMetrics] = useState({});
  const { calculatedMetrics } = useContext(SelectorContext);

  useEffect(() => {
    switch (type) {
      case "total_carbon_avg":
        setUniqueGroupNames((_prevValue) => TOTAL_CARBON_AVG_GROUPS);
        break;
      default:
        const uniqueGroupNames = Array.from(
          new Set(calculatedMetrics.map((obj) => obj.group_name))
        );
        setUniqueGroupNames((_prevValue) => uniqueGroupNames);
    }
  }, [selectedMetrics]);

  useEffect(() => {
    let data = [];
    switch (type) {
      case "total_carbon_avg":
        data = calculatedMetrics.reduce((acc, obj) => {
          const { period_start } = obj;
          if (!acc[period_start]) {
            acc[period_start] = {
              name: period_start,
              Footprint: 0,
              RAM: 0,
              CPU: 0,
            };
          }
          acc[period_start].Footprint +=
            (obj.mem_carbon_avg + obj.proc_carbon_avg) / 4;
          acc[period_start].RAM += obj.mem_carbon_avg / 4;
          acc[period_start].CPU += obj.proc_carbon_avg / 4;
          return acc;
        }, {});
        break;
      case "proc_carbon_avg":
        data = calculatedMetrics.reduce((acc, obj) => {
          const { period_start, proc_carbon_avg, group_name } = obj;
          if (!acc[period_start]) {
            acc[period_start] = { name: period_start };
          }
          acc[period_start][group_name] = proc_carbon_avg;
          return acc;
        }, {});
        break;
      case "proc_usage_avg":
        data = calculatedMetrics.reduce((acc, obj) => {
          const { period_start, proc_usage_avg, group_name } = obj;
          if (!acc[period_start]) {
            acc[period_start] = { name: period_start };
          }
          acc[period_start][group_name] = proc_usage_avg;
          return acc;
        }, {});
        break;
      case "mem_carbon_avg":
        data = calculatedMetrics.reduce((acc, obj) => {
          const { period_start, mem_carbon_avg, group_name } = obj;
          if (!acc[period_start]) {
            acc[period_start] = { name: period_start };
          }
          acc[period_start][group_name] = mem_carbon_avg;
          return acc;
        }, {});
        break;
      case "mem_usage_avg":
        data = calculatedMetrics.reduce((acc, obj) => {
          const { period_start, mem_usage_avg, group_name } = obj;
          if (!acc[period_start]) {
            acc[period_start] = { name: period_start };
          }
          acc[period_start][group_name] = mem_usage_avg;
          return acc;
        }, {});
        break;
      default:
        console.log("Unsupported type: " + type);
    }
    setSelectedMetrics(Object.values(data));
  }, [calculatedMetrics]);

  return (
    <$LineChartComponent>
      <$Head>
        <$Icon $style={style}>{children}</$Icon>
        <$Title $style={style}>{title}</$Title>
      </$Head>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={1024}
          height={200}
          data={selectedMetrics}
          margin={{
            top: 10,
            right: 30,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" minTickGap={10} height={30} />
          <YAxis />
          <Tooltip />
          <Legend iconType="plainline" />
          {uniqueGroupNames.map((group, index) => (
            <Line
              key={index}
              dot={false}
              type="monotone"
              dataKey={group}
              stroke={type !== "total_carbon_avg" ? colors[index] : TOTAL_CARBON_AVG_COLORS[index]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </$LineChartComponent>
  );
}
