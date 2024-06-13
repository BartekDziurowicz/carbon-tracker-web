import { useContext, useEffect, useMemo, useState } from "react";
import Carbon from "./Carbon/Carbon.jsx";
import Employee from "./Employee/Employee.jsx";
import Office from "./Office/Office.jsx";
import BarChartComponent from "./BarChart/BarChart.jsx";
import Workstation from "./Workstation/Workstation.jsx";
import PieChartComponent from "./PieChart/PieChart.jsx";
import { apiCallForMetrics, MetricsContext } from "../../../../store/metrics-context.jsx";
import { $MetricsEmployee } from "./MetricsEmployee.styles.jsx";
import { apiCallToGetEmployeeCarbonFootprint } from "../../../../api/Api.jsx";

export default function MetricsEmployee() {
  const { currentStep } = useContext(MetricsContext);
  const [employeeMetric, setEmployeeMetric] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        await apiCallForMetrics(currentStep).then(resData => {
          const { id, corporate_key, email, name, surname, role, carbonLimit, location, workstation } = resData;
          setEmployeeMetric((_prevMetrics) => ({ id, corporate_key, email, name, surname, role, carbonLimit, location, workstation }));
        });
      } catch (error) {
        console.log(error);
        //TODO
      }
    }

    fetchData()
  }, []);

  const carbonFootprint = useMemo(() => {
    return apiCallToGetEmployeeCarbonFootprint(0);
  }, [employeeMetric]);

  function getEmployeeData() {
    return {
      corporate_key: employeeMetric.corporate_key,
      email: employeeMetric.email, 
      name: employeeMetric.name, 
      surname: employeeMetric.surname,
      role: employeeMetric.role && employeeMetric.role.name,
      city: employeeMetric.location && employeeMetric.location.city,
      country: employeeMetric.location && employeeMetric.location.country && employeeMetric.location.country.name
    }
  }

  function getOfficeData() {
    return {}
  }

  function getWorkstationData() {
    return {}
  }

  return (
    <$MetricsEmployee>
      <Employee employee={getEmployeeData()} />
      <Office office={employeeMetric.office_id} />
      <Workstation workstation={employeeMetric.workstation} />
      <Carbon employeeId={employeeMetric.id} carbonFootprint={carbonFootprint} carbonLimit={employeeMetric.carbonLimit} />
      <BarChartComponent carbonFootprint={carbonFootprint} carbonLimit={employeeMetric.carbonLimit} />
      <PieChartComponent carbonFootprint={carbonFootprint} />
    </$MetricsEmployee>
  );
}
