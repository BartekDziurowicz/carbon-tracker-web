import { useEffect, useState } from "react";
import { $MetricsEmployee } from "./MetricsEmployee.styles.jsx";
import { apiCallToGetEmployeeMetric } from "../../../../api/Api.jsx";

export default function MetricsEmployee() {
  const [employeeMetric, setEmployeeMetric] = useState("x");

  useEffect(() => {
    const metrics = apiCallToGetEmployeeMetric(0);
    setEmployeeMetric((_prevMetrics) => metrics);
  }, [employeeMetric]);

  return (
    <$MetricsEmployee>
        // TO DO tu powinno byc duzo komponentów: getTeam, getOffice, getLocation, w kazdym z nich osobny call po full datam np fullTeam
      {employeeMetric ? employeeMetric.name : "b"}
    </$MetricsEmployee>
  );
}
