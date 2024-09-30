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
      //   fill={appwhite}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartCarbon = memo(function PieChartCarbon({ indicatorData }) {
  const [selectedIndicator, setSelectedIndicator] = useState([]);

  useEffect(() => {
    const summary = indicatorData.reduce((acc, obj) => {
      const { period, car_sum_t } = obj;

      if (!acc[period]) {
        acc[period] = { name: period, value: 0 };
      }

      acc[period].value += car_sum_t;

      return acc;
    }, {});

    const transformedData = Object.keys(summary).map((period) => {
      const group = summary[period];
      return {
        name: period,
        value: Number(group.value.toFixed(9)),
      };
    });
    setSelectedIndicator(Object.values(transformedData));
  }, [indicatorData]);

  const COLORS = [];
  for (let i = 0; i < 12; i++) {
    let shade = Math.floor(200 - (i * 200) / 11);
    COLORS.push(`rgb(${shade}, ${shade}, ${shade})`);
  }

  return (
    <$ChartComponent>
      <$ChartHeader>Carbon [kgCO₂e]</$ChartHeader>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart width={200} height={200}>
          <Tooltip />
          <Legend />
          <Pie
            data={selectedIndicator}
            cx="50%"
            cy="48%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={85}
            dataKey="value"
          >
            {selectedIndicator.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </$ChartComponent>
  );
});

export default PieChartCarbon;
