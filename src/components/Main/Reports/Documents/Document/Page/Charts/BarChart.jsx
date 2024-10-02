import { useEffect, useState, memo } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { appgrey } from "../../../../../../../utils/colors.styles.jsx";
import { $ChartComponent, $ChartHeader } from "./Charts.styles.jsx";

const BarChartComponent = memo(function BarChartComponent({
  indicatorData,
  colors,
}) {
  const [uniqueGroupNames, setUniqueGroupNames] = useState([]);
  const [selectedIndicator, setSelectedIndicator] = useState({});

  useEffect(() => {
    const uniqueGroupNames = Array.from(
      new Set(indicatorData.map((obj) => obj.group_name))
    );
    setUniqueGroupNames((_prevValue) => uniqueGroupNames);
  }, [indicatorData]);

  useEffect(() => {
    let transformedData = indicatorData.reduce((acc, obj) => {
      const { period, group_name, car_sum_t } = obj;

      if (!acc[period]) {
        acc[period] = { period, Summary: 0 };
      }

      acc[period][group_name] = car_sum_t;
      acc[period].Summary += car_sum_t;

      return acc;
    }, {});

    setSelectedIndicator(Object.values(transformedData));
  }, [indicatorData]);

  return (
    <$ChartComponent>
      <$ChartHeader>
        <a
          data-tooltip-id={"bar_chart_summary"}
          data-tooltip-content={
            "The graph shows the sum of the carbon footprint produced per month with a breakdown by units."
          }
          data-tooltip-delay-show={1000}
          data-tooltip-place={"top"}
        >
          Carbon [kgCO₂e]
          <ReactTooltip id={"bar_chart_summary"} />
        </a>
      </$ChartHeader>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={selectedIndicator}
          width={300}
          height={200}
          margin={{
            top: 10,
            right: 15,
            left: -15,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="2 3" />
          <XAxis dataKey="period" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Summary" fill={appgrey} />
          {uniqueGroupNames.map((group, index) => (
            <Bar
              key={index}
              dataKey={group}
              stackId="a"
              fill={colors[index % colors.length]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </$ChartComponent>
  );
});

export default BarChartComponent;
