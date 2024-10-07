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
import {
  apiCallToGetEmployeeCarbonFootprint,
  apiCallToGetTotalCarbonSum,
} from "../../../../api/Api.jsx";

export default function MetricsEmployee() {
  const { currentStep } = useContext(MetricsContext);
  const [employeeMetric, setEmployeeMetric] = useState({id: 0});
  const [currentFootprint, setCurrentFootprint] = useState({
    footprintKg: 0,
    footprintCpuKg: 0,
    footprintRamKg: 0,
  });
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

  useEffect(() => {
    async function fetchData() {
      await apiCallToGetTotalCarbonSum("employee", employeeMetric.id)
        .then((resData) =>
          setCurrentFootprint({
            footprintKg: resData[0],
            footprintCpuKg: resData[1],
            footprintRamKg: resData[2],
          })
        )
        .catch((error) => {
          setError(error);
        });
    }

    fetchData();
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
            carbonFootprint={currentFootprint}
            carbonLimit={employeeMetric.carbonLimit}
          />
          <BarChartComponent
            carbonFootprint={currentFootprint}
            carbonLimit={employeeMetric.carbonLimit}
          />
          <PieChartComponent carbonFootprint={currentFootprint} />
        </$MetricsEmployee>
      ) : (
        <$ErrorLabel>{error.message}</$ErrorLabel>
      )}
    </>
  );
}
