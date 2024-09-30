import { useEffect, useState, memo } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { headerContentHandler } from "./Charts.utils.js";
import { $ChartComponent, $ChartHeader } from "./Charts.styles.jsx";

const PieChartComponent = memo(function PieChartComponent({
  indicatorData,
  content,
  colors
}) {
  const [selectedIndicator, setSelectedIndicator] = useState([]);

  useEffect(() => {
    let transformedData;
    let summary;
    switch (content) {
      case "car_sum_t":
        summary = indicatorData.reduce((acc, curr) => {
          const group = acc[curr.group_name] || { car_sum_t: 0 };
          group.car_sum_t += curr.car_sum_t;
          acc[curr.group_name] = group;
          return acc;
        }, {});

        transformedData = Object.keys(summary).map((group_name) => {
          const group = summary[group_name];
          return {
            name: group_name,
            value: Number(group.car_sum_t.toFixed(9)),
          };
        });
        break;
      case "car_avg_th":
        summary = indicatorData.reduce((acc, curr) => {
          const group = acc[curr.group_name] || {
            car_avg_th: 0,
            count: 0,
          };
          group.car_avg_th += curr.car_avg_th;
          group.count += 1;
          acc[curr.group_name] = group;
          return acc;
        }, {});

        transformedData = Object.keys(summary).map((group_name) => {
          const group = summary[group_name];
          return {
            name: group_name,
            value: Number((group.car_avg_th/group.count).toFixed(9)),
          };
        });
        break;
        case "usa_avg_th":
        summary = indicatorData.reduce((acc, curr) => {
          const group = acc[curr.group_name] || {
            usa_avg_th: 0,
            count: 0,
          };
          group.usa_avg_th += curr.usa_avg_th;
          group.count += 1;
          acc[curr.group_name] = group;
          return acc;
        }, {});

        transformedData = Object.keys(summary).map((group_name) => {
          const group = summary[group_name];
          return {
            name: group_name,
            value: Number((group.usa_avg_th/group.count).toFixed(9)),
          };
        });
        break;
      case "car_avg_um":
        summary = indicatorData.reduce((acc, curr) => {
          const group = acc[curr.group_name] || {
            car_avg_um: 0,
          };

          group.car_avg_um += curr.car_avg_um;

          acc[curr.group_name] = group;
          return acc;
        }, {});

        transformedData = Object.keys(summary).map((group_name) => {
          const group = summary[group_name];
          return {
            name: group_name,
            value: Number(group.car_avg_um.toFixed(9)),
          };
        });
        break;
    }

    setSelectedIndicator(transformedData);
  }, [indicatorData, content]);

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
    const radius = innerRadius + (outerRadius - innerRadius) * 1.25;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <$ChartComponent>
      <$ChartHeader>{headerContentHandler(content)}</$ChartHeader>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart width="100%" height={220}>
          <Tooltip />
          <Legend />
          <Pie
            data={selectedIndicator}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {selectedIndicator.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </$ChartComponent>
  );
});

export default PieChartComponent;
