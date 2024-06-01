import { useEffect, useState } from "react";
import Carbon from "./Carbon/Carbon.jsx";
import Employee from "./Employee/Employee.jsx";
import Office from "./Office/Office.jsx";
import BarChartComponent from "./BarChart/BarChart.jsx";
import Workstation from "./Workstation/Workstation.jsx";
import PieChartComponent from "./PieChart/PieChart.jsx";
import { $MetricsEmployee } from "./MetricsEmployee.styles.jsx";
import {
  apiCallToGetEmployeeMetric,
  apiCallToGetEmployeeCarbonFootprint,
} from "../../../../api/Api.jsx";

export default function MetricsEmployee() {
  console.log("<MetricsEmployee />");
  const [employeeMetric, setEmployeeMetric] = useState({});

  useEffect(() => {
    console.log("<MetricsEmployee useEffect/>");
    const metrics = apiCallToGetEmployeeMetric(0);
    setEmployeeMetric((_prevMetrics) => metrics);
  }, []);

  const carbonFootprint = apiCallToGetEmployeeCarbonFootprint(1);

  const {
    id,
    corporate_key,
    email,
    name,
    surname,
    role,
    carbon_limit,
    location,
    office_id,
    workstation_id,
  } = employeeMetric;
  const employee = {
    corporate_key,
    email,
    name,
    surname,
    role,
    location,
  };

  return (
    <$MetricsEmployee>
      <Employee employee={employee} />
      <Office office={office_id} />
      <Workstation workstation={workstation_id} />
      <Carbon employeeId={id} carbonFootprint={carbonFootprint} carbonLimit={carbon_limit} />
      <BarChartComponent carbonFootprint={carbonFootprint} carbonLimit={carbon_limit} />
      <PieChartComponent carbonFootprint={carbonFootprint} />
    </$MetricsEmployee>
  );
}
