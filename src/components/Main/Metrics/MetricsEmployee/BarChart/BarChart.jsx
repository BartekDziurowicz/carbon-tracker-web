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

const carbon = [
  {
    name: "",
    Limit: 20,
    RAM: 45,
    CPU: 9,
  },
];

const TITLE = "Current footprint [kg]";

export default function BarChartComponent() {
  return (
    <$BarChartComponent>
      <$Head>
        <$Icon><FaChartBar /></$Icon>
        <$Title>{TITLE}</$Title>
      </$Head>
      <$Content>
        <BarChart
          data={carbon}
          width={300} height={200}
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
}
