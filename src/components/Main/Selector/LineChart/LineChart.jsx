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
import { SelectorContext } from "../../../../store/selector-context.jsx";

export default function LineChartComponent({ style, title, type, children }) {
  const [selectedMetrics, setSelectedMetrics] = useState({});
  const { calculatedMetrics } = useContext(SelectorContext);

  useEffect(() => {
    let data = [];
    switch (type) {
      case "total_carbon_avg":
        console.log(calculatedMetrics);
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
            (obj.mem_carbon_avg + obj.proc_carbon_avg);
          acc[period_start].RAM += obj.mem_carbon_avg;
          acc[period_start].CPU += obj.proc_carbon_avg;
          // TODO podzielic przez odpowiednie okresy,
          // poniewaz jednostka to co2e/h, wiec w przypadku 15 minutowego interwalu dzielimy przez 4
          // do zrobienia razem z periodem w formie z wyszukiwaniem
          return acc;
        }, {});
        console.log("total", data);
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
        console.log("proc", data);
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
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" minTickGap={10} height={30} />
          <YAxis />
          <Tooltip />
          <Legend iconType="plainline" />
          <Line
            dot={false}
            type="monotone"
            // dataKey="Content Interaction"
            dataKey="Footprint"
            stroke="#8884d8"
          />
          <Line dot={false} type="monotone" dataKey="CPU" stroke="#E4080A" />
          <Line dot={false} type="monotone" dataKey="RAM" stroke="#5DE2E7" />
          <Line
            dot={false}
            type="monotone"
            dataKey="Content Interaction"
            stroke="#5DE2E7"
          />
        </LineChart>
      </ResponsiveContainer>
    </$LineChartComponent>
  );
}
