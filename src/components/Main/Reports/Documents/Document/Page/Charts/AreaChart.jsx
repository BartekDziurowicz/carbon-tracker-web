import { useEffect, useState, memo } from "react";
import {
  Legend,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { headerContentHandler } from "./Charts.utils.js";
import { $ChartComponent, $ChartHeader } from "./Charts.styles.jsx";

const AreaChartComponent = memo(function AreaChartComponent({
  indicatorData,
  content,
  colors,
}) {
  const [uniqueGroupNames, setUniqueGroupNames] = useState([]);
  const [selectedIndicator, setSelectedIndicator] = useState({});

  useEffect(() => {
    const uniqueGroupNames = Array.from(
      new Set(indicatorData.map((obj) => obj.group_name))
    );
    setUniqueGroupNames((_prevValue) => uniqueGroupNames);
  }, [indicatorData, content]);

  useEffect(() => {
    let transformedData;
    switch (content) {
      case "car_sum_t":
        transformedData = indicatorData.reduce((acc, obj) => {
          const { period, group_name, car_sum_t } = obj;

          if (!acc[period]) {
            acc[period] = { period };
          }

          acc[period][group_name] = car_sum_t;

          return acc;
        }, {});
        break;
      case "car_avg_um":
        transformedData = indicatorData.reduce((acc, obj) => {
          const { period, group_name, car_avg_um } = obj;

          if (!acc[period]) {
            acc[period] = { period };
          }

          acc[period][group_name] = car_avg_um;

          return acc;
        }, {});
        break;
      case "car_avg_th":
        transformedData = indicatorData.reduce((acc, obj) => {
          const { period, group_name, car_avg_th } = obj;

          if (!acc[period]) {
            acc[period] = { period };
          }

          acc[period][group_name] = car_avg_th;

          return acc;
        }, {});
        break;
      case "usa_avg_th":
        transformedData = indicatorData.reduce((acc, obj) => {
          const { period, group_name, usa_avg_th } = obj;

          if (!acc[period]) {
            acc[period] = { period };
          }

          acc[period][group_name] = usa_avg_th;

          return acc;
        }, {});
        break;
    }
    setSelectedIndicator(Object.values(transformedData));
  }, [indicatorData, content]);

  return (
    <$ChartComponent>
      <$ChartHeader>{headerContentHandler(content)}</$ChartHeader>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={1024}
          height={200}
          data={selectedIndicator}
          margin={{
            top: 10,
            right: 15,
            left: -15,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="period"
            type="category"
            minTickGap={10}
            height={30}
            allowDuplicatedCategory={false}
          />
          <YAxis type="number" allowDuplicatedCategory={false} />
          <Tooltip />
          {/* <Legend iconType="plainline" /> */}
          <defs>
            {uniqueGroupNames.map((group, index) => (
              <linearGradient id={index} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors[index % colors.length]} stopOpacity={0.5} />
                <stop offset="95%" stopColor={colors[index % colors.length]} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          {uniqueGroupNames.map((group, index) => (
            <Area
              key={index}
              dot={true}
              type="monotone"
              dataKey={group}
              stroke={colors[index % colors.length]}
              fillOpacity={1}
              fill={`url(#${index})`}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </$ChartComponent>
  );
});

export default AreaChartComponent;
