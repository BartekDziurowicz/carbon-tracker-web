import $Page, { $BasicCharts, $Charts, $PieCharts } from "./Page.styles.jsx";
import Table from "./Table/Table.jsx";
import LineChartComponent from "./Charts/LineChart.jsx";
import PieChartComponent from "./Charts/PieChart.jsx";
import BarChartComponent from "./Charts/BarChart.jsx";
import PieChartCarbon from "./Charts/PieChartCarbon.jsx";
import AreaChartComponent from "./Charts/AreaChart.jsx";
import colors from "./colors.js";

export default function Page({ indicatorData, section }) {
  return (
    <$Page>
      <Table indicatorData={indicatorData} section={section} />
      <$BasicCharts>
        <BarChartComponent indicatorData={indicatorData} colors={colors} />
        <PieChartCarbon indicatorData={indicatorData} />
      </$BasicCharts>
      <$Charts>
        <AreaChartComponent
          indicatorData={indicatorData}
          content={"car_sum_t"}
          colors={colors}
        />
        <AreaChartComponent
          indicatorData={indicatorData}
          content={"car_avg_um"}
          colors={colors}
        />
        {/* <LineChartComponent indicatorData={indicatorData} content={"car_sum_t"} colors={colors}/>
        <LineChartComponent indicatorData={indicatorData} content={"car_avg_um"} colors={colors}/> */}
        <LineChartComponent
          indicatorData={indicatorData}
          content={"car_avg_th"}
          colors={colors}
        />
        <LineChartComponent
          indicatorData={indicatorData}
          content={"usa_avg_th"}
          colors={colors}
        />
      </$Charts>
      <$PieCharts>
        <PieChartComponent
          indicatorData={indicatorData}
          content={"car_sum_t"}
          colors={colors}
        />
        <PieChartComponent
          indicatorData={indicatorData}
          content={"car_avg_th"}
          colors={colors}
        />
        <PieChartComponent
          indicatorData={indicatorData}
          content={"usa_avg_th"}
          colors={colors}
        />
        <PieChartComponent
          indicatorData={indicatorData}
          content={"car_avg_um"}
          colors={colors}
        />
      </$PieCharts>
    </$Page>
  );
}
