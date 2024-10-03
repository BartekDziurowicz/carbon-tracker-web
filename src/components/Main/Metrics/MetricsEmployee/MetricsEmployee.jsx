import { useContext, useEffect, useMemo, useState } from "react";
import Carbon from "./Carbon/Carbon.jsx";
import Employee from "./Employee/Employee.jsx";
import Office from "./Office/Office.jsx";
import BarChartComponent from "./BarChart/BarChart.jsx";
import Workstation from "./Workstation/Workstation.jsx";
import PieChartComponent from "./PieChart/PieChart.jsx";
import {
  apiCallForMetrics,
  MetricsContext,
} from "../../../../store/metrics-context.jsx";
import { $MetricsEmployee, $ErrorLabel } from "./MetricsEmployee.styles.jsx";
import { apiCallToGetEmployeeCarbonFootprint } from "../../../../api/Api.jsx";

export default function MetricsEmployee() {
  const { currentStep } = useContext(MetricsContext);
  const [employeeMetric, setEmployeeMetric] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      await apiCallForMetrics(currentStep)
        .then((resData) => {
          const {
            id,
            corporateKey,
            email,
            name,
            surname,
            role,
            carbonLimit,
            location,
            office,
            workstation,
          } = resData;
          setEmployeeMetric((_prevMetrics) => ({
            id,
            corporateKey,
            email,
            name,
            surname,
            role,
            carbonLimit,
            location,
            office,
            workstation,
          }));
        })
        .catch((error) => {
          setError(error);
        });
    }

    fetchData();
  }, []);

  const carbonFootprint = useMemo(() => {
    return apiCallToGetEmployeeCarbonFootprint(0);
    // TO DO
  }, [employeeMetric]);

  function getEmployeeData() {
    const { corporateKey, email, name, surname, role, location } =
      employeeMetric;
    return { corporateKey, email, name, surname, role, location };
  }

  function getOfficeData() {
    const { office } = employeeMetric;
    return office ? office : {};
  }

  function getWorkstationData() {
    const { workstation } = employeeMetric;
    return workstation ? workstation : {};
  }

  return (
    <>
      {error === null ? (
        <$MetricsEmployee>
          <Employee employee={getEmployeeData()} />
          <Office office={getOfficeData()} />
          <Workstation workstation={getWorkstationData()} />
          <Carbon
            employeeId={employeeMetric.id}
            carbonFootprint={carbonFootprint}
            carbonLimit={employeeMetric.carbonLimit}
          />
          <BarChartComponent
            carbonFootprint={carbonFootprint}
            carbonLimit={employeeMetric.carbonLimit}
          />
          <PieChartComponent carbonFootprint={carbonFootprint} />
        </$MetricsEmployee>
      ) : (
        <$ErrorLabel>{error.message}</$ErrorLabel>
      )}
    </>
  );
}
