import { useCallback, useContext, useEffect, useState } from "react";
import MetricsItem from "./MetricsItem/MetricsItem.jsx";
import $MetricsContent from "./MetricsContent.styles.jsx";
import { apiCallForMetrics, MetricsContext } from "../../../../store/metrics-context.jsx";

export default function MetricsContent() {
  const { currentStep } = useContext(MetricsContext);
  const [availableMetrics, setAvailableMetrics] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await apiCallForMetrics(currentStep, 0).then(resData => {
          setAvailableMetrics((_prevMetrics) => resData);
        });        
      } catch (error) {
        //TODO
      }
    }

    fetchData()
  }, [currentStep]);

  const sessionStorageStepHandler = useCallback((itemId, itemName) => {
    let stepItemInfo = JSON.parse(sessionStorage.getItem("stepItemInfo"));
    if (stepItemInfo === undefined || stepItemInfo === null) {     
      stepItemInfo = [{itemId: itemId, itemName: itemName}];
      sessionStorage.setItem("stepItemInfo", JSON.stringify(stepItemInfo))
    } else {
      stepItemInfo = [ ...stepItemInfo, {itemId: itemId, itemName: itemName}];
      sessionStorage.setItem("stepItemInfo", JSON.stringify(stepItemInfo));
    }
  }, []);

  return (
    <$MetricsContent>
      {availableMetrics.map((metric, index) => {
        return <MetricsItem key={index} metric={metric} index={index} stepInfoHandler={sessionStorageStepHandler}/>;
      })}
    </$MetricsContent>
  );
}
