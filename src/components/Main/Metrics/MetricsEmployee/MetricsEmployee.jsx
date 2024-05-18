import { useEffect, useState } from "react";
import Employee from "./Employee/Employee.jsx";
import Office from "./Office/Office.jsx";
import Team from "./Team/Team.jsx";
import Workstation from "./Workstation/Workstation.jsx";
import { $MetricsEmployee } from "./MetricsEmployee.styles.jsx";
import { apiCallToGetEmployeeMetric } from "../../../../api/Api.jsx";

export default function MetricsEmployee() {
  const [employeeMetric, setEmployeeMetric] = useState({});

  useEffect(() => {
    const metrics = apiCallToGetEmployeeMetric(0);
    setEmployeeMetric((_prevMetrics) => metrics);
  }, [employeeMetric]);

  const { id, corporate_key, email, name, surname, role, carbon_limit, location, office_id, workstation_id } = employeeMetric;
  const employee = { id, corporate_key, email, name, surname, role, carbon_limit, location };
  const { team } = employeeMetric;

  return (
    <$MetricsEmployee>
      <Employee employee={employee} />
      <Office office={office_id} />
      <Team team={team} />
      <Workstation workstation={workstation_id} />
    </$MetricsEmployee>
  );
}
