import $Page, {$Charts, $PieCharts} from "./Page.styles.jsx";
import Table from "./Table/Table.jsx";
import LineChartComponent from "./Charts/LineChart.jsx";
import PieChartComponent from "./Charts/PieChart.jsx";
import colors from "./colors.js";

export default function Page({ indicatorData, section }) {
  return (
    <$Page>
      <Table indicatorData={indicatorData} section={section}/>
      <$Charts>
        <LineChartComponent indicatorData={indicatorData} content={"car_sum_t"} colors={colors}/>
        <LineChartComponent indicatorData={indicatorData} content={"car_avg_um"} colors={colors}/>
        <LineChartComponent indicatorData={indicatorData} content={"car_avg_th"} colors={colors}/>
        <LineChartComponent indicatorData={indicatorData} content={"usa_avg_th"} colors={colors}/>
      </$Charts>
      <$PieCharts>
        <PieChartComponent indicatorData={indicatorData} content={"car_sum_t"} colors={colors} />
        <PieChartComponent indicatorData={indicatorData} content={"car_avg_th"} colors={colors} />
        <PieChartComponent indicatorData={indicatorData} content={"usa_avg_th"} colors={colors} />
        <PieChartComponent indicatorData={indicatorData} content={"car_avg_um"} colors={colors} />
      </$PieCharts>
    </$Page>
  );
}
